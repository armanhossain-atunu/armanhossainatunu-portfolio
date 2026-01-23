import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';
import WelcomeLoader from './components/WelcomeLoader';
// import TechBanner from './components/TechBanner';
import BackgroundElements from './components/BackgroundElements';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider>
      {isLoading && <WelcomeLoader onLoadingComplete={handleLoadingComplete} />}
      
      <div className={`bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-100 font-sans transition-colors duration-300 overflow-x-hidden ${isLoading ? 'hidden' : 'block'}`}>
        <BackgroundElements />
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <SocialSidebar />
        {/* <TechBanner /> */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </ThemeProvider>
  );
}

export default App;