import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
// import { useAppDispatch } from '../hooks/hooks'
// import { setUserThunk } from '../actions/profile'
import { getProfileWithAuthInfo } from '../apis/users'

export default function Loading() {
  const { user } = useAuth0()
  // const dispatch = useAppDispatch()
  useEffect(() => {
    async function getProfile() {
      const auth0Id = user?.sub
      if (auth0Id !== undefined) {
        const userData = await getProfileWithAuthInfo(auth0Id)
        userData === null
          ? window.location.replace('http://localhost:5173/signup')
          : window.location.replace('http://localhost:5173/profile')
      }
    }
    getProfile()
  })

  return (
    <div className="loadingContainer">
      <p id="load">Loading ...</p>
      <iframe
        id="load_gif"
        title="load"
        src="https://giphy.com/embed/3o7bu3XilJ5BOiSGic"
        width="480"
        height="480"
        className="giphy-embed"
        allowFullScreen
      ></iframe>
    </div>
  )
}
