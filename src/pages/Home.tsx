import React from 'react';
import { motion } from 'motion/react';
import { 
  PenTool, 
  FileText, 
  RefreshCw, 
  Calendar, 
  Calculator, 
  GraduationCap, 
  Clock, 
  Timer,
  ArrowRight,
  Zap,
  Shield,
  Smartphone
} from 'lucide-react';
import { ToolCard } from '../components/ToolCard';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const Home = () => {
  const writingTools = [
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

  const utilityTools = [
    {
      title: "Age Calculator",
      description: "Calculate your exact age in years, months, and days from your DOB.",
      icon: Calendar,
      href: "/tools/age-calculator",
      color: "bg-emerald-600"
    },
    {
      title: "Percentage Calculator",
      description: "Quickly calculate percentages for marks, discounts, and more.",
      icon: Calculator,
      href: "/tools/percentage-calculator",
      color: "bg-orange-600"
    },
    {
      title: "CGPA Converter",
      description: "Convert your CGPA to percentage based on the Indian grading system.",
      icon: GraduationCap,
      href: "/tools/cgpa-converter",
      color: "bg-rose-600"
    },
    {
      title: "Time Table Generator",
      description: "Create a personalized study schedule to boost your productivity.",
      icon: Clock,
      href: "/tools/timetable-generator",
      color: "bg-cyan-600"
    },
    {
      title: "Study Timer",
      description: "Focus better with our Pomodoro-based study and break timer.",
      icon: Timer,
      href: "/tools/study-timer",
      color: "bg-amber-600"
    }
  ];

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent opacity-70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
              The Ultimate Student Toolkit
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
              All Student Tools in <br />
              <span className="text-blue-600">One Place</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
              Free, Fast & Easy Tools designed to help students excel in writing, 
              calculations, and time management.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#tools"
                className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2"
              >
                Explore Tools <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#features"
                className="w-full sm:w-auto bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg border border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ad Section */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <AdPlaceholder label="Adsterra Homepage Banner" />
      </div>

      {/* Tools Section */}
      <section id="tools" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-2">Writing Tools</h2>
            <p className="text-slate-600">Powerful AI-driven tools for your academic writing.</p>
          </div>
          <Link to="/writing" className="text-blue-600 font-bold flex items-center gap-1 hover:underline">
            View All Writing Tools <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {writingTools.map((tool) => (
            <ToolCard key={tool.title} {...tool} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-2">Utility Tools</h2>
            <p className="text-slate-600">Essential calculators and planners for daily student life.</p>
          </div>
          <Link to="/utility" className="text-blue-600 font-bold flex items-center gap-1 hover:underline">
            View All Utility Tools <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {utilityTools.map((tool) => (
            <ToolCard key={tool.title} {...tool} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-slate-900 py-24 rounded-[3rem] mx-4 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 blur-[100px] rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Why Choose StudentTools Hub?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We build tools that actually work. No fluff, just pure utility for your academic journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-slate-400">Get results in seconds. Our tools are optimized for speed and efficiency.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">100% Free</h3>
              <p className="text-slate-400">No subscriptions, no hidden fees. All tools are completely free to use.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Mobile Optimized</h3>
              <p className="text-slate-400">Use all tools on the go. Perfectly responsive for any screen size.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

import { Link } from 'react-router-dom';
