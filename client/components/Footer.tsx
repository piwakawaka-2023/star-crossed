/****************
 *    FOOTER    *
 ****************/

//function
export default function Header() {
  return (
    <nav className="nav-container">
      <ul>
        <li>
          <a href="/" className="nav-item">
            <img src="./images/icons/profileImg.png" alt="profile" />
          </a>
        </li>
        <li>
          <a href="/chat" className="nav-item">
            <img src="./images/icons/chat.png" alt="chat" />
          </a>
        </li>
        <li>
          <a href="/settings" className="nav-item">
            <img src="./images/icons/settings.png" alt="settings" />
          </a>
        </li>
      </ul>
    </nav>
  )
}
