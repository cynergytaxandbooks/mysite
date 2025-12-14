import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Burnt Orange Shape (Top-Left to Center) - Matches Theme Accent */}
      <path 
        d="M45 50C45 50 25 50 15 40C5 30 15 10 35 10C55 10 65 30 65 40C65 55 45 50 45 50Z" 
        className="fill-burntOrange"
      />
      <circle cx="28" cy="22" r="8" className="fill-burntOrange" />

      {/* Emerald Green Shape (Bottom-Right to Center) - Matches Theme Secondary (Visible on Navy) */}
      <path 
        d="M55 50C55 50 75 50 85 60C95 70 85 90 65 90C45 90 35 70 35 60C35 45 55 50 55 50Z" 
        className="fill-emerald"
      />
      <circle cx="72" cy="78" r="8" className="fill-emerald" />
    </svg>
  );
};

export default Logo;