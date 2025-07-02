import { useState, useEffect } from "react";
import axios from "axios";

export default function MoodTracker() {
  const [mood, setMood] = useState(3);
  const [note, setNote] = useState("");
  const [success, setSuccess] = useState(false);
  const [entries, setEntries] = useState([]);

  const saveMood = async () => {
    try {
      await axios.post("http://localhost:5000/api/mood", {
        mood,
        note,
      });
      setSuccess(true);
      setNote("");
      fetchMoods(); // refresh list
    } catch (err) {
      console.error("Failed to save mood:", err);
    }
  };

  const fetchMoods = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/mood");
      setEntries(res.data);
    } catch (err) {
      console.error("Failed to fetch moods:", err);
    }
  };

  useEffect(() => {
    fetchMoods();
  }, []);

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-4 text-indigo-600">How are you feeling today?</h2>

      <input
        type="range"
        min="1"
        max="5"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        className="w-full"
      />
      <p className="text-center text-gray-600 mt-2">Mood Level: {mood}</p>

      <textarea
        rows="4"
        placeholder="Add a note (optional)..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="w-full border mt-4 p-3 rounded-md"
      />

      <button
        onClick={saveMood}
        className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        Save Mood
      </button>

      {success && <p className="mt-3 text-green-600">Mood saved successfully ✅</p>}

      {/* Past entries */}
      {entries.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Previous Mood Entries:</h3>
          <ul className="space-y-2">
            {entries.slice(0, 5).map((entry, index) => (
              <li key={index} className="bg-gray-50 p-3 rounded shadow-sm">
                <span className="font-bold">Mood:</span> {entry.mood} — {entry.note || "No note"}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
