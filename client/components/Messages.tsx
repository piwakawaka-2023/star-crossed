import { useAppSelector } from '../hooks/hooks'
import { fetchUser } from '../apis/users'
import { User } from '../../models/Users'
import { useState, useEffect } from 'react'
import Header from './Header'
import { getMatches } from '../apis/users'

function Messages() {
  const [chats, setChats] = useState([] as User[])
  const profile = useAppSelector((state) => state.profile) as User

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
      <div className="chatsContainer">
        {chats.map((match: User) => {
          return (
            <div key={match.id} className="chat">
              <img className="thumbNail" src={match.image} alt={match.name} />
              <div className="divHell">
                <h2>{match.name}</h2>
                <p>Send a chat!</p>
              </div>
              <img
                className="icon"
                src={`images/starsigns/${match.star_sign.name}.PNG`}
                alt={match.star_sign.name}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Messages
