# A Complete History of Ethereum

::: tip Note

This article was written by AI after thorough investigation and research.

:::

## Prologue: November 2013, a Draft Sent to Only a Dozen People

In November 2013, a 19-year-old Canadian finished typing a whitepaper on his computer, then sent it to a dozen friends.

He did not submit it to a journal, nor look for investors. He had simply spent two years in Bitcoin circles, met a group of online friends, and now wrote his idea into a 12-page document, posted to mailing lists and forums.

The document was titled "Ethereum: A Next-Generation Smart Contract and Decentralized Application Platform."

Thirteen years later, that draft had become a settlement network worth $300 billion: millions of people around the world use it every day to transfer money, borrow, issue tokens, and trade, and a group of people call it "the world's ledger." It has been through a $150 million theft by hackers, an argument that split the entire chain in two, a heart transplant that cleared out every miner overnight, and a crash that liquidated retail investors around the world at the same time.

**These things were not planned; they were stumbled into, step by step.**

---

## I. A Nineteen-Year-Old and His Discontent

### 1.1 He Started by "Writing Essays" for Bitcoin

Vitalik Buterin was born in 1994 in Kolomna, outside Moscow, and moved to Canada with his family at age 6. His father was a programmer who bought him an old computer, and he fell in love with math and programming.

In 2011, at 17, he became a co-founder of a publication called Bitcoin Magazine—put plainly, writing for Bitcoin, five bitcoins per article. Back then a bitcoin was worth a few dollars, and as he wrote he came to see the industry clearly.

He soon noticed something: **Bitcoin could only do one thing—transfers.** No "if," no "then," no loops, nothing. You wanted to make a loan contract on Bitcoin that says "if you don't repay in three months, I automatically take the collateral"—you couldn't. You wanted to issue your own coin on it—you couldn't.

He wrote this discontent into an article and raised it with Bitcoin's core developers: could Bitcoin be given a small programming language?

The reply was basically "no changes."

Looking back today, that "no changes" was entirely reasonable: Bitcoin's design goal is simplicity, stability, immutability. A language means countless vulnerabilities, and a chain guarding hundreds of billions of dollars fears nothing more than vulnerabilities.

But Vitalik wanted something else. **What he wanted was not a ledger but a computer—one that the whole world can use, that no one can turn off, and whose rules no one can secretly change.**

### 1.2 This Idea Was Almost Given Away

By his own recollection years later, this whitepaper did not necessarily have to be written by him.

In October 2013 he was traveling in Israel and spent some time with a group of people working on Mastercoin. That project wanted to build more complex functionality on Bitcoin. He thought the direction was right but the approach too clumsy—to support one kind of contract they added a pile of features, and the features kept piling up. So he sent them a proposal: make the protocol more general, using one set of rules to support all types of contracts.

The response was: brilliant, but we don't intend to tear down what we have and rebuild.

**After being politely declined, he wrote the idea into his own document.** In December 2013, the earliest version was posted on his own website (it can still be found in web archives), and at the time it was not yet called Ethereum.

### 1.3 The Name "Ether"

The origin of the name, as he himself mentioned: he saw it while browsing a list on Wikipedia.

"Ether" was a hypothetical substance in 19th-century physics: people believed the vacuum was filled with a medium through which light traveled. After Einstein, this hypothesis was rejected.

Using "ether" to name a blockchain has a curious aptness: **an invisible, untouchable substrate that is nevertheless everywhere.** You don't need to know what it is, but everything you want to do with it depends on it.

By the way, the year he wrote this document, he dropped out of university. In June 2014 he received a $100,000 Thiel Fellowship—a scholarship set up by PayPal founder Peter Thiel specifically for young people who "skip school and go build things." He was 20 that year.

The fellowship money was not much. But his earlier pay for writing for a website was five bitcoins an article, about $3.75 at the time—he calculated it himself as about $1.30 an hour. **From $1.30 an hour, to a $100,000 fellowship, to a project worth $300 billion, took eleven years.**

---

## II. 42 Days: $18.4 Million, and a Murky Ownership

### 2.1 Selling Coins

On July 22, 2014, Ethereum began selling coins.

The method was a bitcoin crowdfund: buy ETH with bitcoin, at tiered prices that decreased over time—the earlier you bought, the cheaper; it sold out in 42 days. In the end, about 60 million ETH were sold, raising 31,591 bitcoins, about $18.4 million at the time.

Converted, the average crowdfund price of one ETH was about $0.31.

What did participants get? A whitepaper, a GitHub repository, and the promise of a 19-year-old lead developer. The product would not launch for another two years. That this could be done in 2014 was only because the previous year Bitcoin had just risen from $13 to $1,000, and the whole world was looking for "the next Bitcoin."

### 2.2 A Murky Account

Not all the crowdfunded ETH was sold.

The genesis block contained 72 million ETH in total: 60 million for crowdfunders, and the remaining 12 million reserved for early contributors and the foundation.

This is the "pre-mine" that was later argued over repeatedly.

How is it different from a "fair launch"? **A fair launch starts everyone from zero, and whoever mines first gets it; a pre-mine sets aside a chunk first, then starts the clock.** Ethereum's defense was: this 12 million was compensation for the eight co-founders and early developers, who worked for a year or two without a salary, and without which the project could not have gotten off the ground at all. The critics' case was just as simple: says who.

There is still no consensus on this account. What can be confirmed is: **it was the first divergence in temperament between Ethereum and Bitcoin.** Bitcoin's founder kept no share; Ethereum's founder did—one wanted an "immutable currency," the other a "computer that someone maintains for the long term." Almost all the later arguments can be traced back to here.

### 2.3 Eight Founders, Seven Gone in Ten Years

Ethereum began with eight co-founders. The number itself says something about its temperament—**Bitcoin has a single anonymous founder; Ethereum has a table full of people.**

On June 7, 2014, these eight rented a house in the woods in Zug, Switzerland, and met. They called the house "the spaceship." The agenda was to sign a company document. The result: **the document was not signed**—because Vitalik decided the project would not be a company but a nonprofit, with the money and power handed to a foundation.

That dinner set the course of the next decade:

- Charles Hoskinson held the title of "CEO" at the time; he wanted a for-profit company, could not agree, left in 2014, and later built Cardano;
- Amir Chetrit was judged by the other founders and developers to be contributing too little, and agreed at that meeting to step back from day-to-day involvement;
- Anthony Di Iorio also leaned toward commercialization, left in 2015, later became the first chief digital officer at the Toronto Stock Exchange, then founded a wallet company, and in 2021 announced he was leaving the crypto industry over personal-safety concerns;
- Mihai Alisie (the one who co-founded Bitcoin Magazine with Vitalik) built the legal framework for the Swiss foundation and the crowdfund, left at the end of 2015, and went to build an on-chain social platform;
- Gavin Wood was the first to write a testnet in C++, traded that for a founder's seat, and also proposed Solidity, Ethereum's own contract language; he later went on to Polkadot;
- Joseph Lubin went off to found ConsenSys, a company dedicated to building on Ethereum;
- Jeffrey Wilcke wrote one of the earliest clients, stayed the longest, and later left too.

Ten years later, of the eight, only Vitalik is still on this chain.

This has one advantage and one disadvantage. The advantage: **Ethereum has no CEO.** No one can give the chain orders, which fits the original intent that "no one can turn it off." The disadvantage: when something goes wrong, a group of people has to argue their way to consensus—the $150 million argument in Chapter Four was exactly that.

---

## III. July 30, 2015: A World Computer Nobody Could Use

On July 30, 2015, the Ethereum mainnet launched, codenamed Frontier.

It was still far from a "world computer": only a command-line client, no graphical interface, installation required compiling it yourself, and transferring money required typing a string of parameters at the command line. Ordinary people simply could not use it.

But three things were established that day, and never changed afterward:

**First, the account model.** Unlike Bitcoin's "pile of unspent change" (UTXO), Ethereum uses "balance accounts," like a bank—closer to ordinary intuition and easier to write programs on top of.

**Second, smart contracts ran.** A contract is a program written on-chain; once deployed, no one can change its code, and it will not stop just because one party wants to renege. The "computer no one can turn off" promised in the whitepaper was now running at the command line.

**Third, the concept of "Gas."** Gas is the unit of payment for executing programs: if you want this computer to work, you have to buy fuel. This solved the halting problem—if a string of infinite-loop code spun all the network's nodes to death, the chain would be finished. With Gas, a program stops automatically when the fuel runs out.

A 2015 command-line piece of software would, years later, be written into ETF prospectuses by dozens of Wall Street institutions. No one could see that direction at the time—that year, ETH's price was around $1.

---

## IV. June 17, 2016: $150 Million Swallowed by a Contract

### 4.1 Eleven Thousand People's Money, Written into Code

In April 2016, something called The DAO began raising funds.

What it wanted to do sounded advanced: an investment fund with no company, no board, no CEO, all decisions voted by the people who put in money, the money locked in an on-chain smart contract that no one could misappropriate.

It was a beautiful idea. The problem was that it was implemented too early.

Within a month, about 11,000 people put in more than 12 million ETH, about $150 million at the time—**the first time in blockchain history that such a large sum was handed to a piece of code.**

### 4.2 Three Hours

On June 17, 2016, someone found the flaw in that code.

The principle is classic by now: when refunding a user, the contract transferred the money first and recorded it afterward. The attacker wrote his own contract that called the refund function again at the instant it received the money—because the books had not yet been updated, the system thought he still had money to be refunded, and transferred again. In a loop like this, the money was carried away piece by piece.

This technique later got a name: reentrancy attack. **It did not crack a password; it exploited an ordering error in the code—"pay first, record later."**

That day, 3.6 million ETH were moved into a "child DAO" controlled by the attacker. By design, the money inside had to be locked for 28 days. Those 28 days became a countdown for the whole community.

### 4.3 One Cut, and the Chain Became Two

Over those 28 days, the Ethereum community made the hardest choice in the industry.

Option one: do nothing. The hacker takes the money, though in theory he would still face the 28-day lock and a worldwide manhunt. The reasoning was "code is law"—the contract executes exactly as written, and that is what "immutability" means.

Option two: change the rules and take the money back. The cost was that the word "immutable" would forever carry an asterisk.

A milder approach was tried first: have future blocks refuse to recognize transactions sent from the attacker's address. But this soft fork was rejected—someone found it carried a flaw that could paralyze the chain, and miners did not dare adopt it.

Finally, a hard fork: upgrade the nodes, rewrite that attacked history, and return the 12 million ETH to the original owners.

On July 20, 2016, the fork took effect.

The result: **the chain split into two.** Upgraded nodes continued to run today's Ethereum; nodes that refused to upgrade continued to run the original history, which is Ethereum Classic (ETC).

From that day on, the crypto world gained a permanent topic: **when code goes wrong, do we let human judgment intervene, or let the losses execute according to the code?** Ethereum chose the former, and paid for it with a chain. There is still no standard answer to this question today.

## V. 2017 to 2019: Mania, Congestion, and Two Accidents

### 5.1 Issuing Coins Became a Mass Movement

In 2017, something happened on Ethereum that it had not anticipated: **everyone started issuing coins.**

Because contracts can be written on ETH, writing a "token" takes only a few dozen lines of code. Within a year, thousands of new coins appeared, each claiming to transform some industry, then selling the coins to retail investors for ETH.

This game was called the ICO (initial coin offering). It was the wild version of venture capital: no regulation, no prospectus, no profitability requirement, just a Telegram group and a whitepaper.

It had two consequences for Ethereum.

One was surging demand: to issue a coin you had to buy ETH as fuel and as the fundraising currency, and ETH's price was pushed up by this demand. The other was reputational damage: the vast majority of ICOs ended up delivering nothing, and the money retail investors lost made the words "Ethereum" synonymous with scam in many people's minds.

### 5.2 A Chain Clogged by Cats

In December 2017, a game called CryptoKitties launched.

The gameplay was raising, breeding, and trading cats, each cat a unique token on-chain. It sounded harmless, but it jammed the entire chain: the most expensive cat sold for $200,000, the trading volume squeezed Ethereum so tight that ordinary transfers took hours and fees multiplied more than tenfold.

**A bout of "cloud cat petting" dragged the world computer to the edge of a halt.** This exposed Ethereum's most fundamental problem: all programs squeezed onto one chain, and whatever is hot clogs it. Scaling became the theme of every technical roadmap afterward.

### 5.3 One Slip of the Hand Froze $150 Million

In 2017, Parity, a company making wallets, had two incidents.

The first, in July: a vulnerability in its multisig wallet contract let 150,000 ETH be stolen, about $30 million at the time.

The second, in November, was stranger: to "correct" the problem, a user triggered a suicide function in the contract, and the whole of Parity's public wallet library was destroyed. **Every wallet depending on that library was instantly locked**, freezing 510,000 ETH—about $150 million at the time, still frozen today.

No hacker, no attack, one misoperation. This was later used repeatedly to make a point: on a blockchain, "a mistake" and "being robbed" have the same consequences, because no one can turn back time.

### 5.4 2018: Bear Market

In January 2018, ETH rose to near $1,400; by the end of the same year it had fallen to the low $80s.

The ICO bubble burst, and the projects that had issued coins began selling the ETH they had raised for cash, and the selling pushed prices down further. In those two years, almost no one on Ethereum talked about technology; everyone talked about who could exit fastest.

## VI. 2020: It Was Finally Actually Used

### 6.1 It First Created a Dollar

Strictly speaking, the first product that really worked on Ethereum was not lending; it was a dollar.

In December 2017, a project called MakerDAO launched. The method: you deposit ETH, and the system issues you a dollar-pegged coin called DAI based on the value of the collateral. If the price rises, people come to repay and reclaim collateral; if it falls, people come to take collateral in exchange for coins. Through this mechanism DAI is kept near one dollar.

**This was the first dollar on-chain that was issued without a bank or US dollar reserves.** Few people understood its significance at the time—three years later, "stablecoins" would become the industry's biggest business and the only part Wall Street was truly interested in.

### 6.2 March 12: Half in One Day

In March 2020, the COVID-19 pandemic triggered a global market sell-off. On March 12, ETH fell more than forty percent in a day.

This crash left a more serious on-chain consequence: in the largest lending protocol on-chain, a large amount of collateral suddenly became worthless and needed to be liquidated. But the network was simultaneously congested to the extreme, fees spiked to hundreds of dollars per transaction, many liquidations were not executed in time, and some people's collateral was auctioned off at a price of zero.

That day has a name in the community: Black Thursday. **It proved that the most fragile part of on-chain finance is not the code, but congestion under extreme market conditions.**

### 6.3 Summer

In June 2020, a lending protocol called Compound introduced a new game: whoever borrows or deposits receives its governance token in proportion. It was, in effect, paying the people who use the product.

This game was called "liquidity mining," and it quickly swept through all of Ethereum. Over the following months, various protocols gave away tokens to each other, yields were pushed into the triple digits, and money poured in from all sides.

That year the total value locked on Ethereum rose from under $1 billion to over $15 billion. **This was the first time in Ethereum's five years online that a genuine use unrelated to speculation appeared: people were depositing, borrowing, and swapping on it, not just trading coins.**

Two more words became popular that year. DeFi (decentralized finance) means writing the functions of a bank—deposits, loans, swaps, insurance—as on-chain contracts; AMM (automated market maker) means a way to swap without a counterparty, priced by a mathematical formula, where anyone can put money in and earn fees.

## VII. 2021: Burned Fees, and a JPEG Sold for $69.3 Million

### 7.1 Fees Were Burned

On August 5, 2021, Ethereum did an upgrade codenamed London.

It changed how fees are distributed: the fee you pay splits into two parts. One is the "tip," where whoever offers the higher priority gets included first, and it goes to the block producer; the other is the "base fee," which no longer goes to miners but is burned outright—**deleted from the ledger, so no one gets it.**

Why burn it? Because it turns fees into a deduction from ETH. The busier the chain, the more is burned, and the less ETH there is.

The crypto world nicknamed this narrative "ultrasound money," meaning "Bitcoin's inflation is fixed; ours can be negative."

### 7.2 A JPEG Sold for $69.3 Million

In March 2021, Christie's auctioned a work by digital artist Beeple: an image assembled from 5,000 pictures, one drawn every day for thirteen years.

It sold for $69.3 million.

This transaction pushed the word NFT (non-fungible token) into the public eye. **Technically it is simple: registering on Ethereum a record that says "this file belongs to this person."** But it was precisely this simple record that gave digital artworks a tradeable identity, and brought a flood of new users to Ethereum that year—many people bought an NFT first, and only then owned ETH for the first time.

### 7.3 The First New High, and the Clouds Above

On November 10, 2021, ETH rose to about $4,878, setting an all-time high.

At the same time, criticism peaked: Ethereum mining consumed about 78 TWh a year, equal to the electricity use of a country like the Netherlands or Chile, and more than all of Portugal. ESG funds would not touch it, and regulators began to aim at proof of work. The maverick Tesla announced in May 2021 that it would accept bitcoin payments, then canceled two months later over energy consumption—a reversal the whole industry felt as a warning.

**The problem Ethereum faced then was plain: it wanted to be accepted by big capital and regulators, but the electricity consumption beneath its feet looked like a coal mine.**

There was only one way to solve it: stop using electricity.

---

## VIII. September 15, 2022: The Most Expensive Engine Swap in the World

### 8.1 Proof of Work: A Guessing Game

Bitcoin and early Ethereum ran on proof of work (PoW).

The rule is simple: **this is a number-guessing game played hundreds of billions of billions of times per second; whoever guesses right first gets the right to write the next block into the ledger and collect the newly issued coins.**

The only threshold in this game is hash power, and hash power is electricity. Its security logic is therefore just as simple: to tamper with the ledger, you need more than half the hash power; to have that much hash power, you must first spend an astronomical amount on electricity. **When the cost of attack is too high to be worth it, the chain is secure.**

The drawback is equally simple: that electricity bill is genuinely burned. And as the coin price rises, more and more is burned—enough to equal a medium-sized country's annual electricity use.

### 8.2 Explaining "Proof of Stake" Again

Proof of stake (PoS) does not guess numbers; it uses deposits.

To participate in keeping the books, you must first stake 32 ETH into the system and become a "validator." The system randomly picks one validator from all of them to write the next block, and being chosen earns a reward. If you cheat, or try to fork the ledger, the system confiscates your deposit (this is called slashing).

The security logic shifts direction: **the cost of an attack is no longer the electricity you burn, but the deposit you might lose.** To do harm, you must first buy enough ETH—and the more valuable the chain you attack, the more expensive that deposit is.

A crude but accurate comparison: proof of work is "whoever burns the most money talks"; proof of stake is "whoever stakes the most money talks, and if they lie the money is gone." The former wastes its cost on electricity; the latter stakes its cost inside the ledger.

### 8.3 Why the Switch Was Necessary

Three reasons, each more practical than the last.

First, **electricity**. Energy consumption kept Ethereum outside mainstream capital and regulation; this was the most direct pressure.

Second, **the illusion of decentralization**. Proof of work sounds like anyone can mine, but in reality, by 2022 most of Ethereum's hash power was concentrated in a few mining pools; pools could decide which transactions got included. In other words, "decentralized hash power" had long since stopped holding up under the reality of large-scale mining.

Third, **issuance**. Mining requires paying for electricity and machines, so more coins must be issued; deposits cost nothing, so fewer coins—or none—need be issued. **Switching to proof of stake is equivalent to turning the subsidy paid to miners into interest paid to stakers, and interest can be far lower.**

### 8.4 Seven Years of Rehearsal, and a Bomb Buried in the Code

Ethereum prepared for seven years to switch to proof of stake.

**The first step was the Beacon Chain**, which launched on December 1, 2020. It was a "chain in a parallel world": only staking and validators, no transactions at all, no one interacting with it; its entire purpose was to get the new consensus mechanism running first and wait for the main chain to connect.

The "empty chain" dutifully ran for 21 months, and validators grew from zero to several hundred thousand.

**There was also a bomb in the middle.** In the 2015 design, Ethereum deliberately buried a mechanism called the "difficulty bomb": as time passed, mining difficulty would automatically explode, eventually slowing block production until the chain nearly stalled. Why poison yourself? Because that forced the community to complete the upgrade before a certain date—**a self-inflicted wound to keep everyone from dragging it out indefinitely.**

As the Merge approached, this bomb was postponed several times (two upgrades were made specifically to change only the date, both codenamed "Glacier"). It was a strange engineering form of a "deadline."

**Finally, rehearsal.** Before the actual Merge, the team ran the whole process more than a dozen times on multiple public testnets, and also did a "shadow fork"—copying an identical chain from the mainnet and running the Merge on it first. **To keep billions of dollars of assets from going wrong on a bridge, the only way is to wear the bridge out in advance.**

### 8.5 That Afternoon

On September 15, 2022, Ethereum merged.

The process was this: the program watched a number called "total difficulty," and when the network's cumulative mining difficulty reached 58750000000000000000000, it switched automatically. No pause, no vote; triggered, then switched.

The last proof-of-work block was number 15,537,393. From block 15,537,394 onward, Ethereum's blocks were produced by validators.

For users, nothing happened that day: not a coin was missing from wallets, balances were unchanged, transfers went on as usual.

For miners, everything ended that day. **Ethereum mining's daily revenue went to zero in a single day.** Hundreds of thousands of graphics-card mining rigs instantly lost their purpose—most moved on to mine other coins, and the rest were dismantled and sold. The subsequent softening of graphics-card prices was directly related to this.

The technical achievement of the Merge is often underrated: **on a system holding hundreds of billions of dollars of assets, replacing the entire consensus mechanism without downtime, without forking, and without losing data was something humanity had never done.** The reason it did not make headlines was precisely that it went too smoothly.

### 8.6 Three Changes That Happened Immediately

**Energy consumption fell to nearly zero.** From about 78 TWh a year to about 0.01 TWh—formerly equal to the electricity use of the entire Netherlands, now equal to a few data centers. It was a "lights out" in energy terms.

**New issuance was cut by nearly ninety percent.** Before the Merge, Ethereum issued about 13,000 new ETH per day to miners; after, about 1,700 per day to validators. The reduction was called a "triple halving" at the time—meaning it did in one step what three Bitcoin halvings do.

**The conditions for deflation were met.** The burn mechanism (the one from 2021) plus the sharp drop in issuance meant that when the chain is busy, ETH shows net deflation, with more burned than newly issued. By mid-2026, ETH's total supply was around 120 million, about 5 million less than the assumption of continued mining.

### 8.7 The Miners' Last Counterattack

Miners would not leave just like that.

A month before the Merge, a well-known Ethereum miner, Chandler Guo, announced: since the core team no longer wants proof of work, we will fork one out ourselves. This chain was called ETHPoW, with the same rules as pre-Merge Ethereum—keep mining, keep issuing coins.

On the day of the Merge, ETHPoW launched.

Its first day went like this: the price fell about three-quarters within 24 hours; because it lacked stablecoins and mainstream applications, almost no one used the chain; hash power rushed in for a while, then flowed away—**the coins mined were not worth the electricity, so the machines naturally shut off.**

A year later, ETHPoW's price was less than one percent of Ethereum's (right after the fork it was three percent).

The outcome is worth recording: **it proved one thing—miners can keep the equipment, but not the chain.** A chain's value is not in hash power but in how much money and how many applications others are willing to put on it. Miners can decide who keeps the books; they cannot decide who uses it.

### 8.8 What It Did Not Change

Here we need to puncture a widespread misunderstanding: **the Merge did not make fees cheaper.**

The Merge only changed how the books are kept; it did not increase the chain's processing capacity. Fees remained as expensive as before—the fee reductions after 2022 came from a different route: moving transactions to a second layer.

Nor did these change: block time is still about 12 seconds; coins in wallets are unchanged; and not one already-deployed contract needed to be modified.

**What the Merge changed is the cost structure and issuance, not speed or fees.** Thinking of it as "Ethereum's upgrade" is easy to misunderstand; it was more like a "changing the engine's fuel type" operation.

But one thing did change, and ordinary users rarely notice it: **the certainty of confirmation.**

Previously, judging whether a transaction was safe relied on "how many blocks were stacked behind it"—a probabilistic reassurance. The Merge removed mining and replaced it with a fixed timetable: one "slot" every 12 seconds, with the block producer drawn at random from the validators; every 32 slots (about 6.4 minutes) is an "epoch"; once two consecutive epochs reach majority agreement, the transaction is deemed final and irreversible. **That works out to about thirteen minutes.**

This number is slower than many people assume, but it buys a clear answer: not "probably won't be changed," but "will not be changed."

By the way, few people ask why the number is 12 seconds—it is the metronome of the new consensus mechanism, hard-coded in the protocol, equivalent to setting a heartbeat rate for the chain.

### 8.9 The Cost

After the switch, new problems appeared.

**First, the concentration of staking.** Proof of stake moved power from mining pools to coin holders, but coin holders are not evenly distributed either. Services like Lido, which "stake on your behalf and give you a receipt," at one point gathered a third of all staked ETH on the network—**the coins you stake have their voting power handed to the company staking for you.** This has been discussed repeatedly, and there is still no clean solution.

**Second, censorship.** In August 2022, the US sanctioned the mixing service Tornado Cash. For a time afterward, more than half of Ethereum's blocks were produced by "compliant" relays—which actively filter out transactions related to sanctioned addresses. **This meant that a chain that claims to resist censorship had half its block producers working from a US blacklist.** The sanctions were lifted in March 2025, but that experience made everyone see one thing clearly: proof-of-stake validators are companies registered in the real world, easier to find than mining pools.

**Third, the criticism that "PoS is less decentralized than PoW."** There is no conclusion: supporters say PoS has a lower barrier, since an ordinary computer plus 32 ETH is enough to participate; opponents say people holding large amounts of ETH will only grow in number. Both sides use the word "decentralization," but they do not mean the same thing.

## IX. After the Merge: From "World Computer" to "World Settlement Layer"

### 9.1 April 12, 2023: Staked Money Can Finally Be Withdrawn

The Merge left one legacy problem: **in only, never out.**

Since the Beacon Chain launched in 2020, staked ETH could only be deposited, not withdrawn. You could stake coins, but not get them back—officials said "withdrawals will open after the Merge," which was technically defensible but psychologically hard to accept. A person staking 32 ETH (about $50,000 at the time), locked for two years, with no idea when they could get it back.

On April 12, 2023, the Shanghai upgrade opened the withdrawal channel. The first withdrawals were completed a few hours later.

From that day on, staking truly became a market you could freely enter and exit. **A financial system that can only deposit and not withdraw, no matter how high the yield, will not have institutional participation.** After the withdrawal channel opened, the amount staked kept rising; by 2026, staked ETH on the network was about thirty percent of supply, and the number of validators exceeded one million.

### 9.2 March 13, 2024: Pushing Layer-2 Fees Down to Cents

The keyword that year was "Layer 2" (L2).

The difference between the two words is this: **Layer 1 is the Ethereum main chain itself, where all transactions settle; Layer 2 is a chain built beside the main chain that processes transactions itself, then writes compressed results and proofs back to the main chain.** The benefit is speed and cheapness—the main chain handles only a dozen or so transactions per second, while a Layer 2 can handle thousands. The downside was that they previously had to write data onto the main chain byte by byte, and this "storage fee" was outrageously expensive.

On March 13, 2024, the Dencun upgrade introduced a new data structure, nicknamed blob.

The role of blob can be understood this way: **the main chain opened a dedicated cheap data channel for Layer 2.** Layer-2 transaction data no longer needs to squeeze into expensive ordinary block space; it goes into blobs, which are deleted after a few days. Because it need not be stored permanently, the price is cheaper by more than an order of magnitude.

The result was immediate: Layer-2 fees fell from several dollars to a few cents, often below $0.01.

### 9.3 July 23, 2024: Wall Street Can Buy ETH for the First Time

In May 2024, the US Securities and Exchange Commission approved spot Ethereum ETFs; on July 23, nine products began trading at the same time.

For ordinary people, this means you can buy ETH with a securities account, without registering on an exchange or managing private keys.

For a project that calls itself "decentralized," the taste of this is complicated: **its largest buyer has since become institutions ordering through brokers, and these institutions are buying a piece of paper, not a coin on-chain.** And to get regulators to nod, these ETFs exclude staking—meaning the ETH they hold does nothing at all for network security.

### 9.4 The Side Effect: The Main Chain Has No Fees Left to Collect

The three things above ultimately combined into a result that makes Ethereum uncomfortable.

Layer 2 became cheaper, so users and transactions naturally moved there. The money saved on Layer 2 belongs to users, but the fees the main chain loses are equally real. By 2026, Ethereum's main-chain fee revenue was almost negligible: gas prices stayed low at a fraction of a unit, three orders of magnitude below the 2021 peak.

And fees are the source of ETH's burn. **Less is burned, so "deflation" is gone.** The "ultrasound money" that was talked up so loudly in the Merge year had largely fizzled by 2026—ETH's total supply returned to mild growth, annualized at around a few tenths of a percent.

This leads to Ethereum's biggest internal dispute today: **should the main chain be nothing but a settlement layer?**

One camp sees this as victory: the main chain handles security and settlement, Layer 2 handles cheapness and speed, a clean division of labor. The other camp puts it more directly: **if the main chain cannot collect money, what does it feed its own security with?** Ethereum's new issuance is very low, but stakers must be paid; when fee revenue approaches zero, the security budget rests entirely on inflation—an account that chains far smaller in market cap, but facing the problem earlier, are also dealing with, only Ethereum is much bigger and the problem arrives much more slowly.

---

## X. 2025 to 2026: A New High, a Halving, and an Identity Crisis

### 10.1 August 24, 2025: $4,956

Driven by ETF inflows and buying by public companies, ETH rose to $4,956 on August 24, 2025, breaking the four-year-old record of $4,878.

In those months, a batch of public companies began buying ETH as a reserve asset—copying the playbook of "using company cash to buy bitcoin." For the first time, Ethereum had its own "treasury companies."

### 10.2 October 2025: A $19 Billion Liquidation

After the peak came the crash.

On October 10, 2025, the crypto market had a single-day forced liquidation of about $19 billion, the largest in the industry's history. ETH fell from $4,754 all the way to $3,435, and touched a low of $2,623 in November.

The reason is not complicated: too many people were long with leverage, too many positions were on the same side, and once the price fell to a certain level, liquidations happened automatically, and the liquidations pushed the price even lower. **The most fragile part of on-chain finance was, once again, not the code, but people.**

### 10.3 June 6, 2026: $1,506

The decline continued into 2026.

In January ETH was still near $2,900; in February it fell below $1,750; and by June 6 it had hit a low of $1,506—**nearly seventy percent down from its all-time high.**

The narrative in that period was ugly: ETF outflows, huge paper losses at treasury companies, no improvement in on-chain fees, and Layer 2 criticized as a "blood-sucking machine."

### 10.4 Now: $2,641

After the low, the price began to recover. $1,862 in July, $2,467 in August; in September this rebound pushed the price to a monthly high of $2,666.

On September 19, 2026, ETH was quoted at $2,641, seventy-five percent above the June low and about forty-seven percent below the high a year earlier. Its market cap was about $320 billion.

### 10.5 The Real Changes On-Chain

The price rides up and down like an elevator, but the things happening on-chain are more substantial:

**The foundation is changing people.** In 2025, the Ethereum Foundation completed a leadership transition, managed for the first time by two co-executive directors, and announced cutting about twenty percent of staff and about forty percent of its budget. An organization long criticized for "spending a lot and speaking slowly" began to contract.

**The roadmap changed its language.** The keyword for 2026 is "Lean Ethereum": quantum resistance, making the main chain smaller and steadier, and continuing to push complex execution outward. Matching this are two completed upgrades—Pectra in May 2025 (introducing smart accounts, so ordinary accounts can have rules like smart contracts) and Fusaka in December 2025 (expanding the Layer-2 cheap data channel threefold again). The next upgrade in 2026, codenamed Glamsterdam, still revolves around the same thing: **how the main chain and Layer 2 divide the work.**

**The biggest real business is stablecoins.** What runs most on Ethereum today is not NFTs, nor decentralized exchanges, but stablecoins—the main issuance of USDT and USDC is on Ethereum and its Layer 2s. After the US passed stablecoin legislation in 2025, Wall Street's attention focused for the first time on this chain's settlement capability. **The irony is that Ethereum's most successful application is a tool that excludes the very question of "coin price."**

---

## XI. What It Achieved, and What It Did Not

### What It Achieved

**It turned "writing programs on-chain" from a concept into infrastructure.** Today all stablecoins, lending protocols, decentralized exchanges, and Layer 2 networks trace back to that 2013 draft.

**It completed a heart transplant no one had done before.** On a system holding hundreds of billions of dollars, it replaced the entire consensus mechanism without downtime or forking, while cutting energy consumption by 99.95% and new issuance by 87%. Before September 15, 2022, this was only a plan; afterward it was a fact.

**It built a real economy.** Tens of thousands of developers, trillions of dollars in on-chain assets, millions of users every day—these do not rely on its own promotion, but on others building on top of it.

And those buildings use the same brick. Solidity, the contract language Gavin Wood designed for Ethereum in 2014, is still almost the working language of every stablecoin and mainstream DeFi protocol. A chain's deepest moat is often **the code others have already written**.

### What It Did Not Achieve

**Scaling was not completed on itself.** The main chain still processes only a dozen or so transactions per second, and scaling was pushed to Layer 2. And what Layer 2 solves is "cheapness," not "belonging to Ethereum"—for every transaction a user makes on Layer 2, the main chain receives only a little data fee.

**It failed to make the security budget add up.** After fee revenue was siphoned off by Layer 2, how the main chain sustains security still has no answer. The low inflation brought by the Merge instead made the problem sharper: **less issuance means less security spending, and less security spending means continuing to push issuance lower.**

**It also did not become money.** ETH is fuel, collateral, a speculative target, an asset held by funds and public companies—but it is not something used in daily life to buy things. On this point, Bitcoin and the smaller chains are in the same position.

**The last question is the most plain: it wants to be a world computer, but the feature the world uses most is transfers and speculation.**

---

## Epilogue: Thirteen Years of a Draft

In November 2013, 19-year-old Vitalik sent a 12-page draft to a dozen friends.

Thirteen years later, that draft had become: a chain that swapped its consensus mechanism, an argument over $150 million that was stolen and then clawed back, an upgrade that cleared out every miner overnight, nine US ETFs, thirty percent of the circulating supply locked in staking, and a settlement layer worth $300 billion whose fee revenue is near zero.

It proved one thing: **code can play the role of law, provided that someone is responsible for patching things up afterward, every time.** After The DAO, it chose "people repair it," at the cost of an extra chain; after the Merge, it chose "swap the engine," at the cost of miners and part of its narrative.

For thirteen years, it has been working on the same problem: how to let a machine keep the books for everyone, without letting anyone own the machine.

The parts it got right are more than most people expected. The parts it did not achieve—speed, fees, the security budget, being genuinely used—are still a long way from what a 19-year-old imagined when he wrote the draft.

---

## Appendix: Main Sources

- Ethereum whitepaper (November 2013, Vitalik Buterin): https://ethereum.org/en/whitepaper/
- The 2014 crowdfund and genesis distribution (60 million sold + 12 million to early contributors and the foundation, 72 million total): https://ethereum.org/en/history/
- The DAO incident and the July 20, 2016 hard fork (block 1,920,000): https://ethereum.org/en/history/
- EIP-1559 and the August 5, 2021 London upgrade: https://eips.ethereum.org/EIPS/eip-1559
- The Merge (September 15, 2022, total difficulty 58750000000000000000000, last PoW block 15,537,393): https://ethereum.org/en/roadmap/merge/
- Issuance and energy changes from the Merge (about 13,000 per day down to about 1,700; about 78 TWh down to about 0.01 TWh): https://growthepie.com/answers/what-was-the-merge
- Shanghai upgrade (withdrawals opened April 12, 2023), Dencun (March 13, 2024, EIP-4844 blob), Pectra (May 2025), Fusaka (December 2025): https://ethereum.org/en/roadmap/
- US spot Ethereum ETF approval and listing (approved May 23, 2024, trading began July 23): https://www.sec.gov/newsroom/speeches-statements/gensler-statement-spot-ether-etps
- Ethereum Foundation leadership changes and budget cuts (2025): https://ethereum.org/en/
- Prices, market cap, and historical highs/lows: MEXC public market API (ETHUSDT monthly and daily candles); figures in this article are calculated from that data, taken on September 19, 2026
- On-chain staking and supply data: https://ultrasound.money ; https://beaconcha.in

Note: All prices, gains, and drawdowns in this article are calculated from the market data above; numbers involving "about" (such as the crowdfund total, energy consumption, and issuance) are estimates from public sources. English quotations are reproduced verbatim from their sources.
