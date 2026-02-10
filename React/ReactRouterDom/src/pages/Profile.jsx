import { Outlet } from "react-router-dom"


const Profile = () => {
  return (
    <div className="text-5xl font-extrabold flex flex-1 justify-center items-center">
      Profile
      <Outlet/>
      </div>
  )
}

export default Profile