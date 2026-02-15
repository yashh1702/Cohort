import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://cohort-ji6u.onrender.com/api/notes";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedText, setEditedText] = useState("");

  // -------- FETCH --------
  async function fetchNotes() {
    try {
      const res = await axios.get(API);
      setNotes(res.data.notes);
    } catch (err) {
      console.error("Error fetching notes:", err);
    }
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  // -------- CREATE --------
  async function handleSubmit(e) {
    e.preventDefault();
    const { title, description } = e.target.elements;

    if (!title.value.trim() || !description.value.trim()) return;

    try {
      await axios.post(API, {
        title: title.value,
        description: description.value,
      });

      e.target.reset();
      fetchNotes();
    } catch (err) {
      console.error("Error creating note:", err);
    }
  }

  // -------- DELETE --------
  async function handleDelete(noteId) {
    try {
      await axios.delete(`${API}/${noteId}`);
      fetchNotes();
    } catch (err) {
      console.error("Error deleting note:", err);
    }
  }

  // -------- START EDIT --------
  function startEdit(note) {
    setEditingId(note._id);
    setEditedText(note.description);
  }

  // -------- SAVE UPDATE --------
  async function saveUpdate(noteId) {
    if (!editedText.trim()) return;

    try {
      await axios.patch(`${API}/${noteId}`, {
        description: editedText,
      });

      setEditingId(null);
      setEditedText("");
      fetchNotes();
    } catch (err) {
      console.error("Error updating note:", err);
    }
  }

  return (
    <div className="bg-black min-h-screen text-white">

      {/* -------- FORM -------- */}
      <form
        onSubmit={handleSubmit}
        className="flex w-fit px-5 py-2 gap-4 mt-8 mx-6"
      >
        <input
          name="title"
          type="text"
          placeholder="Enter Title"
          className="border rounded-2xl px-5 py-3 font-bold text-xl text-white"
        />
        <input
          name="description"
          type="text"
          placeholder="Enter Description"
          className="border rounded-2xl px-5 py-3 font-bold text-xl text-white"
        />
        <button className="border p-4 rounded-2xl font-bold cursor-pointer active:scale-95">
          Create Note
        </button>
      </form>

      {/* -------- NOTES -------- */}
      <div className="font-bold p-10 gap-5 flex flex-wrap">
        {notes.map((note) => (
          <div
            key={note._id}
            className="p-5 border rounded-2xl w-72 flex flex-col items-center gap-3"
          >
            <h1 className="text-2xl font-extrabold">{note.title}</h1>

            {editingId === note._id ? (
              <>
                <input
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  className="text-white px-2 py-1 rounded"
                />
                <button
                  onClick={() => saveUpdate(note._id)}
                  className="px-3 py-1 bg-green-600 rounded-2xl active:scale-95"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <p>{note.description}</p>
                <button
                  onClick={() => startEdit(note)}
                  className="px-3 py-1 bg-blue-600 rounded-2xl active:scale-95"
                >
                  Edit
                </button>
              </>
            )}

            <button
              onClick={() => handleDelete(note._id)}
              className="px-3 py-1 bg-rose-600 rounded-2xl active:scale-95"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default App;
