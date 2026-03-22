import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Plus, Trash2, Download, User, Target, ShieldCheck, FileDown } from 'lucide-react';
import { ToolLayout } from '../components/ToolLayout';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

interface ScheduleItem {
  id: string;
  time: string;
  subject: string;
  activity: string;
  color: {
    bg: string;
    border: string;
    text: string;
  };
}

const COLORS = [
  { bg: '#eff6ff', border: '#dbeafe', text: '#1e3a8a' }, // blue
  { bg: '#ecfdf5', border: '#d1fae5', text: '#064e3b' }, // emerald
  { bg: '#f5f3ff', border: '#ede9fe', text: '#4c1d95' }, // violet
  { bg: '#fffbeb', border: '#fef3c7', text: '#78350f' }, // amber
  { bg: '#fff1f2', border: '#ffe4e6', text: '#881337' }, // rose
  { bg: '#eef2ff', border: '#e0e7ff', text: '#312e81' }, // indigo
];

export const TimetableGenerator = () => {
  const [userName, setUserName] = useState('');
  const [aims, setAims] = useState('');
  const [items, setItems] = useState<ScheduleItem[]>([
    { id: '1', time: '08:00 AM', subject: 'Mathematics', activity: 'Algebra Practice', color: COLORS[0] },
    { id: '2', time: '10:00 AM', subject: 'Science', activity: 'Biology Revision', color: COLORS[1] },
  ]);
  const [newTime, setNewTime] = useState('');
  const [newSubject, setNewSubject] = useState('');
  const [newActivity, setNewActivity] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const timetableRef = useRef<HTMLDivElement>(null);

  const addItem = () => {
    if (!newTime || !newSubject || !newActivity) return;
    const randomColor = COLORS[items.length % COLORS.length];
    setItems([...items, { 
      id: Date.now().toString(), 
      time: newTime, 
      subject: newSubject,
      activity: newActivity, 
      color: randomColor 
    }]);
    setNewTime('');
    setNewSubject('');
    setNewActivity('');
    setIsGenerated(false); // Reset generated state when items change
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
    setIsGenerated(false);
  };

  const handleGenerate = () => {
    if (items.length === 0) {
      alert('Please add at least one item to your timetable.');
      return;
    }
    setIsGenerated(true);
    // Scroll to preview
    setTimeout(() => {
      timetableRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const exportToPdf = async () => {
    if (!timetableRef.current || isDownloading) return;
    
    try {
      setIsDownloading(true);
      
      // Give the UI a moment to show the loading state
      await new Promise(resolve => setTimeout(resolve, 300));

      const element = timetableRef.current;
      
      // Capture the element with robust settings
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        // Fix for scroll issues: capture the element regardless of scroll position
        scrollX: 0,
        scrollY: -window.scrollY,
        onclone: (clonedDoc) => {
          const clonedElement = clonedDoc.getElementById('pdf-timetable-content');
          if (clonedElement) {
            clonedElement.style.display = 'block';
            clonedElement.style.padding = '40px';
            clonedElement.style.borderRadius = '0';
            clonedElement.style.boxShadow = 'none';
          }
        }
      });
      
      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      const margin = 10;
      const contentWidth = pdfWidth - (2 * margin);
      const contentHeight = pdfHeight - (2 * margin);
      
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      
      const widthRatio = contentWidth / imgWidth;
      const heightRatio = contentHeight / imgHeight;
      const ratio = Math.min(widthRatio, heightRatio);
      
      const finalWidth = imgWidth * ratio;
      const finalHeight = imgHeight * ratio;
      
      const xPos = (pdfWidth - finalWidth) / 2;
      const yPos = margin;

      pdf.addImage(imgData, 'PNG', xPos, yPos, finalWidth, finalHeight, undefined, 'FAST');
      
      const safeName = userName.trim().replace(/[^a-z0-9]/gi, '_').toLowerCase() || 'study';
      pdf.save(`${safeName}_timetable.pdf`);
      
    } catch (error) {
      console.error('PDF Export failed:', error);
      alert('Failed to generate PDF. Please try again. Tip: Ensure the timetable is visible on your screen.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <ToolLayout 
      title="Study Time Table Generator" 
      description="Create and export your daily study schedule to stay organized."
    >
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
              <User className="w-4 h-4 text-blue-600" /> Your Name
            </label>
            <input 
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
              <Target className="w-4 h-4 text-emerald-600" /> Your Aims/Goals
            </label>
            <input 
              type="text"
              value={aims}
              onChange={(e) => setAims(e.target.value)}
              placeholder="e.g., Score 95% in Finals"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
          <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Add Schedule Items</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Time</label>
              <input 
                type="text"
                value={newTime}
                onChange={(e) => setNewTime(e.target.value)}
                placeholder="09:00 AM"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Subject</label>
              <input 
                type="text"
                value={newSubject}
                onChange={(e) => setNewSubject(e.target.value)}
                placeholder="Mathematics"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
              />
            </div>
            <div className="md:col-span-1">
              <label className="block text-xs font-bold text-slate-500 mb-1 uppercase">Activity</label>
              <input 
                type="text"
                value={newActivity}
                onChange={(e) => setNewActivity(e.target.value)}
                placeholder="Revision"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
              />
            </div>
            <div className="flex items-end">
              <button
                onClick={addItem}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
              >
                <Plus className="w-5 h-5" /> Add
              </button>
            </div>
          </div>
        </div>

        {/* Current Items List (Editable) */}
        <div className="space-y-3 mb-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 shadow-sm"
            >
              <div className="flex flex-wrap items-center gap-4">
                <div className="bg-slate-100 px-3 py-1 rounded-lg text-slate-700 font-bold text-xs">
                  {item.time}
                </div>
                <div className="font-bold text-blue-600">{item.subject}</div>
                <div className="text-slate-600">{item.activity}</div>
              </div>
              <button 
                onClick={() => removeItem(item.id)}
                className="p-2 text-slate-400 hover:text-rose-600 transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        {!isGenerated ? (
          <button
            onClick={handleGenerate}
            className="w-full bg-emerald-600 text-white py-4 rounded-xl font-black text-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 flex items-center justify-center gap-3"
          >
            GENERATE TIMETABLE
          </button>
        ) : (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Preview & Download</span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            {/* Timetable Preview for PDF Capture */}
            <div 
              ref={timetableRef} 
              id="pdf-timetable-content"
              className="relative overflow-hidden bg-white p-10 rounded-2xl border shadow-xl"
              style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0' }}
            >
              {/* Watermark */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03] rotate-[-30deg] select-none">
                <span className="text-9xl font-black tracking-widest uppercase" style={{ color: '#000000' }}>EduToolkits</span>
              </div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8 pb-6 border-b-2" style={{ borderBottomColor: '#f1f5f9' }}>
                  <div>
                    <h2 className="text-3xl font-black mb-2 uppercase tracking-tight" style={{ color: '#0f172a' }}>Study Timetable</h2>
                    {userName && <div className="text-xl font-bold" style={{ color: '#2563eb' }}>Prepared for: {userName}</div>}
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: '#94a3b8' }}>Generated By</div>
                    <div className="text-lg font-black" style={{ color: '#0f172a' }}>EduToolkits</div>
                  </div>
                </div>

                {aims && (
                  <div className="mb-8 p-6 rounded-2xl border" style={{ backgroundColor: '#ecfdf5', borderColor: '#d1fae5' }}>
                    <div className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: '#059669' }}>Primary Goal</div>
                    <div className="text-xl font-bold italic" style={{ color: '#064e3b' }}>"{aims}"</div>
                  </div>
                )}

                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-6 p-5 rounded-2xl border-2 shadow-sm"
                      style={{
                        backgroundColor: item.color.bg,
                        borderColor: item.color.border,
                        color: item.color.text
                      }}
                    >
                      <div className="px-4 py-2 rounded-xl font-black text-sm min-w-[100px] text-center shadow-lg" style={{ backgroundColor: '#0f172a', color: '#ffffff' }}>
                        {item.time}
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-black uppercase tracking-widest opacity-50 mb-0.5">{item.subject}</div>
                        <div className="text-lg font-bold">{item.activity}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 pt-6 border-t flex items-center justify-between" style={{ borderTopColor: '#f1f5f9' }}>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest" style={{ color: '#94a3b8' }}>
                    <ShieldCheck className="w-4 h-4" style={{ color: '#10b981' }} /> Official EduToolkits Document
                  </div>
                  <div className="text-[10px] font-medium italic" style={{ color: '#cbd5e1' }}>
                    Plan your work, work your plan.
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={exportToPdf}
              disabled={isDownloading}
              className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xl hover:bg-slate-800 transition-all shadow-2xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDownloading ? (
                <>
                  <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                  PREPARING PDF...
                </>
              ) : (
                <>
                  <FileDown className="w-6 h-6" /> DOWNLOAD PDF TIMETABLE
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};


