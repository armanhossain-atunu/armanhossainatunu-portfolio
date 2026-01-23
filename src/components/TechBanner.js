import React from 'react';

const TechBanner = () => {
  const technologies = [
    { name: 'React', icon: 'fab fa-react', hoverColor: 'group-hover:text-cyan-400' },
    { name: 'Node.js', icon: 'fab fa-node-js', hoverColor: 'group-hover:text-green-500' },
    { 
      name: 'Next.js', 
      icon: null, 
      svg: (
        <svg className="w-8 h-8 fill-current dark:text-white group-hover:text-gray-400 transition-colors" viewBox="0 0 24 24">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c-.604 0-1.042-.438-1.042-1.042v-5.937l-3.328 4.318c-.188.244-.438.244-.625.062-.187-.187-.187-.438.063-.625l3.528-4.576c.229-.292.542-.396.875-.396.604 0 1.042.437 1.042 1.042v4.832l4.626-6.019c.188-.244.438-.244.625-.062.187.187.187.438-.063.625l-4.825 6.279c-.229.292-.542.396-.875.396z"></path>
        </svg>
      )
    },
    { name: 'Firebase', icon: 'fas fa-fire', hoverColor: 'group-hover:text-yellow-500' },
    { 
      name: 'Tailwind', 
      icon: null, 
      svg: (
        <svg className="w-8 h-8 fill-current dark:text-white group-hover:text-cyan-400 transition-colors" viewBox="0 0 24 24">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
        </svg>
      )
    },
    { name: 'MongoDB', icon: 'fas fa-leaf', hoverColor: 'group-hover:text-green-600' },
  ];

  return (
    <div className="w-full border-t border-gray-200 dark:border-white/5 bg-white/30 dark:bg-black/20 backdrop-blur-sm py-8 mt-10">
      <div className="max-w-7xl mx-auto px-6 overflow-hidden">
        <p className="text-center text-sm font-semibold text-gray-500 dark:text-gray-400 mb-6 uppercase tracking-widest">
          Technologies & Tools
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center gap-2 group cursor-pointer">
              {tech.svg ? (
                tech.svg
              ) : (
                <i className={`${tech.icon} text-3xl ${tech.hoverColor} transition-colors`}></i>
              )}
              <span className="text-xs font-medium dark:text-gray-300">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechBanner;