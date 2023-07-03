import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Profile from './components/Profile'
import Home from './components/Home'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/profile" element={<Profile />} />
      <Route path="/home" element={<Home />} />
    </Route>
  )
)

export default router
