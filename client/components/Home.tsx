import { User } from '../../models/Users'
import { useState, useEffect } from 'react'
import { addMatchThunk } from '../actions/matches'
import { setPotentialsThunk } from '../actions/potentials'

import Header from './Header'
import Nav from './Nav'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'

function Home() {
  const dispatch = useAppDispatch()
  const [count, setCount] = useState(0)

  const potentialMatches = useAppSelector((state) => state.potentials)
  const profile = useAppSelector((state) => state.profile)

  const [potentialMatch, setPotentialMatch] = useState({} as User)
  const potentials = useAppSelector((state) => state.potentials)

  useEffect(() => {
    dispatch(setPotentialsThunk(profile))
  }, [profile])

  useEffect(() => {
    setPotentialMatch(potentialMatches[count])
  }, [potentials, potentialMatches, count, dispatch])

  async function like() {
    dispatch(addMatchThunk(profile, potentialMatch.id))
    setCount(count + 1)
  }

  async function dislike() {
    setCount(count + 1)
  }

  return (
    <>
      <Header />
      <div className="profile-container">
        {potentialMatch && (
          <div>
            <h1>{potentialMatch.name}&apos;s Profile</h1>
            <img src="images/icons/square.png" alt="square" />
            <button onClick={dislike}>Dislike</button>
            <button onClick={like}>Like</button>
            <p className="profile-Info">Age: {potentialMatch.age}</p>
            <p className="profile-Info">Gender: {potentialMatch.gender}</p>
          </div>
        )}
      </div>
      <Nav />
    </>
  )
}

export default Home
