import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const { handleLogin } = props

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className='signin-form'>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleLogin(formData)
        }}
      >
        <h3 id='signin-header'>Sign In</h3>
        <input
          id='signin-username'
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
          placeholder='Username'
        />
        <br />
        <input
          id='signin-password'
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          placeholder='Password'
        />
        <br />
        <button id='signin-button'>Sign In</button>
        <br />
        <h5 id='no-account-header'>Don't have an account?</h5>
        <Link to='/sign-up'>
          <button id='signup-button'>Sign Up</button>
        </Link>
      </form>
    </div>
  )
}
