import React from 'react';
import { Mail, Github, Twitter, ExternalLink } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                StudentTools <span className="text-blue-600">Hub</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-md mb-6">
              Empowering students with a suite of professional tools for writing, calculations, and productivity. 
              Designed for efficiency, built for success.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:prakharr549@gmail.com" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="/writing" className="hover:text-blue-400 transition-colors">Writing Tools</a></li>
              <li><a href="/utility" className="hover:text-blue-400 transition-colors">Utility Tools</a></li>
              <li><a href="/all-tools" className="hover:text-blue-400 transition-colors">All Tools</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-500" />
                prakharr549@gmail.com
              </li>
              <li className="text-slate-400">
                Founder: Prakhar Rai
              </li>
              <li className="text-slate-400">
                Powered by Omnician Tech
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} StudentTools Hub. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
