import { motion } from 'framer-motion';
import { FaXTwitter } from 'react-icons/fa6';
import { staggerContainer, cardVariants } from '../utils/animations';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: 'https://github.com/armanhossain-atunu', icon: 'fab fa-github', hoverColor: 'hover:text-gray-300', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/armanhossainatunu', icon: 'fab fa-linkedin-in', hoverColor: 'hover:text-blue-400', label: 'LinkedIn' },
    { href: 'https://www.instagram.com/armanhossainatunu', icon: 'fab fa-instagram', hoverColor: 'hover:text-pink-400', label: 'Instagram' },
    { href: 'https://x.com/arman_atunu', icon: FaXTwitter, hoverColor: 'hover:text-gray-300', label: 'X (Twitter)', isReactIcon: true },
  ];

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const contactInfo = [
    { icon: 'fas fa-envelope', text: 'armanhossainatunu@gmail.com', href: 'mailto:armanhossainatunu@gmail.com' },
    { icon: 'fas fa-phone', text: '+880 1820 086865', href: 'tel:+8801820086865' },
    { icon: 'fas fa-map-marker-alt', text: 'Dhaka, Bangladesh', href: '#' },
  ];

  return (
    <motion.footer 
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      className="relative bg-gray-900 dark:bg-black text-white"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          
          {/* Brand Section */}
          <motion.div 
            variants={cardVariants}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-pink">
                <span className="text-gray-300">&lt;/AHA&gt;</span>
              </h3>
              <p className="text-gray-400 mt-4 leading-relaxed">
                Full Stack Developer passionate about creating modern, responsive, and user-friendly web applications.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-gray-800 dark:bg-gray-700 flex items-center justify-center text-gray-400 ${link.hoverColor} transition-all duration-300 hover:scale-110`}
                  aria-label={link.label}
                >
                  {link.isReactIcon ? (
                    <link.icon className="w-5 h-5" />
                  ) : (
                    <i className={`${link.icon} text-lg`}></i>
                  )}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            variants={cardVariants}
            className="lg:col-span-1"
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 group-hover:translate-x-1 transition-transform"></i>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            variants={cardVariants}
            className="lg:col-span-1"
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                    <i className={`${contact.icon} text-xs text-primary`}></i>
                  </div>
                  {contact.href !== '#' ? (
                    <a
                      href={contact.href}
                      className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm leading-relaxed"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span className="text-gray-400 text-sm leading-relaxed">
                      {contact.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter/CTA */}
          <motion.div 
            variants={cardVariants}
            className="lg:col-span-1"
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Let's Connect</h4>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Interested in working together? Feel free to reach out for collaborations or just a friendly hello!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-accent-pink text-white font-medium rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group"
            >
              Get In Touch
              <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-gray-800 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Arman Hossain Atunu. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center">
                Made with <i className="fas fa-heart text-red-500 mx-1 animate-pulse"></i> in Bangladesh
              </span>
              <a
                href="https://github.com/armanhossain-atunu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-300"
              >
                View Source
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-pink/5 rounded-full blur-3xl"></div>
    </motion.footer>
  );
};

export default Footer;