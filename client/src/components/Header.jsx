import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header(props) {

  const { currentUser, handleLogout } = props

  return (
    <div className='header'>
      <Link to='/' id='title-link'><h1 id='title'>DeCryptor</h1></Link>
      {currentUser ? (
        <div className='user-nav'>
          <p id='username'>{`Hello, ${currentUser.username}`}</p>
          <Link id='cryptos' to='/'>Cryptocurrencies</Link>
          <Link id='new-post' to='/posts/new'>Create Post</Link>
          <button id='logout' onClick={handleLogout}>Sign Out</button>
        </div>
      ) : (
        <div className='non-user-nav'>
          <Link id='cryptos' to='/'>Cryptocurrencies</Link>
          <Link id='login' to='/login'>Sign In</Link>
          <Link id='sign-up' to='/sign-up'>Sign Up</Link>
        </div>
      )}
      {/* {currentUser && (
        <div>

        </div>
      )} */}
    </div>
  )
}
