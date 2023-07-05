import { User } from '../../models/Users'

import { useState, useEffect } from 'react'
import { addMatchThunk, setMatches } from '../actions/matches'
import { setPotentialsThunk } from '../actions/potentials'

import Header from './Header'
import Nav from './Nav'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'

function Home() {
  const dispatch = useAppDispatch()
  const [count, setCount] = useState(0)

  const potentialMatches = useAppSelector((state) => state.potentials)
  const profile = useAppSelector((state) => state.profile)
  const matches = useAppSelector((state) => state.matches)

  const [potentialMatch, setPotentialMatch] = useState({
    auth0_id: '',
    name: '',
    age: NaN,
    gender: '',
    preference: '',
    bio: '',
    birthday: '',
    image: '',
    star_sign_id: NaN,
    matches: '',
    compatibility: '',
    id: NaN,
    star_sign: {
      id: NaN,
      date_range: '',
      name: '',
      blurb: '',
      image: '',
      default_compatibility: '',
      created_at: '',
      updated_at: '',
    },
  } as User)

  useEffect(() => {
    const parsedMatches = JSON.parse(profile.matches)
    dispatch(setMatches(parsedMatches))
    dispatch(setPotentialsThunk(profile))
    console.log(profile)
  }, [])

  useEffect(() => {
    setPotentialMatch(potentialMatches[count])
  }, [potentialMatches, count, dispatch])

  async function like() {
    dispatch(addMatchThunk(matches, profile, potentialMatch.id))
    setCount(count + 1)
  }

  async function dislike() {
    setCount(count + 1)
  }

  return (
    <div className="profile-container">
      <Header />
      <div className="bodyContainer">
        {potentialMatch && (
          <div>
            <h1>{potentialMatch.name}&apos;s Profile</h1>
            <img
              src={`images/starsigns/${potentialMatch.star_sign.name}.PNG`}
              alt={potentialMatch.star_sign.name}
            />
            <button onClick={dislike}>Dislike</button>
            <button onClick={like}>Like</button>
            <p className="profile-Info">Age: {potentialMatch.age}</p>
            <p className="profile-Info">Gender: {potentialMatch.gender}</p>
          </div>
        )}
      </div>

      <Nav />
    </div>
  )
}

export default Home
