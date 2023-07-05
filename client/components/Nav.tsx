import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div className="nav-container">
      <Link to={'/profile'} >profile</Link>
      <Link to={'/home'}>home</Link>
    </div>
  )
}

export default Nav
