import {NavLink} from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='text-white bg-black flex gap-10 px-5 py-3 text-4xl' >
       <NavLink 
        style={({isActive}) => ({color:isActive?"red":"white"})}
        to='/'>
          Home
       </NavLink>

       <NavLink
       style={({isActive}) => ({color:isActive?"red":"white"})}
        to='/about'>
          About
       </NavLink>

       <NavLink 
       style={({isActive}) => ({color:isActive?"red":"white"})}
        to='/profile'>
         Profile
       </NavLink>
    </div>
  )
}

export default Navbar