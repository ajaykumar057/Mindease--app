import React, { useState } from "react";
import axios from "axios";

const CBT = () => {
  const [thought, setThought] = useState("");
  const [reframed, setReframed] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showResult, setShowResult] = useState(false);

  const reframeThought = async () => {
    if (!thought.trim()) {
      setMessage("Please enter a thought to reframe.");
      return;
    }

    setLoading(true);
    setMessage("");
    setShowResult(false);

    try {
      const res = await axios.post("http://localhost:5000/api/ai/reframe", { thought });
      setReframed(res.data.reframe);
      setShowResult(true);
    } catch (err) {
      console.error("🔥 Error reframing thought:", err);
      setMessage("❌ Failed to reframe. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setThought("");
    setReframed("");
    setMessage("");
    setShowResult(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden transition-all duration-700">
      {/* Matching background from Home */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-slate-900 dark:via-emerald-900 dark:to-slate-900">
        {/* Floating therapeutic shapes */}
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
              <div className={`w-${Math.floor(Math.random() * 12) + 6} h-${Math.floor(Math.random() * 12) + 6} bg-gradient-to-r from-emerald-200/30 to-teal-200/30 dark:from-emerald-400/15 dark:to-teal-400/15 rounded-full blur-xl`}></div>
            </div>
          ))}
        </div>
        
        {/* Therapeutic grid pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 p-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-12 relative">
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-emerald-200/20 via-teal-200/20 to-cyan-200/20 dark:from-emerald-400/10 dark:via-teal-400/10 dark:to-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
            
            <div className="relative z-10 backdrop-blur-sm bg-white/90 dark:bg-slate-800/90 rounded-3xl p-8 border border-emerald-200/50 dark:border-slate-700/50 shadow-xl">
              {/* Brain/thought icon animation */}
              <div className="relative mb-6 transform hover:scale-105 transition-transform duration-500">
                <div className="text-8xl mb-4 animate-pulse filter drop-shadow-lg">🧠</div>
                <div className="absolute top-0 right-1/4 text-4xl animate-bounce" style={{ animationDelay: '0.5s' }}>💭</div>
                <div className="absolute top-1/4 left-1/4 text-3xl animate-bounce" style={{ animationDelay: '1s' }}>✨</div>
              </div>

              <h1 className="text-5xl md:text-6xl font-black mb-4 relative">
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 dark:from-emerald-300 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent blur-sm">
                  CBT Reframe
                </span>
                <span className="relative bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-500 dark:to-cyan-500 bg-clip-text text-transparent">
                  CBT Reframe
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
                Transform negative thought patterns with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 font-semibold">AI-powered cognitive therapy</span>
              </p>
            </div>
          </div>

          {/* Main CBT Interface */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            
            {/* Input Section */}
            <div className="relative">
              <div className="backdrop-blur-xl bg-white/95 dark:bg-slate-800/95 rounded-3xl p-8 border border-emerald-200/50 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-500">
                
                {/* Thought Cloud Header */}
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <div className="text-4xl mr-3 animate-bounce">💭</div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-ping"></div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Share Your Thought
                  </h2>
                </div>

                {/* Thought Input */}
                <div className="relative mb-6">
                  <textarea
                    className="w-full h-32 p-6 border-2 border-emerald-200/50 dark:border-slate-600/50 rounded-2xl bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 resize-none focus:border-emerald-400 dark:focus:border-emerald-400 focus:ring-4 focus:ring-emerald-200/30 dark:focus:ring-emerald-400/20 outline-none transition-all duration-300 text-lg leading-relaxed"
                    placeholder="What negative thought is troubling you? Share it here, and let's work together to reframe it into something more balanced and helpful..."
                    value={thought}
                    onChange={(e) => setThought(e.target.value)}
                  />
                  <div className="absolute bottom-3 right-4 text-sm text-gray-400 dark:text-gray-500">
                    {thought.length}/500
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={reframeThought}
                    disabled={loading || !thought.trim()}
                    className="flex-1 relative group overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white font-semibold py-4 px-8 shadow-lg shadow-emerald-300/40 dark:shadow-emerald-500/30 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300"
                  >
                    {loading && (
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 animate-pulse"></div>
                    )}
                    <div className="relative flex items-center justify-center space-x-3">
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>AI is thinking...</span>
                        </>
                      ) : (
                        <>
                          <span className="text-2xl">✨</span>
                          <span>Reframe with AI</span>
                        </>
                      )}
                    </div>
                  </button>

                  {(thought || reframed) && (
                    <button
                      onClick={resetForm}
                      className="px-6 py-4 rounded-2xl border-2 border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-slate-500 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-all duration-300 font-medium"
                    >
                      🔄 Reset
                    </button>
                  )}
                </div>

                {/* Error Message */}
                {message && (
                  <div className="mt-4 p-4 rounded-2xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 text-red-700 dark:text-red-300 text-center">
                    <span className="text-xl mr-2">⚠️</span>
                    {message}
                  </div>
                )}
              </div>
            </div>

            {/* Results Section */}
            <div className="relative">
              {showResult ? (
                <div className="backdrop-blur-xl bg-white/95 dark:bg-slate-800/95 rounded-3xl p-8 border border-emerald-200/50 dark:border-slate-700/50 shadow-xl animate-fadeIn">
                  
                  {/* Success Header */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="text-4xl mr-3 animate-bounce">💡</div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                      Reframed Perspective
                    </h3>
                  </div>

                  {/* Original vs Reframed */}
                  <div className="space-y-6">
                    {/* Original Thought */}
                    <div className="relative p-6 rounded-2xl bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200/50 dark:border-red-800/30">
                      <div className="flex items-start space-x-3">
                        <div className="text-2xl opacity-70">😔</div>
                        <div>
                          <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">Original Thought:</h4>
                          <p className="text-gray-700 dark:text-gray-300 italic">"{thought}"</p>
                        </div>
                      </div>
                    </div>

                    {/* Transform Arrow */}
                    <div className="text-center">
                      <div className="inline-flex items-center space-x-2 text-emerald-600 dark:text-emerald-400">
                        <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"></div>
                        <div className="text-3xl animate-pulse">🔄</div>
                        <div className="w-12 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400"></div>
                      </div>
                    </div>

                    {/* Reframed Thought */}
                    <div className="relative p-6 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-200/50 dark:border-emerald-800/30">
                      <div className="flex items-start space-x-3">
                        <div className="text-2xl">😊</div>
                        <div>
                          <h4 className="font-semibold text-emerald-800 dark:text-emerald-300 mb-2">Balanced Perspective:</h4>
                          <p className="text-gray-700 dark:text-gray-300 font-medium">"{reframed}"</p>
                        </div>
                      </div>
                      {/* Glow effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-2xl blur opacity-50"></div>
                    </div>
                  </div>

                  {/* CBT Tips */}
                  <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200/50 dark:border-blue-800/30">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-2">📚</span>
                      <h4 className="font-semibold text-blue-800 dark:text-blue-300">CBT Tip:</h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      Notice how the reframed thought is more balanced and realistic. Practice catching negative thoughts and asking: "Is this thought helpful? What would I tell a friend in this situation?"
                    </p>
                  </div>

                </div>
              ) : (
                /* Placeholder when no result */
                <div className="backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 rounded-3xl p-8 border border-gray-200/50 dark:border-slate-700/50 shadow-lg">
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <div className="text-6xl mb-4 opacity-50">🌱</div>
                    <h3 className="text-xl font-semibold mb-2">Your Reframed Thought Will Appear Here</h3>
                    <p className="text-sm leading-relaxed">
                      Share a negative thought above, and our AI will help you see it from a more balanced, therapeutic perspective using CBT principles.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Motivational Footer */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-4 px-8 py-4 rounded-full backdrop-blur-xl bg-white/90 dark:bg-slate-800/90 border border-emerald-200/50 dark:border-slate-700/50 shadow-lg">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 animate-pulse"></div>
              <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">Remember: Every thought can be reframed with practice</span>
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 animate-pulse"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Enhanced animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(180deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-float { animation: float 15s ease-in-out infinite; }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default CBT;