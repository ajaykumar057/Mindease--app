import React, { useState } from "react";
import axios from "axios";

const MoodForm = ({ onEntrySaved }) => {
  const [mood, setMood] = useState(5);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/mood", { mood });
      onEntrySaved(); // Refresh chart after saving
      setMood(5); // Reset slider
    } catch (err) {
      console.error("Failed to save mood:", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow mt-10"
    >
      <h3 className="text-lg font-semibold mb-4 text-indigo-600 dark:text-indigo-300">
        😌 How are you feeling today?
      </h3>
      <input
        type="range"
        min="1"
        max="10"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        className="w-full accent-indigo-600"
      />
      <p className="text-center mt-2 text-gray-700 dark:text-gray-200">
        Mood: {mood}/10
      </p>
      <button
        type="submit"
        className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
      >
        Save Mood
      </button>
    </form>
  );
};

export default MoodForm;
