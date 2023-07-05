import { useAppSelector } from '../hooks/hooks'
import { fetchUser } from '../apis/users'
import { User } from '../../models/Users'
import Header from './Header'

function Messages() {
  const matchIds = useAppSelector((state) => state.matches)

  const matchData = matchIds.map((matchId: number) => {
    return fetchUser(matchId)
  })

  return (
    <div>
      <Header />
      matchData &&
      {matchData.map((match: User) => {
        return (
          <div key={match.id}>
            <h2>match.name</h2>
            <img src={match.star_sign.image} alt={match.star_sign.name} />
            <p>Send a chat!</p>
          </div>
        )
      })}
      : <p>{'no matches :('}</p>
    </div>
  )
}

export default Messages
