import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div className="nav-container">
      <Link to={'/profile'}>
        <img
          className="nav-item"
          src="images/icons/profileImg.png"
          alt="profile"
        />
      </Link>
      <Link to={'/home'}>
        <img className="nav-item" src="images/icons/home.png" alt="home" />
      </Link>
      <Link to={'/messages'}>
        <img className="nav-item" src="images/icons/chat.png" alt="messages" />
      </Link>
    </div>
  )
}

export default Nav
