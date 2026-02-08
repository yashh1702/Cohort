import { useState } from "react";
import Card from "./components/Card";


const App = () => {

  const [userName, setUserName] = useState("")
  const [userRole, setUserRole] = useState("")
  const [imageURL, setImageURL] = useState("")
  const [userDesc, setUserDesc] = useState("")

  const localData = JSON.parse(localStorage.getItem('all-users')) || []

  const [allUsers, setAllUsers] = useState(localData)

  const submitHandler = (e) => {
    e.preventDefault()

    let oldUsers = [...allUsers]
    oldUsers.push({ userName, imageURL, userRole, userDesc })
    setAllUsers(oldUsers)
    localStorage.setItem('all-users',JSON.stringify(oldUsers))

    setUserName("")
    setImageURL("")
    setUserRole("")
    setUserDesc("")
  }

  const removeUser = (index) =>{
    const copyUser = [...allUsers]
    copyUser.splice(index,1)
    setAllUsers(copyUser)
    localStorage.setItem('all-users',JSON.stringify(copyUser))
  }


  return (
    <div className=' bg-black text-white max-h-full h-screen'>
      <form onSubmit={submitHandler} className="py-3 px-4 flex flex-wrap gap-5 justify-center ">
        <input className="text-2xl border px-8 py-3 rounded-2xl w-[45%] font-semibold "
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value)
          }}
          type="text"
          placeholder="Enter Your Name" />

        <input className="text-2xl border px-8 py-3 rounded-2xl w-[45%] font-semibold "
          value={imageURL}
          onChange={(e) => {
            setImageURL(e.target.value)
          }}
          type="text"
          placeholder="Img Url" />

        <input className="text-2xl border px-8 py-3 rounded-2xl w-[45%] font-semibold "
          value={userRole}
          onChange={(e) => {
            setUserRole(e.target.value)
          }}
          type="text"
          placeholder="Enter Your Role" />

        <input className="text-2xl border px-8 py-3 rounded-2xl w-[45%] font-semibold "
          value={userDesc}
          onChange={(e) => {
            setUserDesc(e.target.value)
          }}
          type="text"
          placeholder="Description" />

        <button className=" cursor-pointer active:scale-95 font-semibold text-4xl px-8 py-3 rounded-2xl bg-emerald-700 w-[90%]">Create User</button>
      </form>
      <div className="px-4 gap-10 py-10 flex flex-wrap justify-center">
        {allUsers.map(function (elem, index) {
          return <Card elem={elem} removeUser={removeUser} index={index}  />
        })}
      </div>
    </div>
  )
}

export default App