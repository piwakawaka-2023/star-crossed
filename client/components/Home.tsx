import { User } from '../../models/Users'
import data from '../../data/db.json'
import { useState } from 'react'
import * as api from '../apis/profile'

import Header from './Header'
import Nav from './Nav'

function Home() {
  //* Test data
  const testProfile = data[0]
  const [profiles, setProfiles] = useState([] as User[])

  async function handleClick() {
    const newData = (await api.fetchUsers()) as User[]
    setProfiles(newData)
  }

  return (
    <>
      <Header />
      return (
      <div className="profile-container">
        <Header />
        {/* Test button */}
        <button onClick={() => handleClick()}>Test API CALL</button>
        {profiles.map((user) => {
          return <h2 key={user.id}>{`${user.name} ${user.starSignId}`}</h2>
        })}
        <h1>
          {testProfile.name}&apos;s Profile {testProfile.starSign}
        </h1>

        <img src={'/' + testProfile.image} alt="Steve's profile" />
        <p className="profile-Info">Age: {testProfile.age}</p>
        <p className="profile-Info">Gender: {testProfile.gender}</p>
        <p className="profile-Info">Prefers: {testProfile.preference}</p>
        <p className="profile-Info">Bio: {testProfile.bio}</p>
        <p className="profile-Info">DoB: {testProfile.birthday}</p>
        <p className="profile-Info">{testProfile.matches}</p>
        <p className="profile-Info">{testProfile.compatibility}</p>
      </div>
      )
      <Nav />
    </>
  )
}

export default Home
