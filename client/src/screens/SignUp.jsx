import { useState } from 'react'
import { Link } from 'react-router-dom'
import './SignUp.css'

export default function SignUp(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const { handleRegister } = props

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className='signup-form'>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleRegister(formData)
        }}
      >
        <h3 id='signup-header'>Sign Up</h3>
        <input
          id='signup-username'
          type='text'
          name='username'
          value={formData.username}
          onChange={handleChange}
          placeholder='Username'
        />
        <br />
        <input
          id='signup-email'
          type='text'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Email Address'
        />
        <br />
        <input
          id='signup-password'
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          placeholder='Password (6+ characters)'
        />
        <br />
        <button id='register-button'>Sign Up</button>
        <h5 id='yes-account-header'>Already have an account?</h5>
        <Link to='/login'>
          <button id='login-button'>Sign In</button>
        </Link>
      </form>
    </div>
  )
}
