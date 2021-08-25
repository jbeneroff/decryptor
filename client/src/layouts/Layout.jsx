import { Link } from 'react-router-dom'

export default function Layout(props) {

  const { currentUser, handleLogout } = props

  return (
    <header>
      <h1>DeCryptor</h1>
      {currentUser ? (
        <div>
          <p>{currentUser.username}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Link to='/login'>Login/Sign Up</Link>
      )}
      <hr />
      {currentUser && (
        <div>

        </div>
      )}
      {props.children}
    </header>
  );
}
