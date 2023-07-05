import { useAppSelector } from '../hooks/hooks'
import { fetchUser } from '../apis/users'

function Messages() {
  const matchIds = useAppSelector((state) => state.matches)

  const matchData = matchIds.map((matchId: number) => {
    return fetchUser(matchId)
  })

  return (
    <div>
      {matchData.map((match) => {
        ;<div key={match.id}></div>
      })}
    </div>
  )
}

export default Messages
