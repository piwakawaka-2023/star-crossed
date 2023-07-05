import { useEffect } from 'react'
import { setUserThunk } from '../actions/profile'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { User, useAuth0 } from '@auth0/auth0-react'
import Header from './Header'
import Nav from './Nav'

function Profile() {
  const { user } = useAuth0()
  const dispatch = useAppDispatch()
  const profile = useAppSelector((state) => state.profile) as User

  useEffect(() => {
    console.log(user?.sub)
    if (user?.sub !== undefined) {
      dispatch(setUserThunk(user?.sub))
    }
  }, [user])

  const { name, age, bio, image, star_sign } = profile

  return (
    <div className="profile-container">
      <Header />
      <h1>
        {name}, {age}
      </h1>
      <img
        alt={`${star_sign.name}`}
        src={`images/starsigns/${star_sign.name}.PNG`}
      ></img>
      <img src={image} alt={`${name}'s profile`} />
      <p>{bio}</p>
      <Nav />
    </div>
  )
}

export default Profile
