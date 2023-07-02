import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import DisplayProfile from './components/Profile'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/profile" element={<DisplayProfile />} />
    </Route>
  )
)

export default router
