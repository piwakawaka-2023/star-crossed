import { useEffect } from 'react'
import { useAppDispatch } from '../hooks/hooks'

//Components
import Header from './Header'
import DisplayProfile from './Profile'

function App() {
  return (
    <div>
      <Header />
      <DisplayProfile />
    </div>
  )
}

export default App
