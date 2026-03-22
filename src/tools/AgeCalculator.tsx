import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, RefreshCw } from 'lucide-react';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const AgeCalculator = () => {
  const [dob, setDob] = useState('');
  const [result, setResult] = useState<{
    years: number;
    months: number;
    days: number;
  } | null>(null);

  const calculateAge = () => {
    if (!dob) return;
    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }

    if (days < 0) {
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
      months--;
    }

    setResult({ years, months, days });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-slate-900 mb-4">Free Age Calculator Online</h1>
        <p className="text-slate-600">Calculate your exact age in years, months, and days instantly.</p>
      </div>

      <AdPlaceholder className="mb-8" />

      <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-8">
        <div className="max-w-md mx-auto space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Select Date of Birth</label>
            <input 
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <button
            onClick={calculateAge}
            disabled={!dob}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            Calculate Age
          </button>
        </div>
      </div>

      {result && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { label: 'Years', value: result.years, color: 'bg-blue-50 text-blue-600' },
            { label: 'Months', value: result.months, color: 'bg-emerald-50 text-emerald-600' },
            { label: 'Days', value: result.days, color: 'bg-amber-50 text-amber-600' }
          ].map((item) => (
            <div key={item.label} className={`p-8 rounded-3xl text-center ${item.color}`}>
              <div className="text-5xl font-black mb-2">{item.value}</div>
              <div className="text-sm font-bold uppercase tracking-widest opacity-70">{item.label}</div>
            </div>
          ))}
        </motion.div>
      )}

      <AdPlaceholder className="mt-12" label="Adsterra Bottom Banner" />
    </div>
  );
};
