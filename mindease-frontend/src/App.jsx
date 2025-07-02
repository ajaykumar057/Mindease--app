import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import Mood from "./pages/Mood";
import CBT from "./pages/CBT";
import Affirmation from "./pages/Affirmation";
import Breathing from "./pages/Breathing";

function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("dark") === "true");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all">
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/mood" element={<Mood />} />
          <Route path="/cbt" element={<CBT />} />
          <Route path="/affirmation" element={<Affirmation />} />
          <Route path="/breathing" element={<Breathing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
