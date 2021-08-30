import { Link } from 'react-router-dom'
import './Posts.css'

export default function Posts(props) {

  const { posts, currentUser, comments } = props

  return (
    <div>
      <h1 id='my-posts-header'>My Posts</h1>
      <div className='my-posts'>
        {posts.slice(0).reverse().map((post) => {
          if (post?.user_id === currentUser?.id) {
            return (
              <div className='my-post-div' key={post.id}>
                <Link to={`/cryptocurrencies/${post?.cryptocurrency.id}`} id='my-post-crypto'>{post.cryptocurrency.symbol}</Link>
                <p id='my-post-content'>{post?.content}</p>
                <p id='my-post-time'>{`Posted at ${post.created_at.slice(11, 16)} on ${post.created_at.slice(5, 10)}-${post.created_at.slice(0, 4)}`}</p>
              <div>
                {comments.map((comment, key) => {
                  if (comment?.post_id === post?.id) {
                    return (
                      <div>
                        <p id='comments-header'>Comments</p>
                        <div className='comment-div' key={comment.id}>
                          <p id='commenter'>{comment?.user?.username}</p>
                          <p id='comment-content'>{comment?.content}</p>
                        </div>
                      </div>
                    )
                    } else {
                      return false
                    }
                  })}                
                </div>
              </div>
            )
          } else {
            return false
          }
        })}
      </div>
    </div>
  )
}
