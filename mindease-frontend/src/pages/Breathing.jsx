import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/breathing.json";

const Breathing = () => {
  const [isActive, setIsActive] = useState(false);
  const [breathingPhase, setBreathingPhase] = useState("ready"); // ready, inhale, hold, exhale
  const [cycleCount, setCycleCount] = useState(0);
  const [sessionTime, setSessionTime] = useState(0);
  const [selectedDuration, setSelectedDuration] = useState(5); // minutes

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setSessionTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  useEffect(() => {
    let phaseTimer;
    if (isActive) {
      const phases = [
        { name: "inhale", duration: 4000 },
        { name: "hold", duration: 2000 },
        { name: "exhale", duration: 6000 },
        { name: "rest", duration: 1000 }
      ];
      
      let currentPhaseIndex = 0;
      
      const runPhases = () => {
        const currentPhase = phases[currentPhaseIndex];
        setBreathingPhase(currentPhase.name);
        
        phaseTimer = setTimeout(() => {
          currentPhaseIndex = (currentPhaseIndex + 1) % phases.length;
          if (currentPhaseIndex === 0) {
            setCycleCount(prev => prev + 1);
          }
          runPhases();
        }, currentPhase.duration);
      };
      
      runPhases();
    }
    
    return () => clearTimeout(phaseTimer);
  }, [isActive]);

  const startSession = () => {
    setIsActive(true);
    setBreathingPhase("inhale");
    setCycleCount(0);
    setSessionTime(0);
  };

  const stopSession = () => {
    setIsActive(false);
    setBreathingPhase("ready");
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const breathingInstructions = {
    ready: "Ready to begin your mindful breathing journey?",
    inhale: "Breathe in slowly and deeply... 🌬️",
    hold: "Hold this breath gently... ⏸️",
    exhale: "Release and let go completely... 💨",
    rest: "Rest in this peaceful moment... ✨"
  };

  const breathingColors = {
    ready: "from-orange-200/20 to-amber-200/20",
    inhale: "from-blue-300/30 to-cyan-300/30",
    hold: "from-purple-300/30 to-indigo-300/30",
    exhale: "from-green-300/30 to-emerald-300/30",
    rest: "from-pink-300/20 to-rose-300/20"
  };

  return (
    <div className="min-h-screen relative overflow-hidden transition-all duration-700">
      {/* Dynamic Background */}
      <div className={`absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-slate-900 dark:via-orange-900 dark:to-slate-900 transition-all duration-1000`}>
        {/* Breathing-synchronized floating elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute animate-float opacity-20 dark:opacity-10 transition-all duration-${isActive ? '4000' : '1000'}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: isActive ? `${8 + Math.random() * 4}s` : `${12 + Math.random() * 8}s`
              }}
            >
              <div className={`w-${Math.floor(Math.random() * 10) + 4} h-${Math.floor(Math.random() * 10) + 4} bg-gradient-to-r ${breathingColors[breathingPhase] || breathingColors.ready} rounded-full blur-xl transform ${isActive && breathingPhase === 'inhale' ? 'scale-150' : isActive && breathingPhase === 'exhale' ? 'scale-75' : 'scale-100'} transition-transform duration-4000`}></div>
            </div>
          ))}
        </div>
        
        {/* Breathing rhythm pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(245, 158, 11, 0.3) 1px, transparent 0)`,
          backgroundSize: isActive ? '80px 80px' : '60px 60px',
          transition: 'background-size 4s ease-in-out'
        }}></div>
      </div>

      <div className="relative z-10 p-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-12 relative">
            <div className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r ${breathingColors[breathingPhase]} rounded-full blur-3xl transition-all duration-4000 ${isActive && breathingPhase === 'inhale' ? 'scale-125' : isActive && breathingPhase === 'exhale' ? 'scale-75' : 'scale-100'}`}></div>
            
            <div className="relative z-10 backdrop-blur-sm bg-white/90 dark:bg-slate-800/90 rounded-3xl p-8 border border-orange-200/50 dark:border-slate-700/50 shadow-xl">
              {/* Breathing icon animation */}
              <div className="relative mb-6 transform hover:scale-105 transition-transform duration-500">
                <div className={`text-8xl mb-4 transition-all duration-1000 ${isActive ? 'animate-pulse' : ''}`}>😮‍💨</div>
                <div className="absolute -top-2 -right-2 text-3xl animate-bounce" style={{ animationDelay: '0.5s' }}>🌬️</div>
                <div className="absolute -bottom-2 -left-2 text-2xl animate-bounce" style={{ animationDelay: '1s' }}>✨</div>
              </div>

              <h1 className="text-5xl md:text-6xl font-black mb-4 relative">
                <span className="absolute inset-0 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 dark:from-orange-300 dark:via-amber-400 dark:to-yellow-400 bg-clip-text text-transparent blur-sm">
                  Breathing Space
                </span>
                <span className="relative bg-gradient-to-r from-orange-500 via-amber-600 to-yellow-600 dark:from-orange-400 dark:via-amber-500 dark:to-yellow-500 bg-clip-text text-transparent">
                  Breathing Space
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
                Find your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 font-semibold">inner calm</span> through guided breathing meditation
              </p>
            </div>
          </div>

          {/* Main Breathing Interface */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            
            {/* Session Controls */}
            <div className="lg:col-span-1">
              <div className="backdrop-blur-xl bg-white/95 dark:bg-slate-800/95 rounded-3xl p-6 border border-orange-200/50 dark:border-slate-700/50 shadow-xl">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center">
                  <span className="text-2xl mr-2">⚙️</span>
                  Session Controls
                </h3>

                {/* Duration Selector */}
                {!isActive && (
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      Session Duration
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[3, 5, 10].map((duration) => (
                        <button
                          key={duration}
                          onClick={() => setSelectedDuration(duration)}
                          className={`p-3 rounded-xl font-medium transition-all duration-300 ${
                            selectedDuration === duration
                              ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg'
                              : 'bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600'
                          }`}
                        >
                          {duration}m
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Session Stats */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center p-3 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Time</span>
                    <span className="text-lg font-bold text-blue-600 dark:text-blue-400">{formatTime(sessionTime)}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Cycles</span>
                    <span className="text-lg font-bold text-purple-600 dark:text-purple-400">{cycleCount}</span>
                  </div>
                </div>

                {/* Control Buttons */}
                <div className="space-y-3">
                  {!isActive ? (
                    <button
                      onClick={startSession}
                      className="w-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 hover:from-orange-600 hover:via-amber-600 hover:to-yellow-600 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg shadow-orange-300/40 transform hover:scale-105 transition-all duration-300"
                    >
                      <span className="text-xl mr-2">🌟</span>
                      Begin Session
                    </button>
                  ) : (
                    <button
                      onClick={stopSession}
                      className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg shadow-red-300/40 transform hover:scale-105 transition-all duration-300"
                    >
                      <span className="text-xl mr-2">⏹️</span>
                      End Session
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Main Breathing Animation */}
            <div className="lg:col-span-2">
              <div className="backdrop-blur-xl bg-white/95 dark:bg-slate-800/95 rounded-3xl p-8 border border-orange-200/50 dark:border-slate-700/50 shadow-xl text-center">
                
                {/* Breathing Animation */}
                <div className="relative mb-8">
                  <div className={`w-80 h-80 mx-auto relative transition-all duration-4000 ${isActive && breathingPhase === 'inhale' ? 'scale-110' : isActive && breathingPhase === 'exhale' ? 'scale-90' : 'scale-100'}`}>
                    {/* Animated rings around the animation */}
                    <div className={`absolute inset-0 rounded-full border-2 border-orange-300/30 dark:border-orange-400/30 animate-ping ${isActive ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}></div>
                    <div className={`absolute inset-4 rounded-full border border-amber-300/20 dark:border-amber-400/20 animate-pulse ${isActive ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}></div>
                    
                    <Lottie 
                      animationData={animationData} 
                      loop 
                      autoplay 
                      className="w-full h-full"
                    />
                  </div>
                </div>

                {/* Breathing Instructions */}
                <div className="mb-8">
                  <div className={`text-2xl md:text-3xl font-bold mb-4 transition-all duration-1000 ${
                    breathingPhase === 'inhale' ? 'text-blue-600 dark:text-blue-400' :
                    breathingPhase === 'hold' ? 'text-purple-600 dark:text-purple-400' :
                    breathingPhase === 'exhale' ? 'text-green-600 dark:text-green-400' :
                    breathingPhase === 'rest' ? 'text-pink-600 dark:text-pink-400' :
                    'text-gray-700 dark:text-gray-300'
                  }`}>
                    {breathingInstructions[breathingPhase]}
                  </div>

                  {/* Phase Indicator */}
                  {isActive && (
                    <div className="flex justify-center space-x-2 mb-6">
                      {['inhale', 'hold', 'exhale', 'rest'].map((phase, index) => (
                        <div
                          key={phase}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            breathingPhase === phase 
                              ? 'bg-gradient-to-r from-orange-400 to-amber-400 scale-125' 
                              : 'bg-gray-300 dark:bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Breathing Tips */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 border border-orange-200/50 dark:border-orange-800/30">
                  <div className="flex items-center justify-center mb-3">
                    <span className="text-2xl mr-2">💡</span>
                    <h4 className="font-semibold text-orange-800 dark:text-orange-300">Breathing Tip</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {isActive 
                      ? "Focus only on your breath. Let thoughts come and go like clouds in the sky. You're doing great!"
                      : "Find a comfortable position, relax your shoulders, and breathe naturally. When ready, begin your mindful breathing session."
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Motivational Footer */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-4 px-8 py-4 rounded-full backdrop-blur-xl bg-white/90 dark:bg-slate-800/90 border border-orange-200/50 dark:border-slate-700/50 shadow-lg">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-amber-400 animate-pulse"></div>
              <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                {isActive ? "Stay present in this moment" : "Every breath is a new beginning"}
              </span>
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 animate-pulse"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Enhanced animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        .animate-float { animation: float 12s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Breathing;