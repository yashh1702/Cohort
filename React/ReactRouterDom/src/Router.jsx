import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'


export const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:'/',element:<Home/>},
      {path:'/about',element:<About/>},
      {path:'/profile',element:<Profile/>},
    ]
  }
])