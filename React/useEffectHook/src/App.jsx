import  { useEffect, useState } from 'react'

const App = () => {

  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)

  useEffect(function(){
    console.log("useEffect is Running")
  },[number1,setNumber2])
  


  return (
    <div>
      <h1>{number1}</h1>
      <button onClick={() => {
        setNumber1(Math.floor(Math.random() * 100))
      }}>Change Number 1</button>
      <br/> <br/>

      <h1>{number2}</h1>
      <button onClick={() => {
        setNumber2(Math.floor(Math.random() * 100))
      }}>Change Number 2</button>
    </div>
  )
}

export default App