
# Basic Terms and Concepts

## 1. What is Bitcoin?

Famous investor Mai Gang has a precise description of Bitcoin:

:::tip Mai Gang:

 - Bitcoin is a (virtual) commodity that **simulates through algorithms** something never before seen in human history, **approaching perfection in every aspect of monetary attributes**.

 - Bitcoin's near-perfection as money is maintained through its immense computing power.

:::

The full video can be viewed on Bilibili:

- [https://www.bilibili.com/video/BV1HnKwzuEkv/](https://www.bilibili.com/video/BV1HnKwzuEkv/)


Cryptocurrency is a **digital cash** system used on the internet.

Unlike WeChat or Alipay, which require banks or companies to keep accounts, it is jointly maintained by thousands of participants who maintain a **super ledger** (blockchain), ensuring that your assets and transactions are secure, transparent, and tamper-proof.



## 2. What is an Exchange?

### (1). Centralized Exchange

  - CEX (Centralized Exchange)

  - Well-known examples include Binance, Coinbase, Huobi, and Gate.

  - Centralized exchanges carry risks, such as being hacked, blocked, or restricted.

  - The integrity of centralized exchange operators is also an important factor. Exchanges that run away or cheat do exist.


### (2). Decentralized Exchange

  - DEX (Decentralized Exchange)

  - An unattended, fully automated "asset exchange machine." In this system, trading rules are pre-set through code (smart contracts), and users interact directly with these contracts through their own wallets to achieve peer-to-peer asset exchange.


### (3). Exchange Rankings

- [https://coinmarketcap.com/rankings/exchanges/](https://coinmarketcap.com/rankings/exchanges/)



## 3. Proof of Work PoW

- PoW: Proof of Work

- Simply put, it requires **mining**.

- The network poses a very difficult mathematical problem. Whoever uses their computing power (mining rig) to solve it first gets the right to maintain the ledger and new coin rewards.

::: tip Characteristics:

- **High decentralization**: Anyone can buy mining rigs and participate.

- **Extremely high security**: Tampering with the chain requires owning more than 51% of the computing power, which costs a massive amount.

- **Fairness**: Purely based on computing power - the more you invest, the greater your probability of reward.

:::


## 4. Proof of Stake PoS

- PoS: Proof of Stake

- Whoever has more "deposit" (staked tokens) and for longer has a higher probability of being selected to maintain the ledger. No longer competing on computing power, but on economic investment.

- Users lock tokens into the network to become validators.

- The algorithm randomly selects a validator to create the next block based on factors such as the number of staked tokens and time.

- Honest bookkeeping earns rewards. Malicious behavior or going offline results in partial or total forfeiture (slashing) of staked tokens.

::: tip Characteristics:

- **Extremely energy efficient**: Energy consumption is less than 0.05% of PoW.

- **The rich get richer**: Large token holders have an advantage, which may lead to centralization.

- **High complexity**: Requires careful design of penalty mechanisms and handling attacks.

- **Built-in economic security**: Attackers need to stake a large number of tokens, and malicious behavior will result in forfeiture.

:::


## 5. Proof of History PoH

- PoH: Proof of History

- **PoH node**: A photo studio that keeps taking snapshots, taking a "snap" photo every fixed time (e.g., 400ms), with each photo containing information from the previous photo.

- **Processing transactions**: Guests walk into the photo studio and are captured in the next "snap," thereby receiving a unique timestamp.

- **Validators**: Other staff who don't need to wait for guests but only need to organize and archive (validate) these already-taken, timestamped photos (transaction packets), making work efficiency extremely high.

::: tip Characteristics:

- **Ultra-high throughput**: Solana can theoretically reach 65,000 TPS.

- **Centralization risk**: The PoH sequence generator (leader) is a critical single point.

- **Stability in practice**: Solana's mainnet has gone down multiple times due to PoH issues.

- Solana (SOL): Its consensus mechanism is PoS + PoH. PoS is used to elect block producers, and PoH is used to order transactions, achieving high-speed processing.

:::


## 6. What is a Block?

- Blockchain = The entire ledger

- Block = A single page in this ledger

- Transaction = Individual pieces of information recorded on this page (e.g., Xiaoming transfers 5 coins to Xiaohong)

- A block is a "data packet" that packages all transaction records over a period of time. Countless such blocks connected in chronological order form a "blockchain."


## 7. Blocks Per Second BPS

- Block per Second

- Bitcoin generates approximately 1 block every 10 minutes. Block size is about 4 MB, and each block can contain thousands of transactions.

- Ethereum generates approximately 1 block every 12 seconds. Block size is dynamic.

- Kaspa currently generates 10 blocks per second. Current block size is about 1-2 MB, and each block can contain hundreds of transactions.


## 8. Transactions Per Second TPS

- Transaction per Second

- Bitcoin takes ten minutes to generate one block, and this block stores thousands of transactions. On average, theoretically, about 7 transactions per second.

- However, this transaction volume per second is just an average. Generally, each transaction takes ten minutes or even longer.

