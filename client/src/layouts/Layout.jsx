import Header from '../components/Header'
import Footer from '../components/Footer'
import './Layout.css'

export default function Layout(props) {

  const { currentUser, handleLogout } = props

  return (
    <div className='layout'>
      <Header currentUser={currentUser} handleLogout={handleLogout} />
      <main>
        {props.children}
      </main>
      <Footer />
    </div>
  )
}
