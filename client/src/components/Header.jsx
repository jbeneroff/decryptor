import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header(props) {

  const { currentUser, handleLogout } = props

  return (
    <div className='header'>
      <Link to='/' id='title-link'><h1 id='title'>DeCryptor</h1></Link>
      {currentUser ? (
        <div className='nav'>
          <p id='username'>{currentUser.username}</p>
          <button id='logout' onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <Link to='/login'>Login</Link>
          <Link to='/sign-up'>Sign Up</Link>
        </div>
      )}
      {/* {currentUser && (
        <div>

        </div>
      )} */}
    </div>
  )
}
