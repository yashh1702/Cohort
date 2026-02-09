import  { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {

  const [number1, setNumber1] = useState(0)
  const [username, setUsername] = useState("")

  const getData = async () => {
    const response = await axios.get("https://randomuser.me/api/")
    setUsername((response.data.results[0].name.first) + " " + (response.data.results[0].name.last) )
  }

  useEffect(function(){
    getData()
  },[number1])
  


  return (
    <div>
      <h1>{username}</h1>
      <h2>{number1}</h2>
      <button onClick={() => {
        setNumber1(number1+1)
      }}>Click here</button>
      
    </div>
  )
}

export default App