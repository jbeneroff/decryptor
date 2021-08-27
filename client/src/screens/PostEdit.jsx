import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './PostEdit.css'

export default function PostEdit(props) {
  const [formData, setFormData] = useState({
    content: ''
  })

  const { posts, handleUpdate } = props
  const { id } = useParams()

  useEffect(() => {
    const prefillFormData = () => {
      const postItem = posts.find((post) => post.id === Number(id))
      setFormData({ content: postItem.content })
    }
    if (posts.length) {
      prefillFormData()
    }
  }, [posts, id])

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
      handleUpdate(id, formData);
    }}>
      <h3 id='edit-header'>Edit Your Post</h3>
      <div className='edit-div'>
        <textarea id='edit-input'
          type='text'
          name='content'
          value={formData.content}
          onChange={handleChange}
        />
        <button id='submit-edit'>Submit Changes</button>
      </div>
    </form>
  )
}
