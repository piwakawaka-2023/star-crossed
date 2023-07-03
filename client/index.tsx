import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter as Router } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import router from './router'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain="piwakawaka-2023-vera.au.auth0.com"
      clientId="Z2WT2kO64pkqYnCG7iC1hwynLrfK7fSc"
      redirectUri={`${window.location.origin}/loading`}
      audience="https://star-crossed-auth/api"
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  )
})
