import { User } from '../../models/Users'
import data from '../../data/db.json'
import { useState } from 'react'
import * as api from '../apis/profile'

import Header from './Header'
import Nav from './Nav'

//TODO A user can swipe through different profiles and choose to match them or not
//TODO when a click happens, it increments the id, switching it up one

function Home() {
  //* Test data
  const potentialMatches = data[0]

  const [profile, setProfile] = useState(null as User | null)
  const [profiles, setProfiles] = useState([] as User[])
  const [count, setCount] = useState(1)

  async function handleClick() {
    const newData = (await api.fetchUsers()) as User[]
    setProfiles(newData)
  }

  async function dislike() {
    const newMatch = (await api.fetchUser(count)) as User
    setCount(count + 1)

    console.log(count)

    setProfile(newMatch)
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
        <h1>{potentialMatches.name}&apos;s Profile</h1>

        <img src="images/icons/square.png" alt="square" />
        <button onClick={dislike}>Dislike</button>
        <button>Like</button>
        <p className="profile-Info">Age: {potentialMatches.age}</p>
        <p className="profile-Info">Gender: {potentialMatches.gender}</p>
      </div>
      )
      <Nav />
    </>
  )
}

export default Home
