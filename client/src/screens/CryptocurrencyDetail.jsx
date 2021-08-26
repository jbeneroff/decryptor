import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getOneCryptocurrency } from '../services/cryptocurrencies'

export default function CryptocurrencyDetail(props) {

  const [cryptocurrency, setCryptocurrency] = useState(null)
  const { id } = useParams()
  const { posts, handleDelete, currentUser } = props

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
      <Link to='/posts/new'>
        <button>Create Post</button>
      </Link>
      <div>
        {posts.map((post) => {
          if (post?.cryptocurrency_id === cryptocurrency?.id) {
            return (
              <div key={post.id}>
                <p>{post?.content}</p>
                <p>{post?.user?.username}</p>
                <p>{`Posted at ${post.created_at.slice(11, 16)} on ${post.created_at.slice(5, 10)}-${post.created_at.slice(0, 4)}`}</p>
                {currentUser?.id === post.user_id && (
                  <div>
                    <Link to={`/posts/${post.id}/edit`}>
                      <button>Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(post.id)}>Delete</button>
                  </div>
                )}
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}
