// ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Default to light theme
  const [theme, setTheme] = useState('light');

  // Check localStorage on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      updateDocumentTheme(storedTheme);
    }
  }, []);

  const updateDocumentTheme = (themeValue) => {
    if (themeValue === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    updateDocumentTheme(newTheme);
  };

  const setDark = () => {
    setTheme('dark');
    localStorage.setItem('theme', 'dark');
    updateDocumentTheme('dark');
  }
  const setLight = () => {
    setTheme('light');
    localStorage.setItem('theme', 'light');
    updateDocumentTheme('light');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setDark, setLight }}>
      {children}
    </ThemeContext.Provider>
  );
};
