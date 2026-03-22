import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, RefreshCw } from 'lucide-react';
import { ToolLayout } from '../components/ToolLayout';

export const CGPAConverter = () => {
  const [cgpa, setCgpa] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    if (!cgpa) return;
    // Standard Indian system: CGPA * 9.5
    const percentage = Number(cgpa) * 9.5;
    setResult(Number(percentage.toFixed(2)));
  };

  return (
    <ToolLayout 
      title="CGPA to Percentage Converter" 
      description="Convert your CGPA to percentage based on the Indian CBSE/University system."
    >
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-8">
        <div className="max-w-md mx-auto space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Enter CGPA (out of 10)</label>
            <input 
              type="number"
              step="0.01"
              max="10"
              value={cgpa}
              onChange={(e) => setCgpa(e.target.value)}
              placeholder="e.g., 8.5"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <button
            onClick={calculate}
            disabled={!cgpa}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            Convert to Percentage
          </button>
          
          <p className="text-xs text-slate-400 text-center italic">
            * Formula used: CGPA × 9.5 (Standard CBSE/Indian University System)
          </p>
        </div>
      </div>

      {result !== null && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-indigo-50 border border-indigo-100 rounded-3xl p-10 text-center"
        >
          <div className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-2">Equivalent Percentage</div>
          <div className="text-6xl font-black text-indigo-700">{result}%</div>
        </motion.div>
      )}
    </ToolLayout>
  );
};
