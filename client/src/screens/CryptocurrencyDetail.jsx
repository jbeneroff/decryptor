import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getOneCryptocurrency } from '../services/cryptocurrencies'
import './CryptocurrencyDetail.css'

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
      <h1 id='crypto-detail-name'>{cryptocurrency?.name}</h1>
      <h2 id='crypto-detail-symbol'>{cryptocurrency?.symbol}</h2>
      <h3 id='crypto-detail-description'>{cryptocurrency?.description}</h3>
      <Link to='/posts/new'>
        <button id='create-button'>Create Post</button>
      </Link>
      <div>
        {posts.map((post) => {
          if (post?.cryptocurrency_id === cryptocurrency?.id) {
            return (
              <div className='post-div' key={post.id}>
                <p id='post-user'>{post?.user?.username}</p>
                <p id='post-content' >{post?.content}</p>
                <p id='post-time'>{`Posted at ${post.created_at.slice(11, 16)} on ${post.created_at.slice(5, 10)}-${post.created_at.slice(0, 4)}`}</p>
                {currentUser?.id === post.user_id && (
                  <div>
                    <Link to={`/posts/${post.id}/edit`}>
                      <button id='edit-button'>Edit</button>
                    </Link>
                    <button id='delete-button' onClick={() => handleDelete(post.id)}>Delete</button>
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
