import Header from '../components/Header'

export default function Layout(props) {

  const { currentUser, handleLogout } = props

  return (
    <div>
      <Header currentUser={currentUser} handleLogout={handleLogout} />
      <main>
        {props.children}
      </main>
      {/* <Footer /> */}
    </div>
  )
}
