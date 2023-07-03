import { User } from '../../models/Users'
import data from '../../data/db.json'
import { useState } from 'react'

import Header from './Header'
import EditDropDown from './EditDropDown'

function Profile() {
  //Test Data
  const testProfile = data[0]
  const [profile, setProfile] = useState({} as User)

  async function handleEdit() {
    //* this will lead to a drop down menu which lets you edit your section
  }

  return (
    <div className="profile-container">
      <Header />
      <h1>Your Profile</h1>
      <div className="">
        <h3>Images:</h3>
        <button>edit</button>
      </div>
      <img src={'/' + testProfile.image} alt="Steve's profile" />
      <div className="">
        <h3>Bio:</h3>
        <EditDropDown props={{ id: profile.id, name: 'bio' }} />
      </div>
      <div className="">
        <h3>Name:</h3>
        <EditDropDown props={{ id: profile.id, name: 'name' }} />
      </div>
      <div className="">
        <h3>Gender:</h3>
        <EditDropDown props={{ id: profile.id, name: 'gender' }} />
      </div>
      <div className="">
        <h3>Preferences:</h3>
        <EditDropDown props={{ id: profile.id, name: 'preferences' }} />
      </div>
      <div className="">
        <h3>Birthday:</h3>
        <EditDropDown props={{ id: profile.id, name: 'birthday' }} />
      </div>
      <div className="">
        <h3>Compatibility:</h3>
        <EditDropDown props={{ id: profile.id, name: 'compatibility' }} />
      </div>
    </div>
  )
}

export default Profile
