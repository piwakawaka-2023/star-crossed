import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import DisplayProfile from './components/Profile'
import Landing from './components/Landing'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Landing />} />
      <Route path="/profile" element={<DisplayProfile />} />
    </Route>
  )
)

export default router
