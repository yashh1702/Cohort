import {NavLink} from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='text-white bg-black flex gap-10 px-5 py-3 text-4xl' >
       <NavLink to='/'>Home</NavLink>
       <NavLink to='/about'>About</NavLink>
       <NavLink to='/profile'>Profile</NavLink>
    </div>
  )
}

export default Navbar