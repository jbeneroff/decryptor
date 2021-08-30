# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Post.destroy_all
Cryptocurrency.destroy_all
User.destroy_all

@admin = User.create!(username: 'jbeneroff', email: 'jben@udel.edu', password: '123456')
puts "#{User.count} users created"

@btc = Cryptocurrency.create!(
  name: 'Bitcoin',
  symbol: 'BTC',
  description: 'Bitcoin is a decentralized cryptocurrency originally described in a 2008 whitepaper by a person, or group of people, using the alias Satoshi Nakamoto. It was launched soon after, in January 2009. Bitcoin is a peer-to-peer online currency, meaning that all transactions happen directly between equal, independent network participants, without the need for any intermediary to permit or facilitate them. Bitcoin was created, according to Nakamoto’s own words, to allow “online payments to be sent directly from one party to another without going through a financial institution.” Some concepts for a similar type of a decentralized electronic currency precede BTC, but Bitcoin holds the distinction of being the first-ever cryptocurrency to come into actual use.',
  api_id: 'bitcoin'
)
@eth = Cryptocurrency.create!(
  name: 'Ethereum',
  symbol: 'ETH',
  description: 'Ethereum is a decentralized open-source blockchain system that features its own cryptocurrency, Ether. ETH works as a platform for numerous other cryptocurrencies, as well as for the execution of decentralized smart contracts. Ethereum was first described in a 2013 whitepaper by Vitalik Buterin. Buterin, along with other co-founders, secured funding for the project in an online public crowd sale in the summer of 2014 and officially launched the blockchain on July 30, 2015. Ethereum’s own purported goal is to become a global platform for decentralized applications, allowing users from all over the world to write and run software that is resistant to censorship, downtime and fraud.',
  api_id: 'ethereum'
)
@ada = Cryptocurrency.create!(
  name: 'Cardano',
  symbol: 'ADA',
  description: 'Cardano is a proof-of-stake blockchain platform that says its goal is to allow “changemakers, innovators and visionaries” to bring about positive global change. The open-source project also aims to “redistribute power from unaccountable structures to the margins to individuals” — helping to create a society that is more secure, transparent and fair. Cardano was founded back in 2017, and the ADA token is designed to ensure that owners can participate in the operation of the network. Because of this, those who hold the cryptocurrency have the right to vote on any proposed changes to the software.',
  api_id: 'cardano'
)
@bnb = Cryptocurrency.create!(
  name: 'Binance Coin',
  symbol: 'BNB',
  description: 'Launched in July 2017, Binance is one of the biggest cryptocurrency exchanges globally. By aiming to bring cryptocurrency exchanges to the forefront of financial activity globally. The idea behind Binance’s name is to show this new paradigm in global finance — Binary Finance, or Binance. Aside from being the largest cryptocurrency exchange globally, Binance has launched a whole ecosystem of functionalities for its users. The Binance network includes the Binance Chain, Academy, Trusted Wallet and Research projects, which all employ the powers of blockchain technology to bring new-age finance to the world. Binance Coin is an integral part of the successful functioning of many of the Binance sub-projects.',
  api_id: 'binancecoin'
)
@usdt = Cryptocurrency.create!(
  name: 'Tether',
  symbol: 'USDT',
  description: 'USDT is a stablecoin (stable-value cryptocurrency) that mirrors the price of the U.S. dollar, issued by a Hong Kong-based company Tether. The token’s peg to the USD is achieved via maintaining a sum of commercial paper, fiduciary deposits, cash, reserve repo notes, and treasury bills in reserves that is equal in USD value to the number of USDT in circulation. Originally launched in July 2014 as Realcoin, a second-layer cryptocurrency token built on top of Bitcoin’s blockchain through the use of the Omni platform, it was later renamed to USTether, and then, finally, to USDT. In addition to Bitcoin’s, USDT was later updated to work on the Ethereum, EOS, Tron, Algorand, and OMG blockchains. The stated purpose of USDT is to combine the unrestricted nature of cryptocurrencies — which can be sent between users without a trusted third-party intermediary — with the stable value of the US dollar.',
  api_id: 'tether'
)
@doge = Cryptocurrency.create!(
  name: 'Dogecoin',
  symbol: 'DOGE',
  description: "Dogecoin (DOGE) is based on the popular 'doge' Internet meme and features a Shiba Inu on its logo. The open-source digital currency was created by Billy Markus from Portland, Oregon and Jackson Palmer from Sydney, Australia, and was forked from Litecoin in December 2013. Dogecoin's creators envisaged it as a fun, light-hearted cryptocurrency that would have greater appeal beyond the core Bitcoin audience, since it was based on a dog meme.",
  api_id: 'dogecoin'
)
@xrp = Cryptocurrency.create!(
  name: 'XRP',
  symbol: 'XRP',
  description: 'XRP is the currency that runs on a digital payment platform called RippleNet, which is on top of a distributed ledger database called XRP Ledger. While RippleNet is run by a company called Ripple, the XRP Ledger is open-source and is not based on blockchain, but rather the previously mentioned distributed ledger database. The RippleNet payment platform is a real-time gross settlement (RTGS) system that aims to enable instant monetary transactions globally. While XRP is the cryptocurrency native to the XRP Ledger, you can actually use any currency to transact on the platform.',
  api_id: 'ripple'
)
@ltc = Cryptocurrency.create!(
  name: 'Litecoin',
  symbol: 'LTC',
  description: 'Litecoin (LTC) is a cryptocurrency that was designed to provide fast, secure and low-cost payments by leveraging the unique properties of blockchain technology. The cryptocurrency was created based on the Bitcoin (BTC) protocol, but it differs in terms of the hashing algorithm used, hard cap, block transaction times and a few other factors. Litecoin has a block time of just 2.5 minutes and extremely low transaction fees, making it suitable for micro-transactions and point-of-sale payments. ',
  api_id: 'litecoin'
)
@matic = Cryptocurrency.create!(
  name: 'Polygon',
  symbol: 'MATIC',
  description: 'Polygon (previously Matic Network) is the first well-structured, easy-to-use platform for Ethereum scaling and infrastructure development. Its core component is Polygon SDK, a modular, flexible framework that supports building multiple types of applications. Using Polygon, one can create optimistic rollup chains, ZK rollup chains, stand alone chains or any other kind of infra required by the developer. Polygon effectively transforms Ethereum into a full-fledged multi-chain system (aka Internet of Blockchains). This multi-chain system is akin to other ones such as Polkadot, Cosmos, Avalanche etc. with the advantages of Ethereum’s security, vibrant ecosystem and openness.',
  api_id: 'matic-network'
)
@cake = Cryptocurrency.create!(
  name: 'PancakeSwap',
  symbol: 'CAKE',
  description: 'PancakeSwap is an automated market maker (AMM) — a decentralized finance (DeFi) application that allows users to exchange tokens, providing liquidity via farming and earning fees in return. It launched in September 2020 and is a decentralized exchange for swapping BEP20 tokens on Binance Smart Chain. PancakeSwap uses an automated market maker model where users trade against a liquidity pool. These pools are filled by users who deposit their funds into the pool and receive liquidity provider (LP) tokens in return. These tokens can later be used to reclaim their share of the pool, as well as a portion of the trading fees. These LP tokens are known as FLIP. PancakeSwap also allows users to farm additional tokens such as CAKE and SYRUP. On the farm, users can deposit LP tokens and get rewarded with CAKE.',
  api_id: 'pancakeswap-token'
)

puts "#{Cryptocurrency.count} cryptos created"

@post1 = Post.create!(content: 'Bitcoin will be $100k end of year', user: @admin, cryptocurrency: @btc)
@post2 = Post.create!(content: 'Ethereum has the best tech by far', user: @admin, cryptocurrency: @eth)
@post3 = Post.create!(content: 'DOGE to the MOON!!!', user: @admin, cryptocurrency: @doge)

puts "#{Post.count} posts created"

Comment.create!(content: 'More like 10k...', user: @admin, post: @post1)

puts "#{Comment.count} comments created"
