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
    if (user?.sub !== undefined) {
      dispatch(setUserThunk(user?.sub))
    }
  }, [user])

  const { name, age, bio, image, star_sign, gender } = profile

  return (
    <>
      <Header />
      <div
        className="profile-container"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: '60vh',
        }}
      >
        <div className="details-top">
          <h1>{name}</h1>
          <img alt={gender} src={`images/icons/gender/${gender}.png`} />
          <img
            className="profile-starsign"
            alt={`${star_sign.name}`}
            src={`images/starsigns/${star_sign.name}.PNG`}
          ></img>
        </div>
        <div className="details-bottom">
          <h2>{age}</h2>
          <p>{bio}</p>
        </div>
      </div>
      <Nav />
    </>
  )
}

export default Profile
