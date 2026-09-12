#!/usr/bin/env python3
"""
图片压缩脚本（视觉无损）
只压缩存储大小，不改变图片尺寸，并尽量保证肉眼看不出差别。

默认目标目录: docs/.vuepress/public/kas

用法:
    python image_compressor.py                       # 压缩默认目录
    python image_compressor.py --dry-run             # 只预览，不写文件
    python image_compressor.py --lossless            # 严格无损（禁用调色板量化）
    python image_compressor.py 目录路径 90           # 指定目录与 JPEG 质量
    python image_compressor.py --min-psnr 36 --min-gain 3 --workers 4
"""

import math
import time
import argparse
import concurrent.futures
from io import BytesIO
from pathlib import Path
from typing import List, Tuple

from PIL import Image, ImageChops, PngImagePlugin


DEFAULT_DIR = Path(__file__).resolve().parent / "docs" / ".vuepress" / "public" / "kas"
MARKER_KEY = "buykas-compressed"
MARKER_VALUE = "1"


class SimpleImageCompressor:
    def __init__(
        self,
        quality: int = 90,
        min_psnr: float = 36.0,
        min_gain: float = 3.0,
        lossless: bool = False,
        mark: bool = False,
        dry_run: bool = False,
    ):
        """
        初始化图片压缩器

        Args:
            quality: JPEG 有损候选质量 (1-100)
            min_psnr: 有损候选的最低 PSNR (dB)，低于该值则弃用
            min_gain: 仅当节省比例 >= 该百分比时才替换原文件
            lossless: 严格无损模式，禁用调色板量化
            mark: 在输出文件写入已压缩标记，实现绝对幂等
            dry_run: 只预览，不写入文件
        """
        self.quality = max(1, min(100, quality))
        self.min_psnr = min_psnr
        self.min_gain = min_gain
        self.lossless = lossless
        self.mark = mark
        self.dry_run = dry_run

        # 支持的图片格式
        self.supported_formats = {'.jpg', '.jpeg', '.png', '.bmp', '.tiff', '.webp'}

        # 压缩统计
        self.stats = {
            'processed': 0,
            'skipped': 0,
            'failed': 0,
            'original_total': 0,    # 原始总大小
            'compressed_total': 0,  # 压缩后总大小
            'psnr_values': [],
            'time_spent': 0,
        }

    # ------------------------------------------------------------------ #
    # 编码辅助
    # ------------------------------------------------------------------ #
    @staticmethod
    def _png_marker_info() -> PngImagePlugin.PngInfo:
        info = PngImagePlugin.PngInfo()
        info.add_text(MARKER_KEY, MARKER_VALUE)
        return info

    def _encode_png(self, img: Image.Image) -> bytes:
        buf = BytesIO()
        kwargs = dict(format='PNG', optimize=True, compress_level=9)
        if self.mark:
            kwargs['pnginfo'] = self._png_marker_info()
        img.save(buf, **kwargs)
        return buf.getvalue()

    def _encode_jpeg(self, img: Image.Image, quality) -> bytes:
        buf = BytesIO()
        kwargs = dict(format='JPEG', optimize=True, progressive=True)
        if quality == 'keep':
            kwargs['quality'] = 'keep'
        else:
            kwargs['quality'] = quality
        if self.mark:
            kwargs['comment'] = b'buykas-compressed:' + MARKER_VALUE.encode()
        img.save(buf, **kwargs)
        return buf.getvalue()

    @staticmethod
    def _decode(data: bytes) -> Image.Image:
        with Image.open(BytesIO(data)) as im:
            im.load()
            return im.copy()

    @staticmethod
    def _psnr(a: Image.Image, b: Image.Image) -> float:
        """计算两张图的 PSNR (dB)，完全相同返回 inf"""
        a = a.convert('RGBA')
        b = b.convert('RGBA')
        if a.size != b.size:
            return 0.0
        diff = ImageChops.difference(a, b)
        hist = diff.histogram()
        bands = len(a.getbands())
        pixels = a.width * a.height
        se = 0
        for band in range(bands):
            for i, count in enumerate(hist[band * 256:(band + 1) * 256]):
                if count:
                    se += i * i * count
        if se == 0:
            return float('inf')
        mse = se / (pixels * bands)
        return 10.0 * math.log10(255.0 * 255.0 / mse)

    @staticmethod
    def _is_marked(image_path: Path) -> bool:
        try:
            with Image.open(image_path) as im:
                if im.format == 'PNG':
                    if im.info.get(MARKER_KEY):
                        return True
                    text = getattr(im, 'text', None) or {}
                    if MARKER_KEY in text:
                        return True
                elif im.format == 'JPEG':
                    comment = im.info.get('comment', b'')
                    if isinstance(comment, bytes) and b'buykas-compressed' in comment:
                        return True
        except Exception:
            pass
        return False

    # ------------------------------------------------------------------ #
    # 候选生成
    # ------------------------------------------------------------------ #
    def _build_candidates(self, img: Image.Image, ext: str,
                          img_format: str = None) -> List[Tuple[str, bytes, float]]:
        """
        返回候选列表: [(标签, 编码数据, PSNR)]
        """
        candidates: List[Tuple[str, bytes, float]] = []

        if ext == '.png':
            # 候选 A: 无损重编码（像素完全一致）
            candidates.append(('lossless', self._encode_png(img), float('inf')))

            if not self.lossless and img.mode in ('RGB', 'RGBA', 'L', 'LA', 'P'):
                # 候选 B/C: 256 色调色板量化（视觉无损）
                for label, dither in (
                    ('q256-none', Image.Dither.NONE),
                    ('q256-fs', Image.Dither.FLOYDSTEINBERG),
                ):
                    try:
                        quantized = img.quantize(
                            colors=256, method=Image.FASTOCTREE, dither=dither
                        )
                        data = self._encode_png(quantized)
                        psnr = self._psnr(img, quantized)
                        candidates.append((label, data, psnr))
                    except Exception:
                        continue

        elif ext in ('.jpg', '.jpeg'):
            # 候选 A: 复用原量化表，近似无损（主要收益来自去元数据）
            try:
                keep_data = self._encode_jpeg(img, 'keep')
                candidates.append(('keep', keep_data, self._psnr(img, self._decode(keep_data))))
            except Exception:
                pass

            # 候选 B: 指定质量重编码（视觉无损）
            rgb = img.convert('RGB')
            q_data = self._encode_jpeg(rgb, self.quality)
            candidates.append((f'q{self.quality}', q_data, self._psnr(img, self._decode(q_data))))

        else:
            # 其他格式回退为原格式保存
            buf = BytesIO()
            img.save(buf, format=img_format or 'PNG', optimize=True)
            candidates.append(('fallback', buf.getvalue(), float('inf')))

        return candidates

    # ------------------------------------------------------------------ #
    # 单文件压缩
    # ------------------------------------------------------------------ #
    def compress_single_image(self, image_path: Path):
        """
        Returns:
            (状态, 消息, 原始大小, 压缩后大小, PSNR, 采用方案)
            状态: 'processed' | 'skipped' | 'failed'
        """
        try:
            if not image_path.exists():
                return 'failed', "文件不存在", 0, 0, None, None

            ext = image_path.suffix.lower()
            if ext not in self.supported_formats:
                return 'failed', f"不支持的文件格式: {ext}", 0, 0, None, None

            if self.mark and self._is_marked(image_path):
                size = image_path.stat().st_size
                return 'skipped', "已带压缩标记，跳过", size, size, None, None

            original_size = image_path.stat().st_size

            with Image.open(image_path) as opened:
                opened.load()
                img = opened.copy()
                img_format = opened.format

            candidates = self._build_candidates(img, ext, img_format)
            if not candidates:
                return 'failed', "无法生成压缩候选", original_size, original_size, None, None

            # 过滤：必须更小、达到最小收益、且 PSNR 达标
            qualified = []
            for label, data, psnr in candidates:
                new_size = len(data)
                if new_size >= original_size:
                    continue
                gain = (original_size - new_size) / original_size * 100.0
                if gain < self.min_gain:
                    continue
                if psnr != float('inf') and psnr < self.min_psnr:
                    continue
                qualified.append((new_size, label, data, psnr))

            if not qualified:
                return 'skipped', "收益不足或质量不达标，已跳过", original_size, original_size, None, None

            # 选体积最小的合格候选
            new_size, label, data, psnr = min(qualified, key=lambda x: x[0])

            if self.dry_run:
                return 'processed', f"预览({label})", original_size, new_size, psnr, label

            temp_path = image_path.with_suffix(f".temp{image_path.suffix}")
            try:
                with open(temp_path, 'wb') as f:
                    f.write(data)
                temp_path.replace(image_path)
            except Exception:
                if temp_path.exists():
                    temp_path.unlink()
                raise

            return 'processed', f"压缩成功({label})", original_size, new_size, psnr, label

        except Exception as e:
            temp_path = image_path.with_suffix(f".temp{image_path.suffix}")
            if temp_path.exists():
                temp_path.unlink()
            return 'failed', f"错误: {str(e)}", 0, 0, None, None

    # ------------------------------------------------------------------ #
    # 目录压缩
    # ------------------------------------------------------------------ #
    def compress_directory(self, directory_path: str, max_workers: int = 4) -> None:
        directory = Path(directory_path)
        if not directory.exists() or not directory.is_dir():
            print(f"错误: 目录不存在或不是有效目录: {directory_path}")
            return

        mode = "严格无损" if self.lossless else "视觉无损"
        print(f"开始压缩目录: {directory}")
        print(f"模式: {mode} | JPEG 质量: {self.quality} | "
              f"PSNR 阈值: {self.min_psnr} dB | 最小收益: {self.min_gain}%"
              + (" | DRY-RUN" if self.dry_run else ""))
        print("正在搜索图片文件...")

        image_files = set()
        for ext in self.supported_formats:
            image_files.update(directory.rglob(f"*{ext}"))
            image_files.update(directory.rglob(f"*{ext.upper()}"))
        image_files = sorted(image_files)

        if not image_files:
            print("没有找到支持的图片文件")
            return

        print(f"找到 {len(image_files)} 个图片文件")
        print("开始压缩...")
        print("-" * 72)

        start_time = time.time()

        with concurrent.futures.ThreadPoolExecutor(max_workers=max_workers) as executor:
            future_to_path = {
                executor.submit(self.compress_single_image, img_file): img_file
                for img_file in image_files
            }

            for future in concurrent.futures.as_completed(future_to_path):
                img_file = future_to_path[future]
                try:
                    status, message, original_size, new_size, psnr, label = future.result()

                    if status == 'processed':
                        self.stats['processed'] += 1
                        self.stats['original_total'] += original_size
                        self.stats['compressed_total'] += new_size
                        if psnr not in (None, float('inf')):
                            self.stats['psnr_values'].append(psnr)

                        saved = original_size - new_size
                        saved_percent = (saved / original_size * 100) if original_size else 0
                        psnr_text = "" if psnr in (None, float('inf')) else f" PSNR {psnr:.1f}dB"
                        prefix = "[预览]" if self.dry_run else "[✓]"
                        print(f"{prefix} {img_file.name:34} {original_size / 1024:7.1f}KB → "
                              f"{new_size / 1024:7.1f}KB (节省 {saved_percent:4.1f}%{psnr_text}) {message}")
                    elif status == 'skipped':
                        self.stats['skipped'] += 1
                        self.stats['original_total'] += original_size
                        self.stats['compressed_total'] += original_size
                        print(f"[·] {img_file.name:34} {message}")
                    else:
                        self.stats['failed'] += 1
                        print(f"[✗] {img_file.name:34} {message}")

                except Exception as e:
                    self.stats['failed'] += 1
                    print(f"[✗] {img_file.name:34} 处理错误: {e}")

        self.stats['time_spent'] = time.time() - start_time
        self.print_statistics()

    def print_statistics(self) -> None:
        print("\n" + "=" * 72)
        print("压缩完成!" + (" (DRY-RUN，未写入任何文件)" if self.dry_run else ""))
        print("=" * 72)
        print(f"处理文件数: {self.stats['processed']}")
        print(f"跳过文件数: {self.stats['skipped']}")
        print(f"失败文件数: {self.stats['failed']}")

        if self.stats['original_total'] > 0:
            original_mb = self.stats['original_total'] / (1024 * 1024)
            compressed_mb = self.stats['compressed_total'] / (1024 * 1024)
            saved_mb = original_mb - compressed_mb
            saved_percent = (saved_mb / original_mb * 100) if original_mb else 0

            print(f"原始总大小: {original_mb:.2f} MB")
            print(f"压缩后总大小: {compressed_mb:.2f} MB")
            print(f"节省空间: {saved_mb:.2f} MB ({saved_percent:.1f}%)")

        if self.stats['psnr_values']:
            avg_psnr = sum(self.stats['psnr_values']) / len(self.stats['psnr_values'])
            print(f"有损压缩平均 PSNR: {avg_psnr:.1f} dB (最低 {min(self.stats['psnr_values']):.1f} dB)")

        print(f"总耗时: {self.stats['time_spent']:.2f} 秒")
        if self.stats['processed'] > 0:
            print(f"平均每个文件耗时: {self.stats['time_spent'] / self.stats['processed']:.2f} 秒")
        print("=" * 72)


def main():
    parser = argparse.ArgumentParser(
        description="图片压缩脚本（视觉无损，默认目标 docs/.vuepress/public/kas）"
    )
    parser.add_argument('directory', nargs='?', default=str(DEFAULT_DIR),
                        help=f"要压缩的目录 (默认: {DEFAULT_DIR})")
    parser.add_argument('quality', nargs='?', type=int, default=90,
                        help="JPEG 有损候选质量 1-100 (默认: 90)")
    parser.add_argument('--lossless', action='store_true',
                        help="严格无损模式，禁用调色板量化")
    parser.add_argument('--dry-run', action='store_true',
                        help="只预览结果，不写入文件")
    parser.add_argument('--min-psnr', type=float, default=36.0,
                        help="有损候选最低 PSNR(dB)，低于则弃用 (默认: 36)")
    parser.add_argument('--min-gain', type=float, default=3.0,
                        help="仅当节省比例 >= 该百分比才替换 (默认: 3)")
    parser.add_argument('--workers', type=int, default=4,
                        help="并发线程数 (默认: 4)")
    parser.add_argument('--mark', action='store_true',
                        help="写入已压缩标记，重复运行绝对幂等")

    args = parser.parse_args()

    quality = args.quality
    if quality < 1 or quality > 100:
        print(f"警告: 压缩质量 {quality} 超出范围(1-100)，使用默认值90")
        quality = 90

    compressor = SimpleImageCompressor(
        quality=quality,
        min_psnr=args.min_psnr,
        min_gain=args.min_gain,
        lossless=args.lossless,
        mark=args.mark,
        dry_run=args.dry_run,
    )
    compressor.compress_directory(args.directory, max_workers=args.workers)


if __name__ == "__main__":
    main()
