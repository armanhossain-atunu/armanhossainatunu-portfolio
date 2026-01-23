import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, cardVariants } from '../utils/animations';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Core',
      icon: 'fab fa-html5',
      iconColor: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-100 dark:bg-orange-500/20',
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)']
    },
    {
      title: 'Frameworks & Libs',
      icon: 'fab fa-react',
      iconColor: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-500/20',
      skills: ['React.js', 'React Router', 'Next.js']
    },
    {
      title: 'Styling & UI',
      icon: 'fab fa-css3-alt',
      iconColor: 'text-cyan-600 dark:text-cyan-400',
      bgColor: 'bg-cyan-100 dark:bg-cyan-500/20',
      skills: ['Tailwind CSS', 'DaisyUI']
    },
    {
      title: 'Tools & Utilities',
      icon: 'fas fa-toolbox',
      iconColor: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-100 dark:bg-red-500/20',
      skills: ['npm', 'Axios', 'React Hook Form']
    },
    {
      title: 'UI Enhancements',
      icon: 'fas fa-magic',
      iconColor: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-500/20',
      skills: ['Framer Motion', 'AOS', 'React Icons', 'Toastify', 'SweetAlert2']
    },
    {
      title: 'Backend & Framework',
      icon: 'fab fa-node-js',
      iconColor: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-500/20',
      skills: ['Node.js', 'Express.js']
    },
    {
      title: 'Database',
      icon: 'fas fa-database',
      iconColor: 'text-emerald-600 dark:text-emerald-400',
      bgColor: 'bg-emerald-100 dark:bg-emerald-500/20',
      skills: ['MongoDB']
    },
    {
      title: 'Auth & Security',
      icon: 'fas fa-shield-alt',
      iconColor: 'text-yellow-600 dark:text-yellow-400',
      bgColor: 'bg-yellow-100 dark:bg-yellow-500/20',
      skills: ['JWT', 'Firebase Auth', 'bcrypt.js', 'CORS']
    },
    {
      title: 'API Development',
      icon: 'fas fa-network-wired',
      iconColor: 'text-indigo-600 dark:text-indigo-400',
      bgColor: 'bg-indigo-100 dark:bg-indigo-500/20',
      skills: ['RESTful APIs', 'Middleware']
    },
    {
      title: 'Server & Utilities',
      icon: 'fas fa-server',
      iconColor: 'text-slate-600 dark:text-slate-400',
      bgColor: 'bg-slate-100 dark:bg-slate-500/20',
      skills: ['dotenv']
    },
    {
      title: 'Dev Tools',
      icon: 'fas fa-laptop-code',
      iconColor: 'text-gray-700 dark:text-white',
      bgColor: 'bg-gray-200 dark:bg-white/10',
      skills: ['Git & GitHub', 'Postman', 'VS Code', 'Chrome DevTools', 'ESLint/Prettier']
    },
    {
      title: 'Deployment',
      icon: 'fas fa-rocket',
      iconColor: 'text-pink-600 dark:text-pink-400',
      bgColor: 'bg-pink-100 dark:bg-pink-500/20',
      skills: ['Vercel', 'Netlify']
    }
  ];

  return (
    <motion.section 
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      className="relative z-10 py-24" 
      id="skills"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent-pink to-orange-400 mb-6 pb-2">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            My technical proficiency across the full stack development ecosystem.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(192, 38, 211, 0.1)"
              }}
              className="bg-white/60 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 p-6 rounded-2xl hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-lg ${category.bgColor} flex items-center justify-center ${category.iconColor} mb-4 group-hover:scale-110 transition-transform`}>
                <i className={`${category.icon} text-2xl`}></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;