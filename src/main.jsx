import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import AboutPage from '../pages/About.jsx' 
import ContactPage from '../pages/Contact.jsx' 
import ProjectsPage from '../pages/Projects.jsx' 
import ResumePage from '../pages/Resume.jsx' 
import ErrorPage from '../pages/Error.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <AboutPage />
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />
      },
      {
        path: 'projects',
        element: <ProjectsPage />
      },
      {
        path: 'resume',
        element: <ResumePage />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
