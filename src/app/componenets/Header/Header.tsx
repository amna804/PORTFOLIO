'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Headroom from 'react-headroom';

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Theme handling
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemDark ? 'dark' : 'light');

    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    setIsDarkMode(initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newTheme);
    setIsDarkMode(!isDarkMode);
  };

  // Burger Icon component
  const BurgerIcon = ({ isOpen }: { isOpen: boolean }) => (
    <div className="relative h-6 w-6">
      <span className={`absolute h-0.5 w-6 bg-current transition-transform ${isOpen ? 'rotate-45 top-3' : 'translate-y-1'}`} />
      <span className={`absolute h-0.5 w-6 bg-current ${isOpen ? 'opacity-0' : 'translate-y-3'}`} />
      <span className={`absolute h-0.5 w-6 bg-current transition-transform ${isOpen ? '-rotate-45 top-3' : 'translate-y-5'}`} />
    </div>
  );

  // Navigation items
  const navItems = [
    { href: '/about', title: 'About' },
    { href: '/uses', title: 'Uses' },
    { href: '/blog', title: 'Blog' },
    { href: '/contact', title: 'Contact' },
  ];

  // Close mobile menu on route change
  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <Headroom style={{ zIndex: 50 }}>
      <header className="fixed w-full py-4 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          {/* Logo - Fixed Link */}
          <Link href="/" className="flex items-center hover:scale-105 transition-transform">
            <img
              src="/images/MLSA-removebg-preview.png" // Make sure image is in public folder
              alt="Website Logo"
              className="h-12 w-auto "
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-blue-500 transition-colors ${pathname === item.href
                    ? 'text-blue-500 font-medium'
                    : 'text-gray-600 dark:text-gray-200'
                  }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle - Fixed Colors */}
          <button
            onClick={toggleTheme}
            className="hidden md:block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
          >
            <svg
              className="w-8 h-8 text-gray-800 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isDarkMode ? (
                // Sun icon (shown in dark mode)
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                />
              ) : (
                // Moon icon (shown in light mode)
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <BurgerIcon isOpen={isOpen} />
          </button>
        </div>

        {/* Mobile Menu - Fixed Colors */}
        {isOpen && (
          <div className="md:hidden relative bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block py-2 text-lg ${pathname === item.href
                      ? 'text-blue-500 font-medium'
                      : 'text-gray-600 dark:text-gray-200'
                    } hover:text-blue-500 transition-colors`}
                >
                  {item.title}
                </Link>
              ))}
              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="w-full p-3 text-left rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-3"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isDarkMode ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  )}
                </svg>
                <span className="text-gray-600 dark:text-gray-200">
                  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </span>
              </button>
            </div>
          </div>
        )}
      </header>
    </Headroom>
  );
};