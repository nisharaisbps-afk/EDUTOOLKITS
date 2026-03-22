import React, { useState } from 'react';
import { motion } from 'motion/react';
import { RefreshCw, Copy, Check, Loader2 } from 'lucide-react';
import { paraphraseText } from '../lib/aiService';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const Paraphraser = () => {
  const [input, setInput] = useState('');
  const [style, setStyle] = useState('Simple');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleParaphrase = async () => {
    if (!input) return;
    setLoading(true);
    try {
      const paraphrased = await paraphraseText(input, style);
      setResult(paraphrased || '');
    } catch (error) {
      console.error(error);
      setResult('Failed to paraphrase text. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-slate-900 mb-4">AI Paraphrasing Tool</h1>
        <p className="text-slate-600">Rewrite your sentences and paragraphs instantly while keeping the meaning.</p>
      </div>

      <AdPlaceholder className="mb-8" />

      <div className="flex flex-wrap gap-2 mb-6">
        {['Simple', 'Formal', 'Creative', 'Academic', 'Short'].map((s) => (
          <button
            key={s}
            onClick={() => setStyle(s)}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
              style === s 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
          <label className="block text-sm font-bold text-slate-700 mb-4">Original Text</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste the text you want to rewrite..."
            className="w-full h-64 px-4 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
          />
          <button
            onClick={handleParaphrase}
            disabled={loading || !input}
            className="w-full mt-4 bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <RefreshCw className="w-5 h-5" />}
            {loading ? 'Paraphrasing...' : 'Paraphrase Now'}
          </button>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 relative">
          <div className="flex justify-between items-center mb-4">
            <label className="text-sm font-bold text-slate-700">Paraphrased Text</label>
            {result && (
              <button
                onClick={handleCopy}
                className="text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-all"
              >
                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              </button>
            )}
          </div>
          <div className="w-full h-64 px-4 py-4 rounded-xl border border-slate-100 bg-slate-50 overflow-y-auto text-slate-700 leading-relaxed">
            {result || <span className="text-slate-400 italic">Your paraphrased text will appear here...</span>}
          </div>
        </div>
      </div>

      <AdPlaceholder label="Adsterra Tool Page Banner" />
    </div>
  );
};
