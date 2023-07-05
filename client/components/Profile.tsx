import { useEffect } from 'react'
import { setUserThunk } from '../actions/profile'

import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { useAuth0 } from '@auth0/auth0-react'
import Header from './Header'
import EditDropDown from './EditDropDown'
import Nav from './Nav'

function Profile() {
  const { user } = useAuth0()
  const dispatch = useAppDispatch()
  const profile = useAppSelector((state) => state.profile)

  useEffect(() => {
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
      <div className=""></div>
      <img src={image} alt={`${name}'s profile`} />
      <p>{bio}</p>
      <Nav />
      {/* <div className="">
        <h3>Bio:</h3>
        <EditDropDown formId={'bio'} profileId={profile.id} />
      </div>
      <div className="">
        <h3>Name:</h3>
        <EditDropDown formId={'name'} profileId={profile.id} />
      </div>
      <div className="">
        <h3>Gender:</h3>
        <EditDropDown formId={'gender'} profileId={profile.id} />
      </div>
      <div className="">
        <h3>Preferences:</h3>
        <EditDropDown formId={'preference'} profileId={profile.id} />
      </div> */}
    </div>
  )
}

export default Profile
