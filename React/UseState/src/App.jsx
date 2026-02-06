import { useState } from "react"

const App = () => {

  const [marks, setMarks] = useState([60,55,89,12,29])
 
  function graceStudent(){
     let newMarks = marks.map(function(elem){
     if(elem > 95){
      return elem 
     }
     else{
      return elem + 5;
     }
  })
    setMarks(newMarks)
  }
 
  return (
    <div>

    {marks.map(function(elem,index){
        return <h1 key={index}>Student {index + 1} = {elem} ({elem>33?"pass":"fail"})</h1>
    })}

    <button onClick={graceStudent}>Give them grace</button>

    </div>
  )
}

export default App