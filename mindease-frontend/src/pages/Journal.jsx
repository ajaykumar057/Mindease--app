import React, { useEffect, useState } from "react";
import axios from "axios";
import { PenTool, Sparkles, Save, RefreshCw, BookOpen, Calendar, Heart, Leaf, Sun } from "lucide-react";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const Journal = () => {
  const [prompt, setPrompt] = useState("");
  const [entry, setEntry] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const fetchPrompt = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_BASE_URL}/api/ai/journal-prompt`);
      setPrompt(res.data.prompt);
    } catch (err) {
      console.error("🔥 Error fetching prompt:", err);
      setPrompt("⚠️ Error loading prompt. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const saveEntry = async () => {
    if (!entry.trim()) {
      setMessage("Your mindful thoughts are waiting to be shared... 🌱");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    try {
      await axios.post(`${API_BASE_URL}/api/journal`, {
        prompt,
        entry,
        date: new Date().toISOString(),
      });
      setMessage("🌸 Your reflection has been gently preserved in your mindful space!");
      setTimeout(() => {
        setMessage("");
        setEntry("");
        setWordCount(0);
      }, 3000);
    } catch (err) {
      console.error("🔥 Error saving entry:", err);
      setMessage("🌿 Something went wrong. Your thoughts deserve care - please try again.");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const handleEntryChange = (e) => {
    const text = e.target.value;
    setEntry(text);
    setWordCount(text.trim().split(/\s+/).filter(word => word.length > 0).length);
    
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 1000);
  };

  useEffect(() => {
    fetchPrompt(); // fetch on mount
  }, []);

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen relative overflow-hidden transition-all duration-700">
      {/* Wellness-themed background matching home page */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
        {/* Floating wellness shapes */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-30 dark:opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            >
              <div className={`w-${Math.floor(Math.random() * 16) + 8} h-${Math.floor(Math.random() * 16) + 8} bg-gradient-to-r ${Math.random() > 0.5 ? 'from-green-200/40 to-blue-200/40 dark:from-green-400/20 dark:to-blue-400/20' : 'from-purple-200/40 to-pink-200/40 dark:from-purple-400/20 dark:to-pink-400/20'} rounded-full blur-xl`}></div>
            </div>
          ))}
        </div>
        
        {/* Soft grid pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34, 197, 94, 0.3) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Wellness-themed header */}
          <div className="text-center mb-12 relative">
            {/* Soft glowing aura */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-200/30 via-blue-200/30 to-purple-200/30 dark:from-green-400/20 dark:via-blue-400/20 dark:to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
            
            <div className="relative z-10 backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 rounded-3xl p-8 border border-green-200/50 dark:border-slate-700/50 shadow-xl">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="relative">
                  <BookOpen className="w-8 h-8 text-green-600 dark:text-green-400" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-ping"></div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-500 via-blue-600 to-purple-600 dark:from-green-400 dark:via-blue-500 dark:to-purple-500 bg-clip-text text-transparent">
                  Mindful Journaling
                </h1>
                <Leaf className="w-8 h-8 text-blue-600 dark:text-blue-400 animate-pulse" />
              </div>
              
              <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300 mb-4">
                <Calendar className="w-4 h-4" />
                <p className="text-sm">{currentDate}</p>
                <Sun className="w-4 h-4 text-yellow-500 animate-pulse" />
              </div>

              {/* Wellness symbols */}
              <div className="flex justify-center space-x-4">
                {['🧘‍♀️', '🌱', '📝', '🕊️', '🌸'].map((icon, i) => (
                  <div
                    key={i}
                    className="text-xl animate-bounce opacity-70 hover:opacity-100 transition-opacity cursor-pointer hover:scale-125 duration-300"
                    style={{ animationDelay: `${i * 200}ms` }}
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Journal Card with wellness theme */}
          <div className="backdrop-blur-xl bg-white/90 dark:bg-slate-800/90 border border-green-200/50 dark:border-slate-700/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
            
            {/* Prompt Section with mindful design */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Sparkles className="w-6 h-6 text-green-500 dark:text-green-400 animate-spin-slow" />
                    <div className="absolute inset-0 bg-green-400/20 rounded-full blur-md animate-pulse"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Today's AI-Generated Prompt</h3>
                </div>
                <button
                  onClick={fetchPrompt}
                  disabled={loading}
                  className="group flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 dark:from-green-400 dark:to-blue-400 dark:hover:from-green-500 dark:hover:to-blue-500 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-300'}`} />
                  <span className="font-medium">
                    {loading ? "Generating..." : "🎯 New AI Prompt"}
                  </span>
                </button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-200/30 to-blue-200/30 dark:from-green-400/20 dark:to-blue-400/20 rounded-2xl blur-sm"></div>
                <div className="relative backdrop-blur-sm bg-white/80 dark:bg-slate-700/80 rounded-2xl p-6 border border-green-200/50 dark:border-slate-600/50">
                  {/* Soft pattern overlay */}
                  <div className="absolute inset-0 opacity-10 dark:opacity-20 rounded-2xl" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(34, 197, 94, 0.1) 15px, rgba(34, 197, 94, 0.1) 30px)'
                  }}></div>
                  
                  <p className="relative text-gray-700 dark:text-gray-200 text-lg leading-relaxed italic">
                    {loading ? (
                      <span className="flex items-center gap-3">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce animation-delay-200"></div>
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce animation-delay-400"></div>
                        </div>
                        AI is crafting your mindful prompt...
                      </span>
                    ) : (
                      prompt || "✨ Your AI-generated mindful prompt will appear here..."
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Writing Section with wellness aesthetic */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <PenTool className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Your Mindful Reflection</h3>
                  {isTyping && (
                    <div className="flex items-center gap-2 text-green-500 dark:text-green-400 text-sm">
                      <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse"></div>
                      Writing mindfully...
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
                  <span>{wordCount} {wordCount === 1 ? 'word' : 'words'}</span>
                  <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse"></div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-200/30 to-blue-200/30 dark:from-green-400/20 dark:to-blue-400/20 rounded-2xl blur-sm group-focus-within:blur-md transition-all duration-300"></div>
                <textarea
                  className="relative w-full h-64 p-6 backdrop-blur-sm bg-white/80 dark:bg-slate-700/80 border border-green-200/50 dark:border-slate-600/50 rounded-2xl text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 resize-none focus:outline-none focus:border-green-400/70 dark:focus:border-green-400/70 transition-all duration-300 text-lg leading-relaxed shadow-inner"
                  placeholder="Reflect and write your thoughts here... let your mind flow peacefully 🌿"
                  value={entry}
                  onChange={handleEntryChange}
                />
                
                {/* Soft writing guide pattern */}
                <div className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-10 rounded-2xl" style={{
                  backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)'
                }}></div>
              </div>
            </div>

            {/* Action Buttons with wellness theme */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  className="group flex items-center gap-3 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 dark:from-green-500 dark:to-teal-500 dark:hover:from-green-600 dark:hover:to-teal-600 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium"
                  onClick={saveEntry}
                >
                  <Save className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  💾 Save Entry
                </button>
              </div>

              {entry.trim() && (
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm animate-fade-in">
                  <Heart className="w-4 h-4 text-pink-400 animate-pulse" />
                  <span>Ready to preserve your thoughts</span>
                </div>
              )}
            </div>

            {/* Message Display with wellness styling */}
            {message && (
              <div className="mt-6 p-4 backdrop-blur-sm bg-green-50/80 dark:bg-green-900/30 rounded-2xl border border-green-200/50 dark:border-green-700/50 animate-fade-in">
                <p className="text-center text-green-700 dark:text-green-300 font-medium">{message}</p>
              </div>
            )}
          </div>

          {/* Mindful footer matching home theme */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-4 px-8 py-4 rounded-full backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 border border-green-200/50 dark:border-slate-700/50 shadow-lg">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-blue-400 dark:from-green-300 dark:to-blue-300 animate-pulse"></div>
              <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                "Every AI-guided reflection brings you closer to inner peace" 🌱
              </span>
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-300 dark:to-purple-300 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced animations matching home page */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float { 
          animation: float 18s ease-in-out infinite; 
        }
        
        .animate-spin-slow { 
          animation: spin-slow 25s linear infinite; 
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
};

export default Journal;