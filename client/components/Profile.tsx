import { User } from '../../models/Users'
import data from '../../data/db.json'
import { useEffect, useState } from 'react'
import { setProfile } from '../actions/profile'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'

import Header from './Header'
import EditDropDown from './EditDropDown'

function Profile() {
  //Test Data
  const dispatch = useAppDispatch()
  const testProfile = data[0]
  const [profile, setUserProfile] = useState({})

  useEffect(() => {
    setUserProfile(testProfile)
    dispatch(setProfile(testProfile))
  }, [])

  // async function handleEdit() {
  //   //* this will lead to a drop down menu which lets you edit your section
  // }

  return (
    <div className="profile-container">
      <Header />
      <h1>Your Profile</h1>
      <div className="">
        <h3>Images:</h3>
        <button>edit</button>
      </div>
      <img
        src={'/' + testProfile.image}
        alt={`${testProfile.name}'s profile`}
      />
      <div className="">
        <h3>Bio:</h3>
        <EditDropDown formId={'bio'} profileId={testProfile.id} />
      </div>
      <div className="">
        <h3>Name:</h3>
        <EditDropDown formId={'name'} profileId={testProfile.id} />
      </div>
      <div className="">
        <h3>Gender:</h3>
        <EditDropDown formId={'gender'} profileId={testProfile.id} />
      </div>
      <div className="">
        <h3>Preferences:</h3>
        <EditDropDown formId={'preference'} profileId={testProfile.id} />
      </div>
    </div>
  )
}

export default Profile
