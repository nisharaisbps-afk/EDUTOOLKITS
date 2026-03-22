import React from 'react';
import { AdPlaceholder } from './AdPlaceholder';

interface ToolLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export const ToolLayout: React.FC<ToolLayoutProps> = ({ children, title, description }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 relative">
      <div className="flex-grow max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-slate-900 mb-4">{title}</h1>
          <p className="text-slate-600">{description}</p>
        </div>

        <AdPlaceholder className="mb-8" />

        {children}
      </div>
    </div>
  );
};
