import React from "react";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import relaxAnim from "../assets/relax.json";

const Home = () => {
  const features = [
    {
      title: "📝 Journaling Prompts",
      desc: "Reflect daily with creative AI-guided prompts.",
      link: "/journal",
      lightColor: "from-purple-400 via-pink-300 to-rose-300",
      darkColor: "from-purple-600 via-pink-500 to-rose-500",
      lightShadow: "shadow-purple-300/40",
      darkShadow: "shadow-purple-500/50",
      emoji: "📝",
      pattern: "journal"
    },
    {
      title: "📊 Mood Tracker",
      desc: "Track how you feel and discover mood trends.",
      link: "/mood",
      lightColor: "from-blue-300 via-sky-300 to-cyan-300",
      darkColor: "from-blue-500 via-sky-500 to-cyan-500",
      lightShadow: "shadow-blue-300/40",
      darkShadow: "shadow-blue-500/50",
      emoji: "📊",
      pattern: "mood"
    },
    {
      title: "💭 CBT Reframe",
      desc: "Reframe negative thoughts using cognitive therapy.",
      link: "/cbt",
      lightColor: "from-emerald-300 via-teal-300 to-green-300",
      darkColor: "from-emerald-500 via-teal-500 to-green-500",
      lightShadow: "shadow-emerald-300/40",
      darkShadow: "shadow-emerald-500/50",
      emoji: "💭",
      pattern: "cbt"
    },
    {
      title: "😮‍💨 Breathing Space",
      desc: "Breathe in peace with guided visual exercises.",
      link: "/breathing",
      lightColor: "from-orange-300 via-amber-300 to-yellow-300",
      darkColor: "from-orange-500 via-amber-500 to-yellow-500",
      lightShadow: "shadow-orange-300/40",
      darkShadow: "shadow-orange-500/50",
      emoji: "😮‍💨",
      pattern: "breathing"
    },
    {
      title: "💖 Daily Affirmation",
      desc: "Feel inspired with daily uplifting thoughts.",
      link: "/affirmation",
      lightColor: "from-rose-300 via-pink-300 to-red-300",
      darkColor: "from-rose-500 via-pink-500 to-red-500",
      lightShadow: "shadow-rose-300/40",
      darkShadow: "shadow-rose-500/50",
      emoji: "💖",
      pattern: "affirmation"
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden transition-all duration-700">
      {/* Light/Dark Adaptive Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
        {/* Wellness-themed floating shapes */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
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
        <div className="max-w-6xl mx-auto">
          {/* Header Section with wellness vibes */}
          <div className="text-center mb-16 relative">
            {/* Soft glowing aura */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-200/30 via-blue-200/30 to-purple-200/30 dark:from-green-400/20 dark:via-blue-400/20 dark:to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
            
            <div className="relative z-10 backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 rounded-3xl p-12 border border-green-200/50 dark:border-slate-700/50 shadow-xl">
              {/* Enhanced animation container */}
              <div className="relative mb-8 transform hover:scale-105 transition-transform duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-green-300/20 via-blue-300/20 to-purple-300/20 dark:from-green-400/20 dark:via-blue-400/20 dark:to-purple-400/20 rounded-full blur-2xl animate-spin-slow"></div>
                <Player
                  autoplay
                  loop
                  src={relaxAnim}
                  style={{ 
                    height: "220px", 
                    margin: "0 auto", 
                    filter: "drop-shadow(0 0 30px rgba(34, 197, 94, 0.3))"
                  }}
                />
              </div>

              {/* Wellness-themed title */}
              <div className="relative mb-6">
                <h1 className="text-7xl md:text-8xl font-black mb-4 relative">
                  <span className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 dark:from-green-300 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent blur-sm">
                    MindEase
                  </span>
                  <span className="relative bg-gradient-to-r from-green-500 via-blue-600 to-purple-600 dark:from-green-400 dark:via-blue-500 dark:to-purple-500 bg-clip-text text-transparent animate-pulse">
                    MindEase
                  </span>
                </h1>
                
                {/* Soft healing lines */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400/60 dark:via-green-300/60 to-transparent opacity-0 animate-glitch"></div>
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/60 dark:via-blue-300/60 to-transparent opacity-0 animate-glitch-2"></div>
              </div>

              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
                Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 font-semibold">mindful companion</span> for 
                achieving inner peace, balance, and emotional well-being
              </p>

              {/* Wellness symbols */}
              <div className="flex justify-center space-x-4 mb-8">
                {['🧘‍♀️', '🌱', '☯️', '🕊️', '🌸'].map((icon, i) => (
                  <div
                    key={i}
                    className="text-2xl animate-bounce opacity-70 hover:opacity-100 transition-opacity cursor-pointer hover:scale-125 duration-300"
                    style={{ animationDelay: `${i * 200}ms` }}
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features Grid with wellness aesthetic */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {features.map((feature, i) => (
              <Link
                key={i}
                to={feature.link}
                className="group relative block transform hover:scale-105 transition-all duration-500"
                style={{ 
                  gridRow: i === 2 ? 'span 2' : 'span 1',
                  animationDelay: `${i * 100}ms`
                }}
              >
                {/* Wellness-themed card */}
                <div className="relative h-full overflow-hidden rounded-3xl backdrop-blur-xl bg-white/90 dark:bg-slate-800/90 border border-green-200/50 dark:border-slate-700/50 p-8 hover:bg-white/95 dark:hover:bg-slate-700/95 transition-all duration-500 group-hover:border-green-300/70 dark:group-hover:border-slate-600/70 shadow-lg hover:shadow-2xl">
                  
                  {/* Soft pattern overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.lightColor} dark:bg-gradient-to-br dark:${feature.darkColor} opacity-10 dark:opacity-20`}></div>
                    <div className="absolute inset-0" style={{
                      backgroundImage: feature.pattern === 'journal' ? 'repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(34, 197, 94, 0.05) 15px, rgba(34, 197, 94, 0.05) 30px)' :
                                      feature.pattern === 'mood' ? 'radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)' :
                                      feature.pattern === 'cbt' ? 'conic-gradient(from 0deg, transparent, rgba(16, 185, 129, 0.08), transparent)' :
                                      feature.pattern === 'breathing' ? 'radial-gradient(ellipse at center, rgba(245, 158, 11, 0.08) 0%, transparent 60%)' :
                                      'linear-gradient(135deg, rgba(236, 72, 153, 0.08) 25%, transparent 25%)'
                    }}></div>
                  </div>

                  {/* Floating emoji with wellness glow */}
                  <div className="relative mb-6">
                    <div className="text-6xl mb-4 transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 inline-block filter drop-shadow-lg">
                      {feature.emoji}
                    </div>
                    <div className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r ${feature.lightColor} dark:bg-gradient-to-r dark:${feature.darkColor} rounded-full animate-ping`}></div>
                  </div>

                  {/* Content with wellness typography */}
                  <div className="relative z-10">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-blue-600 dark:group-hover:from-green-400 dark:group-hover:to-blue-400 transition-all duration-300">
                      {feature.title.substring(2)}
                    </h2>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                      {feature.desc}
                    </p>

                    {/* Wellness-themed button */}
                    <div className="flex items-center justify-between">
                      <div className={`px-6 py-3 rounded-full bg-gradient-to-r ${feature.lightColor} dark:bg-gradient-to-r dark:${feature.darkColor} text-gray-800 dark:text-white font-semibold text-sm shadow-lg ${feature.lightShadow} dark:shadow-lg dark:${feature.darkShadow} transform group-hover:scale-110 transition-all duration-300`}>
                        Begin Journey
                      </div>
                      
                      <div className="w-12 h-12 rounded-full border-2 border-green-300/60 dark:border-slate-600/60 flex items-center justify-center group-hover:border-green-400/80 dark:group-hover:border-slate-500/80 group-hover:rotate-90 transition-all duration-500 bg-white/50 dark:bg-slate-700/50">
                        <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Soft glow effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.lightColor} dark:bg-gradient-to-r dark:${feature.darkColor} rounded-3xl blur opacity-0 group-hover:opacity-30 dark:group-hover:opacity-40 transition-opacity duration-500 -z-10`}></div>
                </div>
              </Link>
            ))}
          </div>

          {/* Mindful footer */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center space-x-4 px-8 py-4 rounded-full backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 border border-green-200/50 dark:border-slate-700/50 shadow-lg">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-blue-400 dark:from-green-300 dark:to-blue-300 animate-pulse"></div>
              <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">Begin your mindful journey today</span>
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-300 dark:to-purple-300 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced animations for wellness feel */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes glitch {
          0%, 100% { opacity: 0; transform: translateX(0); }
          50% { opacity: 0.6; transform: translateX(-1px); }
        }
        @keyframes glitch-2 {
          0%, 100% { opacity: 0; transform: translateX(0); }
          50% { opacity: 0.6; transform: translateX(1px); }
        }
        .animate-float { animation: float 18s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 25s linear infinite; }
        .animate-glitch { animation: glitch 3s ease-in-out infinite; }
        .animate-glitch-2 { animation: glitch-2 3s ease-in-out infinite 0.2s; }
      `}</style>
    </div>
  );
};

export default Home;