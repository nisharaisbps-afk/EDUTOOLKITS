import React from 'react';

interface AdPlaceholderProps {
  label?: string;
  className?: string;
}

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ 
  label = "Adsterra Banner Here", 
  className 
}) => {
  return (
    <div className={`w-full bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center p-4 min-h-[100px] text-gray-400 font-medium text-sm ${className}`}>
      <div className="flex flex-col items-center gap-2">
        <span className="uppercase tracking-widest text-[10px] opacity-60">Advertisement</span>
        <span>{label}</span>
      </div>
    </div>
  );
};
