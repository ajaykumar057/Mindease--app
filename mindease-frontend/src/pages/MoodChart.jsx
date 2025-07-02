import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const MoodChart = ({ refresh }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchMood = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/mood");
        const moods = res.data.map((item) => ({
          mood: Number(item.mood),
          date: new Date(item.date),
        }));

        let filtered = moods;

        if (filter === "week") {
          const lastWeek = new Date();
          lastWeek.setDate(lastWeek.getDate() - 7);
          filtered = moods.filter((m) => m.date >= lastWeek);
        } else if (filter === "month") {
          const lastMonth = new Date();
          lastMonth.setMonth(lastMonth.getMonth() - 1);
          filtered = moods.filter((m) => m.date >= lastMonth);
        }

        setData(
          filtered.map((m) => ({
            ...m,
            date: m.date.toLocaleDateString(),
          }))
        );
      } catch (err) {
        console.error("Error fetching mood data:", err);
      }
    };

    fetchMood();
  }, [refresh, filter]);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mt-10 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-indigo-600 dark:text-indigo-300">
          📊 Mood Tracker
        </h2>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-gray-100 dark:bg-gray-700 text-sm rounded px-2 py-1 text-gray-700 dark:text-white"
        >
          <option value="all">All Time</option>
          <option value="week">Last Week</option>
          <option value="month">Last Month</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={[0, 10]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="mood"
            stroke="#6366F1"
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
            isAnimationActive
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MoodChart;
