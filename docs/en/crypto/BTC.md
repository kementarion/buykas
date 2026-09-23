# The Story of Bitcoin

::: tip Note

This article was written by AI after thorough investigation and research.

:::

## Prologue: October 31, 2008, 2:10 PM

On a Halloween afternoon, an email landed in a cryptography mailing list called Cryptography.

By 2008 the place was an antique. Its subscribers were university cryptographers, retired engineers, and geeks who had been online since the 1990s. What they argued about in those days was hash function security and flaws in electronic voting, subjects a long way from ordinary life.

The email was titled "Bitcoin: A Peer-to-Peer Electronic Cash System," signed Satoshi Nakamoto. The text was short, with nine pages attached. What he proposed needed no bank, no server, no institution, and he ended with a line that was almost provocative in that circle: the thing was already running.

To weigh that email properly, look at the calendar it landed on.

A month earlier, on September 15, Lehman Brothers, 158 years old, filed for bankruptcy. Over the following week Merrill Lynch was bought, AIG was taken over by the government, and money-market funds fell below one dollar per share. On October 3, Bush signed a $700 billion bailout bill. Bankers everywhere were discussing a term that until then had lived only in textbooks: systemic risk.

The email arrived in the very month that bankers were lining up to be rescued.

But something about those nine pages is commonly told wrong, so settle it first: **Satoshi Nakamoto did not invent a single new thing.**

Hash functions came from the 1970s; digital signatures from Diffie and Hellman in 1976; Merkle trees from 1979; the idea of proof of work was written into a paper in 1992; stamping files with a hash chain had been tried in 1991. Not one line of mathematics in those nine pages was new.

What he did was assembly. The parts had been sitting on the table for thirty years, and he was the first to fit them into a machine that could turn on its own.

Before explaining how this machine turns, look at those parts, and at how each of them died: every design in Bitcoin is an answer to one specific failure that came before.

---

## I. A List of Failures from the Previous Thirty Years

### 1.1 A Cryptographer's Company

In 1982, David Chaum, a PhD at UC Berkeley, published a paper proposing "blind signatures": a bank could stamp a digital banknote without knowing who had withdrawn it.

It was a beautiful idea. When you withdraw money the bank cannot see you; when you spend it the merchant cannot see you either; and trying to spend the same note twice gets you caught.

In 1989 he founded DigiCash, turning blind signatures into a product called eCash. In 1994 the company gave away a total of $1 million worth of "cyberbucks" to users as an experiment; in 1995 Mark Twain Bank in St. Louis, Missouri, became the first bank to accept eCash, with banks in the Netherlands, Germany, Finland, and Australia following with pilots, and both Microsoft and Deutsche Bank came to talk about partnerships.

And then?

By 1998 eCash was down to five thousand users and three hundred merchants. That same year, DigiCash filed for bankruptcy.

The cause of death was not technology but structure: every eCash payment still needed a bank's nod, which meant the bank could see everything and refuse everything. An "electronic cash" that hands power straight back to the banks is a credit card with extra steps.

### 1.2 Publishing a String of Numbers in The New York Times

In 1990, Stuart Haber and Scott Stornetta at Bell Labs set out to solve a very specific problem: how do you prove that an electronic document existed on a certain day, and has not been altered since?

Their answer was to chain documents together by their hashes, each new block containing the hash of the previous one. To tamper with any single document, you would have to rewrite every block after it.

In 1991 they placed a small notice in the classified section of The New York Times, containing the latest value of the hash chain. They were stamping a string of data with a newspaper that all of humanity could see.

This is the direct ancestor of the blockchain, seventeen years before Bitcoin. It lacked exactly one thing: who writes the new blocks. Bell Labs' answer was "we do," which made it a useful service rather than a system that needs no service.

### 1.3 Make Someone Compute Until It Is Not Worth It

In 1992, Dwork and Naor set out to fight spam by putting a computation in the way of every sender: an answer that is easy to verify but takes machine time to produce.

In 1997, Adam Back, then a postdoc in the UK, built the same thing independently and called it Hashcash. His arithmetic was blunt: one extra second means nothing to someone sending a normal letter, but a million messages turn into real electricity and real hash power.

Spam was everywhere because sending mail cost almost nothing. So put a price tag on sending.

Satoshi moved that puzzle over wholesale, changing only the question: not "is this message worth it," but "who gets to write this block."

### 1.4 Two Schemes That Almost Worked

In 1998, the cryptographer Wei Dai proposed b-money: a ledger maintained by everyone together, with computational puzzles to prevent tampering, and participants free to come and go.

That same year, Nick Szabo drafted "bit gold" (it would not see formal publication until 2005): proof-of-work solutions chained in order into a registry of scarce digital property, each coin pointing back to the one before it. It was there that the seed of the phrase "smart contract" first appeared.

Both schemes were missing the same step: how one ledger becomes everyone's single ledger. How does a node know that the account someone else keeps matches its own? When two nodes announce a new block at the same moment, whose block wins?

### 1.5 The Last Piece of the Puzzle

In 2004, Hal Finney built RPOW, Reusable Proofs of Work.

He turned Hashcash's one-shot stamp into a token that could be handed on: a server recorded who owned each token, so none could be spent twice. Because it relied on that one central server, it was a half-finished thing. But it laid the last piece on the table: what proof of work produces can be transferable property, not just a ticket for one entry.

Four years later, Satoshi took all five of these efforts, assembled them into one machine, and cited each source one by one in the whitepaper's references.

| Year | Who | What they contributed | What was still missing |
| :--- | :--- | :--- | :--- |
| 1982 | David Chaum | Blind signatures: digital cash, anonymous but accountable | Power stayed with the banks |
| 1991 | Haber and Stornetta | A hash chain: a timestamp for documents | Who writes the new blocks |
| 1997 | Adam Back | Hashcash: a price tag on sending | Stops abuse, records no ownership |
| 1998 | Wei Dai, Nick Szabo | b-money and bit gold: a shared ledger | Agreement on one single ledger |
| 2004 | Hal Finney | RPOW: transferable proof of work | Still one central server |

---

## II. January 3, 2009, 18:15:05

### 2.1 The Line in the Genesis Block

When the first block was mined, a line of text was written inside it:

> The Times 03/Jan/2009 Chancellor on brink of second bailout for banks

That is the front-page headline of The Times of January 3, 2009: the Chancellor stands on the brink of a second round of bank bailouts.

The line did three things. It gave the block a date stamp anyone can check, since the newspaper is real, the words cannot have been written before January 3. It pushed forgery off the chain and into the world, since anyone rebuilding this block would first have to fake a 2009 issue of The Times. And it was its author's statement of motive, requiring no explanation: this machine was started in the days when banks were being bailed out.

There is a smaller detail besides. The 50 bitcoins rewarded by the genesis block are still sitting there, and they can never be spent.

Satoshi never wrote the genesis block's output into the nodes' transaction database, so at the protocol level there is simply no spendable path for it. Bitcoin's first money was dead money from birth.

### 2.2 The First User

The first person to run the software was Hal Finney.

He was 52, a cryptography engineer at PGP. PGP was the most famous encryption software of the 1990s, and its author, Phil Zimmermann, had been investigated by the US government on charges of "exporting munitions," because in those years strong encryption sat on the US munitions control list.

In the early hours of January 11, 2009, Finney posted on Twitter:

> Running bitcoin.

The next day the first transfer happened: 10 bitcoins, from Satoshi's address to one belonging to Finney, packed into block height 170. The mining reward at the time was 50 coins. Nine days into its life, the network was already doing the only thing it would ever do: moving a number from one address to another.

Later, countless people suspected Finney was Satoshi, because the timing, the technical background and the geography all fit too well. He always denied it. In 2013 he put it more bluntly: he was just the ordinary guy who received the first transaction.

### 2.3 A Machine That Adjusts Itself

Bitcoin has one design that is easy to miss and impossible to do without: difficulty adjustment.

Hash power on the network rises and falls: when people come, machines multiply; when they leave, machines go away. Left alone, block production would drift. Satoshi's approach was direct. Every 2,016 blocks, about two weeks, the system looks at how long those 2,016 blocks actually took, and raises the difficulty if they came too fast, lowers it if too slow.

::: info What difficulty adjustment actually measures

The goal is to hold the block interval near ten minutes. Difficulty is set from the ratio of "the time the last 2,016 blocks really took" to "2,016 × 10 minutes": faster than two weeks, difficulty goes up; slower, it goes down. If hash power doubles, difficulty catches up two weeks later and blocks return to ten minutes, with no human involved at any point.

:::

So Bitcoin's supply needs no manager: no central bank meeting, no committee vote, only arithmetic. It is also why the thing later proved so hard to kill. It has no switch that can be turned off.

---

## III. Two Years of Worthlessness

### 3.1 Two Pizzas

In the early hours of May 18, 2010, a post appeared on the BitcoinTalk forum. The user was called laszlo, and the title was "Pizza for bitcoins?"

> I'll pay 10,000 bitcoins for 2 pizzas... probably a couple of large ones so I have leftovers the next day. I like onions, peppers, sausage, mushrooms, tomatoes, pepperoni. Just standard stuff, no weird fish toppings please.

At the market price you could find at the time, 10,000 bitcoins were worth about $30 to $40. Two large pizzas with delivery came to roughly the same.

On May 22, a 19-year-old in California took the order, under the name jercos. He had no Bitcoin wallet of his own. He ordered from Papa John's with a debit card, had the pizzas delivered in Jacksonville, Florida, and received the 10,000 coins. On-chain records put the transaction in block 57,043.

Laszlo Hanyecz replied that day: "I just want to report that I successfully traded 10,000 bitcoins for pizza. Pictures attached. Thanks jercos!"

The pizzas later got a name: the most expensive pizza ever. At May 2026 prices, those 10,000 coins are worth about $778 million, roughly $78,000 apiece. The community made May 22 "Bitcoin Pizza Day" and recalculates the value every year, like taking the temperature of a piece of history.

There was no swindler in that trade, no speculation, and no loser. A programmer who wanted pizza met a young man willing to make a food run, and they used something that had no price as money once.

### 3.2 A Faucet of 19,700 Bitcoins

On June 11, 2010, the developer Gavin Andresen announced on the forum that he had built a website where every visitor could solve a captcha and receive 5 bitcoins. He seeded it with 1,100 coins of his own.

That faucet ended up giving away about 19,700 bitcoins and ran until it closed in 2012. At September 2026 prices, that is about $1.6 billion.

This was nobody's marketing budget; the money was his. All he wanted was a network where more people held coins.

### 3.3 One Hundred Eighty-Four Billion Bitcoins

On August 15, 2010, a programmer testing code noticed something strange.

He saw a block on the chain, height 74,638, holding a transaction with two outputs, each reading 92,233,720,368.54277039 bitcoins, for a total of 184,467,440,737.

Bitcoin's total supply is capped at 21 million. **This single transaction conjured more than 184 billion out of thin air.**

::: danger How the overflow worked

The program stored amounts in signed 64-bit integers, a type with a finite maximum. When the transaction's two outputs were added together the sum went past that limit, overflowed, and was treated as a negative number, so every check of the form "the total cannot exceed 21 million" passed.

:::

The developer who found it was Jeff Garzik, who posted a warning on the forum. Satoshi's reply was one sentence: "It's a bad block." He submitted a patch adding two checks, and at 23:48 that night released version 0.3.10 with signed binaries for three platforms.

From discovery to a downloadable patch took about five hours.

Nodes upgraded one after another, the honest chain kept mining, and at height 74,691 it finally overtook the chain carrying 184 billion coins. The network reorganized. The money was erased from the ledger as if it had never existed.

There are two ways to read this. The good one: a bug capable of killing Bitcoin was fixed within hours, the chain grew its way back on its own, and no user lost a coin. The bad one: at that moment, the entire "core development team" was one person.

### 3.4 Mining Pools, and a Magic: The Gathering Domain

In November 2010, the Czech programmer Marek Palatinus built the world's first mining pool, later known as Slush Pool.

Until then, everyone mined whole blocks alone. In an era when hash power was climbing fast, that could mean waiting months for a single 50-coin reward. A pool gathers hash power and pays out by contribution, turning income into a steady trickle of small sums. Bitcoin mining's basic business model was set at that moment.

That same year, a man named Jed McCaleb did something small. Back in 2006 he had wanted to build a site for trading Magic: The Gathering cards online, and registered a domain from the abbreviation Magic: The Gathering Online eXchange, which is to say Mt. Gox. He built for three months, lost interest, and dropped it. In 2010, seeing that the Bitcoin community needed a place where anyone could buy and sell, he put that idle domain to work.

Four years later, the domain would be the name of a bankruptcy case.

### 3.5 Satoshi Leaves

On December 5, 2010, a small thing touched a nerve: WikiLeaks began accepting Bitcoin donations.

He wrote a passage on the forum, uncharacteristically tense:

> No, don't "bring it on." The project needs to grow gradually so the software can be strengthened along the way. I make this appeal to WikiLeaks not to try to use Bitcoin. Bitcoin is a small beta community in its infancy. You would not stand to get more than pocket change, and the heat you would bring would likely destroy us at this stage.

A week later, on December 12, 2010, he made his last forum post: releasing version 0.3.19, adding some limits to resist denial-of-service attacks, and noting that safe mode was not finished.

In April 2011 he sent his last email to the developer Mike Hearn. After that he vanished completely: he sold not one coin, left no back door, named no successor, and never appeared during any price surge.

When he left, the price of Bitcoin was around one dollar.

---

## IV. It Becomes Money for the First Time

### 4.1 One Dollar

On February 9, 2011, the price on Mt. Gox touched one dollar for the first time.

It was the first time the whole affair turned into a price event: a unit generated by code standing equal to a green sheet of paper with Washington's face on it.

The word started appearing on Slashdot, on NPR, and in a row of mainstream financial pages. In June, Gawker published a report on the darknet market Silk Road, putting Bitcoin and "drug dealing" into the same sentence for the first time, and the price shot up to $31.91.

Then it fell. By November the price was back near two dollars.

From 30 cents to $31.91, and from $31.91 back to $2. Bitcoin's first bubble and its first crash both finished inside six months. The shape would repeat many times over the next fifteen years, each time larger and longer.

Some serious things grew that year too. BitPay was founded in May 2011 to handle merchant payments: a shop could price in dollars, accept bitcoin, and convert to dollars the same day, moving the risk of price swings off the merchant. The Electronic Frontier Foundation (EFF) began accepting bitcoin donations in January, stopped in June on the grounds that "this new currency system lacks legal precedent," and resumed in May 2013.

The acceptance everyone was watching came from WikiLeaks, the very one Satoshi had publicly argued against. They did not listen. The US Senate and the Department of Defense then began discussing Bitcoin and WikiLeaks in the same breath.

What Satoshi feared did happen, and it did not destroy Bitcoin. His exit a month earlier can be read as a form of response: a project with no founder to subpoena is one you cannot lean on.

### 4.2 The Arrest in the Library

In February 2011, a young man named Ross Ulbricht launched a darknet market reachable only through Tor: Silk Road. It took nothing but bitcoin, and it sold drugs, forged documents, and worse things still.

Its existence gave Bitcoin a brutal early use case, and it put the word "bitcoin" in front of law enforcement for the first time.

On the afternoon of October 1, 2013, Ulbricht was pinned down by two investigators in the public library in San Francisco's Glen Park. They staged a lovers' quarrel in the reading area, and while he was distracted they seized his laptop: it was open, and the encrypted wallet was unlocked.

The day is quoted again and again because it is a classic lesson about security: the cryptography was never broken. What was broken was the man sitting at the computer.

The FBI seized Silk Road's servers and tens of thousands of bitcoins. In June 2014 the US Marshals Service auctioned nearly 30,000 of them, and the venture investor Tim Draper bought the lot. On May 29, 2015, Ulbricht was sentenced to two life terms plus forty years, without parole.

Ten years later, on January 21, 2025, Trump signed an unconditional pardon on his second day back in the White House.

### 4.3 Cyprus, a Free Advertisement

In March 2013, to secure an international bailout, Cyprus announced a one-off levy on bank deposits: 6.75% on accounts under 100,000 euros and 9.9% above that.

The announcement sent Cypriots to queue at cash machines, and banks closed for days. Parliament ultimately rejected the plan, replacing it with a direct writedown of uninsured deposits.

Bitcoin spent that month on its first rally driven by a real-world event, climbing from the low 30s to $266 on April 10. A small island's banking crisis had become a living advertisement for the question "why do we need a currency no government controls?"

Then it crashed again. On April 11, Mt. Gox suspended trading "to let the market cool off"; when it resumed, the price briefly fell to $55.59.

In November of that year Bitcoin passed $1,000 for the first time. Late November into early December, Mt. Gox quoted $1,163, while Bitstamp briefly showed $1,242, a 7% gap between two exchanges. One of them was on its way to bankruptcy, and its customers did not know it yet.

On December 5, 2013, the People's Bank of China and four other ministries issued a notice barring financial institutions and payment companies from Bitcoin business, and Baidu immediately took down its bitcoin payment option. The price fell from about $1,150 to near $750 that day.

That year also brought a small thing the press photographed endlessly: a coffee shop in Vancouver set out the world's first Bitcoin ATM. Put cash in, get a string of digits on an address. At the time, most people did not know what a wallet was.

---

## V. Mt. Gox: How an Exchange Died

### 5.1 Seventy Percent of the World

In 2013, Mt. Gox handled about seventy percent of all Bitcoin trading.

It was not a good company. It broke down often, withdrawals took weeks or months, and support barely answered; in 2013 the US Department of Homeland Security took $5 million from its accounts for failing to register as a money transmitter with FinCEN; it halted dollar withdrawals in June, announced a "full recovery" in July, and by September only a trickle of dollars could be withdrawn at all.

An exchange with seventy percent of global volume had in effect been shut out of the US banking system, and almost all of its customers were still placing orders as usual.

### 5.2 February 2014

On February 7, 2014, Mt. Gox halted all bitcoin withdrawals, saying it needed "a clear technical view of the currency flows." On February 10 it put out a press release blaming "transaction malleability," a software flaw that lets someone alter a transaction's details so that a payment already made appears not to have happened.

On February 20, Mt. Gox's quotes fell more than 20% below other exchanges. The number said something simple: the market believed bitcoins held on that exchange would not be paid out.

On February 24 all trading stopped and the site went dark. A leaked internal document said the company was insolvent, with 744,408 bitcoins stolen and unnoticed for years.

On February 28, Mt. Gox filed for bankruptcy protection in Tokyo. The announcement said 750,000 of customers' coins and 100,000 of the company's own were gone, about 7% of all bitcoins then in existence, worth roughly $473 million.

Three weeks later, on March 20, the company posted an update: 199,999.99 bitcoins had been found in an old wallet used before June 2011. The missing count fell from 850,000 to 650,000.

That detail cuts deeper than any number in the story. Those 200,000 coins had been sitting in a forgotten wallet for years while, over the same period, customer withdrawal requests were refused for months.

This was not a sudden death by hack but a two-year bleed: from late 2011, coins were carried out of the hot wallets a little at a time, and nobody noticed, and nobody really reconciled the books. The Tokyo security firm WizSec concluded in 2015 that most or all of the missing bitcoin had been taken directly from the hot wallets, starting in late 2011.

### 5.3 The Ending

In August 2015, Japanese police arrested CEO Mark Karpelès on charges of fraud, embezzlement, and manipulating system data.

On March 14, 2019, the Tokyo District Court ruled: it found him guilty of falsifying data and inflating the company's holdings by $33.5 million, and sentenced him to 30 months in prison, suspended for four years. On the charges of embezzlement and aggravated breach of trust it acquitted him, finding no malice.

Payouts dragged on longer still. In October 2021 the creditors' meeting approved a rehabilitation plan; in July 2024 distribution finally began.

There is a cruel arithmetic here: the payout was calculated at old prices. Coins held back for a decade turned into the best-performing asset on creditors' books. Bitcoin rose from $500 in 2014 to $60,000 in 2024, and that gain rescued a group of people who had originally been the ones robbed.

### 5.4 What This Really Taught the Industry

First, exchanges have to publish proof of reserves. The event that pushed this through was not Mt. Gox in 2014 but FTX in 2022, though the two belong in the same column of the ledger.

Second, do not use an exchange as a wallet. That old line has since been confirmed at least five times.

| Year | Event | Loss |
| :--- | :--- | :--- |
| 2014 | Mt. Gox bankruptcy | 850,000 bitcoins, of which 200,000 were later found in an old wallet |
| 2015 | Bitstamp hack | 19,000 coins |
| 2016 | Bitfinex hack | 119,756 coins, about $72 million at the time |
| 2017 | NiceHash hack | 4,700 coins |
| 2019 | Binance hack | 7,000 coins |
| 2022 | FTX bankruptcy | Customer funds misappropriated; the exchange simply vanished |

Third, and most important: **exchanges fall, the protocol does not.**

---

## VI. Civil War: The Blocksize War

### 6.1 One Megabyte

In 2010, Satoshi added one line of code: no block may exceed 1MB.

At transaction sizes of the day, that worked out to three to seven payments per second. It was entirely sufficient in 2010, when the whole network saw only a handful of transactions a day.

By 2015 blocks were filling up at peak times, confirmation times turned unpredictable, and a genuine fee market appeared for the first time: pay more, get packed sooner.

So the question became sharp: change the limit or not?

### 6.2 The Two Camps

Those who wanted a bigger limit put it plainly: Bitcoin exists to pay with, and a payment system handling three payments at a time is pointless; when blocks are full, scale them up, or users will go elsewhere. They proposed 8MB, or 2MB, or simply leaving the size to the miners.

Those who wanted it untouched were just as plain: the bigger the block, the more bandwidth and disk a full node needs, and the fewer people can verify the ledger themselves. Bitcoin's value lies in anyone being able to verify, not in anything being able to get on chain. Scaling belongs off-chain.

By that point the two sides no longer agreed on what Bitcoin was: one said a payment network, the other a settlement layer and a reserve asset. Bitcoin ended up taking the second road.

### 6.3 Three Failures

On August 15, 2015, Gavin Andresen and Mike Hearn released Bitcoin XT: an 8MB block limit, doubling every two years, activating at 75% hash power support.

Its node count briefly approached a thousand, far below the activation threshold. In January 2016, Mike Hearn announced on his blog that Bitcoin was "a failed experiment," sold all his bitcoins, and left.

February 2016 brought two things at once. Bitcoin Classic was released, proposing a simple 2MB; and the Hong Kong roundtable, where several core developers and representatives of the major mining pools talked a legally meaningless verbal agreement into existence in one room: SegWit first, a 2MB hard fork afterwards.

Neither path held. Classic's nodes crashed in a large-block test and the momentum drained away; the hard-fork half of the Hong Kong agreement was never delivered.

In October 2016 came Bitcoin Unlimited, which handed the block size decision to the miners: mine whatever size you like, pushing the argument toward a head-on collision the following year. On July 9 of that same year the second halving arrived (block 420,000, reward down to 12.5 coins), with the price around $650 and the war still running.

| Proposal | Date | Claim | Outcome |
| :--- | :--- | :--- | :--- |
| Bitcoin XT | August 2015 | 8MB, doubling every two years, 75% activation | Node count far below the threshold; momentum faded |
| Bitcoin Classic | February 2016 | A plain 2MB | Nodes crashed in a large-block test |
| Bitcoin Unlimited | October 2016 | Block size decided by miners | Pushed the argument into 2017 |

### 6.4 2017: Three Things Crowded into One Year

On May 23, 2017, during the Consensus conference in New York, 58 companies (exchanges, mining pools, payment firms) signed an agreement: activate SegWit first, hard fork to 2MB three months later. The signatories together controlled more than eighty percent of the network's hash power.

Not one core developer signed it.

Over the next three months, three things squeezed together:

- **August 1**: part of the community that rejected this path forked a new chain out of Bitcoin, called Bitcoin Cash (BCH). Its idea was simply "blocks should be big," and it took about 10% of the hash power and the market value.
- **August 24**: SegWit activated on mainnet (block 481,824). It moves a transaction's signature data into a separate "witness" area, letting a block hold more transactions while fixing the old nuisance of transaction malleability.
- **November 8**: the organizers called off the 2MB hard fork, because the hash power behind it had not materialized and a hard fork would only have produced yet another forked chain.

### 6.5 What the War Left Behind

For the full account there is Jonathan Bier's 2022 book "The Blocksize War." Its summary beats any slogan: the war was never about block size, but about who gets to decide what Bitcoin is on everyone's behalf, without any explicit authority to do so.

For three years, companies, pools, developers, conferences and proposals took turns in the ring, and Bitcoin changed in no one's direction. That outcome is both its luck and its curse: it is extraordinarily hard to capture, and extraordinarily hard to upgrade.

---

## VII. Mania and Ice Age

### 7.1 The Same Day

On December 17, 2017, Bitcoin set a record high of $19,783 on Coinbase.

On the same day, bitcoin futures opened at the Chicago Mercantile Exchange.

The coincidence was soon written up by the Federal Reserve Bank of San Francisco in a research brief titled "How Futures Trading Changed Bitcoin Prices." Its logic: before a market existed where one could legally sell short, the optimists' bids had no counterparty; once the futures market was deep enough, pessimists could take the other side.

The brief compared the decline after December 17, 2017 with the two earlier crashes and noted that this one fell further and lasted longer.

So it proved: from December 2017 to December 2018, Bitcoin fell 84%, at one point to around $3,200. Mining rigs were dumped at scrap prices, exchanges laid people off, a run of project founders walked away, and the word "blockchain" left startup pitch decks with remarkable speed.

The by-product of that cycle was the ICO: thousands of projects raised money on a whitepaper, and the great majority delivered nothing. Bitcoin took no part in the mania, but it was dragged down with the mania's collapse.

### 7.2 What Grew Out of the Ice

The development worth remembering from 2018 was not a price but the Lightning Network.

::: info What the Lightning Network does

It does not need every payment written to the main chain. Two people open a shared account, their back-and-forth is recorded in that private ledger, and when it comes time to settle, the final result is written to Bitcoin's main chain once. A single on-chain transaction can therefore carry virtually unlimited small payments.

:::

In January 2018, three independent implementations came online on mainnet one after another. In 2019 a "Lightning Torch" passed from person to person on Twitter, carrying the technology from developer circles to ordinary users; among the participants was Twitter's founder, Jack Dorsey.

By 2019 the Lightning Network's public channel capacity had reached the scale of a few hundred bitcoins. By investment standards the number is trivial; its meaning lies elsewhere. It proved that Bitcoin could move payment capacity to a second layer without touching the base protocol.

In June 2019 the price recovered from around $3,200 to above $13,000. One reason was Facebook's Libra announcement on June 18: a social network trying to issue its own global currency, which ended up pushing more people to ask seriously why a currency should belong to no company at all.

### 7.3 The Forked Chain Splits Again

A year after forking away from Bitcoin, Bitcoin Cash split again on its own.

On November 15, 2018, BCH hard forked into two chains: BCH ABC (which kept the BCH name) and BCH SV. The two sides fought a real hash war, each trying to reorganize away the other's blocks. The war burned a great deal of real electricity, and what it produced was two chains surviving and fading, each on its own.

---

## VIII. The Institutions Arrive

### 8.1 March 12, 2020

On that day, the World Health Organization declared COVID-19 a global pandemic.

On the same day, Bitcoin lost nearly forty percent of its value within hours, briefly falling below $4,000.

A thing designed as a "safe haven in a crisis" fell harder than stocks on the first day of global panic. That crash became the counterexample attached to every "digital gold" narrative afterwards, and the first proof that it was still a highly leveraged risk asset.

Two months later, at 19:23:43 UTC on May 11, block 630,000 was mined and the reward fell from 12.5 coins to 6.25. The third halving. The price was around $8,600 and the market barely reacted; everyone had known the date for a long time, and everyone knew the electricity bill had to be paid.

### 8.2 A Software Company Bought Bitcoin with Half Its Cash

On August 11, 2020, MicroStrategy, a publicly listed business intelligence software company, announced it had bought 21,454 bitcoins for $250 million.

In the context of the time the sentence sounded absurd. A listed software company had swapped half its cash for a code asset with no cash flow, no sovereign guarantee, and price swings above 50%. Wall Street's first reaction was to ask whether management had lost its mind.

Over the next two years the company used convertible bonds, share sales, and preferred stock to turn this into a self-reinforcing loop: the stock rises, so money can be raised more cheaply; the money buys coins; the coins push the stock higher. By 2024 it had renamed itself Strategy and become the largest institutional holder of bitcoin in the world.

In August 2020, though, it was only the first. In October of the same year PayPal added cryptocurrency buying and selling for its users: for ordinary people, the first chance to buy a bitcoin inside a payment app they had already used for a decade.

### 8.3 The Hijacking on Twitter

On July 15, 2020, Twitter suffered the largest account hijacking in its history.

Attackers used social engineering to obtain access to internal tools and took over 130 high-profile accounts: Obama, Biden, Musk, Bill Gates, Apple, Uber. Within the same hour those accounts posted the same tweet: send bitcoin to an address and we will send back double.

Within hours the address had received about 12 bitcoins, roughly $118,000 at the time. Twitter's stock fell 4% that day, the FBI opened an investigation, and three young men were charged, one of them 17 years old.

It was a famous free advertisement, and Twitter picked up the bill.

### 8.4 2021: Three Big Events in One Year

**February 8**: Tesla disclosed a $1.5 billion bitcoin purchase; in March it began accepting bitcoin for cars.

A month later, on May 12, Musk announced on Twitter that payments were suspended, citing the fossil energy used in mining. Bitcoin fell more than 10% that day.

The entry and the exit changed not a line of protocol code, but they turned "Bitcoin's energy problem" into a permanent fixture in mainstream media, a subject still unsettled five years on.

**May 21**: China's State Council Financial Stability and Development Committee met and explicitly called for a crackdown on bitcoin mining and trading. It was the first time China's top leadership named mining directly. Over the following months, mine sites in Inner Mongolia, Sichuan, Yunnan and elsewhere shut down one after another.

Sichuan had concentrated a substantial share of the world's hash power during the wet season; when it stopped, network hash power halved within two months. The hash power did not disappear, it moved: first to Texas and Kazakhstan, then to other US states, Russia, Canada, Paraguay, the UAE, Ethiopia.

**September 7**: El Salvador's Bitcoin Law took effect, making bitcoin legal tender alongside the US dollar. The government released an official wallet and bought another 550 bitcoins on launch day.

The first day was not smooth: the official wallet could not be listed in the app stores, sign-ups overwhelmed the system and it was temporarily shut down, and more than a thousand people marched in San Salvador, burning a tire.

That story took four more years to finish. As one condition of a bailout agreement with the IMF, El Salvador amended the law in January 2025: bitcoin is no longer a currency that must be accepted. Merchants may take it or not.

### 8.5 An Upgrade Without Controversy

On November 14, 2021, Bitcoin's Taproot upgrade activated at block 709,632.

It did two things: replace signatures with shorter, more efficient Schnorr signatures; and make complex scripts (multisig, timelocks, conditional payments) look on chain exactly like an ordinary transfer. The result is cheaper, and harder to tell apart.

The activation process deserves a note of its own. It used a mechanism called "Speedy Trial": miners signal support in the block header, and at 90% the upgrade locks in and activates. No hard fork, no quarrel, no forked chain.

Four years after the blocksize war ended, Bitcoin completed an upgrade nobody wanted to split over. It also showed that the war had settled one thing: to change Bitcoin you must first persuade the majority, not the big companies.

On November 10 the price touched about $69,000 and the market cap passed $1.2 trillion.

Seventeen months earlier it was below $4,000. Two months earlier, a small Central American country had written it into law; two months later it sat on the balance sheet of a public company.

---

## IX. Reckoning

### 9.1 Starting with LUNA

In May 2022, a project called Terra collapsed.

It had two tokens: UST, a stablecoin claiming to be pegged to the dollar, and LUNA, the governance token. The peg was maintained by an algorithm: when UST fell below a dollar, arbitrageurs could burn UST and mint LUNA, and the reverse. In calm times the mechanism looked like automated market making; out of control, it was a money printer.

On May 9, UST lost its peg. Within three days LUNA's supply exploded from a few hundred million tokens to several trillion, and its price fell from $60 to nearly zero. The two tokens had been worth about $40 billion together; that evaporated in days, and the market's trust in "algorithmic stablecoins" went with it.

The founder, Do Kwon, moved through Singapore and Serbia, was arrested in Montenegro in March 2023, and was extradited to the United States at the end of 2024 to face fraud charges.

The chain reaction started at once. In June the crypto hedge fund Three Arrows Capital failed to meet a margin call and filed for bankruptcy in July; that same month the lending platform Celsius froze withdrawals and filed, and Voyager collapsed in the same week. Bitcoin fell from $69,000 in November 2021 to around $17,600 in June 2022.

### 9.2 FTX

In that cycle, all eyes were on FTX. Its founder, Sam Bankman-Fried (SBF), appeared at congressional hearings in a T-shirt and shorts, made the cover of Forbes, and was one of the largest political donors in the United States. Its valuation reached $32 billion.

On November 11, 2022, FTX filed for bankruptcy. Customer funds had long since been moved to plug holes in affiliated companies, and the thing came to light because a balance sheet leaked to the press.

The lesson it taught was exactly the same as Mt. Gox's, only twenty times larger: what was stolen was not coins, but the private keys people had handed over.

On November 2, 2023, SBF was convicted on seven counts of fraud and conspiracy. On March 28, 2024, he was sentenced to 25 years and ordered to forfeit $11 billion. That same month Binance's founder Changpeng Zhao pleaded guilty to money-laundering violations, and Binance paid a $4.3 billion fine.

Bitcoin bottomed that year at $15,476.

---

## X. Inscriptions, ETFs, and the Fourth Halving

### 10.1 What a Pixel Skull Stirred Up

On December 14, 2022, the developer Casey Rodarmor "inscribed" the first Ordinals inscription on Bitcoin: a black-and-white pixel skull.

The mechanics are not complicated. Bitcoin's smallest unit is the satoshi, one hundred million of which make one bitcoin. SegWit in 2017 and Taproot in 2021 left two rules behind: signature data costs a quarter as much to store as ordinary data, and certain Taproot script paths have no size limit.

::: note How the inscription gets in

Rodarmor puts any file at all, an image or text or audio, inside a conditional branch that will never execute, then numbers every satoshi and binds the data to one particular satoshi. From the protocol's point of view all of this is legal: Bitcoin never said a block may contain nothing but transfers.

:::

The market response was immediate. On January 21, 2023 the Ordinals protocol was released; on March 8 a developer using the name domo built the BRC-20 token standard on top of it, inscribing JSON text on chain to "deploy," "mint" and "transfer" tokens; by April 8 the inscription count passed one million; by the end of 2023, more than fifty million.

Block space became scarce. In May 2023 the BRC-20 minting wave pushed single-transaction fees into the tens of dollars and Binance briefly suspended bitcoin withdrawals. In some blocks miners earned more in fees than in the block subsidy, the first time in Bitcoin's fourteen years that fees displaced the subsidy at the level of a single block.

On November 23, 2023, one transfer paid a fee of 83.65 bitcoins, about $3.1 million: the user had meant to send 55.77 coins, and the difference never went back to their change address, becoming miner revenue instead. A week later the pool that mined the block said it would return the money if the original owner could prove their identity.

The community argued over it again, with heat second only to the blocksize war. One side called it an abuse of the scarcest resource, block space; the other said miners getting paid was simply the protocol working. Some pushed pools to filter out inscription transactions, with limited effect, since the protocol itself does not distinguish "money transactions" from "data transactions."

### 10.2 BlackRock's Filing

On June 15, 2023, BlackRock filed for a spot bitcoin ETF with the US Securities and Exchange Commission.

The weight of the filing came from who filed it. BlackRock manages about $9 trillion and had filed for 575 ETFs, of which exactly one had been rejected. The market moved at once: that day bitcoin rose from around $25,000 to $26,000.

The decisive step had happened a year earlier. In June 2022 Grayscale Investments sued the SEC on the grounds that the commission had approved bitcoin futures ETFs while rejecting spot ETFs tracking the very same market, a distinction with no reasonable explanation.

On August 29, 2023, the US Court of Appeals for the DC Circuit ruled against the SEC, finding that it had "failed to adequately explain" its rejection.

That ruling is the direct reason the ETFs went through in January 2024.

### 10.3 January 10, 2024

On January 10, 2024, the SEC issued orders approving, on an accelerated basis, the listing of 11 spot bitcoin exchange-traded products.

SEC Chair Gary Gensler kept his own position while approving them: the commission's earlier judgment had not been wrong, the court had simply found the explanation insufficient, which made approval "the most sustainable path forward."

On the morning of January 11 the products began trading. By that afternoon turnover had reached about $4.6 billion.

From that day, anyone with a brokerage account could buy exposure to the price of a bitcoin: no exchange to sign up for, no private key to manage, no platform to worry about failing. For something designed fifteen years earlier to need no financial intermediary, it was a turn worth noticing.

### 10.4 The Fourth Halving, and a Block Stuffed with Fees

In the early morning of April 20, 2024, block 840,000 was mined and the reward fell from 6.25 coins to 3.125.

The fees in that block are a detail worth recording. Casey Rodarmor, the creator of Ordinals, launched a new token protocol called Runes in the same block, and the inscription activity pushed its fees above 37 bitcoins, more than $2.5 million at the time and twelve times the block subsidy.

That day, fees far outran new coins in miners' revenue.

The other half of the story showed up quickly: Runes and Ordinals cooled within months. By the end of 2024 inscriptions had fallen from several hundred thousand a day at the peak to under forty thousand, and fees fell with them. Fees can step up, but they arrive with speculation and leave with it.

Set the halvings mentioned here side by side and the slope of the curve becomes plain:

| Halving | Date | Block height | Reward | New coins per day |
| :--- | :--- | :--- | :--- | :--- |
| Second | July 9, 2016 | 420,000 | 25 → 12.5 coins | 1,800 |
| Third | May 11, 2020 | 630,000 | 12.5 → 6.25 coins | 900 |
| Fourth | April 20, 2024 | 840,000 | 6.25 → 3.125 coins | 450 |
| Fifth | 2028 (expected) | — | 3.125 → 1.5625 coins | 225 |

### 10.5 One Hundred Thousand

From June to July 2024, police in the eastern German state of Saxony moved about 50,000 bitcoins seized from the operator of a shuttered piracy site to exchanges in batches, 49,858 coins in total, for about $2.88 billion.

At November 2024 prices, the German government left about $1.6 billion on the table. The episode is quoted again and again as proof that governments do not understand Bitcoin, but its more accurate meaning is this: a law enforcement agency's logic is to convert seized assets into cash quickly, not to time the market.

On July 27, 2024, Trump spoke at the Bitcoin conference in Nashville, promising that if elected he would make the United States "the crypto capital of the planet" and build a national bitcoin reserve. His line "never sell your bitcoin" ended up on countless T-shirts.

On December 4, bitcoin passed $100,000 for the first time in its history, touching about $103,900 that night. Three weeks earlier it had been near $68,000.

What the market was trading was not a change in Bitcoin's fundamentals but the expectation that Washington would stop treating the thing as an enemy. Bitcoin had spent fifteen years turning a political question into a price question.

It rose about 120% over the year. Strategy's holdings passed 400,000 coins.

---

## XI. From 126,000 to 58,000

### 11.1 Bitcoin in the Treasury

On January 20, 2025, Trump was sworn in. Later that month bitcoin set a record high at the time of about $109,000.

On March 6 an executive order was signed establishing a "Strategic Bitcoin Reserve." Expectations ran high, and the content was notably restrained: the reserve would be funded from bitcoin finally forfeited in criminal and civil proceedings, with no commitment to buy a single new coin. The White House crypto lead put the figure at about 200,000 coins, then worth roughly $17.4 billion.

After the announcement the price fell more than 5% at one point, below $85,000, and recovered to $88,000 two hours later. It achieved a symbol, not a bid.

Starting the year above $90,000, bitcoin crossed $110,000 in May, $120,000 in July, and set a record high of $126,193 on October 6. It was up more than 30% on the year, and the consensus was that institutionalization had smoothed the volatility out.

That consensus lived four days.

### 11.2 The Four Hours of October 10

At 20:50 UTC on October 10, 2025, Trump announced an additional 100% tariff on Chinese goods along with software export controls.

US stock markets had already closed. Among global risk assets, the only market still trading was crypto.

Over the following four hours came the largest forced liquidation in the industry's history:

- about $19 billion in leveraged positions were liquidated, across roughly 1.6 million accounts;
- a single bitcoin long was wiped out within 40 minutes, the price falling from $122,000 to near $104,000, a drop of more than 14%;
- altcoins fell far harder, with some tokens briefly quoting 99% lower on exchanges;
- market makers pulled their orders en masse, order-book depth collapsed by about 98% inside 40 minutes, and the liquidity vacuum turned the plunge into free fall.

The scale far exceeded the COVID crash of 2020 and the FTX collapse of 2022.

Analysts explained it in near-identical terms: the news was not what did the damage. The market had filled up with leverage before the news arrived, and crypto's leverage is held in place by automatic liquidation. When a market's own risk control is the source of selling pressure, its stability depends on no one being liquidated at the same time, and that premise fails in front of any shock.

### 11.3 2026: A "Civilized" Bear Market

From $126,193 in October 2025, bitcoin ground downward to a low of $57,820 on July 1, 2026, a maximum drawdown of 54%.

Set beside the earlier cycles, that number is strikingly mild:

| Cycle | High | Low | Drawdown |
| :--- | :--- | :--- | :--- |
| 2011 | $31.91 | $2.05 | 94% |
| 2013–2015 | $1,163 | $152 | 87% |
| 2018 | $19,783 | $3,122 | 84% |
| 2022 | $69,000 | $15,476 | 78% |
| 2025–2026 | $126,193 | $57,820 | 54% |

The mildness comes from a changed buyer base. In the first half of 2026, US spot bitcoin ETFs went through their longest stretch of outflows ever: a run of 13 straight days of net redemptions ending in early June, about $4.3 billion in total; then a 10-day run of about $2.7 billion in early July.

The figure that really stings comes from Strategy, once the model of "buy only, never sell." On June 29, 2026, it announced a "bitcoin monetization program," allowing sales under specific conditions to pay preferred dividends, service debt, and fund operations.

Its second-quarter report on July 30 carried two sets of figures. The first: 843,775 bitcoins held as of July 26, up 25% year to date, with $218.4 million of bitcoin sold during the year under the monetization program. The second: an operating loss of $8.33 billion for the quarter, $8.32 billion of it unrealized losses on digital assets; a year earlier the same line showed $14 billion in unrealized gains.

When the last buy-only buyer starts managing its own balance sheet, the market's marginal bid disappears.

So the first half of 2026 produced this combination: in the first week of February bitcoin fell from $79,000 to around $60,000; June brought another slide, to $57,820 on July 1; over the same stretch tech stocks rose, and bitcoin followed no asset class at all.

By August the wind had turned again: bitcoin rebounded from around $62,000 to above $80,000, up more than 20% on the month, and US spot ETFs had their best month of 2026.

On September 19, 2026, bitcoin was quoted around $81,000.

---

## XII. Two Ledgers

### 12.1 The Missing Coins

Bitcoin's supply is capped at 21 million coins, of which about 20.08 million have been mined, 95.7% of the total.

Not all mined coins are still in circulation.

Some private keys are gone for good: a hard drive thrown out, a computer sold, a password forgotten. A case that gets quoted often is James Howells, an IT engineer in Wales. In 2013 he threw away a hard drive holding the private keys to 7,500 bitcoins, and spent the next decade applying to excavate a landfill site in Newport; the courts ultimately refused.

Another slice belongs to a cluster of addresses that has never moved. In 2013 the Argentine researcher Sergio Demian Lerner analyzed a non-random pattern left behind by one early miner, which he named Patoshi, and found that this miner controlled a substantial share of the hash power at the time, mining roughly 22,000 blocks; at 50 coins each, that comes to about 1.1 million bitcoins.

Later estimates revised the range to somewhere between 600,000 and 1.15 million. All of the research agrees on one thing: not a single one of those coins has ever been moved out.

At 2026 prices that is an asset in the hundreds of billions of dollars. If it belongs to someone, that person is one of the richest in the world; if it is already beyond reach, it is the largest accidental loss in human history.

The only on-chain "movement" has come from others: in February 2026 someone sent 2.56 bitcoins to the genesis address. Those 50 genesis coins can never be spent at the protocol level, but the address can still receive transfers.

One estimate puts permanently lost bitcoin at between three and four million coins. It is an estimate nobody can verify precisely, based on holdings in addresses that have not moved for years. It cuts two ways: supply is tighter than the books suggest, and on a ledger that cannot be reversed, a personal mistake costs as much as a hack.

### 12.2 The Problem Bitcoin Itself Did Not Solve

Those nine pages in 2008 covered the issuance curve, proof of work, and the longest chain, but left a more basic question unanswered:

once new coins stop being issued, who pays to protect the network?

Seventeen years later the question can be put in numbers. On September 19, 2026 the figures looked like this:

| Item | Value |
| :--- | :--- |
| Block subsidy | 3.125 coins per block |
| New coins per day | about 450 |
| Value of the subsidy that day | about $36 million |
| Fee revenue across the chain that day | about 3 coins, roughly $240,000 |
| Fees as a share of miner revenue | under 1% |

In other words, the day-to-day cost of protecting a $1.6 trillion asset is paid almost entirely in newly issued coins, with users' payments covering only a rounding error.

::: warning The timetable for this problem

The curve is fixed: 225 coins a day after the 2028 halving, 112.5 after 2032, which at today's prices is about $9 million a day, and zero after 2140.

:::

Fees are not incapable of rising. In 2023 and 2024 the inscription and BRC-20 wave pushed daily fees above half the subsidy, and in some blocks fees exceeded the subsidy outright. But when the tide went out, the rate fell back to 1 to 2 satoshis per byte, the default minimum for node relay, which means almost nobody is bidding for priority inclusion.

There is a more optimistic reading: if Bitcoin's role is long-term value storage, it does not need high-frequency use; so long as the occasional large transfer is willing to pay up, the security bill gets covered. The trouble is that the volume and frequency of such transfers do not currently close a $36 million daily gap.

Both readings hold, because the answer will only become visible in the 2030s. Bitcoin has stretched this problem across a span so long that each generation can mistake its own stretch for a period of stability.

### 12.3 The Arithmetic of Hash Power

A question that comes up often: what can actually be done with more than half the hash power.

| It can | It cannot |
| :--- | :--- |
| Void a transaction, or push out one already confirmed | Print coins that were never issued |
| Break "no reversals," so people stop trusting confirmations | Steal the coins in someone else's address |
| Rewrite recent blocks for a short while | Change the 21 million cap, or forge someone else's signature |

So the arithmetic of this arms race has always been plain: what it costs to obtain more than half the hash power, and what doing so would buy.

As of September 2026, the hash power protecting the chain is about 950 EH/s, with difficulty around 132.76 trillion; converted at a mainstream miner's 20 joules per terahash, that corresponds to about 19 gigawatts, and annual electricity consumption of around 160 TWh, comparable to the electricity use of a medium-sized industrial country.

::: note Where these energy numbers come from

The conversion is highly sensitive to its assumptions: at 25 joules per terahash network-wide the figure becomes 24 gigawatts; at 15, it is 14. Every public number for Bitcoin's energy use is this kind of conversion, because nobody can read a live meter for the whole network.

:::

---

## XIII. What It Achieved, and What It Did Not

### 13.1 What It Achieved

A network that has run since the first day of the genesis block and has never once stopped because of an attack. No CEO, no board, no legal entity, no responsible person who can be subpoenaed.

An asset with a market value of $1.6 trillion, written into a US executive order, with the largest asset manager issuing products that track its price.

A proof that a ledger requiring trust in nobody is workable. That sentence sounds like common sense today, but in 2008 it was the thing the cryptography community had failed to build for thirty years.

Its list of failures is longer than most projects' entire lifetimes: a bug that conjured 184 billion bitcoins out of nothing, an accidental hard fork, a three-year war that nearly split the community in two, a string of collapsed exchanges and lenders, three drawdowns deeper than 80%. The sites that collect obituaries have counted more than four hundred "Bitcoin is dead" articles. By their reckoning, Bitcoin dies once every two weeks.

### 13.2 What It Did Not Achieve

It did not become a tool for everyday payments. Satoshi's title was "A Peer-to-Peer Electronic Cash System," and seventeen years later its blocks come every ten minutes, a transaction's fee floats with demand, and most people buy it as an asset rather than spend it as money. Payment moved to second layers and custodial platforms.

It did not solve its own security budget. Fees are under 1% of miner revenue, and the subsidy halves every four years. The problem has been pushed to the 2030s, but it has not gone away.

It did not escape volatility and leverage. The four hours of October 10, 2025 showed that a market driven by automatic liquidation can stampede over itself with no bad news at all.

Nor did it end its internal arguments. In 2025, Bitcoin Core raised the default limit on data relayed by nodes from about 80 bytes to 100KB, setting off another round of conflict. This is not a fork, nor anywhere near one, since node policy is not consensus. But it laid bare a question that 2017 never settled: the protocol is neutral, and the community has never been neutral about what Bitcoin is for. Back then the fight was over capacity; now it is over content.

---

## Epilogue: The Line Is Still There

At 18:15:05 on January 3, 2009, a block was mined with that day's front page of The Times written inside it: the Chancellor on the brink of a second bank bailout.

Seventeen years later, that newspaper's front page is long out of print, and the bailout it described turned out to be the prelude to a series of larger ones.

And the man who wrote "Running bitcoin" did not come to a good end.

Hal Finney was diagnosed with ALS in 2009. For his last years he was almost entirely paralyzed and kept writing code with an eye-tracking device; his final project was software to strengthen the security of Bitcoin wallets. Through those years he kept denying that he was Satoshi, and one of his reasons was very plain: in early 2009 he was training for a full marathon, and his mind was on the track.

He died on August 28, 2014, at 58. His body was received by a cryonics facility.

He once wrote a piece called "Bitcoin and Me," and in it there is a detail: the first time he saw that Halloween email, he knew the thing was worth running right away.

That machine has been running since 18:15:05 on January 3, 2009, and it has not stopped for a single day.

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

News reporting and third-party records:

- "The Blocksize War" (Jonathan Bier, 2022); the Federal Reserve Bank of San Francisco research brief on futures and bitcoin prices
- The Grayscale ruling and the spot ETF approvals (Reuters, August 29, 2023 and January 11, 2024); first-day turnover of US spot bitcoin ETFs, about $4.6 billion
- Tesla suspending bitcoin payments, China's call to crack down on mining and trading, the first day of El Salvador's Bitcoin Law (Reuters, May to September 2021); Trump's pardon of Ross Ulbricht (NPR, CNBC, January 21, 2025)
- The October 10, 2025 liquidation event and the OP_RETURN policy dispute (reviews by multiple institutions and public discussion at the time)

Market and on-chain data:

- Block production, hash power, difficulty, mempool, fees and price: public node APIs and exchange quotes, data taken on September 19, 2026
- Historical highs, lows and drawdowns: calculated from MEXC daily candles
- Inscription counts and BRC-20 fee data: Ordinals explorers and third-party statistics at the time
