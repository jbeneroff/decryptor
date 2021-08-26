import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { getAllCryptocurrencies } from '../services/cryptocurrencies'
import { getAllPosts, postPost, putPost, deletePost } from '../services/posts'
import Cryptocurrencies from '../screens/Cryptocurrencies'
import CryptocurrencyDetail from '../screens/CryptocurrencyDetail'
import Posts from '../screens/Posts'
import PostCreate from '../screens/PostCreate'
import PostEdit from '../screens/PostEdit'

export default function MainContainer(props) {

  const [cryptocurrencies, setCryptocurrencies] = useState([])
  const [posts, setPosts] = useState([])
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

  const handleCreate = async (formData) => {
    const postData = await postPost(formData)
    setPosts((prevState) => [...prevState, postData])
    history.push('/posts')
  }

  // const handleCreate = async (cryptocurrency, formData) => {
  //   const postData = await addPostToCrypto(cryptocurrency, formData)
  //   setPosts((prevState) => [...prevState, postData])
  //   history.push('/posts')
  // }


  const handleUpdate = async (id, formData) => {
    const postData = await putPost(id, formData)
    setPosts((prevState) =>
      prevState.map((post) => {
        return post.id === Number(id) ? postData : post
      })
    )
    history.push('/posts')
  }

  const handleDelete = async (id) => {
    await deletePost(id)
    setPosts((prevState) => prevState.filter((post) => post.id !== id))
  }

  return (
    <div>
      <Switch>
        <Route path='/posts/:id/edit'>
          <PostEdit posts={posts} handleUpdate={handleUpdate} />
        </Route>
        <Route path='/posts/new'>
          <PostCreate cryptocurrencies={cryptocurrencies} handleCreate={handleCreate} />
        </Route>
        <Route path='/posts'>
          <Posts posts={posts} />
        </Route>
        <Route path='/cryptocurrencies/:id'>
          <CryptocurrencyDetail posts={posts} />
        </Route>
        <Route path='/'>
          <Cryptocurrencies
            cryptocurrencies={cryptocurrencies}
            handleDelete={handleDelete}
            currentUser={currentUser}
          />
        </Route>
      </Switch>
    </div>
  )
}
