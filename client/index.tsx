import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter as Router } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import router from './router'

import App from './components/App'

import './styles/index.scss'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain="piwakawaka-2023-vera.au.auth0.com"
      clientId="6hlwQuCzVw33NUgk5YvcYsdxXqHTKZ4K"
      redirectUri={window.location.origin}
      audience="https://star-crossed-auth/api"
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  )
})
