import Login from './Login'

export default function Landing() {
  return (
    <div className="landing_container">
      <ul>
        <li className="logo_container">
          <a href="/login">
            <img src="images/icons/tempLogo.png" alt="Our logo" />
          </a>
        </li>
        <li className="tagline">
          <p>Find you star crossed lover!</p>
        </li>
        <Login />
      </ul>
    </div>
  )
}
