import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import History from './History.tsx'
import Contact from './Contact.tsx'
import Privacy from './Privacy.tsx'
import Terms from './Terms.tsx'
import { Team } from './Team.tsx'
import Appointment from './Appointment.tsx'
import Media from './Media.tsx'
import Training from './Training.tsx'
import Purchase from './Purchase.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/history',
    element: <History />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/privacy',
    element: <Privacy />
  },
  {
    path: '/terms',
    element: <Terms />
  },
  {
    path: '/team',
    element: <Team />
  },
  {
    path: '/appointment',
    element: <Appointment />
  },
  {
    path: '/media',
    element: <Media />
  },
  {
    path: '/training',
    element: <Training />
  },
  {
    path: '/purchase',
    element: <Purchase />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)