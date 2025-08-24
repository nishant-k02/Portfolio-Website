import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  // Initialize state based on what's already applied to the DOM
  const [isDark, setIsDark] = useState(() => {
    // Check if dark class is already applied by the initialization script
    if (typeof window !== 'undefined') {
      // First check data-theme attribute (most reliable)
      const dataTheme = document.documentElement.getAttribute('data-theme');
      if (dataTheme) {
        return dataTheme === 'dark';
      }
      
      // Fallback to DOM class check
      const hasClassOnDOM = document.documentElement.classList.contains('dark');
      if (hasClassOnDOM !== undefined) {
        return hasClassOnDOM;
      }
      
      // Final fallback to localStorage check
      const savedTheme = localStorage.getItem('theme');
      return savedTheme ? savedTheme === 'dark' : true; // Default to dark
    }
    return true; // Default for SSR
  });

  // useEffect to sync state on mount and add theme-loaded class
  useEffect(() => {
    // Add theme-loaded class for smooth transitions after initial load
    document.documentElement.classList.add('theme-loaded');
  }, []);

  // Single useEffect to handle theme changes
  useEffect(() => {
    // Only update if the DOM state doesn't match our React state
    const hasClassOnDOM = document.documentElement.classList.contains('dark');
    const dataTheme = document.documentElement.getAttribute('data-theme');
    const savedTheme = localStorage.getItem('theme');
    const currentTheme = isDark ? 'dark' : 'light';
    
    if (hasClassOnDOM !== isDark || dataTheme !== currentTheme || savedTheme !== currentTheme) {
      // Update document class, data attribute, and save preference
      if (isDark) {
        document.documentElement.classList.add('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const value = {
    isDark,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
