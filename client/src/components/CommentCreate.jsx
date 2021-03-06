import { useState } from 'react'
import './CommentCreate.css'

export default function CommentCreate(props) {

  const { post } = props

  const [formData, setFormData] = useState({
    content: '',
  })
  const { content } = formData
  const { handleCreateComment } = props

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div>
      <form id='input-form' onSubmit={(e) => {
        e.preventDefault()
        handleCreateComment(formData, post.id)
        setFormData({content: ''})
      }}>
        <div className='create-comment-div'>
          <textarea id='create-comment-input' type='text' name='content' value={content} onChange={handleChange}
            placeholder='What are your thoughts?' />
          <button id='post-comment-button'>Comment</button>
        </div>
      </form>
    </div>
  )
}
