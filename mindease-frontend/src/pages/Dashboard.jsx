import { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function Dashboard() {
  const [moodData, setMoodData] = useState([]);
  const [journals, setJournals] = useState([]);

  // Fetch moods from backend
  const fetchMoodData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/mood");
      // Format for Recharts: date & mood number
      const formatted = res.data.slice(0, 7).reverse().map((entry) => ({
        date: new Date(entry.date).toLocaleDateString("en-IN", { day: "numeric", month: "short" }),
        mood: entry.mood,
      }));
      setMoodData(formatted);
    } catch (err) {
      console.error("Error fetching mood data:", err);
    }
  };

  // Fetch journals from backend
  const fetchJournalData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/journal");
      setJournals(res.data.slice(0, 5));
    } catch (err) {
      console.error("Error fetching journals:", err);
    }
  };

  useEffect(() => {
    fetchMoodData();
    fetchJournalData();
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6">Your Wellness Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mood Chart */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Mood Trend (Last 7 Entries)</h3>
          {moodData.length > 0 ? (
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={moodData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[1, 5]} />
                <Tooltip />
                <Line type="monotone" dataKey="mood" stroke="#6366f1" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-gray-500">No mood data yet.</p>
          )}
        </div>

        {/* Journal Entries */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Recent Journal Entries</h3>
          {journals.length > 0 ? (
            <ul className="space-y-3 text-gray-700">
              {journals.map((j, index) => (
                <li key={index} className="border-b pb-2">
                  <p className="font-medium">{j.prompt}</p>
                  <p className="text-sm text-gray-500 mt-1">{j.entry}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No journal entries yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
