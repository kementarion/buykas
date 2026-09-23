# What Is a UTXO: Starting From a Piece of Broken Silver

::: tip Note

This article was written by AI after thorough investigation and research.

:::

## Prologue: First, Think About How People Paid With Silver

In a market town in Ming or Qing China, a bolt of cloth costs two taels and seven mace of silver. You do not have a lump of silver weighing exactly that. So you take out a five-tael ingot and have a corner chipped off. The chip is weighed; when it comes to the right amount, you hand it to the merchant. The rest is weighed too, and it is still yours.

There are three intuitions in that little scene, and together they are the whole key to understanding the UTXO model:

- Silver was priced **by weight**. "Two taels and seven mace" is a quantity, not a fixed denomination like a coin; how much you pay is settled on a balance.
- A lump of silver **could not be split into fractions on demand**. To pay, you had to cut, and cutting turned one lump into two new ones: one goes out, one comes back.
- Before anyone accepted a piece of silver, it had to be **weighed and its fineness judged**. That was part of the cost of trading, and it was "verification" in the most literal sense.

Bitcoin's accounting model, called UTXO, is built almost exactly like that scene. 

---

## I. There Is No "Balance" Field in the Ledger

### 1.1 A Transaction Only Has Two Things

A Bitcoin transaction has exactly two parts: inputs and outputs.

- Inputs: which old lumps of silver am I spending. Every input points to one specific output of an earlier transaction.
- Outputs: which new envelopes does the value go into. Every output states an amount, and an address, which is the condition for unlocking it.

Once a transaction is confirmed, the outputs it consumed are marked spent, and the outputs it created become fresh UTXOs, waiting to be spent by the next transaction. The whole ledger is a list that keeps having old entries crossed out and new ones written in.

A concrete example. Suppose you have received two payments, 0.3 BTC and 0.5 BTC, so your wallet holds two UTXOs. Now you want to pay someone 0.6 BTC:

| Position | Content | Note |
| :--- | :--- | :--- |
| Input 1 | 0.5 BTC | Spend one lump |
| Input 2 | 0.3 BTC | Spend another |
| Output 1 | 0.6 BTC → the payee | What you owe |
| Output 2 | about 0.1999 BTC → your change address | The rest, returned to you |
| Difference | about 0.0001 BTC | The fee, taken by the miner who packs the transaction |

There is a fact hidden here that surprises most people the first time they hear it: **the fee is not a field you fill in. It is whatever is left when the outputs are subtracted from the inputs.** You never tell the network "this is what I am willing to pay"; you simply leave a little less in the change and let the difference sit on the table. A miner sees a larger difference and has a reason to pack that transaction first.

In silver terms: you chip a piece off a five-tael ingot, pay out two taels and seven mace, and if the piece you keep back is short by a few fen that nobody accounts for, those few fen belong to whoever keeps the books.

### 1.2 Why There Is a "Change Address"

In the table above, the change did not go back to the address that received your money. It went to a change address you may never have seen.

The reason is the one from the prologue: after two taels and seven mace have been chipped off, what remains is a new piece, not a torn corner of the old one.

The technical reason is firmer. An output is all or nothing. To pay 0.6 BTC you must spend the 0.5 and the 0.3 together, then send the surplus to yourself as a new output.

This answers a question every beginner asks: why did an unfamiliar address show up in my wallet after I sent a payment? That is your change address, and the coins are still yours.

### 1.3 Your "Balance" Is Calculated by Your Wallet

So where does the "1.2 BTC" on your wallet's home screen come from?

Your wallet adds up every unspent UTXO that belongs to you. Nowhere on the chain is there a number saying "this address holds 1.2 BTC."

Remember that sentence, because every advantage and every cost later in this article grows out of it: **a UTXO is a set of objects that can each be verified on their own, rather than a balance that somebody has to maintain.**

One more thing most tutorials skip: the state a node actually maintains is the UTXO set, the collection of every output not yet spent, and it is far smaller than the whole chain. That is why Bitcoin nodes can prune: delete most historical blocks, keep the UTXO set plus recent blocks, and still verify new transactions. Recent versions of Bitcoin Core added assumeutxo, which lets a node start working from a snapshot of the UTXO set and backfill history in the background.

---

## II. Three Hard Rules

### 2.1 The Rules Themselves

Abstract the example and UTXO comes down to three rules. Saying them in silver terms makes them easy to remember:

- An output cannot be split: there is no such thing as "sixty percent of this lump is mine." Spend it whole, and send the remainder back to yourself as a new output.
- An output can be spent only once: every node keeps the UTXO set, and any attempt to spend an output that has already been spent fails validation immediately. That is double-spend prevention at the data level.
- Inputs must cover outputs: the inputs must add up to at least the outputs, and whatever is left over counts only as a fee. Value cannot be conjured.

### 2.2 Three Ways of Keeping Books, Side by Side

| What you are doing | Broken silver (silver by weight) | UTXO | Bank balance |
| :--- | :--- | :--- | :--- |
| Seeing how much is left | Weigh every lump in your pocket | Add up every UTXO | Read a number |
| Paying 2.7 taels | Chip off 2.7 taels, keep the rest | Spend the whole output, send change to yourself | Subtract 2.7 from the balance |
| Receiving a payment | One more lump in your pocket | One more UTXO in your wallet | Add it to the balance |
| Can the same money pay twice | No, there is one lump | No, an output can be spent once | Yes, as long as the balance covers it (hence replay protection) |
| Who has the final say | Whoever holds the silver | The network's ledger | The number on the ledger |
| Can it be split | Yes, by chipping, but it must be weighed | No, spend it whole | Yes, freely |
| What it costs to accept | Weighing, judging fineness, maybe an assay house | Check whether the output has been spent | Trust the number |

The last two rows are the key to all three models: **broken silver and UTXO are both indivisible, but silver is priced by weighing while a UTXO is priced by a ledger entry; and a balance is divisible on demand, at the price of having to prevent double deduction.**

---

## III. Three Critical Differences Between Broken Silver and UTXO

The analogy is not complete yet. Silver captures the shape of UTXO, but three things have to be separated out, and those three are precisely the line between physical money and ledger money.

### 3.1 A Physical Thing, or a Ledger Entry

Silver is a **physical thing**: whoever holds it owns it, and spending it needs nobody's permission and no ledger. That is bearer money.

A UTXO is a **ledger entry**: an output is yours because the whole network recognises the bookkeeping; to spend it you must reference it, have the network confirm that it has not been spent, and write the result back.

One sentence: **silver's trust lives in the lump in your hand, while a UTXO's trust lives in the whole network agreeing that it has not been spent.** That is why Bitcoin cannot do without consensus. It has nothing to hold in its hand.

### 3.2 Splitting Is a Physical Act, or an Atomic Transaction

Silver can be handled in stages: chip a corner now, chip another later, even shave a little off; every cut counts, and a cut can go wrong and lose material.

UTXO's cutting happens only inside a single transaction, and it is **atomic**: the old outputs are voided and new ones created, all of it or none of it. There is no half-cut state, and no window in which the money has been chipped off but the ledger has not recorded it.

### 3.3 What Gets Verified: Fineness, or the Ledger

This is the least obvious point, and the most important.

Whoever accepted silver was performing a **measurement of the thing itself**: weighing it on a balance (the old dictionaries say it plainly, "a dengzi is the scale for weighing silver"), judging its fineness, and, when in doubt, testing whether the core was lead. The histories record the practice of chipping silver to test its colour: an assay house would drive a long iron awl into the middle of an ingot, judge the fineness by the ring, then write down a premium or a discount and stamp it as proof. That is a cost paid again on every single transaction, using eyesight and hearing.

::: info The assay houses: a verification assembly line

According to public records, an assay house worked in two shifts of specialists. First came weighing: the ingot was wiped clean, put on the scale, and its weight written on the surface in ink. Then came reading the colour: the inspector judged the fineness, wrote down the premium or discount, and stamped it in proof, driving the awl in if he had doubts. Even fragments of silver had to be assayed; an assayed piece was wrapped in thick paper with the house's certificate written on it.

The point of all this: **in an age of physical money, verification was expensive, needed specialist institutions, and had to be redone every single time.**

:::

The verification UTXO requires is something else entirely: **check whether this output has been spent in the ledger.** It measures no physical property; it queries one piece of network-wide agreed state. One lookup, a definite answer, and no assay house required.

So the risk moves too. With silver the question is whether this lump really weighs what it claims and is as fine as it looks; with UTXO the question is whether the whole network agrees on the state of one ledger. The first is a problem of physical measurement, the second a problem of distributed consensus. That is the real watershed between the two accounting models.

---

## IV. What UTXO Buys

### 4.1 Five Advantages

Set against the trouble with silver, the advantages of UTXO are easy to see:

- Validation got cheap: silver had to be weighed, judged and checked for a lead core; a UTXO only has to be checked for whether it has already been spent. And that check does not depend on how many users the network has: the cost of validating a transaction does not rise as the network grows.
- Double spending became impossible, not merely difficult: physical money relies on physical uniqueness, one lump exists once; UTXO turns it into a rule of data, an output can be spent once.
- Validation can run in parallel: transactions that do not reference the same output are independent and can be checked at the same time. Silver never had this problem, since everyone weighed their own silver; but on a chain that needs the whole network to agree on one ledger, parallelism is what decides throughput.
- Nodes maintain less state: a node guards the UTXO set, not "every account plus every contract's storage." Less state means a lower bar for running a full node.
- Privacy gets some room: with no long-lived "account" identifier on the chain, you can use a fresh address for every payment. (Chapter V covers how far that gets you.)

### 4.2 A Bit of History, and One Crash

UTXO was not a later invention; it has been Bitcoin's skeleton since the first version of the code. Section 2 of the whitepaper defines a coin like this:

> We define an electronic coin as a chain of digital signatures. Each owner transfers the coin to the next by digitally signing a hash of the previous transaction and the public key of the next owner and adding these to the end of the coin.

In other words: an electronic coin is a chain of digital signatures; each holder signs once to hand it on, and the signatures stack up behind it.

Satoshi did not choose a table of balances, and one very practical reason is this: **a table of balances needs a bookkeeper everyone trusts, whereas a string of signatures that each party can verify alone does not.** That is exactly what was most expensive in the age of silver: you had to trust the assay houses, the furnaces, and the man with the balance.

::: info "A coin can be spent once" is not a law of nature

In 2018 Bitcoin fixed a bug (CVE-2018-17144): the code was missing a check for duplicate inputs inside a transaction. In theory a miner could build a transaction that listed the same output twice among its inputs and conjure coins out of nothing. The patch was ready before the bug became public, and nothing was lost.

What it shows is this: **"spent once" is not physics, it is something the code checks over and over.** It is UTXO's strongest property, and the part that most needs careful maintenance.

:::

---

## V. The Cost: The Trouble With UTXO

### 5.1 The Wallet Has to Be Good at Making Change

In the age of silver you had to keep track of how many lumps you carried and whether they were enough. UTXO hands that job to the wallet's algorithm, which is called coin selection. To pay 0.6 BTC the wallet has to choose which UTXOs to spend:

- Pick too many small ones and you get more inputs, a bigger transaction, a higher fee;
- Spend too aggressively and the change comes back fragmented, so it has to be broken up again next time;
- Consolidate everything and one transaction references dozens of inputs, which is bigger still, and writes "all these coins belong to one person" onto the chain in plain sight.

That is the direct reason a transfer sometimes feels expensive: **the size of a transaction depends on how many outputs you spend and create, not on the amount.** Sending 0.01 BTC with one input versus twenty inputs can differ more than tenfold, like wanting to pay a small sum and having to empty a whole bag of silver onto the counter.

### 5.2 Fragmentation: A Wallet Gets Heavier With Use

An address that keeps receiving accumulates many small UTXOs, such as a mining pool paying out daily or an exchange processing frequent withdrawals. Those fragments must eventually be spent or merged, and merging costs a fee.

At the extreme it becomes embarrassing: a pile of small UTXOs adds up to something on paper, while the fee to spend them is larger than they are worth. That is the modern version of "small change is not worth counting" in the silver age. The older version was harsher: testing fineness meant chipping silver, and the chips were real loss.

Bitcoin nodes therefore have a dust rule: outputs too small in value are refused for relay, because spending them costs more than they are worth (the most frequently quoted threshold is 546 satoshis, and it differs by address type).

### 5.3 Smart Contracts Are Not Welcome Here

Bitcoin's scripting language is not Turing complete: no loops, no global state, a deliberately limited repertoire. That is restraint, not failure: a Turing-complete language means an unbounded attack surface, and this chain guards hundreds of billions of dollars.

The deeper reason lies in UTXO itself: **it is a declarative receipt, not a machine with memory.** To spend anything you must state in advance which outputs you consume and which new outputs will result. Building an application where many users share one piece of state and change it constantly, an exchange or a lending pool, is awkward to express.

### 5.4 Contention: One Output Cannot Be Spent Twice at Once

If many people's operations all reference the same output, they have to queue: once it is spent, every transaction referencing it becomes invalid. For shared-state applications that turns into a bottleneck.

Silver never had this problem: everyone weighed their own silver, independently. It is a reminder that UTXO's parallelism is conditional, and the condition is that the transactions do not touch the same lump.

### 5.5 The Illusion of Privacy

Chapter III said a UTXO lets you use a fresh address for every payment, which sounds anonymous. Reality is uglier:

- By default the change goes back to an address of yours, publicly announcing "I am the same person as that earlier address";
- Merging several UTXOs into one transaction publicly announces "these coins belong to one person";
- A know-your-customer withdrawal record at an exchange ties your first addresses straight to your identity.

Hence tools like CoinJoin, which pack many people's inputs into one transaction so outsiders cannot work out who paid whom. They are an effective patch, and they make one thing clear: **UTXO privacy is available, not automatic.**

---

## VI. Why Later Chains Switched to a Ledger

### 6.1 This History Had Already Been Run Once

How much trouble silver caused, merchants in the Ming and Qing knew better than we do. So the market grew its own solutions, and the path looks startlingly like today's.

First came the silver furnaces (炉房 in the north, 银炉 in the south). What came in was mostly broken silver, inconvenient to trade; what was shipped in from elsewhere did not match local standards of fineness, so it all had to be melted and recast, which took time. What about a customer who needed silver immediately? The furnace issued a receipt as proof: the silver you have deposited here, collectable against this note. In time the note circulated in the market directly. People trusted the note, not the silver.

Then came the money houses (钱庄, qianzhuang). They began with currency exchange and the deposit business that grew out of it, then moved into lending and long-distance remittance, and issued their own money-house notes (庄票, 钱票).

In other words: **silver was so much trouble that the market turned it into notes; once the notes circulated, there was a book saying who held how much.** That book is what we now call the account model. That note is what we now call custody, and layer 2.

There is an even neater echo. Alongside the "real silver" that physically circulated, the Ming and Qing system developed "virtual silver" (虚银两): a standard that did not need to exist as metal at all, serving purely as a unit of account. Balances on an account chain, and the unit a stablecoin is priced in, are the same idea.

So the question "UTXO or accounts on a chain" was not invented by blockchains: **it is the old seesaw between "physical stuff is handier" and "a ledger is handier."**

### 6.2 Ethereum Took the Other Road

Ethereum's ledger is a table: one row per address, holding a balance and a counter called the nonce. A transfer changes a few numbers: subtract the amount and the fee from the sender, add the amount to the receiver, and increment the nonce.

The nonce stops replays: every transaction declares "this is the nth transaction from this account," the signature is bound to that nonce, and a signed transaction cannot be broadcast twice. That is the same idea as the sequence numbers on bank cards and payment gateways.

### 6.3 The Two Models Side by Side

| Item | UTXO model (Bitcoin, Kaspa) | Account model (Ethereum, Solana) |
| :--- | :--- | :--- |
| What the ledger stores | A pile of unspent outputs | Each account's balance and state |
| Where "balance" comes from | The wallet adds it up | Read it straight from the chain |
| Double-spend protection | An output can be spent once | Nonce ordering plus a balance check |
| Parallelism | Fine, as long as outputs do not collide | The same account has to queue |
| Fee estimation | By input and output count; bigger costs more | By computation consumed (gas) |
| Writing contracts | Awkward; everything must be declared up front | Natural; a contract owns its storage |
| Issuing a token | Must be simulated on chain (colored coins, inscriptions) | One contract is one token |
| State growth | Relatively contained | Keeps growing |
| Where users get hurt | Change, dust, mis-estimated fees | Approvals, contract bugs |

### 6.4 Why "Programs on a Chain" Grow More Naturally in an Account Model

Back to that sentence: UTXO is a set of independent objects, and an account model is a piece of state that can be rewritten over and over.

Smart contracts want exactly the latter. A lending pool, an exchange, a table of token balances: in each case everybody is modifying the same piece of state. The account model keeps that state inside the contract's own storage, and the program changes whichever field it likes. UTXO has no storage you can freely modify: you encode state as outputs, destroying the old ones and creating new ones on every change.

ERC-20 is the clearest contrast: one new token needs one contract holding a table of who owns how much. Doing the same on a UTXO chain means either colored coins or Omni-style schemes that stick tokens onto outputs (USDT first ran on Bitcoin's Omni layer for several years), or rules written into inscriptions the way BRC-20 does. Both work; neither feels native.

One more thing: such schemes usually need an indexer off to the side keeping a second ledger. After the full circle, you still end up with a book.

### 6.5 The Account Model's Bill

Nothing about bookkeeping is free. The account model buys ease of programming, and the price is a list that is not short:

- A transaction can fail halfway: the contract errors mid-execution, state changes must roll back, and gas is charged anyway. That complexity comes with being a state machine.
- Reentrancy and its relatives: the $150 million taken from The DAO in 2016 exploited a "pay first, record later" ordering mistake.
- Approvals hide land mines: an ERC-20 approve lets a contract move your tokens, and users routinely sign unlimited allowances, which has been a leading cause of theft for a decade.
- State only grows: every account and every contract's storage is kept forever, and nodes get heavier.
- Transactions from one account must queue: the nonce increments, so transactions from the same account cannot execute in parallel.

---

## VII. Attempts to Have Both

### 7.1 Cardano's eUTXO: Thickening the Lump

Cardano extended UTXO into what it calls eUTXO, for extended UTXO, with two key changes:

- An output's "lock" is no longer limited to a public key and a signature; it can be a script spelling out the conditions under which the money may be spent;
- An output can carry a piece of data (a datum), like a note stuck onto the lump.

That gives UTXO something it never had: outputs come with conditions, transactions come with arguments, and a script reads the note to decide whether to let the money out.

According to Cardano's own documentation this buys three things. Whether a transaction succeeds depends only on the transaction and its inputs, so it can be simulated off chain first and sent only once it is known to work, instead of failing halfway on chain and burning gas for nothing (the property is called determinism). Fees can be calculated exactly before sending, rather than only estimated. And because validation is local, transactions that do not conflict can be validated in parallel.

The price is the old problem: contention. If an application's shared state lives in a single UTXO, every operation that wants to change it has to queue. This is the most discussed issue in the eUTXO ecosystem.

### 7.2 The Object Model: Replace "Lumps" With Versioned Things

Another approach, taken up by a generation of chains, stops distinguishing between "accounts" and "coins" and calls everything on chain an object. Every object has a unique ID, an owner, and a version number that increments on every change. Sui is the clearest example.

The important distinction is ownership: an object belonging to a single address (an owned object) can be handled without queueing, while an object shared among many (a shared object) has to go through consensus ordering.

In a sense this blends UTXO's instinct (things are objects, spending replaces them) with the account model's abilities (objects can hold arbitrary data and run arbitrary logic). The price is a more complicated mental model: a developer has to know who owns an object before knowing whether the code will queue.

### 7.3 Forcing Tokens Onto UTXO: It Runs, But It Never Fits

Colored coins, Omni, BRC-20, Kasplex (KRC-20): all the same idea. Since there is no contract storage, push the token rules into places a UTXO can carry, such as the outputs themselves, scripts, or inscriptions.

That road is long, and it has run in production: USDT was first issued on Bitcoin's Omni layer and ran there for several years. The problem never changed: **a token is not a first-class citizen of the chain.** Wallets, explorers and exchanges all have to write custom support, and usually an indexer has to keep a second book alongside.

### 7.4 Another Path: Building Privacy Into UTXO

Monero also uses UTXO, but treats anonymity as the primary goal: an input does not point at one specific old output but at a set of candidates (ring signatures), so an outsider sees only that the money came from one of a dozen possibilities.

Its method for stopping double spends is neat: every output carries a "key image" that only its owner can compute. Once someone spends it, the network remembers that image; a second attempt to spend the same output produces a repeat image and is caught immediately. That is another way to live with the model: keep it, and change the signatures.

### 7.5 Kaspa's Route: Standing on the Speed Side

Kaspa, the project this site follows, also chose UTXO, for very practical reasons:

- Validation is local, so a node does not maintain a mutable state per user. In a DAG that produces ten blocks a second and processes many blocks in parallel, "no global queue" matters enormously;
- UTXO and proof of work have been paired for fifteen years, so the security model and the tooling have been tested repeatedly.

It has not tried to cram shared-state applications onto its base layer. Instead it splits the two: contracts that need local state and can be expressed as UTXOs live on the main chain (the ecosystem has produced languages such as Silverscript), while shared state is left to a separate effort (vProgs). Whether that division of labour works is one of the most interesting things to watch in Kaspa over the next few years, and our [Kaspa timeline](../timeline/2026.md) keeps the record.

---

## VIII. What Any of This Means for You

### 8.1 If You Are an Ordinary User

- The "balance" in your wallet is calculated by your wallet, so a different app can show a slightly different number: different wallets cover different sets of addresses.
- A strange address appearing after a payment is change, not a theft.
- The fee has nothing to do with the amount and everything to do with how many UTXOs you spend: sending 0.01 BTC with one input and with twenty inputs can differ more than tenfold.
- Fragments need tidying. If an address keeps receiving small payments (a miner, a merchant, an airdrop), let the wallet consolidate when the network is quiet and turn loose change into whole coins.

::: warning A habit people overlook: do not reuse receiving addresses

In the UTXO model, reusing one address for incoming payments stacks your entire history together in public: your balance, how often you are paid, who you have dealt with, all readable. Letting the wallet generate a fresh address for each payment is the cheapest privacy protection there is.

:::

### 8.2 If You Are a Developer

- Choosing UTXO or the account model is really choosing between value transfer and state computation.
- Building on a UTXO chain starts not with "write a contract" but with designing how state lands on outputs.
- If your application is inherently shared-state (an order book, a lending pool, social), contention will appear as you scale, so plan the split in advance or pick a different model.

### 8.3 A Quick Reference

| What you want to do | Model that fits better |
| :--- | :--- |
| Simple, safe, independently verifiable transfers | UTXO |
| Many unrelated small payments | UTXO (parallel) |
| Complex applications with shared state | Account model |
| Fees known precisely before you commit | eUTXO |
| High concurrency, with assets treated as objects | Object model (Sui and similar) |

---

## Epilogue: What Money Is Depends on What the Book Is

Broken silver and UTXO believe the same thing: **money is a specific thing** you can hold, count, and spend into new pieces. The account model believes something else: **money is an entry in a book**, and what matters is who may change it.

What is interesting is that history never settled the argument. The age of silver produced the money houses' ledgers; the age of ledgers produced eUTXO and the object model, designs that turn assets back into things. Round and round, both sides are answering one question:

> How do you make bookkeeping cheap, and good enough.

Every time you press send in a wallet, you are picking one concrete answer to it.

---

## Appendix: Main Sources

Bitcoin and on-chain models:

- The Bitcoin whitepaper, "Bitcoin: A Peer-to-Peer Electronic Cash System" (2008); Section 2 defines a coin as a chain of digital signatures: https://bitcoin.org/bitcoin.pdf
- Bitcoin developer documentation: transactions and the UTXO structure: https://developer.bitcoin.org/devguide/transactions.html
- BIP-141 (SegWit: taking signature data out of the transaction ID calculation): https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki
- CVE-2018-17144 (missing duplicate-input check, fixed in 2018): https://en.bitcoin.it/wiki/Common_Vulnerabilities_and_Exposures
- Bitcoin Core 0.17.0 release notes (improvements to coin selection): https://github.com/bitcoin/bitcoin/blob/master/doc/release-notes/release-notes-0.17.0.md
- Ethereum developer documentation: accounts, nonce and gas: https://ethereum.org/en/developers/docs/accounts/
- Cardano documentation: the extended UTXO model: https://docs.cardano.org/about-cardano/learn/eutxo-explainer
- Sui documentation: the object model (owned and shared objects): https://docs.sui.io/concepts/object-model
- Monero documentation: ring signatures: https://www.getmonero.org/resources/moneropedia/ringsignatures.html

Chinese historical sources:

- Wikipedia (Chinese), "银两" (silver by weight): silver as a weighed currency, weighing on the dengzi, the assay houses' weighing and fineness-reading, premiums and discounts, virtual silver, and the furnaces issuing receipts that circulated in place of silver: https://zh.wikipedia.org/wiki/%E9%93%B6%E4%B8%A4
- Wikipedia (Chinese), "钱庄" (money houses): origins in the Yangtze delta, Ningbo and Shanxi; beginning with currency exchange and deposits; money-house notes: https://zh.wikipedia.org/wiki/%E9%8C%A2%E8%8E%8A
- Wikipedia (Chinese), "戥子" (the balance for silver): quoting the classical dictionary ("a dengzi is the scale for weighing silver") and an official's memorial against abuses in the weighing of silver: https://zh.wikipedia.org/wiki/%E6%88%A5%E5%AD%90


