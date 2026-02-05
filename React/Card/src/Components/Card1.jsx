
const Card1 = () => {
    return (
        <div className="h-100 relative overflow-hidden w-59 rounded-4xl p-3  border border-gray-300 shadow-md shadow-gray-600 bg-white">
            <img className="absolute inset-0 rounded-4xl h-full object-cover w-full" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent" />

            <div className="absolute bottom-0 z-10 w-full p-4 right-0.5 ">
                 <div className="flex items-center gap-2">
                    <h2 className="text-lg font-semibold font-sans">Sophie Bennett</h2>
                     <span className="text-green-500 text-sm">✔</span>
                 </div>

                <p className="mt-1 text-sm  ">Product Designer who focuses on smiplicity & usability.</p>

                <div className="flex items-center justify-between mt-4">
                    <div className="flex gap-6 font-medium text-sm">
                      <span>👤 312</span>
                      <span>💬 44</span>
                    </div>

                    <button className="rounded-full bg-gray-300 px-4 py-1.5 text-sm font-medium text-black">Follow +</button>
                </div>
            </div>
        </div>
    )
}

export default Card1 