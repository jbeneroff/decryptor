import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getAllCryptocurrencies } from '../services/cryptocurrencies'
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    const cryptocurrencyItem = await postPost(id, selectedCryptocurrency)
    // setCrypto(cryptocurrencyItem)
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   const cryptocurrencyItem = await addPostToCrypto(selectedCryptocurrency, content)
  //   // setCrypto(cryptocurrencyItem)
  // }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select onChange={chooseCrypto} defaultValue='default'>
          <option disabled value='default'>
            -- Select a Crypto --
          </option>
          {cryptocurrencies.map((cryptocurrency) => (
            <option key={cryptocurrency.id} value={cryptocurrency.id}>{cryptocurrency.name}</option>
          ))}
        </select>
        {/* <button>Select</button> */}
      </form>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate(formData);
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
