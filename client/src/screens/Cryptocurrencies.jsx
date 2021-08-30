import { Link } from 'react-router-dom'
import './Cryptocurrencies.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Cryptocurrencies(props) {
  const [cryptos, setCryptos] = useState([])
  const { cryptocurrencies } = props

  // useEffect(() => {
  //   const fetchCryptos = async () => {
  //     const resp = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd`)
  //     // console.log(resp.data)
  //     // console.log(resp.data.bitcoin)
  //     // console.log(resp.data.market_data.current_price.usd)
  //     setCryptos(resp.data)
  //     console.log(cryptos)
  //   }
  //   fetchCryptos()
  // }, [])

  return (
    <div>
      <h1 id='list-title'>Cryptocurrencies</h1>
      <div className='crypto-list'>
        {cryptocurrencies.map((cryptocurrency) => (
          <div className='crypto-card' key={cryptocurrency.id}>
            <Link className='crypto-link' to={`/cryptocurrencies/${cryptocurrency.id}`}>
              <p className='crypto-name'>{cryptocurrency.name}</p>
              <p className='crypto-symbol'>{cryptocurrency.symbol}</p>
              {/* <p>{cryptos.bitcoin.usd}</p> */}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
