import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import CommentCreate from '../components/CommentCreate'
// import { getOneCryptocurrency } from '../services/cryptocurrencies'
import Loader from '../components/Loader'
import './CryptocurrencyDetail.css'

export default function CryptocurrencyDetail(props) {

  const [cryptocurrency, setCryptocurrency] = useState(null)
  const [isDescriptionShow, setIsDescriptionShow] = useState(false)
  const [isCommentsShow, setIsCommentsShow] = useState(false)
  const { id } = useParams()
  const { cryptocurrencies, posts, handleDelete, currentUser, comments, handleCreateComment, handleDeleteComment } = props

  useEffect(() => {
    const fetchCryptocurrency = async () => {
      // const cryptocurrencyData = await getOneCryptocurrency(id)
      const cryptocurrencyData = cryptocurrencies.find(currency => currency.id === Number(id))
      setCryptocurrency(cryptocurrencyData)
    }
    if (cryptocurrencies.length) {
      fetchCryptocurrency()
    }
  }, [id, cryptocurrencies])

  const showComments = (post) => {
    if (isCommentsShow === post.id) {
      setIsCommentsShow(false)
    } else {
      setIsCommentsShow(post.id)
    }
  }

  const showDescription = (cryptocurrency) => {
    if (isDescriptionShow === cryptocurrency.id) {
      setIsDescriptionShow(false)
    } else {
      setIsDescriptionShow(cryptocurrency.id)
    }
  }

  if (posts.length === 0) {
    return <Loader />
  }

  return (
    <div className ='page'>
      <div className='crypto-list-dp'>
        {cryptocurrencies.map((cryptocurrency) => (
          <div className='crypto-card-dp' key={cryptocurrency.id}>
            <Link className='crypto-link-dp' to={`/cryptocurrencies/${cryptocurrency.id}`}>
              <p className='crypto-name-dp'>{cryptocurrency.name}</p>
            </Link>
          </div>
        ))}
      </div>
      <hr />
    <div>
      <div className='detail-div'>
        <h1 id='crypto-detail-name'>{cryptocurrency?.name}</h1>
          <h2 id='crypto-detail-symbol'>{cryptocurrency?.symbol}</h2>
          <p id='crypto-detail-price' >${cryptocurrency?.price}</p>
        <button id='show-description' onClick={() => showDescription(cryptocurrency)}>What is {cryptocurrency?.name}?</button>
        {isDescriptionShow === cryptocurrency?.id &&
          <h3 id='crypto-detail-description'>{cryptocurrency?.description}</h3>}
      </div>
      {currentUser && (
        <div>
          <Link to='/posts/new'>
            <button id='create-button'>+</button>
          </Link>
          {/* <PostCreate cryptocurrencies={cryptocurrencies} handleCreate={handleCreate}/> */}
        </div>
      )}
      <div>
        {posts.slice(0).reverse().map((post, key) => {
          if (post?.cryptocurrency_id === cryptocurrency?.id) {
            return (
              <div className='post-div' key={post.id}>
                <p id='post-user'>{post?.user?.username}</p>
                <p id='post-content' >{`#${cryptocurrency?.symbol} ${post?.content}`}</p>
                <p id='post-time'>{`Posted at ${post.created_at.slice(11, 16)} on ${post.created_at.slice(5, 10)}-${post.created_at.slice(0, 4)}`}</p>
                {currentUser?.id === post.user_id && (
                  <div>
                    <button id='delete-button' onClick={() => handleDelete(post.id)}>X</button>
                    <Link to={`/posts/${post.id}/edit`}>
                      <button id='edit-button'>✎</button>
                    </Link>
                  </div>
                )}
                <button id='show-button' onClick={() => showComments(post)}>Comments</button>
                {isCommentsShow === post.id && 
                <div>
                  {comments.map((comment, key) => {
                    if (comment?.post_id === post?.id) {
                      return (
                        <div className='comment-div' key={comment.id}>
                          <p id='commenter'>{comment?.user?.username}</p>
                          <p id='comment-content'>{comment?.content}</p>
                          {currentUser?.id === comment.user_id && (
                            <div>
                              <Link to={`/comments/${comment.id}/edit`}>
                                <button id='edit-comment'>✎</button>
                              </Link>
                              <button id='delete-comment' onClick={() => handleDeleteComment(comment.id)}>X</button>
                            </div>
                          )}
                        </div>
                      )
                    } else {
                      return false
                    }
                  })}
                  {currentUser && (
                    <div>
                      <CommentCreate post={post} handleCreateComment={handleCreateComment} />
                    </div>
                  )}
                </div>}
              </div>
            )
          } else {
            return false
          }
        })}
      </div>
    </div>
    </div>
  )
}
