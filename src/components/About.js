import React from 'react';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem, cardVariants } from '../utils/animations';

const About = () => {
  const technologies = [
    'JavaScript (ES6+)',
    'React',
    'Next.js',
    'Node.js',
    'Tailwind CSS',
    'MongoDB'
  ];

  return (
    <motion.section 
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      className="relative z-10 py-24 bg-white/40 dark:bg-white/5 backdrop-blur-sm border-y border-gray-200 dark:border-white/5" 
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            variants={fadeInLeft}
            className="relative order-1 lg:order-1 group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent-pink opacity-20 blur-2xl rounded-[2rem] -z-10 transition-opacity duration-500 group-hover:opacity-30"></div>
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl rotate-3 transition-transform duration-500 group-hover:rotate-0">
              <img 
                alt="Arman Portrait" 
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                src="https://i.ibb.co.com/Z6sMKPJp/armanhossainatunu.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 lg:-right-10 w-32 h-32 bg-background-light dark:bg-background-dark rounded-full border border-gray-200 dark:border-white/10 shadow-xl flex flex-col items-center justify-center z-20 animate-float-slow">
              <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-pink">6+</span>
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Months Exp.</span>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeInRight}
            className="order-2 lg:order-2"
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Who I Am</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              A Passionate <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent-pink to-orange-400">Problem Solver</span> & Creator.
            </h3>
            
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400">
              <p>
                Hi! I’m Arman Hossain Atunu, a Front-End Web Developer who has gradually grown into a MERN Stack Developer. My programming journey started out of curiosity when I began editing a custom Tumblr theme. Playing with HTML and CSS back then made me realize how fun it is to build websites, and since then, I have been learning JavaScript, React.js, Node.js, Express.js, and MongoDB to create full-stack web applications.
              </p>
              <p>
              I especially enjoy building modern, responsive, and user-friendly websites, crafting interactive UIs, smooth animations, and making designs that are easy and enjoyable to use. I love seeing an idea come to life on the screen and creating experiences that make users happy.
              </p>
              <p>Here are a few technologies I've been working with recently:</p>
            </div>

            <motion.ul 
              variants={staggerContainer}
              className="grid grid-cols-2 gap-x-4 gap-y-2 mt-8 mb-8 font-mono text-sm text-gray-600 dark:text-gray-400"
            >
              {technologies.map((tech, index) => (
                <motion.li 
                  key={index} 
                  variants={staggerItem}
                  whileHover={{ x: 5, color: "#C026D3" }}
                  className="flex items-center gap-2"
                >
                  <i className="fas fa-caret-right text-primary"></i> {tech}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;