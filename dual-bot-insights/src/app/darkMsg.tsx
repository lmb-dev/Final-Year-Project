'use client'

import React, { useEffect, useState } from 'react';
import './globals.css';

export default function Intro() {
  const [isVisible, setIsVisible] = useState(true);
  const handleClose = () => {
    setIsVisible(false);
  };

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <>
      {isVisible && (
        <div className="toast font-semibold">
          Try out dark mode!
          {isHovered
            ? <button className="ml-2" style={{ color:`${'var(--text-one)'}`, filter: `drop-shadow(0 0 5px ${'var(--text-one)'})`}} onClick={handleClose} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> X </button>
            : <button className="ml-2" style={{ color:`${'var(--text-three)'}`}}  onClick={handleClose} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> X </button>
          }
        </div>
      )}
    </>
  );
}
