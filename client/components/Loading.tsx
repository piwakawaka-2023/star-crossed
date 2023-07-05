import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import { useAppDispatch } from '../hooks/hooks'
// import { setUserThunk } from '../actions/profile'
import { getProfileWithAuthInfo } from '../apis/users'

export default function Loading() {
  const { user } = useAuth0()
  // const dispatch = useAppDispatch()
  useEffect(() => {
    async function getProfile() {
      const auth0Id = user?.sub
      if (auth0Id !== undefined) {
        // const userData = await getProfileWithAuthInfo(auth0Id)
        const userData = await getProfileWithAuthInfo(auth0Id)
        userData === null
          ? window.location.replace('http://localhost:5173/signup')
          : window.location.replace('http://localhost:5173/profile')
      }
    }
    getProfile()
  })

  return <p>Loading ...</p>
}
