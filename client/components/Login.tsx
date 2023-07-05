import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Login() {
  const { logout, loginWithRedirect, user } = useAuth0()

  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }
  return (
    <>
      <IfAuthenticated>
        <button className="sign_in_button" onClick={handleSignOut}>
          Sign out
        </button>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <button className="sign_in_button" onClick={handleSignIn}>
          Sign in
        </button>
      </IfNotAuthenticated>
    </>
  )
}

export default Login
