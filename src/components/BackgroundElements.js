import React from 'react';

const BackgroundElements = () => {
  return (
    <>
      {/* Grid Pattern Background */}
      <div className="fixed inset-0 pointer-events-none bg-grid-pattern z-0 opacity-40"></div>
      
      {/* Top Gradient */}
      <div className="fixed top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none z-0"></div>
      
      {/* Floating Glow Elements */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div 
        className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-[120px] -z-10 animate-pulse" 
        style={{ animationDelay: '2s' }}
      ></div>
    </>
  );
};

export default BackgroundElements;