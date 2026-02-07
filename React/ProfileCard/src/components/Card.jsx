

const Card = (props) => {
  return (
    <div className="w-[19vw] rounded-xl py-8 px-8 flex flex-col items-center text-center  bg-white text-black">
              <img className="h-20 w-20 rounded-full object-center object-cover" src={props.elem.imageURL} />
              <h1 className="text-2xl font-bold mt-2">{props.elem.userName}</h1>
              <h5 className="text-lg text-blue-500 font-bold my-2">{props.elem.userRole}</h5>
              <p className="text-sm font-medium leading-tight">{props.elem.userDesc}</p>
              <button 
              onClick={()=>props.removeUser(props.index)}
              className="active:scale-95 cursor-pointer text-white text-sm mt-5 px-4 py-1 rounded-2xl bg-red-500 font-semibold">Remove</button>
            </div>
  )
}

export default Card