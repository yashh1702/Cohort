
const Card = () => {
    return (
        <div className=" w-60 rounded-4xl p-3  border border-gray-300 shadow-2xl shadow-gray-600  bg-white">
            <img className="rounded-4xl h-60 object-cover w-full" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div className="mt-4 px-1">
                 <div className="flex items-center gap-2">
                    <h2 className="text-lg font-semibold">Sophie Bennett</h2>
                     <span className="text-green-500 text-sm">✔</span>
                 </div>

                <p className="mt-1 text-sm text-gray-500 ">Product Designer who focuses on smiplicity & usability.</p>

                <div className="flex items-center justify-between mt-4">
                    <div className="flex gap-6 font-medium text-sm">
                      <span>👤 312</span>
                      <span>💬 48</span>
                    </div>

                    <button className=" px-4 py-2 rounded-full bg-gray-100 text-sm font-medium hover:bg-gray-200">Follow +</button>
                </div>
            </div>
        </div>
    )
}

export default Card 