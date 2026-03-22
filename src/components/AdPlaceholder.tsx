import React, { useEffect, useRef } from 'react';

interface AdPlaceholderProps {
  label?: string;
  className?: string;
  format?: 'banner' | 'skyscraper' | 'rectangle';
}

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ 
  label = "Adsterra Ad Here", 
  className,
  format = 'banner'
}) => {
  const adRef = useRef<HTMLDivElement>(null);

  const adConfig = {
    banner: {
      key: 'a183e7c933035ee42ea36fe263996b7b',
      width: 728,
      height: 90,
    },
    skyscraper: {
      key: '9c1eae17465853146c41ad117acbb315',
      width: 160,
      height: 600,
    },
    rectangle: {
      key: 'a183e7c933035ee42ea36fe263996b7b',
      width: 728,
      height: 90,
    }
  };

  const currentAd = adConfig[format];

  useEffect(() => {
    if (!adRef.current) return;

    // Clear any previous content
    adRef.current.innerHTML = '';

    const script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.innerHTML = `
      atOptions = {
        'key' : '${currentAd.key}',
        'format' : 'iframe',
        'height' : ${currentAd.height},
        'width' : ${currentAd.width},
        'params' : {}
      };
    `;

    const script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.src = `//www.highperformanceformat.com/${currentAd.key}/invoke.js`;

    adRef.current.appendChild(script1);
    adRef.current.appendChild(script2);
  }, [format, currentAd.key, currentAd.height, currentAd.width]);

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <span className="uppercase tracking-widest text-[10px] text-slate-400 font-black opacity-60">Advertisement</span>
      <div 
        ref={adRef}
        style={{ width: currentAd.width, minHeight: currentAd.height }}
        className="flex items-center justify-center bg-slate-50/50 rounded-xl overflow-hidden border border-slate-100"
      >
        <div className="text-slate-300 text-xs font-medium animate-pulse">
          Loading {label}...
        </div>
      </div>
    </div>
  );
};
