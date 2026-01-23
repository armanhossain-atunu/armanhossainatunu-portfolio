import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, cardVariants } from '../utils/animations';

const Projects = () => {
  const projects = [
    {
      title: 'Digital Life Lessons',
      description: 'Life-changing insights, handpicked for your growth.',
      image: 'https://i.ibb.co.com/pv6PYZVk/digital.png',
      liveLink: 'https://digitalll.netlify.app',
      gitHubLink:'https://github.com/armanhossain-atunu/Digital-Life-Lessons-cline',
      technologies: [
        { name: 'React', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800' },
        { name: 'Redux', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800' },
        { name: 'Tailwind', color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800' },
        { name: 'Node.js', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800' },
        { name: 'MongoDB', color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800' },
        { name: 'Express', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800' }
      ]
    },
    {
      title: 'Personal Finance Management',
      description: 'FinEase is a modern Personal Finance Management App that allows users to manage their income, expenses, balance, reports, and transaction history efficiently and in one place.',
      image: 'https://i.ibb.co/4ZjDF4Q4/finease.png',
      liveLink: 'https://fineaseappbd.netlify.app',
      gitHubLink:'https://github.com/armanhossain-atunu/finEase-client-side',
      technologies: [
        { name: 'React', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800' },
        { name: 'Redux', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800' },
        { name: 'Tailwind', color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800' },
        { name: 'Node.js', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800' },
        { name: 'MongoDB', color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800' },
        { name: 'Express', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800' }
      ]
    },
    {
      title: 'Warmpaws Pet Care',
      description: 'Warmpaws Pet Care is a trusted pet care service dedicated to keeping pets healthy, happy, and comfortable through compassionate care, grooming, and wellness support. 🐾',
      image: 'https://i.ibb.co/0yy2RnCN/Screenshot-2026-01-05-131152.png',
      liveLink: 'https://warmpaws-pet-care-service.netlify.app',
      gitHubLink:'https://github.com/armanhossain-atunu/Warmpaws',
      technologies: [
        { name: 'HTML5', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-800' },
        { name: 'CSS', color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300 border-pink-200 dark:border-pink-800' },
        { name: 'JavaScript', color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800' },
        { name: 'React', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800' },
        { name: 'Redux', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800' },
        { name: 'Tailwind', color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800' }
      ]
    }
  ];

  return (
    <motion.section 
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      className="relative z-10 pb-24" 
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent-pink to-orange-400 mb-6 pb-2">
            Recent Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A selection of my favorite works. Each project reflects my passion for creating intuitive and dynamic user experiences.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -15, 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(192, 38, 211, 0.15)"
              }}
              className="group bg-white/60 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
            >
              <div className="h-48 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                  <a 
                    className="p-3 bg-white text-gray-900 rounded-full hover:bg-primary hover:text-white transition-colors" 
                    href={project?.gitHubLink} 
                    title="View Code"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github text-lg"></i>
                  </a>
                  <a 
                    className="p-3 bg-white text-gray-900 rounded-full hover:bg-primary hover:text-white transition-colors" 
                    href={project.liveLink} 
                    title="Live Demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt text-lg"></i>
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-3 py-1 text-xs font-medium rounded-full border ${tech.color}`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;