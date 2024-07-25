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


import {Webhook} from 'discord-webhook-node'
const contactMessage = (contact) =>{
    const hook = new Webhook('https://discord.com/api/webhooks/1266144145920229437/55DYaEFgOdVjr7BS_cHX_JWhEbxWlgXGH45MoNUi1XdrJGFYV65EcFISBaKqYiNsdIoE')
    const message = `
    \`\`\`
Email: 
${contact.email}

Name: 
${contact.name}

Message:
${contact.msg}
     \`\`\`
    `
    hook.setUsername('Contact Message')
    hook.send(message)
}



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
        element: <ContactPage contactMessage={contactMessage}/>
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
