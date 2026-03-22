import React from 'react';
import { Mail, Github, Twitter, ExternalLink, Layout, User } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-rose-500 to-emerald-500"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 relative flex items-center justify-center">
                <img 
                  src="https://storage.googleapis.com/static.ais.run/attachments/6qahvgjqu6xusmbdgbejxb/logo.png" 
                  alt="EduToolkits Logo" 
                  className="w-full h-full object-contain relative z-10"
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
                <div className="logo-fallback absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-indigo-600 to-rose-500 rounded-xl shadow-lg">
                  <Layout className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="text-2xl font-black text-white tracking-tighter">
                Edu<span className="text-indigo-500">Toolkits</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-md mb-8 text-lg leading-relaxed">
              Empowering students with a suite of professional tools for writing, calculations, and productivity. 
              Designed for efficiency, built for success.
            </p>
            <div className="flex gap-5">
              <a href="#" className="p-3 bg-slate-900 rounded-2xl hover:bg-indigo-600 transition-all hover:-translate-y-1">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="p-3 bg-slate-900 rounded-2xl hover:bg-rose-500 transition-all hover:-translate-y-1">
                <Github className="w-6 h-6" />
              </a>
              <a href="mailto:prakharr549@gmail.com" className="p-3 bg-slate-900 rounded-2xl hover:bg-emerald-500 transition-all hover:-translate-y-1">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Quick Links</h4>
            <ul className="space-y-5 text-sm font-bold">
              <li><a href="/writing" className="hover:text-indigo-400 transition-all flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:scale-150 transition-transform"></div> Writing Tools</a></li>
              <li><a href="/utility" className="hover:text-rose-400 transition-all flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-rose-500 group-hover:scale-150 transition-transform"></div> Utility Tools</a></li>
              <li><a href="/all-tools" className="hover:text-emerald-400 transition-all flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform"></div> All Tools</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-all flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-amber-500 group-hover:scale-150 transition-transform"></div> Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Contact Info</h4>
            <ul className="space-y-5 text-sm font-bold">
              <li className="flex items-center gap-3">
                <div className="p-2 bg-indigo-500/10 rounded-lg">
                  <Mail className="w-4 h-4 text-indigo-500" />
                </div>
                prakharr549@gmail.com
              </li>
              <li className="text-slate-400 flex items-center gap-3">
                <div className="p-2 bg-rose-500/10 rounded-lg">
                  <User className="w-4 h-4 text-rose-500" />
                </div>
                Founder: Prakhar Rai
              </li>
              <li className="text-slate-400 flex items-center gap-3">
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  <ExternalLink className="w-4 h-4 text-emerald-500" />
                </div>
                Powered by Omnician Tech
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-black uppercase tracking-widest text-slate-500">
          <p>© {new Date().getFullYear()} EduToolkits. Crafted with ❤️ for students.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-rose-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
