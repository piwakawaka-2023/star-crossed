import { useEffect } from 'react'
import { useAppDispatch } from '../hooks/hooks'

//Components
import Header from './Header'
import DisplayProfile from './Profile'
import Footer from './Footer'

function App() {
  return (
    <div>
      <Header />
      <DisplayProfile />
      <Footer />
    </div>
  )
}

export default App
