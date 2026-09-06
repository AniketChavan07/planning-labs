import React from 'react';

interface BrandLogoProps {
  className?: string;
  scale?: number;
}

export default function BrandLogo({ className = '', scale = 1 }: BrandLogoProps) {
  return (
    <div 
      className={`flex items-stretch font-display font-black tracking-tighter leading-none ${className}`}
      style={{ transform: `scale(${scale})`, transformOrigin: 'left center' }}
    >
      <div className="flex flex-col justify-between">
        <span style={{ color: '#7246c9' }}>Plann</span>
        <span style={{ color: '#68d6d6', marginTop: '-0.1em' }}>Labs</span>
      </div>
      
      <div className="flex items-end justify-center px-0.5 relative w-[1em]">
        <svg viewBox="0 0 24 36" className="h-full w-full absolute bottom-[-0.1em]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax meet">
          {/* Bubbles */}
          <circle cx="16" cy="3" r="1.5" fill="#68d6d6" />
          <circle cx="13" cy="8" r="2.5" fill="#68d6d6" />
          
          {/* Liquid fill */}
          <path d="M 5 31 C 5 31 10.5 19 10.5 19 L 13.5 19 C 13.5 19 19 31 19 31 C 19 31 17 33 12 33 C 7 33 5 31 5 31 Z" fill="#68d6d6" />
          
          {/* Flask Outline */}
          <path d="M 10 13 L 10 20 L 4 30 C 2.5 32.5 4.5 34 7 34 L 17 34 C 19.5 34 21.5 32.5 20 30 L 14 20 L 14 13" fill="none" stroke="#7246c9" strokeWidth="2.5" strokeLinejoin="round" />
          
          {/* Flask Rim */}
          <path d="M 8.5 13 L 15.5 13" stroke="#7246c9" strokeWidth="2.5" strokeLinecap="round" />
          
          {/* Reflections */}
          <circle cx="9" cy="29" r="1.5" fill="white" />
        </svg>
      </div>

      <div className="flex flex-col justify-start">
        <span style={{ color: '#7246c9' }}>ng</span>
      </div>
    </div>
  );
}
