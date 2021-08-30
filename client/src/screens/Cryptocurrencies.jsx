import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
import './Cryptocurrencies.css'

export default function Cryptocurrencies(props) {
  const { cryptocurrencies, prices } = props

  if (cryptocurrencies.length === 0) {
    return <Loader />
  }

  let bnbPrice = prices.binancecoin.usd
  // let btcPrice = prices.bitcoin.usd
  // let adaPrice = prices.cardano.usd
  // let dogePrice = prices.dogecoin.usd
  // let ethPrice = prices.ethereum.usd
  // let ltcPrice = prices.litecoin.usd
  // let maticPrice = prices["matic-network"].usd
  // let cakePrice = prices["pancakeswap-token"].usd
  // let xrpPrice = prices.ripple.usd
  // let usdtPrice = prices.tether.usd

  return (
    <div>
      <div>
        <p>{bnbPrice}</p>
      </div>
      <h1 id='list-title'>Cryptocurrencies</h1>
      <div className='crypto-list'>
        {cryptocurrencies.map((cryptocurrency) => (
          <div className='crypto-card' key={cryptocurrency.id}>
            <Link className='crypto-link' to={`/cryptocurrencies/${cryptocurrency.id}`}>
              <p className='crypto-name'>{cryptocurrency.name}</p>
              <p className='crypto-symbol'>{cryptocurrency.symbol}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
