import { Link } from 'react-router-dom'

export default function Cryptocurrencies(props) {

  const { cryptocurrencies } = props

  return (
    <div>
      <h1>Crypto List</h1>
      {cryptocurrencies.map((cryptocurrency) => (
        <div key={cryptocurrency.id}>
          <Link to={`/cryptocurrencies/${cryptocurrency.id}`}>
            <p>{cryptocurrency.name}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}
