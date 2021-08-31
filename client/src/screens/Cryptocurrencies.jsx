import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
import './Cryptocurrencies.css'

export default function Cryptocurrencies(props) {
  const { cryptocurrencies } = props

  if (cryptocurrencies.length === 0) {
    return <Loader />
  }

  return (
    <div>
      <h1 id='list-title'>Cryptocurrencies</h1>
      <div className='crypto-list'>
        {cryptocurrencies.map((cryptocurrency) => (
          <div className='crypto-card' key={cryptocurrency.id}>
            <Link className='crypto-link' to={`/cryptocurrencies/${cryptocurrency.id}`}>
              <p className='crypto-name'>{cryptocurrency.name}</p>
              <p className='crypto-symbol'>{cryptocurrency.symbol}</p>
              <p className='crypto-price'>${cryptocurrency?.price}</p>
              <p className={`${(cryptocurrency?.change > 0) ? "crypto-change-green" : "crypto-change-red"}`}>{parseFloat(cryptocurrency?.change).toFixed(2)}%</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
