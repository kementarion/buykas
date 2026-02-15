# The Blockchain Trilemma

::: tip The Blockchain Trilemma

1.  **Scalability**

2.  **Decentralization**

3.  **Security**

These three concepts combined are called **The Blockchain Trilemma**.

:::

| Chinese | Core Focus |
| :--- | :--- |
| **Scalability** |  The system's ability to handle large volumes of transactions, and whether it can scale smoothly with demand. Focuses on **throughput (TPS)**. |
| **Decentralization** |  Whether the network's power and control are distributed, rather than controlled by a single entity. Focuses on **node count** and **participation threshold**. |
| **Security** |  The network's ability to resist malicious attacks (such as 51% attacks, double-spending). Focuses on **attack cost** and **data immutability**. |


- This "trilemma" framework is the cornerstone for thinking about and discussing all blockchain technology evolution (such as Ethereum upgrades, Layer 2 solutions).

- The goal of any new technology is to find a better balance point within this "impossible triangle."

::: info Scalability

Scalability refers to the system's potential to cope with growth.

When users and transaction volume increase by 10x, 100x, can the system handle them at low cost and low latency without a dramatic drop in performance?

How can we design the system so that when users increase from 10,000 to 10 million, transaction fees don't skyrocket and confirmation times don't become extremely long?

:::


## I. Problem Background

The concept of **The Blockchain Trilemma** was first explicitly proposed by Ethereum co-founder Vitalik Buterin.

**It refers to the fact that when designing and building a blockchain network, three key attributes—decentralization, security, and scalability—are difficult to optimize simultaneously.**

Usually, optimizing two attributes requires sacrificing the third.


## II. Why is it "Difficult"? (Core Contradiction)

This "difficulty" stems from inherent, almost irreconcilable physical and technical contradictions among them.

**We can use a vivid analogy to understand this:**

Imagine a **meeting**.
*   **Decentralization** = Every person at the meeting has equal speaking and voting rights.
*   **Security** = Every decision made at the meeting needs to be strictly verified to ensure it's real and valid.
*   **Scalability** = The meeting can quickly make a large number of decisions.

**Now, the dilemma arises:**

1.  **If we want to guarantee high "decentralization" and "security"** (like Bitcoin):
    *   Scenario: A meeting with 10,000 people where everyone has to vote on and record every decision. For security, every decision requires waiting for everyone's votes and records to synchronize.
    *   **Result**: The meeting process will be **extremely slow**. Making one decision (producing one block) takes a long time (about 10 minutes for Bitcoin), and the topics that can be discussed are limited (block size is limited). This is **sacrificing scalability**.

2.  **If we want to guarantee "scalability" and "security"**:
    *   Scenario: For quick decision-making, we elect a presidium (e.g., 21 people) to make decisions. Because few people participate in decision-making, communication and coordination are fast, and efficiency is extremely high.
    *   **Result**: Meeting decision-making is fast, but power is concentrated in the presidium. Ordinary members lose their voice. This is **sacrificing decentralization**, making it more like a centralized institution (like EOS, Tron).

3.  **If we want to guarantee "decentralization" and "scalability"**:
    *   Scenario: To be fast, we simplify the security process. We no longer carefully verify everyone's votes, just glance briefly and pass.
    *   **Result**: Decision-making is faster and more people participate, but the system is easily manipulated by malicious actors, leading to wrong decisions. This is **sacrificing security**, which is the most undesirable approach.

**To summarize the "difficult" point:** The underlying design of blockchain requires each node to process and verify all transactions, which is the cornerstone of its security and decentralization. But this "duplicate work" inevitably leads to low efficiency. To improve efficiency (scalability), you must inevitably change this basic model, thereby threatening decentralization or security.


## III. Bitcoin, Ethereum, and Solana

Bitcoin, Ethereum, and Solana have chosen different development paths and technical solutions when facing "The Blockchain Trilemma." The following table can help you quickly grasp their core characteristics and trade-offs.

| Feature | Bitcoin | Ethereum | Solana |
| :--- | :--- | :--- | :--- |
| **Core Goal** | **Store of Value**: Pursuing ultimate **security and decentralization**. | **World Computer**: Building a secure, decentralized **smart contract platform**. | **High-Performance Public Chain**: Pursuing **ultimate scalability** (high TPS, low fees). |
| **Consensus Mechanism** | Proof of Work (PoW) | Proof of Stake (PoS) (transitioned from PoW) | Proof of Stake (PoS) + Proof of History (PoH) |
| **Scalability** | **Low** (~7 TPS), Layer 2 solutions (like Lightning Network) are the focus for scaling. | **Medium** (~15-30 TPS natively), improving through **Layer 2 (like Rollups) and sharding** and other solutions. | **Extremely High** (targeting 50,000+ TPS), achieving high performance **on Layer 1** through innovations like PoH. |
| **Decentralization** | **Extremely High**: The most widely distributed full-node network globally, with relatively low participation barriers. | **High**: A vast and active global developer and node community. | **Relatively Low**: High-performance hardware requirements raise node operation barriers, with relatively fewer and more concentrated validator nodes. |
| **Security** | **Extremely High**: Relies on physical energy (PoW) for protection, tested by the longest time. | **High**: A massive staking economy and active ecosystem, but smart contract complexity introduces risks. | **Yet to be Tested**: Novel architecture has experienced several network-wide outages historically, and its long-term security needs more practical testing. |

## IV. Kaspa Solves the Blockchain Trilemma

::: info

- Kaspa is based on PoW, having the same or even higher **decentralization** and **security** as Bitcoin.

- Kaspa is based on DAG and has already achieved 10 blocks per second, capable of supporting two to three thousand TPS on the L1 mainnet. It achieves **scalability** that can surpass Solana.

:::

![alt text](/kas/the-blockchain-trilemma.png)

### (1) Kaspa Achieved 158 Million Transactions in 24 Hours

- In the 24 hours from UTC `2025-10-05 00:00:00` to `2025-10-06 00:00:00`, Kaspa organized a mainnet stress test.

- TPS was maintained above two thousand for a long time, completing a total of 158 million transactions. The mainnet ran stably, and transfers had no delay.

- Details: [2025-10-05 Mainnet Stress Test](/timeline/2025.html#_2025-10-05-主网压力测试), in terms of performance, has already exceeded Solana ecosystem's highest daily transaction volume.


::: tip
The public concern is: transaction fees are too low (which is an advantage), how to subsidize miners to maintain system operation in the future? This issue is under discussion.
:::


### (2) Solana Goes Down When Daily Transaction Volume is in the Tens of Millions

Solana has gone down more than once. This time it was because Trump launched a coin, and it went down again...

<img :src="$withBase('/kas/solana-down.jpeg')" />







