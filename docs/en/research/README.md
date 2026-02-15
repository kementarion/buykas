# Kaspa Theory

![DAG vs BlockChain](/kas/dag-vs-blockchain.jpg)

::: tip What is DAG?

- DAG: **Directed Acyclic Graph**. Can be understood as a **multi-dimensional blockchain**.

:::

On the Kaspa official website [https://kaspa.org/](https://kaspa.org/), you can see the real-time operation of the Kaspa DAG:

![kaspa.org](/kas/kaspa.org.png)



## Birth of the Core Concept: From Chain to DAG (Directed Acyclic Graph)

The story of Kaspa begins with an outstanding computer scientist and cryptographer—**Yonatan Sompolinsky**.

- **Yonathan Sompolinsky**: He is the founder and theoretical architect of the entire project. He pursued his Ph.D. at the Hebrew University of Jerusalem under the guidance of Professor **Aviv Zohar**. As early as 2013, Yonatan published a post titled **"Secure High Rate Transaction Processing with Bitcoin"** on his blog, which already contained the core ideas of the **GHOST** protocol. This protocol was later adopted by Ethereum to solve the problem of decreased security in Bitcoin's longest chain rule when blocks are produced at high speed.

- **Core Problem**: Yonatan's research has always revolved around one core question: **How to dramatically increase blockchain throughput (TPS) and shorten confirmation times without sacrificing security and decentralization?**
    - Bitcoin: Secure but slow (~7 TPS, long confirmation times).
    - Traditional high TPS chains (like EOS): Achieve speed by sacrificing decentralization (few nodes).

Yonatan's answer: **Abandon the single chain structure and move to a Directed Acyclic Graph (DAG).**

---

## Phase 1: GHOST - Optimization of Chain Structure (2013)

::: tip

This is the starting point of all stories.

:::

- **Paper Title**: *"Secure High-Rate Transaction Processing in Bitcoin"* (Originally Yonatan's blog post, later became a formal paper)

- **Authors**: Yonatan Sompolinsky, Aviv Zohar

- **Publication Time**: 2013 (blog), 2015 (Financial Cryptography and Data Security Conference FC)

- **Paper**: [https://eprint.iacr.org/2013/881.pdf](https://eprint.iacr.org/2013/881.pdf)

- **Forum Discussion**: [https://bitcointalk.org/index.php?topic=359582.0](https://bitcointalk.org/index.php?topic=359582.0)

- **Core Idea**:

    - **Abandon the "Longest Chain" rule**: The longest chain refers to the chain containing the most blocks. GHOST rule changes to selecting the chain with the **"Largest Subtree"** as the main chain.

    - **Include Orphan Blocks**: When calculating the "weight" of a chain, not only count blocks on the main chain, but also count orphan blocks "discarded" by main chain blocks (they are also proof of legitimate hash power). This makes the rule for selecting the main chain better reflect the distribution of total hash power.

::: info Impact

- The GHOST protocol was **later adopted by Ethereum**, becoming the foundation for its shift from Bitcoin's longest chain rule to a more secure consensus mechanism. GHOST is still a **chain structure**, it only optimizes the chain selection rule and does not change the underlying data structure.

:::

---

## Phase 2: PHANTOM - The Foundation of BlockDAG Consensus (2018)

::: tip

This is a milestone paper that extends consensus from "chain" to "graph".

:::

- **Paper Title**: *"PHANTOM: A Scalable BlockDAG Protocol"*

- **Authors**: Yonatan Sompolinsky, Aviv Zohar

- **Publication Time**: 2018

- **Paper**: [https://diyhpl.us/~bryan/papers2/bitcoin/Phantom:%20A%20scalable%20block%20DAG%20protocol%20-%202018.pdf](https://diyhpl.us/~bryan/papers2/bitcoin/Phantom:%20A%20scalable%20block%20DAG%20protocol%20-%202018.pdf)

- **Core Contribution**: First provided a **provably secure** consensus protocol for the **BlockDAG** model. The core idea of the PHANTOM protocol is to **break through the fundamental limitation of the Bitcoin protocol that sacrifices scalability for security** by moving from a chain structure to a DAG structure and pairing it with a new consensus algorithm.

- **Technical Details**:

    1.  **Data Structure**: Allows blocks to reference multiple parent blocks, forming a DAG. This dramatically increases throughput because almost no orphan blocks are generated.

    2.  **Maximum k-Cluster Problem**: The core of PHANTOM is a sorting algorithm. It transforms the sorting problem in DAG into a graph theory problem: finding the largest set of blocks (called "blue set") where the "distance" between any two blocks does not exceed `k` blocks. `k` is a scalable parameter related to network latency.

    3.  **Coloring Algorithm**:
        - **Step 1**: Identify "honest" blocks (blue set). The algorithm traverses the DAG, selecting blocks that are closely related in the "past" and coloring them blue. These blocks are considered honest blocks that temporarily forked due to network latency.
        - **Step 2**: Sorting. First sort the blocks in the blue set (forming the main chain), then insert the "red" blocks (malicious blocks) created by attackers into the sorting.

    4.  **Limitations**: PHANTOM's algorithm is very secure, but **computationally very complex** because it needs to solve an optimization problem similar to "maximum k-cluster", which may be too slow for blockchains that need to reach consensus in real time.

---

## Phase 3: GHOSTDAG - The Leap from Theory to Practice (2021)

::: tip

GHOSTDAG is a practical, efficient version of PHANTOM, and is the protocol used when the **Kaspa mainnet launched in 2021**.

:::

- **Paper Title**: *"PHANTOM GHOSTDAG: A Scalable, Generalization of the Nakamoto Consensus Protocol"*

- **Authors**: Yonatan Sompolinsky, Shai Wyborski, Aviv Zohar

- **Publication Time**: September 2021

- **Paper**: [https://eprint.iacr.org/2018/104.pdf](https://eprint.iacr.org/2018/104.pdf)

- **Core Contribution**: Provided a BlockDAG consensus protocol with security comparable to PHANTOM, but **extremely high computational efficiency and extremely simple**.

- **Key Differences from PHANTOM**:

    - **Greedy Algorithm**: GHOSTDAG does not use complex "k-cluster" optimization, but adopts a **greedy algorithm** to select the main chain. It simply and recursively selects the block with the **"Largest Past"**. Here, "past" refers to the subgraph formed by that block and all its ancestor blocks.

    - **Intuitive Understanding**: This rule is a direct extension of Bitcoin's "longest chain" (heaviest chain) rule in the DAG world. It selects the "Heaviest Subtree".

    - **Equivalence**: The paper proves that under common network conditions, the "blue set" (honest block set) selected by GHOSTDAG is **identical or extremely similar** to the set selected by PHANTOM, but the computational speed is worlds apart.

    - **Result**: GHOSTDAG makes it possible to process DAG in real time and produce blocks per second, clearing engineering obstacles for the launch of the Kaspa mainnet.

::: info Summary

**Simple Summary of the Relationship Between PHANTOM and GHOSTDAG**:

- PHANTOM is a "perfect but slightly slow solution" that proves the feasibility of BlockDAG consensus;

- GHOSTDAG is a "good enough and extremely fast solution" that makes BlockDAG consensus practical.

- Kaspa chose GHOSTDAG.

:::

---

## Phase 4: DAGKNIGHT - Evolution for the Future (2022)

::: tip

DAGKNIGHT is a protocol that goes further than GHOSTDAG, aimed at solving a key limitation of GHOSTDAG: **the fixed parameter `k`**.

:::

- **Paper Title**: *"DAGKNIGHT: A Parameterless Generalization of Nakamoto Consensus"*


- **Authors**: Yonatan Sompolinsky, Michael Sutton

- **Publication Time**: October 31, 2022

- **Paper Content**: [https://eprint.iacr.org/2022/1494.pdf](https://eprint.iacr.org/2022/1494.pdf)

- **Core Idea**: **Implement parameter-less consensus.**

- **Technical Details**:
    - **The `k` Parameter Problem in GHOSTDAG**: In GHOSTDAG, `k` is a predefined value representing the "maximum fork depth" allowed by the network. It must be conservatively set based on the actual network latency (e.g., 1 second, 3 seconds). If `k` is set too small, honest blocks might be incorrectly excluded from the blue set; if set too large, it reduces security. This is a parameter that requires human trade-offs.
    - **DAGKNIGHT's Solution**: The DAGKNIGHT protocol is **"parameter-less"**. It does not preset `k`, but **dynamically and post-hoc** observes the entire DAG topology to automatically determine which block sets can be safely confirmed as "honest".
    - **"Confirm First, Sort Later"**: DAGKNIGHT introduces a new security primitive. It first quickly "safely confirms" blocks, then performs global sorting. This means transaction confirmation times can be greatly shortened, even achieving "sub-second" confirmations.

::: info Related Information

- The DAGKNIGHT whitepaper was released on **October 31, 2022**, which is the same day as the release of the Bitcoin whitepaper (October 31, 2008).

- September 2025 Status Update:

  * DAGKNIGHT-related code is under development. According to Michael Sutton, it is expected to be released together with vProgs.

:::



## Other Kaspa-Related Papers

- [https://kaspa.org/publications/](https://kaspa.org/publications/)





