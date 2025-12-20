import React, { useState, useEffect } from 'react';
import '../styles/ScrollProgress.css';

function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [backgroundType, setBackgroundType] = useState('dark');

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY;
      const progressPercentage = (currentProgress / totalHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progressPercentage)));
      
      // Detect background color at center of screen
      const centerY = window.innerHeight / 2;
      const element = document.elementFromPoint(window.innerWidth / 2, centerY);
      
      if (element) {
        const computedStyle = window.getComputedStyle(element);
        const bgColor = computedStyle.backgroundColor;
        
        // Simple brightness detection - do opposite (contrast)
        if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
          const rgb = bgColor.match(/\d+/g);
          if (rgb) {
            const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
            // If background is light, use dark fluid; if background is dark, use light fluid
            setBackgroundType(brightness > 128 ? 'dark' : 'light');
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`scroll-progress-container ${backgroundType}`}>
      <div className="scroll-progress-track">
        {/* Fluid Progress Fill */}
        <div 
          className="scroll-progress-fill"
          style={{ height: `${scrollProgress}%` }}
        >
        </div>
        
        {/* Rotating Star - Always visible */}
        <div 
          className="scroll-progress-star"
          style={{ 
            top: `${scrollProgress}%`,
            transform: `translateX(-50%) translateY(-50%) rotate(${scrollProgress * 3.6}deg)` 
          }}
        >
          ⭐
        </div>
      </div>
    </div>
  );
}

export default ScrollProgress;
