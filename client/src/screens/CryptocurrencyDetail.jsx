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
    }
    fetchCryptocurrency()
  }, [id])

  return (
    <div>
      <h1>{cryptocurrency?.name}</h1>
      <h2>{cryptocurrency?.symbol}</h2>
      <h3>{cryptocurrency?.description}</h3>
      <div>
        {posts.map((post) => {
          if (post?.cryptocurrency_id === cryptocurrency?.id) {
            return (
              <div key={post.id}>
                <p>{post?.content}</p>
                <p>{post.user.username}</p>
                <p>{`Posted at ${post.created_at.slice(11, 16)} on ${post.created_at.slice(5, 10)}-${post.created_at.slice(0, 4)}`}</p>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}
