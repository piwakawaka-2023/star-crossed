import { Link } from 'react-router-dom'
import Login from './Login'

export default function Header() {
  return (
    <div className="header-container">
      <h2 className="title">Star Crossed</h2>
      <Link to="/">
        <img
          className="logout-button"
          src="images/icons/logout.png"
          alt="logout"
        />
      </Link>
    </div>
  )
}
