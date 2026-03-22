import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, BookOpen, PenTool, Calculator, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Writing Tools', href: '/writing', icon: PenTool },
    { name: 'Utility Tools', href: '/utility', icon: Calculator },
    { name: 'Study Timer', href: '/tools/study-timer', icon: Clock },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center group">
            <div className="h-16 relative flex items-center justify-center">
              <img 
                src="https://storage.googleapis.com/static.ais.run/attachments/6qahvgjqu6xusmbdgbejxb/logo.png" 
                alt="EduToolkits Logo" 
                className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300 relative z-10"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const fallback = parent.querySelector('.logo-fallback');
                    if (fallback) (fallback as HTMLElement).style.display = 'flex';
                  }
                }}
              />
              <div className="logo-fallback absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-indigo-600 to-rose-500 rounded-xl shadow-lg px-4 py-2">
                <span className="text-white font-black text-xl">EduToolkits</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `text-sm font-black uppercase tracking-widest transition-all hover:scale-110 ${
                    isActive 
                      ? 'text-indigo-600' 
                      : 'text-slate-500 hover:text-rose-500'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Link
              to="/all-tools"
              className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-7 py-3 rounded-2xl text-sm font-black uppercase tracking-widest hover:shadow-2xl hover:shadow-indigo-200 transition-all hover:-translate-y-1 active:translate-y-0"
            >
              Explore All
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-3 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-xl transition-all"
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/all-tools"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-blue-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-200"
                >
                  Explore All Tools
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
