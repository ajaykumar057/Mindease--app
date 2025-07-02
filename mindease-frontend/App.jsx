import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Journal from "./components/Journal";
import CBT from "./components/CBT";
import Affirmation from "./components/Affirmation";

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <header className="p-4 flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold">🧠 MindEase</h1>
          <button
            className="text-sm border px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            onClick={() => setDark(!dark)}
          >
            {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/cbt" element={<CBT />} />
          <Route path="/affirmation" element={<Affirmation />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
