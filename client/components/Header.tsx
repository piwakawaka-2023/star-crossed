/****************
 *    HEADER    *
 ****************/
import { Link } from 'react-router-dom'
import Login from './Login'

export default function Header() {
  return (
    <div className="header-container">
      <h2 className="title">Star Crossed</h2>
      <div className="logout-container">
        <Link to="/"></Link>
      </div>
    </div>
  )
}
