import React from 'react';
import { PenTool, FileText, RefreshCw } from 'lucide-react';
import { ToolCard } from '../components/ToolCard';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const WritingTools = () => {
  const tools = [
    {
      title: "Word Counter",
      description: "Instantly count words, characters, and sentences in your text.",
      icon: FileText,
      href: "/tools/word-counter",
      color: "bg-indigo-600"
    },
    {
      title: "Paraphrasing Tool",
      description: "Rewrite your text in different styles while maintaining the original meaning.",
      icon: RefreshCw,
      href: "/tools/paraphraser",
      color: "bg-violet-600"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 relative">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-black text-slate-900 mb-4">Writing Tools</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Professional AI-powered tools to help you write better, faster, and more efficiently.
        </p>
      </div>
      
      <AdPlaceholder className="mb-12" />

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {tools.map((tool) => (
          <ToolCard key={tool.title} {...tool} />
        ))}
      </div>
    </div>
  );
};
