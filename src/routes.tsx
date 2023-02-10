import { createBrowserRouter } from 'react-router-dom'
import { Status } from './pages/Status'
import { TimeLine } from './pages/Timeline'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <TimeLine />
  },
  {
    path: '/status',
    element: <Status />
  }
])
