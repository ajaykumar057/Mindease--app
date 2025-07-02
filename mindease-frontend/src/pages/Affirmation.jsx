import React, { useState } from "react";
import axios from "axios";

const Affirmation = () => {
  const [affirmation, setAffirmation] = useState("");
  const [loading, setLoading] = useState(false);

  const getAffirmation = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5000/api/ai/affirmation");
      setAffirmation(res.data.affirmation);
    } catch (err) {
      console.error("🔥 Error fetching affirmation:", err);
      setAffirmation("❌ Failed to load affirmation. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md mt-10 text-center">
      <h2 className="text-2xl font-semibold mb-4">🌸 Daily Affirmation</h2>

      <button
        onClick={getAffirmation}
        className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
      >
        {loading ? "Generating..." : "🌞 Get Affirmation"}
      </button>

      {affirmation && (
        <p className="mt-6 text-lg text-gray-700 italic">"{affirmation}"</p>
      )}
    </div>
  );
};

export default Affirmation;
