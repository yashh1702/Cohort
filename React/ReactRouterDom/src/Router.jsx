import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Profile1 from './pages/Profile1'


export const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {index:true,element:<Home/>},
      {path:'/about',element:<About/>},
      {path:'/profile',
      element:<Profile/>,
      children:[
        {path:"profile-1",element:<Profile1/>}
      ]
     },
    ]
  }
])