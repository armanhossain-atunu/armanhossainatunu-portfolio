// Common animation variants for consistent animations across components

export const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInDown = {
  initial: { y: -60, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInLeft = {
  initial: { x: -60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInRight = {
  initial: { x: 60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const staggerItem = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 }
};

// Hover animations
export const hoverScale = {
  whileHover: { scale: 1.05, y: -5 },
  whileTap: { scale: 0.95 }
};

export const hoverGlow = {
  whileHover: { 
    boxShadow: "0 10px 30px rgba(192, 38, 211, 0.3)",
    y: -5
  }
};

// Page transition variants
export const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

// Card animations
export const cardVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  whileHover: { 
    y: -10, 
    scale: 1.02,
    transition: { duration: 0.3 }
  }
};

// Button animations
export const buttonVariants = {
  whileHover: { 
    scale: 1.05, 
    y: -2,
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
  },
  whileTap: { scale: 0.95 }
};

// Icon animations
export const iconVariants = {
  whileHover: { 
    scale: 1.2, 
    rotate: 5,
    transition: { duration: 0.3 }
  }
};

// Text reveal animation
export const textReveal = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" }
};

// Floating animation
export const floatingAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};