import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import DisplayProfile from './components/Profile'
import Landing from './components/Landing'
import Home from './components/Home'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
    </Route>
  )
)

export default router
