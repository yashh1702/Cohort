import Card from "./Components/Card";

const App = () => {
  const users = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=764&auto=format&fit=crop",
      username: "Sophie Bennett",
      description: "Product Designer who focuses on simplicity & usability.",
      likes: 312,
      follows: 48,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=764&auto=format&fit=crop",
      username: "Emma Collins",
      description: "UX Researcher passionate about human-centered design.",
      likes: 421,
      follows: 73,
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=764&auto=format&fit=crop",
      username: "Daniel Wright",
      description: "Frontend Developer crafting clean & scalable UI.",
      likes: 289,
      follows: 34,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center gap-6">
      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
};

export default App;
