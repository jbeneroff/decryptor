import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

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
      <label>
        Content:
        <input
          type='text'
          name='content'
          value={formData.content}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}
