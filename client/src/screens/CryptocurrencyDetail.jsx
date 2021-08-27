import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import CommentCreate from '../components/CommentCreate'
import { getOneCryptocurrency } from '../services/cryptocurrencies'
import './CryptocurrencyDetail.css'

export default function CryptocurrencyDetail(props) {

  const [cryptocurrency, setCryptocurrency] = useState(null)
  const { id } = useParams()
  const { posts, handleDelete, currentUser, comments, handleCreateComment } = props

  useEffect(() => {
    const fetchCryptocurrency = async () => {
      const cryptocurrencyData = await getOneCryptocurrency(id)
      setCryptocurrency(cryptocurrencyData)
    }
    fetchCryptocurrency()
  }, [id])

  // const showComments = (post) => {
  //   // e.preventDefault()
  //   console.log('clicked')
  //   comments.map((comment) => {
  //     if (comment?.post_id === post?.id) {
  //       return (
  //         <div className='comment-div' key={comment.id}>
  //           <p id='commenter'>{comment?.user.username}</p>
  //           <p id='comment-content'>{comment?.content}</p>
  //         </div>
  //       )
  //     }
  //   })
  // }

  return (
    <div>
      <h1 id='crypto-detail-name'>{cryptocurrency?.name}</h1>
      <h2 id='crypto-detail-symbol'>{cryptocurrency?.symbol}</h2>
      <h3 id='crypto-detail-description'>{cryptocurrency?.description}</h3>
      {currentUser && (
        <div>
          <Link to='/posts/new'>
            <button id='create-button'>+</button>
          </Link>
        </div>
      )}
      <div>
        {posts.map((post) => {
          if (post?.cryptocurrency_id === cryptocurrency?.id) {
            return (
              <div className='post-div' key={post.id}>
                <p id='post-user'>{post?.user?.username}</p>
                <p id='post-content' >{`#${cryptocurrency?.symbol} ${post?.content}`}</p>
                <p id='post-time'>{`Posted at ${post.created_at.slice(11, 16)} on ${post.created_at.slice(5, 10)}-${post.created_at.slice(0, 4)}`}</p>
                {currentUser?.id === post.user_id && (
                  <div>
                    <button id='delete-button' onClick={() => handleDelete(post.id)}>Delete</button>
                    <Link to={`/posts/${post.id}/edit`}>
                      <button id='edit-button'>Edit</button>
                    </Link>
                  </div>
                )}
                <div>
                  {/* <form onSubmit={showComments(post)}>
                    <button type='submit' id='show-button' >Comments</button>
                  </form> */}
                  {comments.map((comment) => {
                    if (comment?.post_id === post?.id) {
                      return (
                        <div className='comment-div' key={comment.id}>
                          <p id='commenter'>{comment?.user?.username}</p>
                          <p id='comment-content'>{comment?.content}</p>
                          {currentUser?.id === comment.user_id && (
                            <div>
                              <button id='delete-comment' onClick={() => handleDelete(post.id)}>Delete</button>
                              <Link to={`/comments/${comment.id}/edit`}>
                                <button id='edit-comment'>Edit</button>
                              </Link>
                            </div>
                          )}
                        </div>
                      )
                    }
                  })}
                  {currentUser && (
                    <div>
                      <Link to='/comments/new'>
                        <button id='create-comment-button'>+</button>
                      </Link>
                      <CommentCreate post={post} handleCreateComment={handleCreateComment} />
                    </div>
                  )}
                </div>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}
