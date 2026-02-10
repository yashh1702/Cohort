import {useNavigate} from 'react-router-dom'


const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className='text-white bg-black flex gap-10 px-5 py-3 text-4xl bottom-0' >
       <button className='bg-emerald-600 rounded-xl p-4 font-bold cursor-pointer active:scale-95 ' onClick={()=>{
        navigate('/profile')
       }}>All Profiles</button>
    </div>
  )
}

export default Footer