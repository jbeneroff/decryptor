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
          <Link className='nav-item' id='cryptos' to='/'>Cryptocurrencies</Link>
          <Link  className='nav-item' id='new-post' to='/posts/new'>Create Post</Link>
          <button className='nav-item' id='logout' onClick={handleLogout}>Sign Out</button>
        </div>
      ) : (
        <div className='non-user-nav'>
          <Link className='nav-item' id='cryptos' to='/'>Cryptocurrencies</Link>
          <Link className='nav-item' id='login' to='/login'>Sign In</Link>
          <Link className='nav-item' id='sign-up' to='/sign-up'>Sign Up</Link>
        </div>
      )}
    </div>
  )
}
