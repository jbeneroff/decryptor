import { Link } from 'react-router-dom'
import './Cryptocurrencies.css'

export default function Cryptocurrencies(props) {

  const { cryptocurrencies } = props

  return (
    <div>
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
