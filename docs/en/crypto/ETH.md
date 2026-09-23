# The Story of Ethereum

::: tip Note

This article was written by AI after thorough investigation and research.

:::

## Prologue: November 2013, a Draft Sent to Only a Dozen People

In November 2013, a 19-year-old Canadian finished typing a whitepaper on his computer and sent it to about a dozen friends.

He did not submit it to a journal and did not go looking for investors. He had spent two years in Bitcoin circles and knew a group of people online, and now he had written his idea into a 12-page document and posted it to mailing lists and forums.

The title was "Ethereum: The Next-Generation Smart Contract and Decentralized Application Platform."

Thirteen years later, that draft has become a settlement network worth $300 billion: every day millions of people use it to send money, borrow, issue tokens and trade, and some of them call it "the world's ledger." Over those thirteen years it has been through a $150 million theft, a quarrel that split the chain in two, a heart transplant that pushed every miner off the network overnight, and a crash that liquidated retail traders around the world at once.

None of it was planned. All of it was run into, one step at a time.

---

## I. A Nineteen-Year-Old and His Discontent

### 1.1 He Started by "Writing Essays" for Bitcoin

Vitalik Buterin was born in 1994 in Kolomna, outside Moscow, and moved to Canada with his family at six. His father, a programmer, bought him an old computer, and he fell into mathematics and code.

In 2011, at 17, he became a co-founder of a publication called Bitcoin Magazine. In plain terms, he wrote about Bitcoin at five bitcoins an article. A bitcoin was worth a few dollars then, and as he wrote he came to see the whole industry clearly.

He soon found one thing: **Bitcoin could do exactly one thing, move coins.** No "if," no "then," no loops, nothing. If you wanted to write a loan contract on Bitcoin that said "if the money is not repaid in three months, take the collateral," you could not. If you wanted to issue a coin of your own on it, you could not either.

He wrote that discontent into articles and raised it with Bitcoin's core developers: could Bitcoin get a small programming language?

The answer was basically no.

In hindsight, that no was entirely reasonable: Bitcoin's goal was simplicity, stability and immutability. A language means endless bugs, and the thing a chain guarding hundreds of billions of dollars fears most is bugs.

But Vitalik wanted something else. What he wanted was not a ledger but a computer, one anybody in the world could use, that nobody could switch off and nobody could quietly change the rules of.

### 1.2 This Idea Was Almost Given Away

By his own account years later, this whitepaper did not have to be his to write.

In October 2013 he was travelling in Israel and spent time with the people behind Mastercoin, a project that wanted to build more complex features on top of Bitcoin. He thought the direction was right and the method clumsy: support a new kind of contract by adding a new pile of features, and the pile keeps growing. So he sent them a proposal suggesting the protocol be made more general, one set of rules supporting every kind of contract.

Their reply was that it was impressive, but they had no plans to tear down what they had and start again.

Politely turned down, he wrote the idea up as his own document. In December 2013 the earliest version went on his own website, where it can still be found in a web archive. At the time it was not called Ethereum.

### 1.3 The Name "Ether"

He has explained where the name came from: he saw it while browsing a list on Wikipedia.

"Ether" was a hypothetical substance in nineteenth-century physics. People believed space was filled with a medium, and that light travelled through it; after Einstein, the assumption was dropped.

Naming a blockchain after ether has a strange aptness to it: an underlying layer you cannot see or touch, and that is everywhere. You do not need to know what it is, but everything you want to do with it depends on it.

One more thing: the year he wrote the document, he dropped out of university. In June 2014 he received a $100,000 Thiel Fellowship. The grant was set up by PayPal's founder, Peter Thiel, for young people who would rather do things than study, and he was 20 that year.

The fellowship was not a large sum. But he had been paid five bitcoins an article by a website, about $3.75 at the time, and by his own calculation that worked out to $1.30 an hour. From $1.30 an hour to a $100,000 fellowship to a project worth $300 billion took eleven years.

---

## II. 42 Days: $18.4 Million, and a Murky Ownership

### 2.1 Selling Coins

On July 22, 2014, Ethereum began selling coins.

The method was a bitcoin crowdsale: buy ETH with bitcoin, at prices that stepped down over time, cheaper the earlier you came, in a sale that ran 42 days. In the end about 60 million ETH were sold for 31,591 bitcoins, roughly $18.4 million at the time.

That works out to an average presale price of about $0.31 per ETH.

What did buyers get? A whitepaper, a GitHub repository, and the promise of a 19-year-old lead developer. The product would not launch for another two years. This was possible in 2014 only because Bitcoin had just gone from $13 to $1,000 the year before, and the whole world was looking for "the next Bitcoin."

### 2.2 A Murky Account

Not all of the presale ETH was sold.

The genesis block contained 72 million ETH: 60 million for the crowdsale buyers, and the remaining 12 million set aside for early contributors and the foundation.

This is the "premine" that has been argued over ever since.

What separates it from a "fair launch"? In a fair launch everyone starts from zero and whoever mines first gets the coins; in a premine, a slice is set aside before the counting starts. Ethereum's defence was that the 12 million coins were pay for the eight co-founders and early developers, who had worked a year or two without salaries, and that without them the project would never have existed. The critics' case was just as simple: says who.

There is still no agreed answer. What can be said is that **it is the first temperamental fork between Ethereum and Bitcoin**: Bitcoin's founder kept no share, Ethereum's founders did. One wanted an immutable currency, the other a computer with long-term maintainers. Nearly every quarrel since can be traced back to it.

### 2.3 Eight Founders, Seven Gone in Ten Years

Ethereum started with eight co-founders. The number itself says something about its character: **Bitcoin had one anonymous founder, Ethereum had a table full of them.**

In June 2014 the eight rented a house in the woods in Zug, Switzerland, which they called "the spaceship," to sign a company document. The document was never signed, because Vitalik decided the project would not be a company at all. It would be a non-profit, with the money and the power handed to a foundation.

That dinner set the direction for the next ten years:

| Founder | What happened next |
| :--- | :--- |
| Charles Hoskinson | Carried the title of "CEO," argued for a for-profit company, could not reach agreement, left in 2014, and later built Cardano |
| Amir Chetrit | Judged by the other founders and developers to be contributing too little, and agreed at that meeting to step back from day-to-day work |
| Anthony Di Iorio | Leaned toward commercialization, left in 2015, became the Toronto Stock Exchange's first chief digital officer, later ran a wallet company, and announced in 2021 that he was leaving crypto over personal safety concerns |
| Mihai Alisie | Vitalik's co-founder at Bitcoin Magazine; built the legal framework for the Swiss foundation and the crowdsale, left at the end of 2015 to work on on-chain social platforms |
| Gavin Wood | The first to write an Ethereum testnet in C++, trading that for a founder's seat, and the designer of Solidity, the language for writing contracts; later went on to Polkadot |
| Joseph Lubin | Founded ConsenSys, a company that builds on Ethereum |
| Jeffrey Wilcke | Wrote one of the earliest clients, stayed the longest, and later left as well |

Ten years on, only Vitalik is still working on the chain.

The arrangement has one virtue and one flaw. The virtue: **Ethereum has no CEO.** Nobody can give the chain orders, which is what "nobody can turn it off" was supposed to mean. The flaw: when something goes wrong, a room full of people has to argue its way to agreement. The $150 million argument in Chapter IV was exactly that.

---

## III. July 30, 2015: A World Computer Nobody Could Use

On July 30, 2015, the Ethereum mainnet went live under the codename Frontier.

It was still a long way from a "world computer": there was only a command-line client, no graphical interface, installing it meant compiling it yourself, and sending a transfer meant typing a string of parameters into a terminal. Ordinary people could not use it at all.

But three things came into being that day and never changed afterwards.

**First, the account model.** Unlike Bitcoin's "pile of unspent change" (UTXO), Ethereum uses balance accounts, like a bank: closer to ordinary intuition, and easier to write programs against.

**Second, smart contracts ran.** A contract is a program written onto the chain. Once the code is deployed, nobody can change it, and it will not stop halfway because one party wants out. The machine the whitepaper promised, one nobody can switch off, was running in a terminal.

**Third, Gas.** Gas is the unit in which executing a program is charged: to make this computer work you have to buy fuel. It also solved the halting problem along the way. A piece of code stuck in an endless loop could spin every node on the network into the ground, and that would be the end of the chain; with Gas, a program runs until its fuel is gone and stops on its own.

::: info What separates UTXO from balance accounts

Bitcoin's ledger records which coins have not yet been spent: every transaction declares which earlier coins it is spending, and a balance is the sum of that loose change. Ethereum's ledger records how much money sits at each address, and a transfer changes two numbers.

The first is closer to cash and naturally supports parallel processing; the second is closer to a bank account, so a program does not have to assemble change by itself, which is what lets it carry complex contract logic. Ethereum chose the second because what it wanted to do was not payment but computation.

:::

A command-line program from 2015 would end up written into the ETF prospectuses of dozens of Wall Street firms. Nobody could see that coming at the time. That year, ETH traded around one dollar.

---

## IV. June 17, 2016: $150 Million Swallowed by a Contract

### 4.1 Eleven Thousand People's Money, Written into Code

In April 2016, something called The DAO began raising money.

What it wanted to be sounded modern: an investment fund with no company, no board and no CEO, where every decision was voted on by the people who put money in, and the money sat in an on-chain smart contract that nobody could touch.

The idea was handsome; the problem was that it was built far too early.

In one month, about 11,000 people put in more than 12 million ETH, worth about $150 million at the time. It was the first time in blockchain history that such a sum was handed to a piece of code.

### 4.2 Three Hours

On June 17, 2016, someone found the flaw in that code.

::: danger Reentrancy: pay first, record later

The contract refunded users in the wrong order: it sent the money first and updated the ledger afterwards. The attacker wrote a contract of his own that called the refund function again at the instant the money arrived. The ledger had not been updated yet, so the system believed he still had funds to withdraw, and sent more.

Around the loop it went, draining the money a piece at a time. This was not breaking cryptography; it was exploiting an ordering mistake in the code.

:::

That day, 3.6 million ETH were moved into a "child DAO" controlled by the attacker. By design, funds there were locked for 28 days. Those 28 days became a countdown for the whole community.

### 4.3 One Cut, and the Chain Became Two

Over those 28 days, the Ethereum community made the hardest choice the industry had yet faced.

Option one: do nothing. The attacker keeps the money, though in theory he still faces a 28-day lockup and a worldwide manhunt. The argument was "code is law": a contract does what it says, and that is what immutability means.

Option two: change the rules and take the money back. The cost would be a permanent discount on the word immutability.

A gentler approach was tried first: make future blocks refuse transactions moving funds out of the attacker's child DAO. That soft fork was rejected. Someone found a flaw in it that could have stalled the chain, and the miners would not touch it.

In the end there was a hard fork: upgrade the nodes, rewrite the attacked history, and return 12 million ETH to the original holders.

On July 20, 2016, the fork took effect.

The chain split in two: nodes that upgraded kept running the Ethereum of today, and nodes that refused kept running the original history, which is Ethereum Classic (ETC).

> When the code goes wrong, do human judgements step in, or does the loss simply execute as written? Ethereum chose the first in 2016 and paid for it with a chain. There is still no standard answer to the question.

---

## V. 2017 to 2019: Mania, Congestion, and Two Accidents

### 5.1 Issuing Coins Became a Mass Movement

In 2017 something happened on Ethereum that it had not anticipated: everybody started issuing coins.

Because contracts can be written on ETH, a "token" takes a few dozen lines of code. Within a year, thousands of new coins appeared, each claiming to remake some industry, each sold to retail buyers in exchange for ETH.

The practice was called an ICO (initial coin offering). It was venture capital gone feral: no regulation, no prospectus, no profit requirement, just a Telegram group and a whitepaper.

It had two consequences for Ethereum. Demand exploded: issuing a coin meant buying ETH as fuel and as the currency to raise in, and that demand pushed the price up. And the reputation suffered: the great majority of ICOs ended with nothing at all, and the money retail lost tied the word Ethereum to the word scam in a great many minds.

### 5.2 A Chain Clogged by Cats

In December 2017, a game called CryptoKitties launched.

You bred cats, traded them, and each cat was a unique token on the chain. It sounded harmless, and it choked the entire network: the most expensive cat was bid into six figures, the traffic squeezed Ethereum until ordinary transfers took hours and fees multiplied tenfold.

One bout of looking at cats online pushed the world computer to the brink of a stall. It exposed Ethereum's most fundamental problem: every program crowded onto one chain, and whichever was hot clogged it. Scaling became the theme of every technical roadmap it has had since.

### 5.3 One Slip of the Hand Froze $150 Million

In 2017 the wallet company Parity had two accidents.

The first, in July: a flaw in its multisig wallet contract let 150,000 ETH be stolen, about $30 million at the time.

The second, in November, was stranger: a user trying to "correct" the problem triggered a suicide function in the contract and destroyed Parity's shared wallet library. Every wallet depending on that library was locked instantly, and 510,000 ETH were frozen, about $150 million at the time, and frozen they remain.

No hacker, no attack: one mistaken move. The episode has been used ever since to make one point, that on a blockchain "human error" and "theft" have the same consequence, because nobody can rewind time.

### 5.4 2018: Bear Market

In January 2018 ETH reached about $1,400; by the end of that year it was in the low 80s.

The ICO bubble burst, projects that had raised money began selling the ETH they held for cash, and the selling pushed the price lower still. For two years almost nobody on Ethereum talked about the technology; they talked about who was getting out first.

---

## VI. 2020: It Was Finally Actually Used

### 6.1 It First Created a Dollar

Strictly speaking, the first product that really worked on Ethereum was not lending. It was a dollar.

In December 2017 a project called MakerDAO launched: you deposit ETH as collateral, and the system issues you a coin pegged to the dollar, called DAI, according to the value of that collateral. When the price rises, people repay and take their collateral back; when it falls, people bring collateral and take coins. The mechanism holds DAI near one dollar.

It was the first dollar on a chain issued without a bank behind it and without dollar reserves. Few people understood its significance at the time. Three years later, "stablecoins" would become the largest business in the industry, and the only part of it Wall Street was genuinely interested in.

### 6.2 March 12: Half in One Day

In March 2020, the COVID-19 pandemic set off a global sell-off. On March 12, ETH fell more than forty percent in a single day.

The crash left a worse consequence on-chain: in the largest lending protocol, a great deal of collateral became worthless in an instant and had to be liquidated; but the network was congested to its limit, fees spiked to hundreds of dollars a transaction, many liquidations did not execute in time, and some collateral was auctioned off at a price of zero.

The day has a name in the industry: Black Thursday. It showed that the most fragile part of on-chain finance is not the code but congestion in an extreme market.

### 6.3 Summer

In June 2020 a lending protocol called Compound introduced a new trick: borrow or deposit, and it hands you its governance token in proportion. In effect, it paid the people who used the product.

The trick was called "liquidity mining," and it burned across Ethereum quickly. Over the following months protocols handed out coins to each other, yields were pushed into triple digits, and money poured in from every direction.

That year the total value locked on Ethereum went from under $1 billion to more than $15 billion. It was the first time in its five years of existence that a genuinely non-speculative use appeared: people were depositing, borrowing and swapping rather than just trading the coin.

Two more words became common that year. DeFi, decentralized finance, meant writing the functions of a bank (deposits, loans, exchange, insurance) as on-chain contracts. AMM, automated market maker, meant a way to swap without a counterparty, priced by a mathematical formula, where anyone could add money and earn fees.

---

## VII. 2021: Burned Fees, and a JPEG Sold for $69.3 Million

### 7.1 Fees Were Burned

On August 5, 2021, Ethereum made an upgrade codenamed London.

It changed how fees are split: the fee you pay has two parts. One is the priority fee, paid to whoever packs your transaction sooner, and it goes to the packer. The other is the base fee, which no longer goes to miners at all but is destroyed, deleted from the ledger, out of reach of everybody.

Why burn it? Because it turns fees into a deduction from ETH. The busier the chain, the more is burned, and the less ETH there is.

Crypto gave the story a nickname: ultrasound money, meaning "Bitcoin's inflation is fixed; ours can be negative."

### 7.2 A JPEG Sold for $69.3 Million

In March 2021, Christie's auctioned a work by the digital artist Beeple: an image assembled from 5,000 pictures, one drawn every day for thirteen years.

It sold for $69.3 million.

The sale pushed the word NFT (non-fungible token) into the general public's view. Technically it is simple: a record on Ethereum saying "this file belongs to this person." That simple record gave digital art an identity that could be bought and sold, and it brought a wave of new users to Ethereum that year. Many of them bought an NFT first and owned ETH for the first time afterwards.

### 7.3 The First New High, and the Clouds Above

On November 10, 2021, ETH reached about $4,878, a record high.

At the same time, the criticism peaked: Ethereum mining used about 78 TWh a year, the electricity consumption of a country the size of the Netherlands or Chile, more than all of Portugal. ESG funds would not touch it, and regulators began aiming at proof of work. Tesla announced in May 2021 that it would accept bitcoin payments, then cancelled two months later over energy use, a reversal the whole industry felt as a warning.

The problem facing Ethereum was plain: it wanted to be accepted by big capital and by regulators, and its electricity footprint looked like a coal mine.

There was one way to fix it: stop using electricity.

---

## VIII. September 15, 2022: The Most Expensive Engine Swap in the World

### 8.1 Proof of Work: A Guessing Game

Bitcoin and early Ethereum ran on proof of work (PoW).

The rule is plain: it is a guessing game running hundreds of billions of billions of attempts a second, and whoever guesses first earns the right to write the next block into the ledger and collect the new coins.

The only entry requirement is hash power, and hash power is an electricity bill. The security logic is just as plain: to tamper with the ledger you would need more than half the hash power, and to have that much hash power you would first have to spend an astronomical amount on electricity. **When attacking costs more than it is worth, the chain is safe.**

The drawback is equally plain: that electricity is genuinely burned. And as the coin price rises, more and more of it is burned, until the total matches the annual consumption of a mid-sized country.

### 8.2 Explaining "Proof of Stake" Again

Proof of stake (PoS) does not guess numbers. It posts a deposit.

To take part in recording, you stake 32 ETH into the system and become a "validator." The system picks one validator at random to write the next block, and being picked earns a reward. If you cheat, or try to fork the ledger, the system takes your deposit away. That is called slashing.

The security logic points in a different direction: the cost of an attack is no longer the electricity you burned but the deposit you stand to lose. To misbehave you must first buy enough ETH, and the more valuable the chain you are attacking, the more expensive that deposit becomes.

| | Proof of work | Proof of stake |
| :--- | :--- | :--- |
| Entry requirement | Buy mining rigs, pay for power | 32 ETH |
| Source of security | Electricity already burned | A deposit that can be taken |
| Form of cost | Power, hardware | Coins locked up |
| Issuance | Must be high enough to cover costs | Can be low, or zero |
| Energy use | Rises with hash power; once a country's worth | A few machine rooms |

A crude but accurate comparison: proof of work is "whoever burns the most money talks," proof of stake is "whoever stakes the most money talks, and talks wrong, loses the money." The first wastes its cost on electricity; the second parks its cost inside the ledger.

### 8.3 Why the Switch Was Necessary

Three reasons, each more practical than the last.

First, power. Electricity use kept Ethereum outside the doors of mainstream capital and regulators, and that was the most direct pressure.

Second, the illusion of decentralization. Proof of work sounds like anyone can mine, but by 2022 most of Ethereum's hash power sat with a handful of pools, and pools decide which transactions get packed. In other words, "hash power is spread out" had long since stopped being true in a world of industrial mining.

Third, issuance. Mining costs power and hardware, so coins must be issued to pay for it; a deposit costs nothing, so issuance can be low or even zero. Switching to proof of stake meant turning the subsidy paid to miners into interest paid to stakers, and interest can be much lower.

### 8.4 Seven Years of Rehearsal, and a Bomb Buried in the Code

Ethereum spent seven years preparing the switch to proof of stake.

The first step was the beacon chain, which went live on December 1, 2020. It was a chain in a parallel world: only staking and validators, no transactions at all, nobody interacting with it, its entire purpose to get the new consensus mechanism running and wait for the main chain to connect.

That empty chain ran dutifully for 21 months, and validators went from zero to several hundred thousand.

::: info The difficulty bomb: poisoning yourself

In the 2015 design, Ethereum deliberately buried a mechanism: over time, mining difficulty would climb automatically, until blocks came so slowly the chain nearly stopped.

Why poison yourself? Because it forces the community to finish the upgrade before a certain date. A self-inflicted wound, used to stop everyone from putting the decision off indefinitely.

As the Merge approached, the bomb was postponed several times. Two upgrades changed nothing but the date, and both were codenamed after glaciers. It is the strangest engineering shape a deadline has ever taken.

:::

Then came rehearsal. Before the real Merge, the team ran the whole process more than a dozen times on public testnets, and also did "shadow forks": copying the mainnet exactly and running a Merge on the copy first. To move billions of dollars across a bridge without an error, the only method is to wear the bridge out in advance.

### 8.5 That Afternoon

On September 15, 2022, Ethereum merged.

The process was this: the software watched a number called total difficulty, and the moment the network's cumulative mining difficulty reached 58,750,000,000,000,000,000,000, it switched. No pause, no vote, triggered and switched.

The last proof-of-work block was number 15,537,393. From block 15,537,394 onward, Ethereum's blocks were packed by validators.

For users, nothing happened that day: not a coin went missing from a wallet, balances were unchanged, transfers worked as usual.

For miners, everything ended that day: Ethereum mining revenue went to zero inside twenty-four hours. Hundreds of thousands of graphics-card rigs lost their purpose instantly. Most moved on to mine other coins; the rest were broken up and sold. The softening of graphics card prices that followed is directly connected to that.

The technical achievement of that day is often underrated: swapping out an entire consensus mechanism on a system holding hundreds of billions of dollars, with no downtime, no fork, no lost data, was something nobody had ever done. It failed to become a headline precisely because it went so smoothly.

### 8.6 Three Changes That Happened Immediately

Energy use fell to nearly zero. From about 78 TWh a year to about 0.01: the electricity of the Netherlands became the electricity of a few machine rooms. It was a switch-off in energy terms.

New issuance was cut by nearly ninety percent. Before the Merge, Ethereum issued about 13,000 ETH a day to miners; after, about 1,700 a day to validators. The drop was called a "triple halving" at the time, meaning it did in one step what three Bitcoin halvings do.

Deflation became possible. The burn mechanism (the one from 2021) plus the collapse in issuance means ETH can be net deflationary when the chain is busy, burning more than it issues. By mid-2026, total ETH stood around 120 million.

Set the two ledgers side by side and what changed, and what did not, becomes clear:

| | Before the Merge | After the Merge |
| :--- | :--- | :--- |
| Recording | Miners guess numbers; first to guess writes the block | Validators stake 32 ETH and are drawn at random |
| New ETH per day | about 13,000 | about 1,700 |
| Energy per year | about 78 TWh | about 0.01 TWh |
| Block interval | about 12 seconds | about 12 seconds |
| Fees | All to miners | Base fee burned, priority fee to validators |
| Finality | Probability, from blocks piling up behind | Two epochs later, about 13 minutes |

### 8.7 The Miners' Last Counterattack

Miners were not going to leave quietly.

A month before the Merge, a well-known Ethereum miner, Chandler Guo, announced that if the core team no longer wanted proof of work, they would fork one of their own. The chain was called ETHPoW: same rules as pre-Merge Ethereum, keep mining, keep issuing.

On the day of the Merge, ETHPoW launched.

Its first day went like this: the price fell about three quarters within 24 hours; with no stablecoins and no major applications behind it, almost nobody used the chain; hash power rushed in, then rushed out again, because coins that will not cover the electricity bill mean machines get switched off.

A year later, ETHPoW traded at less than one percent of Ethereum's price, having started at about three percent right after the fork.

The ending is worth remembering: miners could keep the equipment, but they could not keep the chain. A chain's value is not in hash power; it is in how much money and how many applications others are willing to put on it. Miners can decide who records, not who uses.

### 8.8 What It Did Not Change

One widely travelled idea needs puncturing here: the Merge did not make fees cheap.

The Merge only changed how blocks are recorded; it did not increase the chain's capacity. Fees stayed expensive, and the cheaper fees after 2022 came from a different route, moving transactions to layer 2.

Nor did these change: the block interval is still about 12 seconds, nothing in any wallet changed, and not one deployed contract had to be altered.

What the Merge changed was the cost structure and the issuance, not speed or fees. Reading it as "an Ethereum upgrade" invites confusion. It is closer to surgery that changes which fuel the engine burns.

One thing did change, though, and ordinary users rarely notice it: the certainty of confirmation.

::: info 12 seconds, 32 slots, two epochs

It used to take blocks piling up behind a transaction to judge whether it was safe, a matter of probability. The Merge removed mining and put a fixed timetable in its place: one "slot" every 12 seconds, with the block producer drawn at random from the validators; every 32 slots (about 6.4 minutes) is an "epoch"; when two epochs in a row reach majority agreement, the transaction is final and cannot be reversed. That works out to about thirteen minutes.

The number is slower than many people assume, and what it buys is a straight answer: not "probably will not be changed" but "will not be changed."

Nobody asks why 12 seconds, incidentally. It is the metronome of the new consensus mechanism, written into the protocol, a heartbeat for the chain.

:::

### 8.9 The Cost

After the swap, new problems arrived.

The first is stake concentration. Proof of stake moved power from pools to coin holders, but coin holders are not evenly distributed either. A service like Lido, which stakes on your behalf and hands you a receipt, once held a third of all staked ETH, which means your staked coins had their voting power handed to the company staking for you. It has been argued over repeatedly, and there is still no clean answer.

The second is censorship. In August 2022 the United States sanctioned the mixing service Tornado Cash. For a while afterwards, more than half of Ethereum's blocks were produced by "compliant" relays that filter out transactions connected to sanctioned addresses. A chain that claims to resist censorship had half its block producers working from an American blacklist. The sanctions were lifted in March 2025, but the episode showed everyone one thing: proof-of-stake validators are companies registered in the real world, and easier to knock on the door of than mining pools.

The third is the criticism that PoS is less decentralized than PoW. There is no conclusion to it: supporters say PoS has a lower barrier, an ordinary computer plus 32 ETH, and critics say the people holding a lot of ETH will only hold more. Both sides use the word decentralization, and do not mean the same thing by it.

---

## IX. After the Merge: From "World Computer" to "World Settlement Layer"

### 9.1 April 12, 2023: Staked Money Can Finally Be Withdrawn

The Merge left one problem behind: money could go in but not come out.

Since the beacon chain launched in 2020, staked ETH could only be deposited, never withdrawn. You could put coins in, but not take them back. The official line was that withdrawals would open after the Merge, which made technical sense and was hard to accept psychologically. Staking 32 ETH, about $50,000 at the time, for two years, with no idea when it could be recovered.

On April 12, 2023, the Shanghai upgrade opened withdrawals, and the first of them completed hours later.

From that day staking became a market you could enter and leave freely. A financial system that only takes deposits will not attract institutions no matter how high the yield. After withdrawals opened, the amount staked kept climbing; by 2026 about a third of the supply was staked, with more than a million validators.

### 9.2 March 13, 2024: Pushing Layer-2 Fees Down to Cents

The keyword of that year was "layer 2" (L2).

::: info Where the split between layer 1 and layer 2 lies

Layer 1 is the Ethereum main chain itself, where every transaction is ultimately settled. Layer 2 is a chain built alongside it that processes transactions itself, then writes a compressed result and proof back to the main chain.

The benefit is speed and cost: the main chain handles a dozen transactions a second, a layer 2 handles thousands. The drawback was that they used to write their data onto the main chain byte by byte, and that storage bill was absurdly expensive.

:::

On March 13, 2024, the Dencun upgrade introduced a new data structure nicknamed the blob.

::: note The blob: a cheap lane for layer 2

The blob works like this: the main chain opens a dedicated, cheap data lane for layer 2. Their transaction data no longer has to squeeze into expensive ordinary block space; it goes into blobs and is deleted a few days later. Because it does not have to be kept forever, the price fell by more than an order of magnitude.

:::

The effect was immediate: layer-2 fees fell from dollars to cents, often under one cent.

### 9.3 July 23, 2024: Wall Street Can Buy ETH for the First Time

In May 2024 the US Securities and Exchange Commission approved spot ether ETFs; on July 23, nine products began trading at once.

For ordinary people, it meant buying ETH inside a brokerage account, with no exchange to register for and no private keys to manage.

For a project that calls itself decentralized, the taste of it is complicated: its largest buyers became institutions placing orders through brokers, and what those institutions buy is a piece of paper, not a coin on the chain. And to get regulators to nod, the ETFs hold no staking, meaning the ETH they own does nothing at all for the security of the network.

### 9.4 The Side Effect: The Main Chain Has No Fees Left to Collect

Those three things combined into one uncomfortable result.

Layer 2 became cheap, so users and transactions naturally went there. The money saved belongs to users, but the fees the main chain no longer collects are real. By 2026 the main chain's fee revenue is close to negligible: gas prices have sat at fractions of a unit for a long time, three orders of magnitude below the 2021 peak.

And fees are the source of ETH burns. With less to burn, deflation is gone. The "ultrasound money" story that was told so loudly the year of the Merge had largely fizzled out by 2026, and total ETH supply is mildly growing again, a fraction of a percent a year.

That leads to Ethereum's biggest internal argument today: should the main chain be nothing but a settlement layer?

One camp calls it a victory: the main chain handles security and settlement, layer 2 handles cheapness and speed, a clean division of labour. The other camp puts it more bluntly: if the main chain collects no money, what feeds its security? Ethereum's issuance is very low, but stakers still expect to be paid, and when fee revenue approaches zero the security budget rests entirely on inflation. Chains far smaller than Ethereum face the same arithmetic, only sooner; Ethereum is bigger, so it arrives later.

---

## X. 2025 to 2026: A New High, a Halving, and an Identity Crisis

### 10.1 August 24, 2025: $4,956

Pushed by ETF flows and buying from public companies, ETH rose to $4,956 on August 24, 2025, breaking the record of $4,878 set four years earlier.

Over those months a group of listed companies began buying ETH as a reserve asset, following the playbook of "buying bitcoin with company cash." Ethereum had its own treasury companies for the first time.

### 10.2 October 2025: A $19 Billion Liquidation

After the peak comes the fall.

On October 10, 2025, the crypto market saw about $19 billion of forced liquidations in a single day, the largest in the industry's history. ETH fell from $4,754 to $3,435, and in November it touched a low of $2,623.

The cause is not complicated: too many people were long with leverage, and too many positions pointed the same way. Once the price falls to a certain level, liquidations fire automatically, and the liquidations push the price down further. The most fragile part of on-chain finance, once again, was not the code. It was people.

### 10.3 June 6, 2026: $1,506

The decline carried into 2026.

In January ETH was still near $2,900; in February it broke below $1,750; on June 6 it reached $1,506, down nearly seventy percent from the record high.

The narrative during that stretch was ugly: ETF outflows, treasury companies sitting on large paper losses, no recovery in on-chain fees, and layer 2 criticized as a machine that drains the main chain.

### 10.4 Now: $2,641

After the low, the price began to recover. $1,862 in July, $2,467 in August, and the September rally took it to a monthly high of $2,666.

On September 19, 2026, ETH was quoted at $2,641: seventy-five percent above the June low, about forty-seven percent below the August 2025 high, and worth roughly $320 billion.

The price path of this cycle is easier to read in a table:

| Date | Price | Note |
| :--- | :--- | :--- |
| August 24, 2025 | $4,956 | Record high |
| October 10, 2025 | $4,754 → $3,435 | About $19 billion of forced liquidations that day |
| November 2025 | Low of $2,623 | The tail end of the first sell-off |
| February 2026 | Below $1,750 | A second leg down |
| June 6, 2026 | $1,506 | The cycle low, down nearly 70% from the high |
| September 19, 2026 | $2,641 | Up 75% from the low |

### 10.5 The Real Changes On-Chain

Prices rode the elevator up and down; what happened on-chain was more substantial.

The foundation changed its people. In 2025 the Ethereum Foundation completed a leadership change, managed for the first time by two co-executive directors, and announced cutting about twenty percent of staff and forty percent of its budget. An organization long criticized for spending a lot and speaking slowly began to shrink.

The roadmap changed its language. The keyword for 2026 is "Lean Ethereum": quantum resistance, making the main chain smaller and steadier, and pushing complex execution further out. Two upgrades already delivered support that: Pectra in May 2025 (introducing smart accounts, so ordinary accounts can carry rules like smart contracts) and Fusaka in December 2025 (expanding layer 2's cheap data lane threefold again). The next upgrade, codenamed Glamsterdam in 2026, circles the same question: how work is divided between the main chain and layer 2.

| Upgrade | Date | What it did |
| :--- | :--- | :--- |
| London | August 2021 | Burn the base fee, give the priority fee to the packer |
| The Merge | September 15, 2022 | Replace proof of work with proof of stake |
| Shanghai | April 12, 2023 | Open staking withdrawals |
| Dencun | March 13, 2024 | Introduce blobs; layer-2 fees fall to cents |
| Pectra | May 2025 | Smart accounts |
| Fusaka | December 2025 | Expand the layer-2 data lane threefold |
| Glamsterdam | 2026 (planned) | How work is divided between main chain and layer 2 |

The biggest real business is stablecoins. What runs most on Ethereum today is not NFTs and not decentralized exchanges but stablecoins: the bulk of USDT and USDC issuance sits on Ethereum and its layer 2s. After the United States passed stablecoin legislation in 2025, Wall Street's attention went to this chain's settlement capability for the first time. The irony is that Ethereum's most successful application is a tool that takes the price of the coin out of the picture.

---

## XI. What It Achieved, and What It Did Not

### What It Achieved

It turned "writing programs on a chain" from an idea into infrastructure. Every stablecoin, lending protocol, decentralized exchange and layer-2 network today traces back to that sheet of paper from 2013.

It completed a heart transplant nobody had attempted. On a system holding hundreds of billions of dollars, with no downtime and no fork, it replaced the entire consensus mechanism while cutting energy use to under a ten-thousandth of what it had been and new issuance by nearly ninety percent. Before September 15, 2022 that was a plan; after it, a fact.

It built a real economy. Tens of thousands of developers, more than a trillion dollars of on-chain assets, millions of users a day, none of it carried by its own marketing but by other people building on top of it.

And those buildings use the same brick. Solidity, the contract language Gavin Wood designed for Ethereum in 2014, is still the working language of almost every stablecoin and mainstream DeFi protocol. A chain's deepest moat is often the code other people have already written.

### What It Did Not Achieve

Scaling was not done on Ethereum itself. The main chain still handles only a dozen or so transactions a second, and scaling was pushed to layer 2, which solves "cheap" rather than "belongs to Ethereum": for every transaction a user makes on a layer 2, the main chain collects only a sliver of data fees.

It did not square the security budget. With fee revenue drawn away by layer 2, what keeps the main chain secure has no answer yet. The low inflation the Merge delivered made the question sharper rather than softer: less issuance means less spending on security, and less spending on security means pressure to push issuance down further.

Nor did it become money. ETH is fuel, collateral, a speculative asset, something funds and public companies hold. It is not the thing people buy groceries with. On that point it is in the same position as Bitcoin, and as every smaller chain.

> It wanted to be a world computer, and the function the world uses it for most is transferring and speculating.

---

## Epilogue: Thirteen Years of a Draft

In November 2013, a 19-year-old Vitalik sent a 12-page draft to about a dozen friends.

Thirteen years later, that draft has become: a chain that swapped its consensus mechanism, an argument over $150 million that was stolen and then argued back, an upgrade that pushed every miner off the network overnight, nine American ETFs, a third of the circulating supply locked in staking, and a settlement layer worth $300 billion with fee revenue close to zero.

It proved one thing: code can play the role of law, as long as somebody is responsible for repairs afterwards. After The DAO it chose "people patch it," at the price of a second chain; after the Merge it chose "swap the engine," at the price of the miners and part of its own story.

For thirteen years it has been working on the same problem: how to let one machine keep the books for everybody, without anybody owning the machine.

It got more right than most people expected. What it did not get done, on speed, fees, the security budget and being genuinely used, is still a long way from what a 19-year-old imagined when he wrote the draft.

---

## Appendix: Main Sources

- The Ethereum whitepaper (November 2013, Vitalik Buterin): https://ethereum.org/en/whitepaper/
- The 2014 crowdsale and genesis allocation (60 million sold, 12 million to early contributors and the foundation, 72 million in total): https://ethereum.org/en/history/
- The DAO incident and the hard fork of July 20, 2016 (block 1,920,000): https://ethereum.org/en/history/
- EIP-1559 and the London upgrade of August 5, 2021: https://eips.ethereum.org/EIPS/eip-1559
- The Merge (September 15, 2022; total difficulty 58750000000000000000000; last PoW block 15,537,393): https://ethereum.org/en/roadmap/merge/
- Issuance and energy changes brought by the Merge (about 13,000 to about 1,700 ETH per day; about 78 TWh to about 0.01 TWh): https://growthepie.com/answers/what-was-the-merge
- Shanghai (withdrawals opened April 12, 2023), Dencun (March 13, 2024, EIP-4844 blobs), Pectra (May 2025), Fusaka (December 2025): https://ethereum.org/en/roadmap/
- Approval and listing of US spot ether ETFs (approved May 23, 2024; trading began July 23): https://www.sec.gov/newsroom/speeches-statements/gensler-statement-spot-ether-etps
- Ethereum Foundation leadership change and budget cuts (2025): https://ethereum.org/en/
- Prices, market value and historical highs and lows: MEXC public market API (ETHUSDT monthly and daily candles), taken on September 19, 2026
- On-chain staking and supply data: https://ultrasound.money ; https://beaconcha.in
