

export default function Posts(props) {

  const { posts } = props

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.user.username}</p>
          <p>{post.content}</p>
          <p>{post.created_at}</p>
        </div>
      ))}
    </div>
  )
}
