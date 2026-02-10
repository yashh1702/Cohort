import {NavLink} from 'react-router-dom'


const Footer = () => {
  return (
    <div className='text-white bg-black flex gap-10 px-5 py-3 text-4xl bottom-0' >
       <NavLink to='/profile'>All Profiles</NavLink>
    </div>
  )
}

export default Footer