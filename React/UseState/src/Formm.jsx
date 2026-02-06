import { useState } from "react"

const Formm = () => {
    const [name, setName] = useState("Yash")
    const [input, setInput] = useState("")
    const submitHandler = (e)=>{
        e.preventDefault()
        setName(input)
        setInput("")
    }

  return (
    <div>
        <h1>{name}</h1>
        <form onSubmit={submitHandler}>
            <input value={input}
            onChange={(e) => {
                setInput(e.target.value)
            }}
            type='text'
            required
            placeholder='Enter name'/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Formm