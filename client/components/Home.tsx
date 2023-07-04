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
    dispatch(setPotentialsThunk(profile))
    console.log(profile)
  }, [])

  useEffect(() => {
    setPotentialMatch(potentialMatches[count])
  }, [potentialMatches, count, dispatch])

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
    </>
  )
}

export default Home
