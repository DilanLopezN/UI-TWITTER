import { createBrowserRouter } from 'react-router-dom'
import { TimeLine } from './pages/Timeline'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <TimeLine />
  }
])
