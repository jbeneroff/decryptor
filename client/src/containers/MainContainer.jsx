import { useState, useEffect, useCallback } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { getAllCryptocurrencies } from '../services/cryptocurrencies'
import { getAllPosts, postPost, putPost, deletePost } from '../services/posts'
import { getAllComments, postComment, putComment, deleteComment } from '../services/comments'
import { getAllPrices } from '../services/prices'
import Cryptocurrencies from '../screens/Cryptocurrencies'
import CryptocurrencyDetail from '../screens/CryptocurrencyDetail'
import Posts from '../screens/Posts'
import PostCreate from '../screens/PostCreate'
import PostEdit from '../screens/PostEdit'
import CommentEdit from '../screens/CommentEdit'

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

  const fetchPrices = useCallback( async () => {
    const priceList = await getAllPrices()
    setCryptocurrencies(prevState => prevState.map((currency) => {
      return { ...currency, price: priceList[currency.api_id]?.usd, change: priceList[currency.api_id]?.usd_24h_change}
    }
    ))
    // eslint-disable-next-line
  }, [cryptocurrencies])

  useEffect(() => {
    if (cryptocurrencies.length) {
      fetchPrices()
    }
    // eslint-disable-next-line
  }, [cryptocurrencies.length])

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
    }
    fetchComments()
  }, [])

  const handleCreate = async (formData, selectedCryptocurrency) => {
    const postData = await postPost(formData, selectedCryptocurrency)
    setPosts((prevState) => [...prevState, postData])
    history.push(`/cryptocurrencies/${postData.cryptocurrency_id}`)
  }

  const handleCreateComment = async (formData, post) => {
    const commentData = await postComment(formData, post)
    setComments((prevState) => [...prevState, commentData])
    history.push(`/cryptocurrencies/${commentData.post.cryptocurrency_id}`)
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

  const handleUpdateComment = async (id, formData) => {
    const commentData = await putComment(id, formData)
    setComments((prevState) =>
      prevState.map((comment) => {
        return comment.id === Number(id) ? commentData : comment
      })
    )
    history.goBack()
  }

  const handleDelete = async (id) => {
    await deletePost(id)
    setPosts((prevState) => prevState.filter((post) => post.id !== id))
  }

  const handleDeleteComment = async (id) => {
    await deleteComment(id)
    setComments((prevState) => prevState.filter((comment) => comment.id !== id))
  }

  return (
    <div>
      <Switch>
        <Route path='/comments/:id/edit'>
          <CommentEdit posts={posts} currentUser={currentUser} handleUpdateComment={handleUpdateComment} comments={comments} />
        </Route>
        <Route path='/posts/:id/edit'>
          <PostEdit posts={posts} handleUpdate={handleUpdate} cryptocurrencies={cryptocurrencies} />
        </Route>
        <Route path='/posts/new'>
          <PostCreate cryptocurrencies={cryptocurrencies} handleCreate={handleCreate} />
        </Route>
        <Route path='/posts'>
          <Posts posts={posts} comments={comments} handleDelete={handleDelete} currentUser={currentUser}/>
        </Route>
        <Route path='/cryptocurrencies/:id'>
          <CryptocurrencyDetail
            handleCreateComment={handleCreateComment}
            posts={posts}
            comments={comments}
            currentUser={currentUser}
            handleDelete={handleDelete}
            handleDeleteComment={handleDeleteComment}
            cryptocurrencies={cryptocurrencies} />
        </Route>
        <Route path='/'>
          <Cryptocurrencies cryptocurrencies={cryptocurrencies} currentUser={currentUser} />
        </Route>
      </Switch>
    </div>
  )
}
