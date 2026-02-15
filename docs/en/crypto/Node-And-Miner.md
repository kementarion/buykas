
# What is a Node, and What is the Relationship with Miners?

::: info Background

- **Blockchain**: A global public ledger recording all transaction history.

- **Transaction**: Individual records on the ledger, such as "Zhang San transfers 5 KAS coins to Li Si."
:::

## 1. Node

- Responsibility: **Audit**

- Work content: New transactions are first submitted to nodes. Nodes are responsible for strict auditing:

  * Is Zhang San's signature valid?

  * Does Zhang San's account have 5 KAS?

- **Only transactions that pass auditing are eligible to be recorded in the ledger.**

::: info Function

- Nodes guard: **the correctness of ledger content.**

:::

### (1). How does the network "punish" malicious nodes?

The blockchain network's punishment is not "arresting," but **"isolating."**

| Malicious Behavior | Network "Punishment" Mechanism |
| :--- | :--- |
| **Broadcasting invalid data** | **Immediate rejection + connection downgrade**: Honest nodes will reject invalid data and may disconnect from malicious nodes. |
| **Withholding data/censoring** | **Being marginalized by the network**: Since the network is peer-to-peer mesh-connected, information spreads through other paths. Inactive nodes are bypassed and lose influence. |
| **51% attack** | Detailed analysis later. |
::: tip

- "Censoring" refers to intentionally refusing to forward data, hiding transactions, etc.

- Each node privately maintains a scoring mechanism for its "peer nodes," and nodes regularly manage their connection pools. When they need to make space for new, potentially better peer nodes, they prioritize disconnecting from those "inactive" or "poorly performing" nodes.

:::

## 2. Miner

- Responsibility: **Bookkeeping**

- Work content: Miners collect a batch of **audited** transactions and compete for **bookkeeping rights** by solving a very difficult mathematical problem (proof of work).

- The winner gets the right to formally write a new page of accounts (new block) into the ledger

  * After **finally being accepted by the entire network and successfully written into the ledger**, they receive rewards: block rewards and transaction fees.

::: info Function

- Miners guard: **the continuity and security of the ledger process.**

:::

### (1). How does the network "punish" malicious miners

| Malicious Method | Details and Punishment Mechanism |
| :--- |  :--- |
| **Producing invalid blocks** | Each node verifies blocks according to consensus rules. Once an invalid block is found, it's immediately rejected. The block is rejected by the entire network, and the computing power consumed (electricity cost) in mining that block is completely wasted. |
| **Transaction censoring** | Miners intentionally don't package transactions from specific addresses into blocks. Users discover transactions haven't been confirmed for a long time while other transactions are normal. Can bypass by broadcasting to more nodes. | **No direct protocol punishment, but loss of opportunity**: Censoring high-fee transactions means **miners voluntarily give up income**. Censored transactions can eventually be packaged by other honest miners. |
| **51% attack** | Nodes cannot reject. Detailed analysis later. |

## 3. User Transaction Workflow

- Transactions submitted by ordinary users are first verified and broadcast by **public nodes**.

- **Miners** collect valid transactions and compete for block production rights through PoW.

::: info
Professional miners run their own **private full nodes**. Their nodes connect to the network, independently verify and collect valid transactions from the network into their mempool. Subsequently, miners select transactions from their own mempool for packaging and mining.
:::

- Blocks mined by **miners** still need to obtain final verification from **all public nodes** before being accepted and written into the ledger.


::: tip Summary

- **Miners depend on nodes**: Miners need to obtain the latest network state and pending transactions from nodes.

- **Nodes constrain miners**: Even if miners have huge computing power, if they produce invalid blocks (such as forging transactions), they will be rejected by the node network, making their efforts futile. **Nodes are the ultimate guardians of consensus rules.**

:::


## 4. Attacker Controls 51% of Computing Power

*   **Attack capabilities**:
    *   **Can launch**: **Double-spend attacks**. This is the main form of attack, by secretly mining a longer chain to reverse confirmed transactions.
    *   **Can execute**: **Transaction censorship**. To a certain extent, refuse to package specific transactions.
*   **Attack limitations**:
    *   **Absolutely cannot**: Modify consensus rules, create tokens out of thin air, steal others' funds. Because public nodes will strictly verify and reject any blocks that violate rules, making the attack ineffective.
*   **Node's role**:
    *   Nodes **cannot prevent** double-spend attacks that follow rules from occurring, because the attack chain is technically "valid" (has the most "work").
    *   Nodes are **the last line of defense against more malicious attacks**, ensuring basic rules aren't broken.

::: tip Summary:

Controlling computing power = obtaining "history writing rights," **can rewrite history, but must follow grammatical rules.**

:::

## 5. Attacker Controls 51% of Nodes

*   **Attack capabilities**:
    *   **Can launch**: **Network partition/eclipse attacks**. Isolate some honest nodes and show them a false network state, thereby achieving double-spending.
    *   **Can execute**: **Complete transaction censorship**. Block specific transactions at the propagation source, preventing them from entering the mempool.
    *   **Can execute**: **Selfish mining**. Gain unfair advantage by delaying broadcast of honest blocks.
*   **Attack limitations**:
    *   **Cannot alone** directly double-spend or modify history. Need to work with certain computing power to achieve effective attacks.
    *   If forcibly modifying node rules (such as increasing rewards), it causes a **hard fork**, creating a new chain rather than attacking the original chain.
*   **Miner's role**:
    *   Honest miners will still mine on the correct chain.

    *   If miners are also deceived (such as in a partition attack), they may work on the wrong chain.

::: tip Summary:

Controlling nodes = controlling "information channels," **can distort the present, isolate others, conduct censorship, but difficult to directly tamper with history.**

:::


## 6. What's the Difference Between Public Nodes and Private Nodes?

|  | Public Node | Private Node |
| :--- | :--- | :--- |
| **Accessibility** | **Open to public** | **Open only to owner** |
| **Service Target** | Any external users connecting to it (e.g., mobile light wallets, DApps) | Node operator themselves (e.g., exchanges, large mining pools' own infrastructure) |
| **Main Purpose** | Provide public infrastructure for the network, enhance decentralization and resilience | Meet operator's own needs, pursue **security, privacy, control, and performance** |
| **Resource Consumption** | **High**. Need to handle large numbers of requests from strangers, consuming more bandwidth and computing resources. | **Low**. Only handle requests from own people, resource consumption is controllable. |
| **Configuration** | Usually configured to allow incoming connections from the internet. | Usually configured with firewalls, reject external connections, only allow outbound connections. |
| **Typical Operators** | Volunteers, project enthusiasts, infrastructure service providers (like Infura) | Cryptocurrency exchanges, mining pools, large holders, developers who need powerful services |


### (1). Why Would Someone Run a Private Node?


1.  **Trust and Security**
    *   **Public node risks**: When you use a public node, that node might:
        *   **Provide incorrect data** (maliciously tampered).
        *   **Record and sell your IP address and transaction information** (privacy leakage).
        *   **Censor your transactions** (refuse to forward your transactions).

::: tip Explanation

- A well-designed wallet doesn't just send transactions to one public node when broadcasting, but sends them simultaneously to multiple public nodes it connects to.

- As long as one honest node receives your transaction, it will start propagating through the network.

- For a malicious node to censor (freeze your transaction), they need to control all nodes your wallet connects to, which increases the difficulty.

:::

2.  **Privacy Protection**
    *   Your query requests (e.g., "check my account balance") and transaction broadcasts only go through your own server, not exposed to any third party. This greatly enhances your financial privacy.

3.  **Reliability and Control**
    *   You don't depend on any third-party service's availability. If a public node goes down or rate-limits, your service is interrupted. Your private node is completely under your control, ensuring 24x7 availability.

4.  **Performance**
    *   Private nodes don't have other users competing for resources, so response times are usually faster and more stable. For exchanges or high-frequency traders, this is a critical requirement.

::: info

**Public nodes and private nodes are technically the same software**; their core functions are to verify rules and store the ledger. The key difference is in **configuration and operation strategy**.

A healthy network needs many **public nodes** to ensure ordinary users' access, and also needs many **private nodes** to ensure large participants don't depend on third parties, thereby further solidifying the network's decentralized nature.

For ordinary users, if possible, using your own light wallet to connect to **a node you trust** (or even one you run yourself) is the best choice.

:::

## 7. If 51% of Public Nodes are Controlled, Can Private Nodes Stop the Attack?

If an attacker only controls **51% of nodes**, it's **almost impossible to tamper with history**; the most likely attack is **isolating and deceiving some network participants**.


### (1). Who Can Be Deceived?

*   **Light wallet users**: If my mobile wallet only connects to public nodes controlled by the attacker, I'll live entirely in the world of lies woven by the attacker, such as seeing a deposit that doesn't exist at all.

*   **Services relying on public nodes**: If an exchange or website's backend mainly relies on a few public nodes (this is a common security risk point), it will also be deceived.

### (2). Private Nodes' Key Defensive Role

#### [1]. Protect Node Owners Themselves (Most Direct Effect)

**This is the absolute embodiment of the "verify, don't trust" principle.**
*   As long as you run your own **private full node**, you're **completely immune** to this type of attack (because history cannot be tampered with).
*   Your node obtains data from multiple nodes in the peer-to-peer network (though many are malicious), but it **independently verifies** all blocks and transactions.
*   It will immediately recognize the attack chain as invalid (because it lacks sufficient proof of work, or contains invalid transactions) and refuse to build on it. **The node owner won't be affected at all.**

#### [2]. Increase Attack Difficulty and Uncertainty

*   Attackers can't know for certain about all private nodes' existence and connection methods.
*   Maybe some key exchange or developer happens to be running an unknown private node, and this node **happens to connect to an honest peer node**. This "escaped fish" will immediately discover there's a longer, valid chain in the network, triggering an alert and exposing the attack early.
*   Private nodes are like countless independent eyes in a dark forest; attackers can't ensure they can deceive everyone.

#### [3]. Provide Recovery Foundation After Attack (Most Important Effect)

This is private nodes' greatest value: **ensuring the network doesn't die.**
*   Once the attack stops (attack cost is high, cannot continue permanently), deceived nodes need to resynchronize with the real network.
*   At this point, the large number of surviving private nodes that have stayed on the correct chain become the "source of truth."
*   Deceived nodes can download complete, correct blockchain history from these private nodes, quickly synchronize to the real state, making the attacker's fake chain completely worthless.


## 8. How to Run a Kaspa Node

- kas.fyi documentation on how to run a Kaspa node: [https://docs.kas.fyi/guides/new-to-kaspa/run-a-kaspa-node](https://docs.kas.fyi/guides/new-to-kaspa/run-a-kaspa-node)





