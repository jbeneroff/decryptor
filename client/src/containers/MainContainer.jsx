import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { getAllCryptocurrencies } from '../services/cryptocurrencies'
import { getAllPosts, postPost, putPost, deletePost } from '../services/posts'
import { getAllComments, postComment, putComment, deleteComment } from '../services/comments'
import Cryptocurrencies from '../screens/Cryptocurrencies'
import CryptocurrencyDetail from '../screens/CryptocurrencyDetail'
// import Posts from '../screens/Posts'
import PostCreate from '../screens/PostCreate'
import PostEdit from '../screens/PostEdit'

export default function MainContainer(props) {

  const [cryptocurrencies, setCryptocurrencies] = useState([])
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  const { currentUser } = props
  const history = useHistory()

  useEffect(() => {
    const fetchCryptocurrencies = async () => {
      const cryptocurrencyList = await getAllCryptocurrencies()
      setCryptocurrencies(cryptocurrencyList)
    }
    fetchCryptocurrencies()
  }, [])

  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await getAllPosts()
      setPosts(postList)
    }
    fetchPosts()
  }, [])

  useEffect(() => {
    const fetchComments = async () => {
      const commentList = await getAllComments()
      setComments(commentList)
      console.log(commentList)
    }
    fetchComments()
  }, [])

  const handleCreate = async (formData, selectedCryptocurrency) => {
    const postData = await postPost(formData, selectedCryptocurrency)
    setPosts((prevState) => [...prevState, postData])
    history.push(`/cryptocurrencies/${postData.cryptocurrency_id}`)
  }


  const handleUpdate = async (id, formData) => {
    const postData = await putPost(id, formData)
    setPosts((prevState) =>
      prevState.map((post) => {
        return post.id === Number(id) ? postData : post
      })
    )
    history.push(`/cryptocurrencies/${postData.cryptocurrency_id}`)
  }

  const handleDelete = async (id) => {
    await deletePost(id)
    setPosts((prevState) => prevState.filter((post) => post.id !== id))
  }

  return (
    <div>
      <Switch>
        <Route path='/posts/:id/edit'>
          <PostEdit posts={posts} handleUpdate={handleUpdate} cryptocurrencies={cryptocurrencies} />
        </Route>
        <Route path='/posts/new'>
          <PostCreate cryptocurrencies={cryptocurrencies} handleCreate={handleCreate} />
        </Route>
        {/* <Route path='/posts'>
          <Posts posts={posts} />
        </Route> */}
        <Route path='/cryptocurrencies/:id'>
          <CryptocurrencyDetail posts={posts} comments={comments} currentUser={currentUser} handleDelete={handleDelete} />
        </Route>
        <Route path='/'>
          <Cryptocurrencies cryptocurrencies={cryptocurrencies} currentUser={currentUser} s />
        </Route>
      </Switch>
    </div>
  )
}
