import { Link } from 'react-router-dom'
import './Cryptocurrencies.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Cryptocurrencies(props) {
  const [cryptoPrices, setCryptoPrices] = useState([])
  const { cryptocurrencies } = props

  // useEffect(() => {
  //   const fetchCryptoPrices = async () => {
  //     const resp = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ccardano%2Cbinancecoin%2Ctether%2Cdogecoin%2Cxrp%2Clitecoin%2Cpolygon%2Cpancakeswap%20&vs_currencies=usd')
  //     console.log(resp.data)
  //     setCryptoPrices(resp.data)
  //   }
  //   fetchCryptoPrices()
  //   // console.log(cryptos)
  // }, [])

  return (
    <div>
      {/* <div>
        {cryptoPrices.map((price) => {
          <div>
            <p>{price}</p>
          </div>
        })}
      </div> */}
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
