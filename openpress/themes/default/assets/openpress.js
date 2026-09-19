;(function () {
  'use strict'

  var body = document.body

  /* ---------- mobile menu ---------- */
  var menuToggle = document.querySelector('.op-toggle-menu')
  var menuMask = document.querySelector('.op-menu-mask')

  function setMenu(open) {
    body.classList.toggle('op-menu-open', open)
    if (menuToggle) menuToggle.setAttribute('aria-expanded', String(open))
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      setMenu(!body.classList.contains('op-menu-open'))
    })
  }
  if (menuMask) {
    menuMask.addEventListener('click', function () {
      setMenu(false)
    })
  }
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') setMenu(false)
  })

  /* ---------- close language dropdown on outside click ---------- */
  document.addEventListener('click', function (event) {
    document.querySelectorAll('details.op-language[open]').forEach(function (details) {
      if (!details.contains(event.target)) details.removeAttribute('open')
    })
  })

  /* ---------- back to top ---------- */
  var backToTop = document.createElement('button')
  backToTop.type = 'button'
  backToTop.className = 'op-back-to-top'
  backToTop.setAttribute('aria-label', 'Back to top')
  backToTop.textContent = '↑'
  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
  body.appendChild(backToTop)

  /* ---------- image zoom ---------- */
  document.querySelectorAll('.op-content img').forEach(function (img) {
    img.classList.add('op-zoomable')
    img.addEventListener('click', function () {
      img.classList.toggle('op-zoomed')
    })
  })

  /* ---------- active heading / toc highlight ---------- */
  var headings = Array.prototype.slice.call(
    document.querySelectorAll(
      '.op-content h2[id], .op-content h3[id], .op-content h4[id], .op-content h5[id]',
    ),
  )
  var tocLinks = {}
  document.querySelectorAll('.op-toc a[href^="#"]').forEach(function (link) {
    tocLinks[decodeURIComponent(link.getAttribute('href').slice(1))] = link
  })

  function updateActive() {
    var visible = document.querySelector('.op-back-to-top')
    if (visible) {
      visible.classList.toggle('is-visible', window.scrollY > 320)
    }

    if (!headings.length) return

    var offset = 90
    var current = null
    for (var i = 0; i < headings.length; i++) {
      if (headings[i].getBoundingClientRect().top <= offset) current = headings[i]
      else break
    }

    Object.keys(tocLinks).forEach(function (key) {
      tocLinks[key].parentElement.classList.remove('is-active')
    })
    if (current && tocLinks[current.id]) {
      tocLinks[current.id].parentElement.classList.add('is-active')
    }
  }

  var ticking = false
  window.addEventListener(
    'scroll',
    function () {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(function () {
        updateActive()
        ticking = false
      })
    },
    { passive: true },
  )

  updateActive()
})()
