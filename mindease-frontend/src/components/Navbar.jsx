import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  const navItems = [
    { name: "Home", path: "/", icon: "🏠" },
    { name: "Journal", path: "/journal", icon: "📝" },
    { name: "Mood", path: "/mood", icon: "📊" },
    { name: "CBT", path: "/cbt", icon: "💭" },
    { name: "Affirmation", path: "/affirmation", icon: "💖" },
    { name: "Breathing", path: "/breathing", icon: "😮‍💨" },
  ];

  return (
    <nav className="relative">
      {/* Glassmorphism navbar */}
      <div className="backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 border-b border-green-200/50 dark:border-slate-700/50 shadow-lg transition-all duration-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            
            {/* Logo with wellness gradient */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 dark:from-green-300 dark:via-blue-400 dark:to-purple-400 flex items-center justify-center shadow-lg">
                  <span className="text-white text-lg font-bold">M</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
              </div>
              <h1 className="text-2xl font-black bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 dark:from-green-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                MindEase
              </h1>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="group relative px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
                >
                  {/* Hover background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 dark:from-green-900/30 dark:via-blue-900/30 dark:to-purple-900/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative flex items-center space-x-2">
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                      {item.name}
                    </span>
                  </div>
                  
                  {/* Underline effect */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 group-hover:w-full transition-all duration-300 rounded-full"></div>
                </Link>
              ))}
            </div>

            {/* Dark Mode Toggle */}
            <div className="flex items-center space-x-4">
              {/* Mobile menu button */}
              <button className="md:hidden p-2 rounded-full bg-white/50 dark:bg-slate-700/50 border border-green-200/50 dark:border-slate-600/50">
                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              {/* Enhanced dark mode toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="relative p-3 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 dark:from-green-300 dark:via-blue-400 dark:to-purple-400 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-blue-600 to-purple-600 dark:from-green-400 dark:via-blue-500 dark:to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative flex items-center space-x-2">
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                    {darkMode ? "🌙" : "☀️"}
                  </span>
                  <span className="hidden sm:inline text-sm font-semibold">
                    {darkMode ? "Night" : "Day"}
                  </span>
                </div>
                
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 dark:from-green-300 dark:via-blue-400 dark:to-purple-400 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className="md:hidden absolute top-full left-0 right-0 backdrop-blur-xl bg-white/90 dark:bg-slate-800/90 border-b border-green-200/50 dark:border-slate-700/50 shadow-lg transform -translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="px-6 py-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:via-blue-50 hover:to-purple-50 dark:hover:from-green-900/20 dark:hover:via-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300 group"
            >
              <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </span>
              <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Floating wellness indicator */}
      <div className="absolute top-2 right-20 hidden lg:flex items-center space-x-2 px-3 py-1 rounded-full bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 dark:from-green-900/30 dark:via-blue-900/30 dark:to-purple-900/30 border border-green-200/50 dark:border-slate-700/50">
        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-blue-400 animate-pulse"></div>
        <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
          Mindful Mode
        </span>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 dark:from-green-300 dark:via-blue-400 dark:to-purple-400 opacity-60"></div>
    </nav>
  );
};

export default Navbar;