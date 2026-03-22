import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { FileText, Trash2, Copy, Check } from 'lucide-react';
import { ToolLayout } from '../components/ToolLayout';

export const WordCounter = () => {
  const [text, setText] = useState('');
  const [stats, setStats] = useState({
    words: 0,
    characters: 0,
    sentences: 0,
    paragraphs: 0
  });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const characters = text.length;
    const sentences = text.split(/[.!?]+/).filter(Boolean).length;
    const paragraphs = text.split(/\n+/).filter(Boolean).length;

    setStats({ words, characters, sentences, paragraphs });
  }, [text]);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolLayout 
      title="Free Online Word Counter" 
      description="Count words, characters, sentences, and paragraphs in real-time."
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Words', value: stats.words, color: 'text-blue-600' },
          { label: 'Characters', value: stats.characters, color: 'text-emerald-600' },
          { label: 'Sentences', value: stats.sentences, color: 'text-amber-600' },
          { label: 'Paragraphs', value: stats.paragraphs, color: 'text-rose-600' }
        ].map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
            <div className={`text-3xl font-black mb-1 ${stat.color}`}>{stat.value}</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
        <div className="flex justify-between items-center mb-4">
          <label className="text-sm font-bold text-slate-700">Paste your text below</label>
          <div className="flex gap-2">
            <button 
              onClick={() => setText('')}
              className="p-2 text-slate-400 hover:text-rose-600 transition-colors"
              title="Clear Text"
            >
              <Trash2 className="w-5 h-5" />
            </button>
            <button 
              onClick={handleCopy}
              className="p-2 text-slate-400 hover:text-blue-600 transition-colors"
              title="Copy Text"
            >
              {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>
        </div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing or paste your content here..."
          className="w-full h-80 px-6 py-6 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none text-slate-700 leading-relaxed"
        />
      </div>
    </ToolLayout>
  );
};
