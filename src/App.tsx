import './styles/layout.css'
import { Sidebar } from './components/Sidebar'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

export function App() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <RouterProvider router={router} />
      </div>
    </div>
  )
}
