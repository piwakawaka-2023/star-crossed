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
  const profile = useAppSelector((state) => state.profile) as User
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
      default_compatibility: '[]',
      created_at: '',
      updated_at: '',
    },
  } as User)

  const { name, age, gender, star_sign, bio, image } = potentialMatch

  const userCompat = JSON.parse(profile.compatibility)
  const coupleCompat = userCompat[star_sign.id]
  console.log(coupleCompat)

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
    <>
      <Header />
      <div className="profile-container">
        {potentialMatch && (
          <div>
            <h1>
              {name}, {age}
            </h1>
            <img alt={gender} src={`images/icons/gender/${gender}.png`} />
            <img
              alt={`compatiblity:${coupleCompat}`}
              src={`images/icons/compatibility/compat${coupleCompat}.png`}
            />
            <button onClick={dislike}>Dislike</button>
            <button onClick={like}>Like</button>
            <img
              src={`images/starsigns/${star_sign.name}.PNG`}
              alt={star_sign.name}
            />
            <img src={image} alt={name} />
            <p>{bio}</p>
          </div>
        )}
      </div>
      <Nav />
    </>
  )
}

export default Home
