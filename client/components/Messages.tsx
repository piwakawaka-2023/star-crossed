import { useAppSelector } from '../hooks/hooks'
import { fetchUser } from '../apis/users'
import { User } from '../../models/Users'
import { useState, useEffect } from 'react'
import Header from './Header'
import { getMatches } from '../apis/users'

function Messages() {
  const [chats, setChats] = useState([] as User[])
  const profile = useAppSelector((state) => state.profile)

  useEffect(() => {
    getChats()
  }, [profile])

  async function getChats() {
    const chats = await getMatches(profile.id)
    setChats(chats)
  }

  return (
    <div>
      <Header />
      {chats.map((match: User) => {
        return (
          <div key={match.id}>
            <img src={match.image} alt={match.name} />
            <h2>{match.name}</h2>
            <img
              src={`images/starsigns/${match.star_sign.name}.PNG`}
              alt={match.star_sign.name}
            />
            <p>Send a chat!</p>
          </div>
        )
      })}
    </div>
  )
}

export default Messages
