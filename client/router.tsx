import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Landing from './components/Landing'
import Loading from './components/Loading'
import Signup from './components/Signup'
import Profile from './components/Profile'
import Home from './components/Home'
import Messages from './components/Messages'
import Message from './components/Message'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Landing />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Loading />} />
      <Route path="/home" element={<Home />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/message" element={<Message />} />
    </Route>
  )
)

export default router
