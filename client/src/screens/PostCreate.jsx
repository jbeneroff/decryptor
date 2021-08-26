import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { addPostToCrypto, postPost } from '../services/posts'

export default function PostCreate(props) {

  const [selectedCryptocurrency, setSelectedCryptocurrency] = useState('')
  const { id } = useParams()
  const { cryptocurrencies } = props

  const [formData, setFormData] = useState({
    content: '',
  })
  const { content } = formData
  const { handleCreate } = props


  const chooseCrypto = (e) => {
    const { value } = e.target
    setSelectedCryptocurrency(value)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   await postPost(id, selectedCryptocurrency)
  //   hist
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   const cryptocurrencyItem = await addPostToCrypto(selectedCryptocurrency, content)
  //   // setCrypto(cryptocurrencyItem)
  // }

  return (
    <div>
      <form>
        <select onChange={chooseCrypto} defaultValue='default'>
          <option disabled value='default'>
            -- Select a Crypto --
          </option>
          {cryptocurrencies.map((cryptocurrency) => (
            <option key={cryptocurrency.id} value={cryptocurrency.id}>{cryptocurrency.name}</option>
          ))}
        </select>
      </form>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate(formData, selectedCryptocurrency)
        }}
      >
        <h3>Create Post</h3>
        <label>
          Content
          <input type='text' name='content' value={content} onChange={handleChange} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}
