import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Percent } from 'lucide-react';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const PercentageCalculator = () => {
  const [marks, setMarks] = useState('');
  const [total, setTotal] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    if (!marks || !total) return;
    const percentage = (Number(marks) / Number(total)) * 100;
    setResult(Number(percentage.toFixed(2)));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-slate-900 mb-4">Percentage Calculator</h1>
        <p className="text-slate-600">Quickly calculate your marks percentage or any other percentage value.</p>
      </div>

      <AdPlaceholder className="mb-8" />

      <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-8">
        <div className="max-w-md mx-auto space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Marks Obtained</label>
              <input 
                type="number"
                value={marks}
                onChange={(e) => setMarks(e.target.value)}
                placeholder="e.g., 450"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Total Marks</label>
              <input 
                type="number"
                value={total}
                onChange={(e) => setTotal(e.target.value)}
                placeholder="e.g., 500"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>

          <button
            onClick={calculate}
            disabled={!marks || !total}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <Percent className="w-5 h-5" />
            Calculate Percentage
          </button>
        </div>
      </div>

      {result !== null && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-emerald-50 border border-emerald-100 rounded-3xl p-10 text-center"
        >
          <div className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2">Your Result</div>
          <div className="text-6xl font-black text-emerald-700">{result}%</div>
        </motion.div>
      )}

      <AdPlaceholder className="mt-12" />
    </div>
  );
};
