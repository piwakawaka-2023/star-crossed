import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import DisplayProfile from './components/Profile'
import Landing from './components/Landing'
import Loading from './components/Loading'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Landing />} />
      <Route path="/profile" element={<Loading />} />
    </Route>
  )
)

export default router
