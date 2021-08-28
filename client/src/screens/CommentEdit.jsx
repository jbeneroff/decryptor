import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './CommentEdit.css'

export default function CommentEdit(props) {
  const [formData, setFormData] = useState({
    content: ''
  })

  const { comments, handleUpdateComment } = props
  const { id } = useParams()

  useEffect(() => {
    const prefillFormData = () => {
      const commentItem = comments.find((comment) => comment.id === Number(id))
      setFormData({ content: commentItem.content })
    }
    if (comments.length) {
      prefillFormData()
    }
  }, [comments, id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleUpdateComment(id, formData);
    }}>
      <h3 id='edit-comment-header'>Edit Your Comment</h3>
      <div className='edit-comment-div'>
        <textarea id='edit-comment-input'
          type='text'
          name='content'
          value={formData.content}
          onChange={handleChange}
        />
        <button id='submit-comment-edit'>Submit Changes</button>
      </div>
    </form>
  )
}