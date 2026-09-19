# A Complete History of Bitcoin

::: tip Note

This article was written by AI after thorough investigation and research.

:::

## Prologue: October 31, 2008, 2:10 PM

On a Halloween afternoon, an email appeared on a cryptography mailing list called "Cryptography."

By 2008 the list was already an antique. Its subscribers were university cryptographers, retired engineers, and geeks who had been online since the 1990s. At the time they were arguing about the security of hash functions and flaws in electronic voting—subjects far removed from ordinary life.

The email was titled "Bitcoin: A Peer-to-Peer Electronic Cash System," signed Satoshi Nakamoto. The body was short, with nine pages attached. The author's tone was as calm as handing in homework: he proposed a payment system that needed no bank, no server, no institution—and then said something almost provocative for that circle: **the thing is already running.**

A month earlier, on September 15, Lehman Brothers—158 years old—filed for bankruptcy. Over the following week, Merrill Lynch was bought, AIG was taken over by the government, and money-market funds fell below one dollar per share. On October 3, Bush signed a $700 billion bailout bill. Bankers around the world were discussing a term that had previously appeared only in textbooks: systemic risk.

The timing of the email therefore stood out. It was sent in the very month that bankers were lining up to be rescued.

But one thing needs to be made clear here, because it is often told wrong: **Satoshi Nakamoto did not invent a single new thing.**

Hash functions came out of the 1970s; digital signatures from Diffie and Hellman in 1976; Merkle trees from 1979; the idea of proof of work was written into a paper in 1992; stamping files with a hash chain was tried as early as 1991. Not one line of mathematics in those nine pages was new.

What it did was assemble. **Thirty years of parts were lying on the table, and the first person to fit them into a machine that could turn on its own was Satoshi Nakamoto.**

Before explaining how this machine turns, we need to look at those parts on the table, and at each of their failure stories—because every one of Bitcoin's designs is an answer to a specific cause of death among its predecessors.

---

## I. A List of Failures from the Previous Thirty Years

### 1.1 A Cryptographer's Company

In 1982, David Chaum, a PhD at UC Berkeley, published a paper proposing "blind signatures": a bank could stamp a digital banknote without knowing who withdrew it.

It was a beautiful idea. When you withdraw money the bank cannot see you; when you spend it the merchant cannot see you either; but trying to spend the same note twice gets you caught.

In 1989 he founded DigiCash, turning blind signatures into a product called eCash. In 1994 the company gave away a total of $1 million worth of "cyberbucks" to users as an experiment; in 1995 Mark Twain Bank in St. Louis, Missouri, became the first bank to accept eCash, with banks in the Netherlands, Germany, Finland, and Australia following with pilots; Microsoft and Deutsche Bank both came to talk about partnerships.

And then?

By 1998, eCash had only five thousand users and three hundred merchants. That same year, DigiCash filed for bankruptcy.

The cause of death was not technology but structure: every eCash transaction ultimately still needed the bank's approval, which meant the bank could see everything and refuse everything. An "electronic cash" system that handed power straight back to the banks—how was it different from a credit card?

### 1.2 Publishing a String of Numbers in The New York Times

In 1990, Stuart Haber and Scott Stornetta at Bell Labs wanted to solve a very specific problem: **how do you prove that an electronic document existed on a certain day, and has not been altered since?**

Their answer was to chain the hash values of documents together, each new block containing the hash of the previous one. To tamper with one, you would have to rewrite every block after it.

In 1991 they placed a small notice in the classified section of The New York Times, containing the current value of their hash chain—using a newspaper that all of humanity could see to stamp a string of data.

This is the direct ancestor of the blockchain, seventeen years before Bitcoin. It was missing only one thing: **who writes the new blocks.** Bell Labs' answer was "us," which made it a useful service, not a system that needs no service.

### 1.3 Make Someone Compute Until It Is Not Worth It

In 1992, Dwork and Naor proposed an anti-spam idea: the sender must first solve a computational puzzle whose answer is easy to verify but hard to forge.

In 1997, a postdoc in the UK named Adam Back independently built the same thing, calling it Hashcash.

Its goal back then was simple: attach to an email header a stamp that takes a few thousand computations. A normal sender barely notices an extra second; sending a million emails becomes a real cost in electricity and computing power. **Spam floods the world because sending costs almost nothing; so put a price tag on sending.**

Bitcoin later lifted this sentence almost verbatim, replacing "anti-spam" with "deciding who gets to keep the books."

### 1.4 Two Schemes That Almost Worked

In 1998, cryptographer Wei Dai proposed b-money: everyone jointly maintains a ledger, computational puzzles prevent cheating on it, and participants can join or leave at any time.

That same year, Nick Szabo drafted "Bit Gold" (it would not be formally published until 2005): chain proof-of-work solutions in order to form a register of scarce digital property, each coin pointing to the previous one. In this scheme he first wrote the seed of the term "smart contract."

Both schemes were missing one piece: **they did not solve the problem of "everyone agreeing on the same ledger."** How do people on the network know that someone else's ledger matches their own? When two nodes simultaneously announce they have finished a new block, whose do you listen to?

### 1.5 The Last Piece of the Puzzle

In 2004, Hal Finney built RPOW (Reusable Proofs of Work).

He turned Hashcash's one-time stamp into a transferable token: a server recorded the ownership of each token, preventing one from being spent twice.

This scheme had a centralized server, so it was only half a product. But it put the last piece of the puzzle on the table: **what proof of work produces can be "transferable property," not just a "one-time admission ticket."**

Four years later, Satoshi Nakamoto took everything from these five groups, assembled it into a machine, and cited each source one by one in the whitepaper's references.

---

## II. January 3, 2009, 18:15:05

### 2.1 The Line in the Genesis Block

When the first block was mined, a sentence was written into it:

> "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"

Translated, it is the front-page headline of The Times of January 3, 2009: the Chancellor stands on the brink of a second round of bank bailouts.

This line did three things. It stamped the block with a timestamp that cannot be forged; it forced anyone who wanted to tamper with the genesis block to forge a 2009 issue of The Times; and it made a statement about the whole enterprise's motive that needed no explanation—**this machine was started on the days when banks were being bailed out.**

There is one smaller detail: the 50 bitcoins rewarded by the genesis block are still sitting there today, and they **can never be spent.**

The reason is that Satoshi did not write the genesis block's output into the nodes' transaction database, so at the protocol level there is simply no spendable path for it. Bitcoin's first money was dead money from birth.

### 2.2 The First User

The first person to run this software was Hal Finney.

He was 52, a cryptography engineer at PGP. PGP was the most famous encryption software of the 1990s; its author, Phil Zimmermann, had been investigated by the US government on charges of "exporting munitions"—because in those years strong encryption was on the US munitions control list.

In the early hours of January 11, 2009, Finney posted on Twitter: "Running bitcoin."

The next day, the first transfer happened: 10 bitcoins, from Satoshi's address to an address belonging to Finney, packed into block height 170. A 50-coin mining reward, a 10-coin test transfer—**nine days into its life, the network was already doing the only thing it would ever do: moving a number from one address to another.**

Later, countless people suspected Finney was Satoshi, because the timing, technical background, and geography all fit too well. He always denied it. In 2013 he put it more bluntly: "I'm just the ordinary guy who got the first transaction."

### 2.3 A Machine That Adjusts Itself

Bitcoin's most unremarkable and yet most vital design is difficulty adjustment.

The network's total hash power rises and falls; when people come, machines multiply; when they leave, machines disappear. Left alone, block production would go haywire. Satoshi's approach was direct: every 2,016 blocks—about two weeks—the system checks how long it actually took. Too fast, raise the difficulty; too slow, lower it.

The goal is only one thing: keep the production of new coins steady, at about one block every ten minutes.

This mechanism means Bitcoin needs no one to manage its supply. It needs no central bank meeting, no committee vote—only mathematics. It also explains why it later became so hard to kill: **it has no switch that can be turned off.**

---

## III. Two Years of Worthlessness

### 3.1 Two Pizzas

In the early hours of May 18, 2010, a post appeared on the BitcoinTalk forum. The poster's ID was laszlo, and the title was "Pizza for bitcoins?"

> "I'll pay 10,000 bitcoins for two pizzas… probably two large ones, so I have some left over to nibble the next day. I like onions, green peppers, sausage, mushrooms, tomatoes, pepperoni—standard toppings are fine, don't go doing anything weird like fish toppings."

At the little market price that could be found at the time, 10,000 bitcoins were worth about $30 to $40. Two large pizzas plus delivery came to roughly that.

On May 22, a 19-year-old Californian with the ID jercos took the order. He had no Bitcoin wallet himself—he used a debit card to order from Papa John's, had the pizzas delivered to Jacksonville, Florida, and received the 10,000 coins. On-chain records show the transaction in block 57,043.

The poster, Laszlo Hanyecz, replied that day: "Report: I successfully traded 10,000 bitcoins for pizza. Photos here. Thanks jercos!"

Those two pizzas later got a name: the most expensive pizza in history. At May 2026 prices, those 10,000 coins were worth about $778 million. The community designated May 22 as "Bitcoin Pizza Day," calculating its value every year like taking a history's temperature.

**There was no swindler in this transaction, no speculation, and no one got the worse of it.** A programmer who wanted pizza met a young man willing to run an errand; they simply used something that had no price at the time as money, once.

### 3.2 A Faucet of 19,700 Bitcoins

On June 11, 2010, developer Gavin Andresen announced on the forum that he had made a website where every visitor could solve a captcha and receive 5 bitcoins. He seeded it with 1,100 coins himself.

The faucet eventually gave out about 19,700 bitcoins and ran until it closed in 2012. At today's prices, that is more than ten billion dollars.

**It was the most expensive marketing campaign in Bitcoin's history, paid for voluntarily by its initiator.**

### 3.3 One Hundred Eighty-Four Billion Bitcoins

On August 15, 2010, a programmer testing code noticed something strange.

He saw a block on the chain, height 74,638, containing a transaction with one output of 9,223,372,036,854.277039 bitcoins and another output of the same—together 184,467,440,737.

Bitcoin has a total cap of only 21 million. This one transaction conjured more than 184 billion out of thin air.

The flaw is simple by today's standards: the program stored amounts in signed 64-bit integers. The maximum value this type can represent was overflowed by the sum of the two outputs, so the astronomical number was treated as a negative, bypassing all checks.

The developer who found it was Jeff Garzik, who posted a warning on the forum. Satoshi's reply was a single sentence: "It's a bad block." He immediately submitted a patch adding two checks, and at 23:48 that night released version 0.3.10, with signed binaries for three platforms.

**From discovery to a downloadable patch took about five hours and forty minutes.**

Nodes across the network upgraded one after another, the honest chain kept mining, and at height 74,691 it finally overtook the chain with 184 billion coins, completing a network-wide reorganization. The money was erased from the ledger as if it had never existed.

There are two readings of this. The good side: a flaw capable of killing Bitcoin was fixed within six hours, the chain grew back onto the right track by itself, and users lost not a single coin. The bad side: **at the time, the entire "core development team" numbered one person.**

### 3.4 Mining Pools, and a Magic: The Gathering Domain

In November 2010, Czech programmer Marek Palatinus built the world's first mining pool, later called Slush Pool.

Before that, everyone could only mine whole blocks alone. In an era of rapidly rising hash power, that meant you might wait months for a single 50-coin reward. Pools gathered hash power together and distributed by contribution, turning income into a steady trickle. **The basic business model of Bitcoin mining was set from that moment.**

That same year, a man named Jed McCaleb did something. In 2006 he had wanted to build a site for trading Magic: The Gathering cards online, and took the domain name from the abbreviation of "Magic: The Gathering Online eXchange"—Mt. Gox. After three months he found it uninteresting and gave up. In 2010, seeing that the Bitcoin community needed a place where anyone could buy and sell, he put the idle domain to use.

Four years later, that word would become the most glaring name in Bitcoin's history.

### 3.5 Satoshi Leaves

On December 5, 2010, a small thing touched a nerve: WikiLeaks began accepting Bitcoin donations.

He wrote a passage on the forum, uncharacteristically tense:

> "No, don't 'bring it on.' The project needs to grow gradually so the software can be strengthened along the way. I make this appeal to WikiLeaks not to try to use Bitcoin. Bitcoin is a small beta community in its infancy. You would not stand to get more than pocket change, and the heat you would bring would likely destroy us at this stage."

A week later, on December 12, 2010, he made his last forum post: releasing version 0.3.19, adding some limits to resist denial-of-service attacks, and noting that safe mode was not finished.

In April 2011, he sent his last email to developer Mike Hearn. After that he vanished completely: he sold not one coin, left no back door, named no successor, and never appeared during any price surge.

When he left, the price of Bitcoin was around one dollar.

## IV. It Becomes Money for the First Time

### 4.1 One Dollar

On February 9, 2011, the price of Bitcoin on Mt. Gox touched one dollar for the first time.

This was the first time the whole thing became a price event: **a unit generated by code was equal to a green piece of paper printed with Washington's face.**

Slashdot, NPR, and a batch of mainstream financial pages began using the word. In June, Gawker published a report on the darknet market Silk Road, putting Bitcoin and "drug dealing" in the same sentence for the first time, and the price immediately shot to $31.91.

Then it fell. By November the price was back near $2.

From $0.30 to $31.91, then from $31.91 to $2—**Bitcoin's first bubble and first crash both happened within six months.** Over the following fifteen years, this shape would repeat many times, each larger and longer.

Serious things also grew out of this cycle: BitPay was founded in May 2011 to handle merchant payments—it let an online store price in dollars, receive bitcoin, and convert to dollars the same day, taking price volatility off the merchant's shoulders. The Electronic Frontier Foundation (EFF) began accepting bitcoin donations in January, stopped in June on the grounds that "this new currency system lacks legal precedent," and resumed in May 2013.

The most-watched "acceptance" came from WikiLeaks—the very one Satoshi had publicly discouraged. They did not listen. The US Senate and the Department of Defense subsequently began discussing Bitcoin and WikiLeaks together.

**The thing Satoshi feared did happen; it just did not destroy Bitcoin.** His exit a month earlier was, in a way, a response: a project with no founder to subpoena is the hardest to pressure.

### 4.2 The Arrest in the Library

In February 2011, a young man named Ross Ulbricht launched a darknet market accessible only through Tor: Silk Road. It accepted only bitcoin and sold drugs, fake IDs, and worse things.

Its existence gave Bitcoin a brutal early use case and brought the word "Bitcoin" into law enforcement's field of view for the first time.

On the afternoon of October 1, 2013, Ulbricht was pinned down by two investigators in the public library in Glen Park, San Francisco. They posed as a couple arguing in the study area, and while he was distracted they grabbed his laptop—it was open, and the encrypted wallet was unlocked.

This day is cited repeatedly because it is a classic case about security: **the cryptography was not broken; the person sitting in front of the computer was.**

The FBI seized Silk Road's servers and tens of thousands of bitcoins; in June 2014 the US Marshals Service auctioned nearly 30,000 of them, and venture capitalist Tim Draper bought them all. On May 29, 2015, Ulbricht was sentenced to two life terms plus forty years, without parole.

Ten years later, on January 21, 2025, Trump signed an unconditional pardon on his second day back in the White House.

### 4.3 Cyprus, a Free Advertisement

In March 2013, to secure an international bailout, Cyprus announced a one-off "deposit tax" on bank deposits—6.75% on accounts under €100,000 and 9.9% above.

The news sent Cypriots queuing to withdraw money and banks closing for days. The plan was ultimately rejected by parliament and replaced with a direct write-down of uninsured deposits.

Bitcoin completed its first rally driven by a real-world event that month: from just over $30 to $266 on April 10. **A small island nation's banking crisis became the best advertisement for "why we need a currency not controlled by the government."**

Then it crashed again. On April 11, Mt. Gox suspended trading "to let the market calm down"; after resuming, the price once fell to $55.59.

In November of the same year, Bitcoin broke $1,000 for the first time. From late November to early December, Mt. Gox quotes touched $1,163, and on Bitstamp even reached $1,242—a 7% gap between two exchanges. **One of them was on the road to bankruptcy, and its customers did not yet know.**

On December 5, 2013, the People's Bank of China and four other departments issued a notice barring financial institutions and payment firms from Bitcoin business, and Baidu promptly took down Bitcoin payments. The price fell from about $1,150 to near $750 that day.

That same year a small thing happened that the media photographed countless times: a coffee shop in Vancouver set up the world's first Bitcoin ATM—insert cash, get a string of digits on an address. At the time, most people did not even know what a wallet was.

---

## V. Mt. Gox: How an Exchange Died

### 5.1 Seventy Percent of the World

In 2013, Mt. Gox handled about seventy percent of global Bitcoin trading.

It was not an excellent company. It broke down frequently, withdrawals took weeks or even months, and customer service barely responded; in 2013, the US Department of Homeland Security seized $5 million from its account on the grounds that it had not registered as a money transmitter with FinCEN; it suspended dollar withdrawals in June, claimed a "full recovery" in July, and by September very few dollars could actually be withdrawn.

**An exchange with seventy percent of global volume was in effect cut off from the US banking system, while the vast majority of its customers kept placing orders as usual.**

### 5.2 February 2014

On February 7, 2014, Mt. Gox halted all bitcoin withdrawals, citing the need "to obtain a clear technical view of the currency processes." On February 10, it issued a press release saying the problem came from "transaction malleability"—a software flaw that lets someone alter a transaction's details so that a transfer that already happened appears not to have.

On February 20, Mt. Gox's quotes fell more than 20% below other exchanges. The meaning of that number was plain: **the market believed that bitcoins on this exchange would largely not be honored.**

On February 24, all trading stopped and the site went offline. A leaked internal document said the company was insolvent, with 744,408 bitcoins stolen and undiscovered for years.

On February 28, Mt. Gox filed for bankruptcy protection in Tokyo. The announcement said: 750,000 of customers' coins and 100,000 of the company's own were missing—about 7% of all bitcoins at the time, worth about $473 million.

Three weeks later, on March 20, the company posted an update: 199,999.99 bitcoins had been found in an old wallet used before June 2011. The missing number dropped from 850,000 to 650,000.

This detail is the most stinging part of the whole affair. Those 200,000 coins lay in a forgotten old wallet for years, while during the same period **customer withdrawal requests were refused for months.**

This was not a sudden death caused by a hack but a two-year bleed: starting in late 2011, coins in the hot wallet were moved out bit by bit, no one noticed, and no one really reconciled the books. Tokyo security firm WizSec concluded in 2015 that most or all of the missing bitcoins were stolen directly from the hot wallet, beginning in late 2011.

### 5.3 The Ending

In August 2015, Japanese police arrested CEO Mark Karpelès, charging him with fraud, embezzlement, and manipulating system data.

On March 14, 2019, the Tokyo District Court ruled: it found him guilty of falsifying data and inflating the company's holdings by $33.5 million, and sentenced him to 30 months in prison, suspended for four years; the parts it acquitted him of included embezzlement and aggravated breach of trust—the court found he "acted without malice."

Repayment dragged on even longer. In October 2021, a creditors' meeting approved a repayment plan; in July 2024, repayments finally began to be paid out in practice.

There is a cruel arithmetic here: **repayment is calculated at the prices of the time**, and those coins held for a decade turned out to be the most profitable asset on creditors' books. Bitcoin rose from $500 in 2014 to $60,000 in 2024; the gain saved a group of people who were, after all, the ones who had been robbed.

### 5.4 What This Really Taught the Industry

First, exchanges must publish proof of reserves—the thing that actually pushed this was not Mt. Gox in 2014 but FTX in 2022, though the account goes under the same heading.

Second, do not use an exchange as a wallet. This old saying was later verified at least five times: Bitstamp lost 19,000 coins in 2015; Bitfinex lost 119,756 coins in 2016 (about $72 million then); NiceHash lost 4,700 in 2017; Binance lost 7,000 in 2019; and in 2022 FTX simply vanished.

Third, and most important: **the Bitcoin protocol itself has never failed. The ones who fail are always the people holding users' private keys.**

---

## VI. Civil War: The Blocksize War

### 6.1 One Megabyte

In 2010, Satoshi added a line to the code: no block may exceed 1MB.

At the transaction sizes of the time, that corresponded to a capacity of three to seven transactions per second. In 2010 this was more than enough—the whole network barely had a few transactions a day.

By 2015, blocks were being filled at peak times, confirmation times became unpredictable, and a fee market appeared in earnest for the first time: **if you want to be included earlier, you have to pay more.**

The question thus became sharp: should the cap be changed or not?

### 6.2 The Two Camps

Those who wanted a larger cap said it plainly: Bitcoin is for paying, and a payment system that can only handle three transactions at a time is meaningless; when blocks fill up, you should scale, or users will be driven away. They wanted the cap raised to 8MB, 2MB, or simply left to miners to decide.

Those who wanted no change said just as plainly: the bigger the block, the more bandwidth and disk space it takes to run a full node, and the fewer people can verify the ledger themselves—**Bitcoin's value is that anyone can verify it, not that any transaction can go on-chain.** Scaling should be solved off-chain.

In this debate, the two sides already disagreed about what Bitcoin was: one camp saw a payment network, the other a settlement layer and reserve asset. Bitcoin later took the second path.

### 6.3 Three Failures

On August 15, 2015, Gavin Andresen and Mike Hearn released Bitcoin XT: the block cap raised to 8MB, doubling every two years thereafter, with activation requiring 75% hash power support.

Its node count at one point approached a thousand, far below the activation threshold. In January 2016, Mike Hearn declared on his blog that Bitcoin was a "failed experiment," sold all his bitcoins, and left.

In February 2016, two things happened at once: Bitcoin Classic was released, proposing a simple 2MB; and the Hong Kong roundtable—several core developers and major pool representatives talked in a meeting room and reached a non-binding verbal consensus: do SegWit first, then a 2MB hard fork later.

Neither path worked. Classic's nodes crashed in a large-block test and the momentum quickly ebbed; the hard-fork part of the Hong Kong agreement was never delivered.

In October 2016, Bitcoin Unlimited appeared, handing the block-size decision to miners—mine as big as you like. On July 9 of the same year, the second halving occurred (block 420,000, reward down to 12.5), the price then about $650, and the war continued.

### 6.4 2017: Three Things Crowded into One Year

On May 23, 2017, during the Consensus conference in New York, 58 companies—exchanges, pools, payment firms—signed a "New York Agreement": activate SegWit first, then hard-fork to 2MB three months later. The signatories' combined hash power exceeded eighty percent of the network.

**And not a single core developer signed it.**

Over the following three months, three things squeezed together:

**August 1**—some who disagreed with this path forked a new chain out of Bitcoin, called Bitcoin Cash (BCH). Its idea was simply "big blocks," and it received about 10% of the hash power and market cap.

**August 24**—SegWit activated on the mainnet (block 481,824). It did one thing: move the signature data in transactions into a separate "witness" area, letting a block hold more transactions while fixing the old problem of transaction malleability.

**November 8**—the New York Agreement's 2MB hard fork was called off by its organizers, because the hash power supporting it fell short of expectations, and a hard fork would turn it into yet another forked chain.

### 6.5 What the War Left Behind

The most complete record is Jonathan Bier's 2022 book "The Blocksize War." One summary in it is more accurate than any slogan:

**The core of the war was never block size**, but "who gets to decide, without any explicit mandate, what Bitcoin is, on behalf of everyone."

For three years, companies, pools, developers, conferences, and protocols took turns; the result was that Bitcoin did not change according to anyone's intent. This "outcome" is both its luck and its curse: it is extremely hard to seize, and extremely hard to upgrade.

---

## VII. Mania and Ice Age

### 7.1 The Same Day

On December 17, 2017, Bitcoin set an all-time high of $19,783 on Coinbase.

On the same day, CME's bitcoin futures opened.

The coincidence was quickly written into a research brief by the Federal Reserve Bank of San Francisco, titled "How Futures Trading Changed Bitcoin Prices." Its logic: **before a market where one can legally short existed, the optimists' bids had no counterparty; once the futures market was deep enough, pessimists could enter.**

The report compared the decline after December 17, 2017 with the two previous crashes and noted that this one was larger and longer.

And so it was: from December 2017 to December 2018, Bitcoin fell 84%, at one point to near $3,200. Mining rigs were dumped at scrap prices, exchanges laid off staff, a batch of project teams fled, and the words "blockchain" quickly vanished from startup pitch decks.

A by-product of this cycle was the ICO—thousands of projects raised money on a whitepaper, and the vast majority never delivered anything. Bitcoin did not join the party, but it was dragged down along with the party's collapse.

### 7.2 What Grew Out of the Ice

The most memorable development of 2018 was not the price; it was the Lightning Network.

Its idea is simple: **not every transaction goes into the main chain.** Two people open a shared account, record their dealings in that private ledger, and when it is time to settle, write the final result into Bitcoin's main chain once. In this way, one on-chain transaction can carry almost unlimited small payments.

In January 2018, three independent implementations went live on the mainnet one after another. In 2019, a "Lightning Torch" was passed from person to person on Twitter, pushing the technology's visibility from developer circles to ordinary users; participants included Twitter founder Jack Dorsey.

By 2019, the Lightning Network's public channel capacity had grown to the scale of several hundred bitcoins. By investment standards the number is trivial; its significance lies elsewhere: **it proved that Bitcoin could move payment capacity to a second layer without changing the underlying protocol.**

In June 2019, the price recovered from near $3,200 to above $13,000. One reason was Facebook's announcement of the Libra project on June 18—a social network company trying to issue its own global currency, which instead got more people seriously discussing "why we need a currency that belongs to no company."

### 7.3 The Forked Chain Splits Again

A year after Bitcoin Cash forked off, it split again.

On November 15, 2018, BCH hard-forked into two chains: BCH ABC (keeping the BCH name) and BCH SV. The two sides even fought a real hash war—each trying to use hash power to reorganize away the other's blocks. **The war burned a lot of real electricity, and the outcome was that both chains survived and both declined.**

## VIII. The Institutions Arrive

### 8.1 March 12, 2020

On this day, the World Health Organization declared COVID-19 a global pandemic.

On the same day, Bitcoin fell nearly forty percent within hours, at one point below $4,000.

**Something designed as a "safe haven in a crisis" fell harder than stocks on the first day of global panic.** That crash became the counterexample for every "digital gold" narrative afterward, and the first proof that it was still a highly leveraged risk asset.

Two months later, on May 11 at 19:23:43 UTC, block 630,000 was mined and the reward dropped from 12.5 to 6.25. The third halving. The price was about $8,600 at the time, and the market barely reacted—everyone had long known the date, and everyone knew they would pay for electricity.

### 8.2 A Software Company Bought Bitcoin with Half Its Cash

On August 11, 2020, MicroStrategy, a listed business-intelligence software company, announced it had bought 21,454 bitcoins for $250 million.

In the context of the time, this was almost absurd. A listed software company had swapped half its cash for a code asset with no cash flow, no sovereign guarantee, and price swings over 50%. Wall Street's first reaction was "has management gone mad?"

Over the next two years, the company used convertible bonds, share issuance, and preferred stock to turn this into a self-reinforcing loop: **the stock rises, so it can raise money more cheaply; the money raised buys coins; the coins rise and push the stock higher.** By 2024 it had renamed itself Strategy and become the institution holding the most bitcoin in the world.

But in August 2020, it was only the first. In October of that year, PayPal launched user-facing crypto buying and selling—for ordinary people, it was the first time they could buy a bitcoin inside a payments app they had already used for a decade.

### 8.3 The Hijacking on Twitter

On July 15, 2020, Twitter suffered the largest account hijacking in its history.

Attackers used social engineering to obtain internal tool access and took over 130 high-profile accounts: Obama, Biden, Musk, Bill Gates, Apple, Uber. In the same hour, these accounts posted the same tweet: send bitcoin to a certain address and we will double it back.

Within hours, that address received about 12 bitcoins, worth about $118,000 at the time. Twitter's stock fell 4% that day, the FBI got involved, and three young people were charged, one of them 17 at the time.

**This was the most famous "free advertisement" in Bitcoin's history, and Twitter paid the bill.**

### 8.4 2021: Three Big Events in One Year

**February 8**—Tesla disclosed a $1.5 billion bitcoin purchase; in March it began accepting bitcoin for cars.

A month later, on May 12, Musk announced on Twitter that he was suspending bitcoin payments, citing the fossil-fuel consumption of mining. Bitcoin fell more than 10% that day.

This in-and-out did not change a single line of protocol code, but it made "Bitcoin's energy consumption" a standing topic in mainstream media for the first time—a topic that remained unresolved for the next five years.

**May 21**—China's State Council Financial Stability and Development Committee met and explicitly demanded a crackdown on bitcoin mining and trading. It was the first time China's top leadership directly named mining. In the following months, mining farms in Inner Mongolia, Sichuan, Yunnan, and elsewhere shut down one after another.

Sichuan, during the wet season, had concentrated a substantial share of the world's hash power; when it stopped, the network's total hash rate halved within two months. **The hash power did not disappear; it moved house: first to Texas and Kazakhstan, then to other US states, Russia, Canada, Paraguay, the UAE, and Ethiopia.**

**September 7**—El Salvador's "Bitcoin Law" took effect, making bitcoin legal tender alongside the US dollar. The government launched an official wallet and bought another 550 bitcoins on launch day.

The first day was not smooth: the official wallet could not get listed on app stores, excessive sign-ups forced a temporary shutdown, and more than a thousand people protested in the capital, San Salvador, burning a tire.

The ending of this story would take four more years to write: as one of the conditions for a bailout deal with the International Monetary Fund, El Salvador amended its law in January 2025 so that bitcoin is no longer mandatory legal tender—merchants may accept it or not.

### 8.5 An Upgrade Without Controversy

On November 14, 2021, Bitcoin's Taproot upgrade activated at block 709,632.

It did two things: replace signatures with shorter, more efficient Schnorr signatures; and make complex scripts—multisig, timelocks, conditional payments—look on-chain just like an ordinary transfer. The result is cheaper and harder to distinguish.

The activation process itself is worth noting. It used a mechanism called "Speedy Trial": miners signal support in the block header, and at 90% it locks in and activates. **No hard fork, no quarrel, no forked chain.**

Four years after the blocksize war ended, Bitcoin completed an upgrade that no one wanted to split over. It also shows that the war really did settle one thing: to change Bitcoin, you must first persuade the majority, not the big companies.

On November 10, the price touched about $69,000, and market cap exceeded $1.2 trillion.

Seventeen months earlier it was below $4,000. Two months earlier, a small Central American country had written it into law; two months later, it sat on the balance sheet of a public company.

---

## IX. Reckoning

### 9.1 Starting with LUNA

In May 2022, a project called Terra collapsed.

It had two tokens: a stablecoin called UST that claimed to be pegged to the dollar, and a governance token, LUNA. UST's peg was maintained by an algorithm: when it fell below a dollar, arbitrageurs could burn UST for LUNA, and vice versa. In calm times this looked like automated market making; when it lost control, it was a money printer.

On May 9, UST depegged. **Within three days, LUNA's supply inflated from hundreds of millions to trillions**, and its price fell from $60 to near zero. The two tokens had a combined market cap of about $40 billion, which evaporated in days—and with it the entire market's trust in "algorithmic stablecoins."

Founder Do Kwon later moved through Singapore and Serbia, was arrested in Montenegro in March 2023, and was extradited to the United States to face fraud charges at the end of 2024.

The chain reaction followed immediately. In June, crypto hedge fund Three Arrows Capital could not meet margin calls and filed for bankruptcy in July; the same month, lending platform Celsius froze withdrawals and filed for bankruptcy, and Voyager collapsed the same week. Bitcoin fell from $69,000 in November 2021 to near $17,600 in June 2022.

### 9.2 FTX

The most prestigious exchange of this cycle was FTX. Its founder, Sam Bankman-Fried (SBF), appeared at congressional hearings in a T-shirt and shorts, was a Forbes cover subject, and was one of the major sources of US political donations. Its valuation reached as high as $32 billion.

On November 11, 2022, FTX filed for bankruptcy. Customer funds had long been diverted to plug holes at affiliated companies, and the thing came to light because a balance sheet leaked to the press.

**The lesson it taught was exactly the same as Mt. Gox's, only twenty times bigger: what was stolen was not coins, but the private keys that had been handed over.**

On November 2, 2023, SBF was convicted on seven counts of fraud and conspiracy. On March 28, 2024, he was sentenced to 25 years in prison and ordered to forfeit $11 billion. That same month, Binance founder Changpeng Zhao pleaded guilty to violating anti-money-laundering rules, and Binance paid a $4.3 billion fine.

Bitcoin bottomed out at the end of that year: $15,476.

---

## X. Inscriptions, ETFs, and the Fourth Halving

### 10.1 What a Pixel Skull Stirred Up

On December 14, 2022, developer Casey Rodarmor "inscribed" the first Ordinals inscription on Bitcoin: a black-and-white pixel skull.

The principle is not complicated. Bitcoin's smallest unit is the satoshi, and one bitcoin equals one hundred million satoshis. SegWit in 2017 and Taproot in 2021 left two rules behind: signature data costs only a quarter of ordinary data to store; and certain Taproot script paths have no size limit.

Rodarmor stuffed arbitrary files—images, text, audio—into a conditional branch that would never be executed, then numbered each satoshi and bound the data to a specific one.

**From the protocol's point of view, all of this is legal: Bitcoin never said blocks may only contain transfers.** From the community's point of view, it looked like someone opening a building-materials market in their living room.

The market effect was immediate. On January 21, 2023, the Ordinals protocol was officially released; on March 8, a developer using the pseudonym domo used it to invent the BRC-20 token standard, inscribing JSON text on-chain to "deploy," "mint," and "transfer" tokens; by April 8, inscriptions reached one million; by the end of 2023, more than fifty million.

Block space began to become scarce. In May 2023, the BRC-20 minting wave pushed single-transaction fees into the tens of dollars, and Binance briefly suspended bitcoin withdrawals. In some blocks, miners earned more in fees than the block subsidy—**the first time in Bitcoin's fourteen-year history that fees replaced the subsidy at the single-block level.**

On November 23, 2023, one transfer paid a fee of 83.65 bitcoins (about $3.1 million): the user had meant to send 55.77 coins, but the change did not return to their change address, and all of it became miner revenue. The pool that mined the block announced a week later that if the original owner could prove their identity, it would return the money.

The community argued another round over this, second only to the blocksize war in intensity. One side saw it as a shameless abuse of the scarcest resource—block space; the other saw miners earning money as the protocol working. Some pushed pools to filter inscription transactions, with limited effect, because the protocol itself does not distinguish "currency transactions" from "data transactions."

### 10.2 BlackRock's Filing

On June 15, 2023, BlackRock filed with the US Securities and Exchange Commission for a spot bitcoin ETF.

The weight of this came from the filer. BlackRock manages about $9 trillion in assets and had previously filed for 575 ETFs, with only 1 rejected. The market reacted at once: on the day of the news, bitcoin rose from near $25,000 to $26,000.

The more critical step had happened a year earlier. In June 2022, Grayscale Investments sued the SEC on the grounds that: you approved bitcoin futures ETFs but rejected spot ETFs, and the two track the same market, so this differential treatment has no reasonable explanation.

On August 29, 2023, the US Court of Appeals for the DC Circuit ruled against the SEC, finding it had "failed to adequately explain" its reasons for rejecting.

That sentence in the judgment was the direct cause of the batch of ETFs being cleared in January 2024.

### 10.3 January 10, 2024

On January 10, 2024, the SEC issued an order approving, on an accelerated basis, the listing applications of 11 spot bitcoin exchange-traded products.

SEC Chair Gary Gensler retained his own position when approving: the Commission's earlier judgment was not wrong, it was just that the court found the explanation insufficient, so "the most sustainable path forward" was to approve.

On the morning of January 11, these products began trading. By the afternoon, turnover reached about $4.6 billion.

**From this day on, anyone with a securities account could buy exposure to the price of a bitcoin, without registering on an exchange, without managing private keys, without worrying about a platform running off.** For something that fifteen years earlier had been designed to "need no financial intermediary," this was a telling turn.

### 10.4 The Fourth Halving, and a Block Stuffed with Fees

In the early morning of April 20, 2024, block 840,000 was mined and the reward dropped from 6.25 to 3.125.

The fees in that block are a detail worth recording. Ordinals' creator Casey Rodarmor launched a new token protocol, Runes, in the same block, and the inscription activity pushed the block's fees above 37 bitcoins—more than $2.5 million at the time, twelve times the block subsidy.

That day, fees far exceeded new coins in miners' revenue.

But the other half of the story soon showed itself: Runes and Ordinals cooled within months. By the end of 2024, daily inscriptions had fallen from hundreds of thousands at the peak to fewer than forty thousand, and fees fell with them.

**Fees can pick up the slack, but they come with speculation and leave with it.** Two years later this would become a more serious problem.

### 10.5 One Hundred Thousand

From June to July 2024, police in the eastern German state of Saxony transferred about 50,000 bitcoins seized from a shuttered piracy site operator to exchanges in batches and sold them—49,858 in total, for about $2.88 billion.

At November 2024 prices, the German government left about $1.6 billion on the table. This was cited repeatedly as evidence that "governments don't understand Bitcoin." But its more accurate meaning is: **the logic of a law-enforcement agency is to liquidate seized assets as quickly as possible, not to time the market.**

On July 27, 2024, Trump spoke at the Bitcoin conference in Nashville, promising that if elected he would make the US the "crypto capital of the planet" and establish a national bitcoin reserve. His line "never sell your bitcoin" was later printed on countless T-shirts.

On December 4, bitcoin broke $100,000 for the first time ever, touching about $103,900 that night. Three weeks earlier it was near $68,000.

The market was not trading a change in Bitcoin's fundamentals, but the expectation that "Washington will no longer be hostile to this." **Bitcoin took fifteen years to turn a political question into a price question.**

That year it rose about 120% over the year. Strategy's holdings exceeded 400,000 coins.

## XI. From 126,000 to 58,000

### 11.1 Bitcoin in the Treasury

On January 20, 2025, Trump was sworn in. Later that month, bitcoin set a then-record high of about $109,000.

On March 6, an executive order was signed establishing a "Strategic Bitcoin Reserve." Market expectations were high, but the content was quite restrained: **the reserve is funded by bitcoins finally forfeited in criminal and civil forfeiture proceedings, with no commitment to buy a single new coin.** The White House crypto lead gave a figure of about 200,000 coins, worth about $17.4 billion at the time.

After the news, the price at one point fell more than 5% to below $85,000, then recovered to $88,000 two hours later. **It achieved symbolism, not buying pressure.**

Starting from just over $90,000 at the beginning of the year, bitcoin reached $110,000 in May, broke $120,000 in July, and set an all-time high on October 6—$126,193. The year-to-date gain was then over 30%, and the market consensus was that "institutionalization has smoothed out volatility."

That consensus lived four days.

### 11.2 The Four Hours of October 10

At 20:50 UTC on October 10, 2025, Trump announced an additional 100% tariff on Chinese goods, along with software export controls.

At that moment the US stock market had already closed. Among global risk assets, the only one still trading was crypto.

Over the next four hours, the industry's largest forced liquidation in history took place:

- about $19 billion in leveraged positions were liquidated, across about 1.6 million accounts;
- one bitcoin long was wiped out in 40 minutes, with the price falling from $122,000 to near $104,000, a drop of more than 14%;
- altcoins fell far harder, with some tokens' instantaneous quotes on exchanges dropping 99%;
- market makers withdrew en masse, order-book depth collapsed about 98% within 40 minutes, and the liquidity vacuum turned the plunge into free fall.

The scale far exceeded the COVID crash of 2020 and the FTX collapse of 2022.

Analysts' explanations were highly consistent: **it was not that the news was so terrible, but that the market had loaded up on leverage before the news arrived, and crypto leverage is sustained by automatic liquidation.** When a market's own risk control is a source of selling pressure, its stability depends on "everyone not being liquidated at the same time"—a premise that fails in the face of any shock.

### 11.3 2026: A "Civilized" Bear Market

From $126,193 in October 2025, bitcoin declined all the way to a low of $57,820 on July 1, 2026, a maximum drawdown of 54%.

Set beside previous cycles, this number is strikingly mild: 2011 fell from $31.91 to $2.05, a 94% drawdown; 2013 to 2015 fell from $1,163 to $152, 87%; 2018 fell from $19,783 to $3,122, 84%; 2022 fell from $69,000 to $15,476, 78%.

The mildness is because the buyer base changed. In the first half of 2026, US spot bitcoin ETFs experienced their longest outflow streak ever: a 13-day run of net outflows ending in early June, totaling about $4.3 billion; and another 10-day run of about $2.7 billion in early July.

The really glaring numbers came from Strategy. The company had been the model of "buy only, never sell." On June 29, 2026, it announced a "bitcoin monetization program," allowing it to sell bitcoin under certain conditions to pay preferred dividends, service debt, and fund operations.

Its Q2 earnings report on July 30 contained two sets of numbers. The first: as of July 26 it held 843,775 bitcoins, up 25% year-to-date; during the year it had sold $218.4 million worth of bitcoin through the monetization program. The second: a Q2 operating loss of $8.33 billion, of which $8.32 billion came from unrealized losses on digital assets—a year earlier, the same line item had been $14 billion in unrealized gains.

**When the last buy-only buyer begins managing its own balance sheet, the market's marginal bid disappears.**

So the first half of 2026 produced this combination: in the first week of February, bitcoin fell from $79,000 to near $60,000; it probed lower again in June and fell to $57,820 on July 1; meanwhile tech stocks were rising, and bitcoin was not following any asset class.

By August the wind changed again: bitcoin rebounded from near $62,000 to above $80,000 that month, a monthly gain of more than 20%, and US spot ETFs had their best month of 2026.

On September 19, 2026, bitcoin was quoted at about $81,000.

---

## XII. Two Ledgers

### 12.1 The Missing Coins

Bitcoin's total supply cap is 21 million, of which about 20.08 million have been mined, or 95.7%.

But not all mined coins are still in circulation.

Some private keys are lost forever: hard drives thrown away, computers sold, passwords forgotten. The most famous case is James Howells, an IT engineer in Wales—in 2013 he threw away a hard drive containing the private keys to 7,500 bitcoins as trash, and for the next ten years he kept applying to excavate a landfill in Newport; a court ultimately rejected his request.

Another portion belongs to a group of addresses that have never moved. In 2013, Argentine researcher Sergio Demian Lerner analyzed a non-random pattern left by a miner in early blocks (he named it Patoshi) and found that this miner controlled a substantial share of the hash power at the time and mined about 22,000 blocks—at 50 coins each, roughly 1.1 million bitcoins.

Estimates were later revised to between 600,000 and 1.15 million. All the research agrees on one thing: **not a single one of these coins has ever been transferred out.**

At 2026 prices they are an asset on the order of $90 billion. If they belong to someone, that person would be one of the richest people in the world; if they are no longer accessible, it is the largest accidental loss in human history.

The only on-chain "movement" came from someone else: in February 2026, someone sent 2.56 bitcoins to the genesis address. Those 50 genesis coins can never be spent at the protocol level, but the address can receive transfers.

Some estimates put permanently lost bitcoins at between 3 and 4 million—an estimate that cannot be precisely verified, based on holdings in long-dormant addresses. Its meaning cuts two ways: supply is tighter than the books show; and on an irreversible ledger, a personal mistake costs as much as a hack.

### 12.2 The Problem Bitcoin Itself Did Not Solve

The nine pages of 2008 wrote about the issuance curve, proof of work, and the longest chain, but they did not answer a more basic question:

**After new coins stop being issued, who pays to protect this network?**

Seventeen years later, the question has become quantifiable. The numbers for September 19, 2026 were as follows:

- current block subsidy 3.125 coins, one block every ten minutes, about 450 per day;
- network hash power about 950 EH/s, difficulty about 132.76 trillion;
- that day's network transaction fee revenue was about 3 bitcoins, about $240,000, **less than one percent of miner revenue**;
- the 450-coin subsidy was worth about $36 million at that day's price.

In other words, the daily cost of protecting a $1.6 trillion asset is almost entirely paid by newly issued coins, with users' payments accounting for only a sliver.

And the curve is hard-coded: the 2028 halving takes it to 225 per day, 2032 to 112.5—about $9 million a day at today's prices; after 2140, zero.

Fees are not incapable of rising. In 2023 and 2024, the inscription and BRC-20 speculative wave pushed daily fees to more than half the subsidy, and in some blocks fees even exceeded the subsidy. But after the tide went out, the rate fell back to 1 to 2 satoshis per byte, the default minimum relay level for nodes—**meaning almost no one is bidding for "priority inclusion."**

There is a more optimistic reading too: if Bitcoin's role is long-term store of value, it does not need high-frequency use; as long as occasional large transfers are willing to pay a high price, security will be paid for. The problem is that the volume and frequency of such large transfers currently cannot cover the $36 million daily shortfall.

Both readings hold, because the answer will only emerge in the 2030s. **Bitcoin stretched this question over an extremely long time span—long enough that each generation can believe its own stretch is a stable period.**

By the way, one frequently asked question: what can controlling more than half the hash power do? It can invalidate a transaction, or knock out an already-confirmed transaction—that is, break "irreversibility." It cannot: conjure coins that are not yours out of thin air, steal coins from someone else's address, change the 21 million cap, or forge someone else's signature.

So the arithmetic of this attack-and-defense has always been simple: how much it costs to obtain more than half the hash power, and what doing so buys. As of September 2026, the hash power protecting the chain is about 950 EH/s; converted at a mainstream miner's 20 joules/TH efficiency, that corresponds to about 19 gigawatts, and annual electricity consumption around 160 TWh—comparable to the electricity use of a medium-sized industrial country.

This conversion is highly sensitive to assumptions: if the network's average efficiency is 25 joules/TH, the figure becomes 24 GW; if 15, then 14 GW. **All public bitcoin energy-consumption figures are this kind of conversion, because no one can get a real-time electricity-meter reading for the whole network.**

---

## XIII. What It Achieved, and What It Did Not

### 13.1 What It Achieved

**It produced a network that has run since its first day of genesis and has never stopped because of an attack.** No CEO, no board, no legal entity, no one who can be subpoenaed.

**It turned an open-source protocol into a $1.6 trillion asset**, and got the US government to write it into an executive order and the largest asset manager to issue products tied to its price.

**It proved that a bookkeeping system that trusts no one is feasible.** That sentence sounds like common sense today, but in 2008 it was something the cryptography community had failed to achieve for thirty years.

It has suffered more failures than most projects do in a lifetime: a bug that conjured 184 billion bitcoins from nothing, an accidental hard fork, a three-year war that nearly split the community in two, more than five collapsed exchanges, and two crashes of over 80%. A website dedicated to obituaries has counted more than four hundred "Bitcoin is dead" articles—by its reckoning, Bitcoin dies once every two weeks on average.

### 13.2 What It Did Not Achieve

**It did not become a daily payment tool.** Satoshi's title was "A Peer-to-Peer Electronic Cash System," and seventeen years later its blocks come every ten minutes, a transaction's fee floats with the market, and the vast majority of people buy it as an asset, not spend it as money. Payment was pushed to second layers and custodial platforms.

**It did not solve its own security budget problem.** Fees are less than 1% of miner revenue, and the subsidy halves every four years. The question was pushed to the 2030s, but it has not gone away.

**It did not escape volatility and leverage.** The four hours of October 10, 2025 showed that a market driven by automatic liquidation can stampede on itself even with no bad news.

**It also did not end its internal arguments.** In 2025, the Bitcoin Core client raised the default relay data limit from about 80 bytes to 100KB, triggering another round of confrontation. This is not a fork, nor close to one—node policy is not consensus rules. But it exposed a problem not solved in 2017: **the protocol is neutral, but the community has never been neutral about what Bitcoin should be used for.** Back then the fight was over capacity; now it is over content.

---

## Epilogue: The Line Is Still There

At 18:15:05 on January 3, 2009, a block was mined, containing that day's front-page headline of The Times: the Chancellor stands on the brink of a second round of bank bailouts.

Seventeen years later, that newspaper's front page is long out of print; the bailout it described has become the prelude to a series of larger bailouts; and the network that block belongs to has become an asset worth $1.6 trillion, written into a US government executive order.

The person who wrote "Running bitcoin" did not meet a good end.

Hal Finney was diagnosed with ALS in 2009. Nearly fully paralyzed in his last years, he still wrote code with an eye-tracking device; his last project was software to strengthen Bitcoin wallet security. In those years he repeatedly denied being Satoshi, one reason being very simple: in early 2009 he was preparing for a full marathon, and his mind was on the track.

He died on August 28, 2014, aged 58. His body was received by a cryonics facility.

He wrote an essay in his lifetime called "Bitcoin and Me," and in it there is a detail: the first time he saw that Halloween email, he knew this thing was worth running right away.

That thing began on January 3, 2009, and has not stopped for a single day since.

---

## Appendix: Main Sources

Primary documents and archives:

- The original email in which Satoshi Nakamoto released the whitepaper (October 31, 2008, Cryptography mailing list): https://www.metzdowd.com/pipermail/cryptography/2008-October/014810.html
- Complete collection of Satoshi Nakamoto's forum posts (including the August 2010 overflow bug patch announcement and his last post in December 2010): https://satoshi.nakamotoinstitute.org/posts/
- The 2010 overflow incident and block 74,638: https://en.bitcoin.it/wiki/Value_overflow_incident
- Laszlo Hanyecz's pizza post (May 18, 2010): https://bitcointalk.org/index.php?topic=137.msg1153
- Gavin Andresen's faucet post (June 11, 2010): https://bitcointalk.org/index.php?topic=183.0
- Spot bitcoin ETP approval order (SEC Release No. 34-99306, January 10, 2024): https://www.sec.gov/files/rules/sro/nysearca/2024/34-99306.pdf
- Strategic Bitcoin Reserve Executive Order 14233 (March 6, 2025): https://www.whitehouse.gov/presidential-actions/2025/03/establishment-of-the-strategic-bitcoin-reserve-and-united-states-digital-asset-stockpile
- Strategy's Q2 2026 earnings report (holdings and monetization program): https://www.strategy.com/press/strategy-announces-second-quarter-2026-financial-results_07-30-2026
- COPA v. Wright judgment ([2024] EWHC 1198 (Ch)): https://www.judiciary.uk/wp-content/uploads/2024/05/COPA-v-Wright-Judgment.pdf

On-chain and market data:

- Block production, hash power, difficulty, mempool, fees, and price: public node APIs and exchange quotes, data taken on September 19, 2026
- Historical highs/lows and past drawdowns: calculated from MEXC daily candles; all periods use exchange quote conventions
- Inscription counts and BRC-20 fee data: Ordinals explorers and third-party statistics at the time

News reports and third-party records:

- Appeals court rules SEC wrongly rejected Grayscale's spot ETF (Reuters, August 29, 2023)
- US spot bitcoin ETF first-day turnover about $4.6 billion (Reuters, January 11, 2024)
- Tesla suspends bitcoin payments (Reuters, May 12, 2021); China's State Council demands a crackdown on mining and trading (May 21, 2021); first day of El Salvador's Bitcoin Law (September 7, 2021)
- Trump pardons Ross Ulbricht (NPR, CNBC, January 21, 2025)
- The October 10, 2025 liquidation event (reviews by multiple institutions)
- The OP_RETURN policy dispute between Bitcoin and Bitcoin Knots (October 2025)
- "The Blocksize War" (Jonathan Bier, 2022); the Federal Reserve Bank of San Francisco research brief on futures and bitcoin prices

Note: All numbers, dates, and quotations in this article are taken from verifiable public sources and have been checked one by one. Conversions of price, hash power, and energy consumption are labeled in the text with their conventions or assumptions; numbers prefixed with "about" are estimates from public sources. English quotations are reproduced verbatim from their sources.
