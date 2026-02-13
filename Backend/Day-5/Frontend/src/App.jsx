import { useState } from "react"
import axios from 'axios'

const App = () => {

  const [notes, setNotes] = useState([
  ])

  axios.get("http://localhost:3000/api/notes")
  .then((res)=>{
    setNotes(res.data.notes)
  })
  

  return (
    <div className='font-bold p-10 gap-5 bg-black text-white flex '>
     {notes.map(note => {
      return <div className="p-5 border rounded-2xl max-w-3/12 flex flex-col  items-center gap-2">
        <h1 className="font-extraboldbold text-4xl ">{note.title}</h1>
        <p className="">{note.description}</p>
        <div className="flex justify-between gap-10 mt-2 text-sm">
          <button className=" px-3 py-1 cursor-pointer active:scale-95 bg-rose-600 rounded-2xl">Remove</button>
          <button className=" px-3 py-1 cursor-pointer active:scale-95 bg-green-600 rounded-2xl">Update</button>
        </div>
      </div>
     })}
      
    </div>
  )
}

export default App