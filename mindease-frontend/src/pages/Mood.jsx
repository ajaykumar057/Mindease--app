import React, { useEffect, useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const Mood = () => {
  const [rating, setRating] = useState(3);
  const [label, setLabel] = useState("Neutral");
  const [note, setNote] = useState("");
  const [moods, setMoods] = useState([]);

  const moodOptions = [
    { label: "Happy", emoji: "😊", color: "from-yellow-400 to-orange-400", glow: "shadow-yellow-300/50" },
    { label: "Sad", emoji: "😢", color: "from-blue-400 to-indigo-400", glow: "shadow-blue-300/50" },
    { label: "Angry", emoji: "😡", color: "from-red-400 to-pink-400", glow: "shadow-red-300/50" },
    { label: "Anxious", emoji: "😰", color: "from-purple-400 to-violet-400", glow: "shadow-purple-300/50" },
    { label: "Calm", emoji: "😌", color: "from-green-400 to-emerald-400", glow: "shadow-green-300/50" },
    { label: "Neutral", emoji: "😐", color: "from-gray-400 to-slate-400", glow: "shadow-gray-300/50" },
  ];

  const getMoodColor = (rating) => {
    const colors = [
      "from-red-300 to-pink-300",
      "from-orange-300 to-yellow-300", 
      "from-blue-300 to-cyan-300",
      "from-green-300 to-emerald-300",
      "from-purple-300 to-violet-300"
    ];
    return colors[rating - 1] || colors[2];
  };

  // Simulate fetching moods from backend
  const fetchMoods = () => {
    // For demo purposes, let's add some sample data
    const sampleMoods = [
      { _id: '1', rating: 4, label: 'Happy', note: 'Had a great day at work!', createdAt: new Date(Date.now() - 86400000).toISOString() },
      { _id: '2', rating: 3, label: 'Neutral', note: 'Just an average day', createdAt: new Date(Date.now() - 172800000).toISOString() },
      { _id: '3', rating: 5, label: 'Calm', note: 'Meditation session was amazing', createdAt: new Date(Date.now() - 259200000).toISOString() },
    ];
    setMoods(sampleMoods);
  };

  useEffect(() => {
    fetchMoods();
  }, []);

  const handleSubmit = () => {
    if (!label || !rating) return;
    
    // Simulate saving to backend
    const newMood = {
      _id: Date.now().toString(),
      rating,
      label,
      note,
      createdAt: new Date().toISOString()
    };
    
    setMoods(prev => [newMood, ...prev]);
    setNote("");
    
    // Show success feedback
    const button = document.querySelector('.save-button');
    if (button) {
      button.textContent = '✨ Saved!';
      setTimeout(() => {
        button.innerHTML = '<span class="relative flex items-center space-x-2"><span>Save My Mood</span><span class="text-xl">🌟</span></span>';
      }, 2000);
    }
  };

  const chartData = moods.map((entry) => ({
    date: new Date(entry.createdAt).toLocaleDateString(),
    mood: entry.rating,
    label: entry.label,
  }));

  const customTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-green-200/50 dark:border-slate-700/50 rounded-2xl p-4 shadow-xl">
          <p className="text-gray-800 dark:text-gray-200 font-semibold">{`Date: ${label}`}</p>
          <p className="text-purple-600 dark:text-purple-400">{`Mood Level: ${payload[0].value}/5`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen relative overflow-hidden transition-all duration-700">
      {/* Wellness Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
        {/* Floating wellness elements */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20 dark:opacity-10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${12 + Math.random() * 8}s`
              }}
            >
              <div className={`w-${Math.floor(Math.random() * 12) + 6} h-${Math.floor(Math.random() * 12) + 6} bg-gradient-to-r ${getMoodColor(Math.floor(Math.random() * 5) + 1)} opacity-30 rounded-full blur-xl`}></div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Mindful Header */}
          <div className="text-center mb-12 relative">
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-300/20 via-pink-300/20 to-blue-300/20 dark:from-purple-400/10 dark:via-pink-400/10 dark:to-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
            
            <div className="relative backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 rounded-3xl p-8 border border-green-200/50 dark:border-slate-700/50 shadow-xl">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="text-4xl animate-bounce">🌈</div>
                <h1 className="text-5xl font-black bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent">
                  Mood Journey
                </h1>
                <div className="text-4xl animate-bounce" style={{animationDelay: '0.2s'}}>✨</div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Track your emotional wellness with mindful awareness
              </p>
            </div>
          </div>

          {/* Enhanced Mood Form */}
          <div className="backdrop-blur-xl bg-white/90 dark:bg-slate-800/90 rounded-3xl p-8 border border-green-200/50 dark:border-slate-700/50 shadow-xl mb-8 relative overflow-hidden">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10" style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)',
            }}></div>
            
            <div className="relative z-10">
              {/* Mood Level Slider */}
              <div className="mb-8">
                <label className="block mb-4 font-bold text-xl text-gray-800 dark:text-gray-200 text-center">
                  How are you feeling? ({rating}/5)
                </label>
                
                {/* Visual mood indicator */}
                <div className="flex justify-center mb-6">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${getMoodColor(rating)} flex items-center justify-center text-4xl shadow-lg transform transition-all duration-500 hover:scale-110`}>
                    {moodOptions.find(m => m.label === label)?.emoji || "😐"}
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={rating}
                    onChange={(e) => setRating(parseInt(e.target.value))}
                    className="w-full h-3 bg-gradient-to-r from-red-200 via-yellow-200 via-blue-200 via-green-200 to-purple-200 dark:from-red-300 dark:via-yellow-300 dark:via-blue-300 dark:via-green-300 dark:to-purple-300 rounded-full appearance-none cursor-pointer slider-thumb"
                  />
                  {/* Mood level indicators */}
                  <div className="flex justify-between mt-2 px-2">
                    {[1,2,3,4,5].map(num => (
                      <div key={num} className={`text-sm font-semibold transition-all duration-300 ${rating === num ? 'text-purple-600 dark:text-purple-400 scale-125' : 'text-gray-400 dark:text-gray-500'}`}>
                        {num}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enhanced Mood Labels */}
              <div className="mb-8">
                <label className="block mb-4 font-bold text-xl text-gray-800 dark:text-gray-200 text-center">
                  Choose your mood
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {moodOptions.map((option) => (
                    <button
                      key={option.label}
                      className={`group relative px-6 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                        label === option.label
                          ? `bg-gradient-to-r ${option.color} text-white shadow-lg ${option.glow}`
                          : "bg-white/70 dark:bg-slate-700/70 text-gray-700 dark:text-gray-300 hover:bg-white/90 dark:hover:bg-slate-600/90"
                      }`}
                      onClick={() => setLabel(option.label)}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <div className={`text-3xl transition-transform duration-300 ${label === option.label ? 'animate-bounce' : 'group-hover:scale-125'}`}>
                          {option.emoji}
                        </div>
                        <span className="font-semibold text-sm">{option.label}</span>
                      </div>
                      {label === option.label && (
                        <div className="absolute inset-0 rounded-2xl bg-white/20 dark:bg-black/20 animate-pulse"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Enhanced Note Section */}
              <div className="mb-8">
                <label className="block mb-4 font-bold text-xl text-gray-800 dark:text-gray-200 text-center">
                  💭 Share your thoughts
                </label>
                <div className="relative">
                  <textarea
                    rows="3"
                    className="w-full p-4 bg-white/70 dark:bg-slate-700/70 border-2 border-gray-200/50 dark:border-slate-600/50 rounded-2xl focus:border-purple-400 dark:focus:border-purple-500 transition-all duration-300 resize-none text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="What's on your mind? How are you feeling today..."
                  />
                  <div className="absolute bottom-3 right-3 text-xs text-gray-400 dark:text-gray-500">
                    {note.length}/500
                  </div>
                </div>
              </div>

              {/* Enhanced Save Button */}
              <div className="text-center">
                <button
                  onClick={handleSubmit}
                  className="save-button group relative px-12 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative flex items-center space-x-2">
                    <span>Save My Mood</span>
                    <span className="text-xl">🌟</span>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Mood Chart */}
          <div className="backdrop-blur-xl bg-white/90 dark:bg-slate-800/90 rounded-3xl p-8 border border-green-200/50 dark:border-slate-700/50 shadow-xl mb-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 flex space-x-2">
              <div className="text-2xl animate-pulse">📊</div>
              <div className="text-2xl animate-bounce" style={{animationDelay: '0.5s'}}>💫</div>
            </div>
            
            <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              Your Mood Journey
            </h2>
            
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="moodGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.3} />
                  <XAxis 
                    dataKey="date" 
                    stroke="#6b7280"
                    fontSize={12}
                    tick={{ fill: '#6b7280' }}
                  />
                  <YAxis 
                    domain={[1, 5]} 
                    stroke="#6b7280"
                    fontSize={12}
                    tick={{ fill: '#6b7280' }}
                  />
                  <Tooltip content={customTooltip} />
                  <Area
                    type="monotone"
                    dataKey="mood"
                    stroke="#8b5cf6"
                    strokeWidth={3}
                    fill="url(#moodGradient)"
                    dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 6 }}
                    activeDot={{ r: 8, stroke: '#8b5cf6', strokeWidth: 2, fill: '#fff' }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Enhanced Recent Entries */}
          <div className="backdrop-blur-xl bg-white/90 dark:bg-slate-800/90 rounded-3xl p-8 border border-green-200/50 dark:border-slate-700/50 shadow-xl">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="text-2xl">📝</div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
                Recent Reflections
              </h2>
              <div className="text-2xl">🌸</div>
            </div>
            
            <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
              {moods.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🌱</div>
                  <p className="text-gray-500 dark:text-gray-400 text-lg">
                    Your mood journey begins here. Track your first mood above!
                  </p>
                </div>
              ) : (
                moods
                  .slice()
                  .reverse()
                  .map((entry, index) => {
                    const moodOption = moodOptions.find(m => m.label === entry.label);
                    return (
                      <div
                        key={entry._id}
                        className={`group relative backdrop-blur-sm bg-gradient-to-r ${moodOption?.color || 'from-gray-400 to-slate-400'} bg-opacity-10 hover:bg-opacity-20 rounded-2xl p-6 border border-white/20 dark:border-slate-600/20 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {/* Mood indicator */}
                        <div className="flex items-start space-x-4">
                          <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r ${moodOption?.color || 'from-gray-400 to-slate-400'} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            {moodOption?.emoji || "😐"}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">
                                {entry.label}
                              </h3>
                              <div className="flex items-center space-x-2">
                                <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${moodOption?.color || 'from-gray-400 to-slate-400'} text-white text-sm font-semibold shadow-md`}>
                                  {entry.rating}/5
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                  {new Date(entry.createdAt).toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                            
                            {entry.note && (
                              <div className="bg-white/50 dark:bg-slate-700/50 rounded-xl p-3 mt-3">
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                  "{entry.note}"
                                </p>
                              </div>
                            )}
                            
                            <div className="mt-3 text-xs text-gray-400 dark:text-gray-500">
                              {new Date(entry.createdAt).toLocaleTimeString()}
                            </div>
                          </div>
                        </div>
                        
                        {/* Subtle glow effect */}
                        <div className={`absolute -inset-0.5 bg-gradient-to-r ${moodOption?.color || 'from-gray-400 to-slate-400'} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
                      </div>
                    );
                  })
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float { animation: float 15s ease-in-out infinite; }
        
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(45deg, #8b5cf6, #ec4899);
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);
          transition: all 0.3s ease;
        }
        
        .slider-thumb::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 6px 20px rgba(139, 92, 246, 0.6);
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(156, 163, 175, 0.1);
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #8b5cf6, #ec4899);
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #7c3aed, #db2777);
        }
      `}</style>
    </div>
  );
};

export default Mood;