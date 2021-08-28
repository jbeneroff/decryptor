import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import CommentCreate from '../components/CommentCreate'
import { getOneCryptocurrency } from '../services/cryptocurrencies'
import './CryptocurrencyDetail.css'

export default function CryptocurrencyDetail(props) {

  const [cryptocurrency, setCryptocurrency] = useState(null)
  const [isCommentsShow, setIsCommentsShow] = useState(false)
  const { id } = useParams()
  const { posts, handleDelete, currentUser, comments, handleCreateComment, handleDeleteComment } = props

  useEffect(() => {
    const fetchCryptocurrency = async () => {
      const cryptocurrencyData = await getOneCryptocurrency(id)
      setCryptocurrency(cryptocurrencyData)
    }
    fetchCryptocurrency()
  }, [id])

  const showComments = (post) => {
    if (isCommentsShow === post.id) {
      setIsCommentsShow(false)
    } else {
      setIsCommentsShow(post.id)
    }
  }


  return (
    <div>
      <div className='detail-div'>
        <h1 id='crypto-detail-name'>{cryptocurrency?.name}</h1>
        <h2 id='crypto-detail-symbol'>{cryptocurrency?.symbol}</h2>
        <h3 id='crypto-detail-description'>{cryptocurrency?.description}</h3>
      </div>
      {currentUser && (
        <div>
          <Link to='/posts/new'>
            <button id='create-button'>+</button>
          </Link>
        </div>
      )}
      <div>
        {posts.map((post, key) => {
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
                {isCommentsShow === post.id && <div>
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
          }
        })}
      </div>
    </div>
  )
}
