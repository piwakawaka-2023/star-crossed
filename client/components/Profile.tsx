import { User } from '../../models/Users'
import data from '../../data/db.json'
import { useState } from 'react'
import * as api from '../apis/profile'

export default function DisplayProfile() {
  //Test Data
  const testProfile = data[0]
  const [profiles, setProfiles] = useState([] as User[])

  async function handleClick() {
    const newData = await api.fetchUser(0)
    setProfiles(newData)
  }

  return (
    <div className="profile-container">
      {/* Test button */}
      <button onClick={() => handleClick()}>Test API CALL</button>
      {profiles.map((user) => {
        return <h2 key={user.id}>{`${user.name} ${user.star_sign.name}`}</h2>
      })}
      <h1>
        {testProfile.name}&apos;s Profile {testProfile.starSign}
      </h1>

      <img src={testProfile.image} alt={testProfile.name} />
      <div className="info-container">
        <p className="profile-Info">Age: {testProfile.age}</p>
        <p className="profile-Info">Gender: {testProfile.gender}</p>
        <p className="profile-Info">Bio: {testProfile.bio}</p>
        <p className="profile-Info">{testProfile.compatibility}</p>
      </div>
    </div>
  )
}
