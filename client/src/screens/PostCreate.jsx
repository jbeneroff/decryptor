import { useState } from 'react'
import './PostCreate.css'

export default function PostCreate(props) {

  const [selectedCryptocurrency, setSelectedCryptocurrency] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
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

  return (
    <div>
      <h3 id='create-header'>Create a New Post</h3>
      <form id='select-form'>
        <select id='select-crypto' onChange={chooseCrypto} defaultValue='default'>
          <option disabled value='default'>
            -- Select a Crypto --
          </option>
          {cryptocurrencies.map((cryptocurrency) => (
            <option key={cryptocurrency.id} value={cryptocurrency.id}>{cryptocurrency.name}</option>
          ))}
        </select>
      </form>
      <p id='create-error'>{errorMessage}</p>
      <form id='input-form' onSubmit={(e) => {
        e.preventDefault()
        if (!selectedCryptocurrency) {
          setErrorMessage('Please Select a Cryptocurrency')
        }
        handleCreate(formData, selectedCryptocurrency)
      }}>
        <div className='create-div'>
          <textarea id='create-input' type='text' name='content' value={content} onChange={handleChange}
            placeholder='What are your thoughts?' />
          <button id='post-button'>Post</button>
        </div>
      </form>
    </div>
  )
}
