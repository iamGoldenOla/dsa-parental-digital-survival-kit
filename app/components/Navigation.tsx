"use client"

import { useEffect, useState } from 'react';

export default function Navigation() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // On mount, check localStorage or system preference
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleDark = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <nav className="navbar flex items-center justify-between px-4 py-2">
      <div className="logo">
        <a href="/">
          <img src="/images/BDM.webp" alt="BDM Logo" style={{ height: 72, width: 'auto', verticalAlign: 'middle' }} />
        </a>
      </div>
      {/* ...existing nav links... */}
      <button
        onClick={toggleDark}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        className="ml-4 p-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-yellow-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      >
        {isDark ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.95 7.07l-.71-.71M6.34 6.34l-.71-.71" /></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
        )}
      </button>
    </nav>
  );
} 