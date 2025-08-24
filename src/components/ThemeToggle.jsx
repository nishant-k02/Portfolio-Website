import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        relative w-10 h-10 
        rounded-lg 
        bg-zinc-800/50 hover:bg-zinc-700/50 
        dark:bg-zinc-700/50 dark:hover:bg-zinc-600/50
        border border-zinc-700/50 dark:border-zinc-600/50
        transition-all duration-300 
        flex items-center justify-center
        group
        focus:outline-none focus:ring-2 focus:ring-sky-400/50
      "
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Sun Icon (Light Mode) */}
      <span 
        className={`
          material-symbols-rounded text-xl transition-all duration-300
          ${isDark 
            ? 'opacity-0 scale-0 rotate-90' 
            : 'opacity-100 scale-100 rotate-0 text-amber-400'
          }
          absolute
        `}
      >
        light_mode
      </span>
      
      {/* Moon Icon (Dark Mode) */}
      <span 
        className={`
          material-symbols-rounded text-xl transition-all duration-300
          ${isDark 
            ? 'opacity-100 scale-100 rotate-0 text-sky-400' 
            : 'opacity-0 scale-0 -rotate-90'
          }
          absolute
        `}
      >
        dark_mode
      </span>
    </button>
  );
};

export default ThemeToggle;
