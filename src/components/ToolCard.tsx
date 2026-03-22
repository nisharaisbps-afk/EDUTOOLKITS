import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color: string;
}

export const ToolCard: React.FC<ToolCardProps> = ({ title, description, icon: Icon, href, color }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Link 
        to={href}
        className="block h-full bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
      >
        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-3 md:mb-4 ${color}`}>
          <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </div>
        <h3 className="text-sm md:text-lg font-bold text-slate-900 mb-1 md:mb-2 line-clamp-1">{title}</h3>
        <p className="hidden md:block text-sm text-slate-600 line-clamp-2">{description}</p>
        <div className="mt-2 md:mt-4 flex items-center text-blue-600 font-semibold text-xs md:text-sm">
          Open <span className="hidden md:inline ml-1">Tool</span>
          <svg className="w-3 h-3 md:w-4 md:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Link>
    </motion.div>
  );
};
