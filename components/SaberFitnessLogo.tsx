'use client';

import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
}

export function SaberFitnessLogo({ 
  size = 'md', 
  showSubtitle = true,
  className = '' 
}: LogoProps) {
  // Dimensions and scaling
  const dimensions = {
    sm: { svgW: 56, svgH: 42, textClass: 'text-[11px]', subClass: 'text-[8px]', redLine: 'h-[1.5px]' },
    md: { svgW: 76, svgH: 56, textClass: 'text-sm font-extrabold', subClass: 'text-[9px]', redLine: 'h-[2px]' },
    lg: { svgW: 100, svgH: 74, textClass: 'text-lg font-black', subClass: 'text-[10px]', redLine: 'h-[2.5px]' },
    xl: { svgW: 140, svgH: 105, textClass: 'text-2xl font-black', subClass: 'text-xs', redLine: 'h-[3px]' },
  }[size];

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      {/* SF Monogram exact vector rendering from image */}
      <svg 
        width={dimensions.svgW} 
        height={dimensions.svgH} 
        viewBox="0 0 160 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_12px_rgba(255,20,20,0.65)] overflow-visible"
      >
        <defs>
          {/* Intense red gradient for 'S' and dot */}
          <linearGradient id="sfRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff2200" />
            <stop offset="50%" stopColor="#e50914" />
            <stop offset="100%" stopColor="#b30000" />
          </linearGradient>

          {/* Red glow filter */}
          <filter id="sfGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Letter 'S' - Curved, bold red, dynamic sporting contours */}
        <path
          d="M 68 34 
             C 68 18, 56 12, 40 12 
             C 22 12, 12 20, 10 34 
             C 8 46, 18 54, 34 58 
             L 46 62 
             C 58 65, 66 72, 66 82 
             C 66 96, 52 104, 38 104 
             C 20 104, 8 95, 6 78 
             L 20 75 
             C 22 84, 28 90, 38 90 
             C 47 90, 52 85, 52 79 
             C 52 71, 44 66, 30 62 
             L 20 58 
             C 8 54, -2 46, 0 32 
             C 2 15, 18 0, 40 0 
             C 62 0, 80 12, 82 32 
             Z"
          fill="url(#sfRedGrad)"
          transform="translate(8, 6)"
          filter="url(#sfGlow)"
        />

        {/* Letter 'F' - Clean modern block, white with bold strokes */}
        {/* Vertical stem */}
        <path
          d="M 92 6 L 112 6 L 112 110 L 92 110 Z"
          fill="#FFFFFF"
        />
        {/* Top horizontal bar */}
        <path
          d="M 92 6 L 152 6 L 152 26 L 92 26 Z"
          fill="#FFFFFF"
        />
        {/* Middle horizontal bar */}
        <path
          d="M 92 48 L 138 48 L 138 66 L 92 66 Z"
          fill="#FFFFFF"
        />

        {/* The distinctive Red Accent Square / Dot inside the lower stem of 'F' */}
        <rect
          x="97"
          y="86"
          width="16"
          height="16"
          rx="2"
          fill="url(#sfRedGrad)"
          filter="url(#sfGlow)"
        />
      </svg>

      {/* Red Glowing Separator Bar as in the logo image */}
      <div className="w-full relative my-1">
        <div className={`w-full ${dimensions.redLine} bg-gradient-to-r from-transparent via-red-600 to-transparent shadow-[0_0_8px_#ff2200]`} />
      </div>

      {/* Brand Title: SABER FITNESS GYM */}
      <div className="text-center tracking-wider">
        <div className={`${dimensions.textClass} font-black uppercase text-white tracking-widest leading-none drop-shadow-md whitespace-nowrap`}>
          SABER <span className="text-white">FITNESS</span> <span className="text-red-500">GYM</span>
        </div>
        {showSubtitle && (
          <div className={`${dimensions.subClass} font-black uppercase tracking-[0.25em] text-red-400 mt-1 flex items-center justify-center gap-1.5`}>
            <span>Forged by discipline</span>
          </div>
        )}
      </div>
    </div>
  );
}
