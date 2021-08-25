import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {

  const { currentUser, handleLogout } = props

  return (
    <div>
      <h1>DeCryptor</h1>
      {currentUser ? (
        <div>
          <p>{currentUser.username}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <Link to='/login'>Login</Link>
          <Link to='/sign-up'>Sign Up</Link>
        </div>
      )}
      <hr />
      {currentUser && (
        <div>

        </div>
      )}
    </div>
  )
}
