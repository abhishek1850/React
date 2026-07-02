import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/About/About'
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User'
import Github , {githubLoaderData} from './Components/Github/Github'


const router = createBrowserRouter([
  {
    path: '/',
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"user/:userId",
        element:<User/>
      },
      {
        loader:githubLoaderData,
        path:"github",
        element:<Github/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>,
)
