import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, RotateCcw, Coffee, BookOpen } from 'lucide-react';
import { ToolLayout } from '../components/ToolLayout';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const StudyTimer = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleTimerComplete();
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, timeLeft]);

  const handleTimerComplete = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsActive(false);
    
    // Switch modes
    if (!isBreak) {
      setIsBreak(true);
      setTimeLeft(5 * 60);
    } else {
      setIsBreak(false);
      setTimeLeft(25 * 60);
    }
    
    // Simple notification sound or alert could go here
  };

  const toggleTimer = () => setIsActive(!isActive);

  const resetTimer = () => {
    setIsActive(false);
    setIsBreak(false);
    setTimeLeft(25 * 60);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = isBreak 
    ? (timeLeft / (5 * 60)) * 100 
    : (timeLeft / (25 * 60)) * 100;

  return (
    <ToolLayout 
      title="Pomodoro Study Timer" 
      description="Boost your focus with 25-minute study sessions and 5-minute breaks."
    >
      <div className="bg-white rounded-[3rem] p-12 shadow-sm border border-slate-100 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-slate-100">
          <motion.div 
            className={`h-full ${isBreak ? 'bg-emerald-500' : 'bg-blue-600'}`}
            initial={{ width: '100%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: "linear" }}
          />
        </div>

        <div className="mb-8 flex justify-center gap-4">
          <div className={`flex items-center gap-2 px-6 py-2 rounded-full font-bold text-sm transition-all ${!isBreak ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-400'}`}>
            <BookOpen className="w-4 h-4" /> Study Session
          </div>
          <div className={`flex items-center gap-2 px-6 py-2 rounded-full font-bold text-sm transition-all ${isBreak ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-400'}`}>
            <Coffee className="w-4 h-4" /> Short Break
          </div>
        </div>

        <div className="text-[8rem] md:text-[12rem] font-black text-slate-900 leading-none mb-12 tracking-tighter tabular-nums">
          {formatTime(timeLeft)}
        </div>

        <div className="flex justify-center gap-6">
          <button
            onClick={toggleTimer}
            className={`w-24 h-24 rounded-full flex items-center justify-center transition-all shadow-xl ${
              isActive 
                ? 'bg-slate-100 text-slate-600 hover:bg-slate-200' 
                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200'
            }`}
          >
            {isActive ? <Pause className="w-10 h-10" /> : <Play className="w-10 h-10 ml-1" />}
          </button>
          <button
            onClick={resetTimer}
            className="w-24 h-24 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200 transition-all"
          >
            <RotateCcw className="w-10 h-10" />
          </button>
        </div>

        <div className="mt-12 flex justify-center">
          <AdPlaceholder format="skyscraper" label="Adsterra Banner Ad" />
        </div>
      </div>
    </ToolLayout>
  );
};
