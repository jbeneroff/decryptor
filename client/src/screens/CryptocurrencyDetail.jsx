import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOneCryptocurrency } from '../services/cryptocurrencies'

export default function CryptocurrencyDetail(props) {

  const [cryptocurrency, setCryptocurrency] = useState(null)
  const { id } = useParams()
  const { posts } = props

  useEffect(() => {
    const fetchCryptocurrency = async () => {
      const cryptocurrencyData = await getOneCryptocurrency(id)
      setCryptocurrency(cryptocurrencyData)
      console.log(cryptocurrencyData)
    }
    fetchCryptocurrency()
  }, [id])

  return (
    <div>
      <h1>{cryptocurrency?.name}</h1>
      <h2>{cryptocurrency?.symbol}</h2>
      <p>{cryptocurrency?.description}</p>
      {cryptocurrency?.posts.map((post) => (
        <div key={post.id}>
          <p>{post.content}</p>
          <p>{post.user_id.username}</p>
        </div>
      ))}
    </div>
  )
}
