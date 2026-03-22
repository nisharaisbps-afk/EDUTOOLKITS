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
        className="group block h-full bg-white/60 backdrop-blur-sm p-4 md:p-6 rounded-3xl border border-white shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-300"
      >
        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 ${color}`}>
          <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
        </div>
        <h3 className="text-base md:text-xl font-black text-slate-900 mb-2 md:mb-3 line-clamp-1 tracking-tight">{title}</h3>
        <p className="hidden md:block text-sm text-slate-600 line-clamp-2 font-medium leading-relaxed">{description}</p>
        <div className="mt-4 md:mt-6 flex items-center text-indigo-600 font-black text-xs md:text-sm uppercase tracking-widest group-hover:translate-x-2 transition-transform">
          Open <span className="hidden md:inline ml-1">Tool</span>
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Link>
    </motion.div>
  );
};
