import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, cardVariants } from '../utils/animations';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Social Science',
      institution: 'New Model Degree College',
      affiliation: '(Affiliated National University)',
      field: 'Social Science',
      passingYear: '2022',
      icon: 'fas fa-graduation-cap',
      level: 'Bachelor'
    },
    {
      degree: 'Higher Secondary Certificate',
      institution: 'Wali Newaz Khan College, Kishoreganj',
      group: 'Business Studies',
      passingYear: '2016',
      board: 'Dhaka',
      icon: 'fas fa-school',
      level: 'HSC'
    },
    {
      degree: 'Secondary School Certificate',
      institution: 'Jia Uddin High School, Bhatgaon, Kishoreganj',
      group: 'Business Studies',
      passingYear: '2013',
      board: 'Dhaka',
      icon: 'fas fa-book',
      level: 'SSC'
    }
  ];

  return (
    <motion.section 
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      className="relative z-10 py-24 bg-white/40 dark:bg-white/5 backdrop-blur-sm border-y border-gray-200 dark:border-white/5" 
      id="education"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent-pink to-orange-400 mb-6 pb-2">
            Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            My academic journey and educational background that shaped my foundation for learning and growth.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          className="space-y-8"
        >
          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(192, 38, 211, 0.15)"
              }}
              className="group bg-white/60 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl p-8 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent-pink flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i className={`${edu.icon} text-2xl`}></i>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-grow">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        {edu.institution}
                        {edu.affiliation && (
                          <span className="text-sm font-normal text-gray-500 dark:text-gray-400 block">
                            {edu.affiliation}
                          </span>
                        )}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 mt-3">
                        {edu.field && (
                          <div className="flex items-center gap-2">
                            <i className="fas fa-book-open text-primary text-sm"></i>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              Field: {edu.field}
                            </span>
                          </div>
                        )}
                        {edu.group && (
                          <div className="flex items-center gap-2">
                            <i className="fas fa-users text-primary text-sm"></i>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              Group: {edu.group}
                            </span>
                          </div>
                        )}
                        {edu.board && (
                          <div className="flex items-center gap-2">
                            <i className="fas fa-certificate text-primary text-sm"></i>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              Board: {edu.board}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Year Badge */}
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-r from-primary to-accent-pink text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        <i className="fas fa-calendar-alt mr-2"></i>
                        {edu.passingYear}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline Connector */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-32 bottom-32">
          <div className="w-1 h-full bg-gradient-to-b from-primary via-accent-pink to-orange-400 opacity-20 rounded-full"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;