import { useAppSelector } from '../hooks/hooks'
import { fetchUser } from '../apis/users'
import { User } from '../../models/Users'
import { useState, useEffect } from 'react'
import Header from './Header'

function Messages() {
  const matches = useAppSelector((state) => state.matches)
  const [chats, setChats] = useState([] as User[])

  useEffect(() => {
    console.log('load')
    matches.map((matchId) => {
      getUser(matchId)
      console.log(chats)
    })
  })

  async function getUser(id: number) {
    const user = await fetchUser(id)
    chats.push(user)
    setChats(chats)
  }

  return (
    <div>
      <Header />
      matches &&
      {chats.map((match: User) => {
        return (
          <div key={match.id}>
            <img src={match.image} alt={match.name} />
            <h2>match.name</h2>
            <img
              src={`images/starsigns/${match.star_sign.name}.PNG`}
              alt={match.star_sign.name}
            />
            <p>Send a chat!</p>
          </div>
        )
      })}
      : <p>{'no matches :('}</p>
    </div>
  )
}

export default Messages
