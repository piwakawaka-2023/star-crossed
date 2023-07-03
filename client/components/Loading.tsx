//Redirected after auth
//useEffect makes an api call to check if you "exist"
//If you don't, res.redirect to signup

import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import { useAppDispatch } from '../hooks/hooks'
import { setUserThunk } from '../actions/profile'

export default function Loading() {
  const { user } = useAuth0()
  const dispatch = useAppDispatch()
  useEffect(() => {
    console.log(user?.id)
    dispatch(setUserThunk(user?.id))
  })

  return <p>Loading ...</p>
}
