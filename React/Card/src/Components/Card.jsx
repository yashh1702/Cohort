const Card = ({ user }) => {
  const { img, username, description, likes, follows } = user;

  return (
    <div className="w-60 rounded-3xl border border-gray-200 bg-white p-3 shadow-md shadow-black/10">
      
      <img
        className="h-60 w-full rounded-2xl object-cover"
        src={img}
        alt={username}
      />

      <div className="mt-4 px-1">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">{username}</h2>
          <span className="text-green-500 text-sm">✔</span>
        </div>

        <p className="mt-1 text-sm text-gray-500">
          {description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-6 text-sm font-medium text-gray-700">
            <span>👤 {likes}</span>
            <span>💬 {follows}</span>
          </div>

          <button className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium hover:bg-gray-200">
            Follow +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
