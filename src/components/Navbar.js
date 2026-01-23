import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-background-light/70 dark:bg-background-dark/70 border-b border-gray-200 dark:border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <a 
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-pink tracking-tight" 
              href="/"
            >
              <span className="text-gray-600 dark:text-gray-300"
              >&lt;/AHA&gt;</span>
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:block"
          >
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`${
                    index === 0 
                      ? 'text-primary font-medium' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                  } px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                  href={item.href}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center gap-4"
          >
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
              onClick={toggleTheme}
            >
              <span className={`material-icons-outlined ${isDark ? 'hidden' : 'block'}`}>
                dark_mode
              </span>
              <span className={`material-icons-outlined ${isDark ? 'block' : 'hidden'}`}>
                light_mode
              </span>
            </motion.button>
            
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <span className="material-icons-outlined">menu</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden" 
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;