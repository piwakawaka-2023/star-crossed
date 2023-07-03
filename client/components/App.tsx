//Components

import Header from './Header'
import Landing from './Landing'

import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default App
