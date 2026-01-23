import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WelcomeLoader = ({ onLoadingComplete }) => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const welcomeTexts = [
    "Welcome to my Portfolio",
    "Loading Experience...",
    "Almost Ready!"
  ];

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % welcomeTexts.length);
    }, 1000);

    const loadingTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onLoadingComplete();
      }, 500);
    }, 3500);

    return () => {
      clearInterval(textInterval);
      clearTimeout(loadingTimer);
    };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-pink/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative z-10 text-center">
            {/* Logo/Brand */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-pink">
                &lt;/AHA&gt;
              </h1>
            </motion.div>

            {/* Welcome Text */}
            <motion.div
              key={currentText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                {welcomeTexts[currentText]}
              </h2>
            </motion.div>

            {/* Loading Animation */}
            <div className="flex justify-center items-center space-x-2 mb-8">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className="w-3 h-3 bg-gradient-to-r from-primary to-accent-pink rounded-full"
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden mx-auto">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.5, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-primary to-accent-pink rounded-full"
              />
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-gray-400 mt-4 text-sm"
            >
              Frontend Developer
            </motion.p>
          </div>

          {/* Floating Particles */}
          {[...Array(20)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeLoader;