import { useState } from 'react'

export default function CommentCreate(props) {

  const [post, setPost] = useState(null)
  const { posts } = props

  const [formData, setFormData] = useState({
    content: '',
  })
  const { content } = formData
  const { handleCreate } = props

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div>

    </div>
  )
}
