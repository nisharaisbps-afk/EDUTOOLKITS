import React from 'react';
import { Calendar, Calculator, GraduationCap, Clock, Timer } from 'lucide-react';
import { ToolCard } from '../components/ToolCard';
import { AdPlaceholder } from '../components/AdPlaceholder';

export const UtilityTools = () => {
  const tools = [
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
    <div className="max-w-7xl mx-auto px-4 py-16 relative">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-black text-slate-900 mb-4">Utility Tools</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Essential calculators and productivity tools designed for the modern student.
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
