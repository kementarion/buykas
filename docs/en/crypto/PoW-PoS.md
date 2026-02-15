
# PoW vs PoS Debate

### (1). An Excellent Article

- [https://x.com/epr510/status/1917979584391528858](https://x.com/epr510/status/1917979584391528858)

::: info Article Content:

Regarding the debate between PoW and PoS, the only opposing argument I can sympathize with is environmental friendliness and energy conservation. If you think PoW miners are just like PoS stakers lying flat and earning interest, please unfollow me immediately, as there's nothing to discuss.

So why does PoW need to consume energy? Or is it possible to invent a proof technology that is both fair and energy-efficient? My view is quite radical: I believe it's impossible. The energy consumed is the most neutral and pure "cost," as well as the cost of freedom and equality.

Because we want to prevent structural inequality. Simply put, vested interests should not earn risk-free interest.

What are the basic characteristics of any PoX mechanism in the present and future of blockchain? First, PoX participants need rewards, otherwise they have no motivation to continuously maintain the blockchain. Second, PoX participants need to pay a cost, because if you can get rewards without cost, then you're lying flat earning interest, and we want to avoid this situation.

So what is the cost? Currently, PoS's cost is locking up positions, meaning the principal cannot be used at will during the staking process. Of course, there's another cost: ETH has the risk of falling, and if you've staked it, you can't sell it in time. So for now, ETH staking seems to still be a form of gambling, not a sure bet. But in an ETH-denominated world, this situation doesn't exist. The so-called standard is 1 ETH = 1 ETH, which is the measure of wealth in the world, so it doesn't have a "downward trend." And staking becomes a pure savings behavior, at most a savings behavior with a slightly slower withdrawal process. In this world, the cost of staking becomes: you can only live off interest. If your principal is small and the interest isn't enough to sustain your livelihood, you have to keep working to maintain your livelihood, so the cost of staking is greater for you. For those financially free people whose interest is enough to survive, the cost of staking can be ignored. Of course, there's another cost: you need to run a server to stay online, but staking 100 times more doesn't require spending 100 times more server costs, so this cost also favors the wealthy. In short, this is an unequal world in its underlying mechanism.

So we need X to be a true cost, a neutral cost, not the coin itself, and it needs to have risk. Because if I spend 1 BTC and steadily earn 1.03 BTC, that's lying flat earning interest; if I spend 1 BTC and steadily earn 0.99 BTC, then no one will participate in mining. We need to spend 1 BTC, where some people earn 0.9 and others earn 1.1, engaging in a bookkeeping competition under the premise that overall, BTC has no systematic flow direction.

What does it mean that overall BTC has no systematic flow direction? For example, suppose the entire market ecosystem has three types of actors: A, B, C. For example, A is a staker, B is a trader, C is a user; or A is a miner, B is a holder, C is a user, etc. Their holdings in all currencies are a%, b%, c% respectively, with a+b+c=100. So if the entire system guarantees at the underlying mechanism level that A's share only increases and never decreases, then no matter what the initial values of a, b, c are, eventually a will approach 100, and b, c will approach 0.

So mining requires a cost, and this cost may result in a loss or a profit, which requires appealing to something outside the standard currency. This something needs to be as neutral as possible and verifiable online. The only thing I can think of is energy. Setting aside the online verification part for now, let's say the simplest and most neutral "cost" in the world is energy.

The next question is, when we consume energy, is it possible to do something more meaningful? For example, instead of a meaningless computing power competition, use this computing power to train AI?

This sounds good, but it will inevitably shake the neutrality of the computing power competition. You want "meaning," but who defines meaning? You think OpenAI's direction for training AI is better, I think DeepSeek's approach is superior, who listens to whom? Moreover, AI algorithms may iterate continuously. After new algorithms appear, running old algorithms is also wasting energy, but when to upgrade to which new algorithm? In short, we need to superimpose a "meaning competition" on top of the computing power competition, but how does this meaning competition play out? Vote with ID cards?

If we still want to completely solve the "meaning competition" online in a decentralized form, I'm afraid it will just constantly fork into countless versions, always struggling to reach consensus.

So returning to basics, the simplest answer is to honestly acknowledge that "cost" is "cost," and acknowledge that we always need to spend some costs to maintain this fair competition.

:::

### (2). SUI Officially Froze Hacked Wallets

- [https://x.com/DU09BTC/status/1925597021454372950](https://x.com/DU09BTC/status/1925597021454372950)

![alt text](/kas/sui-froze-tx.png)

::: warning Reflection

If your coins can technically be frozen by someone, what's the point of decentralization?

:::

- More discussion:

  * [https://x.com/0x_Todd/status/1974032088501547445](https://x.com/0x_Todd/status/1974032088501547445)




### (3). Michael Sutton's Viewpoint

- In October 2025, Michael Sutton published his views on PoS vs PoW:

    * [https://x.com/michaelsuttonil/status/1973887808776675365](https://x.com/michaelsuttonil/status/1973887808776675365)

::: tip Summary of Content

The core argument of this article is: **Fast proof of work has unique advantages in achieving fast transaction finality because it can avoid the fundamental tradeoff between "speed and decentralization" that exists in PoS systems.**

The author develops this argument through the following comparisons:

1.  **Two Components of Finality**: The article distinguishes between "fast inclusion" (transaction entering a block) and "fast confirmation" (transaction becoming irreversible). The former can be achieved by increasing block production rate, but the latter is the key challenge.

2.  **PoS's Structural Contradiction**: In PoS, achieving finality requires gathering enough stake votes. The more decentralized the network (more and more dispersed stake holders), the longer it takes to coordinate this voting process, thereby **slowing down final confirmation speed**. Wanting faster finality may require sacrificing decentralization (as Solana does).

3.  **PoW's Mechanism Advantages**:
    *   **Decoupling Feature**: PoW's confirmation speed (based on accumulated work) is unrelated to the number of network participants (degree of decentralization). Each block is proof of the entire network's computing power.
    *   **Security Model**: PoW is "work first, then select," where miners are only known after successfully mining a block, making it resistant to "adaptive attacks" (attackers can't know the target in advance). PoS's committee model is "select first, then work," where committee members are known and can be targeted in advance.
    *   **Economic Weight**: Each confirmation in PoW represents the real cost of resisting the entire network's computing power. In PoS, unless all stake is mobilized, committee confirmation only provides statistical security, not a guarantee of "all economic weight."

**Conclusion**: The author believes that fast PoW is the only consensus mechanism that can achieve fast finality **without compromising decentralization**.
:::
