import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Portfolio from './components/Portafolio.jsx';
import Services from './components/Services.jsx';
import Resume from './components/Resume.jsx';
import Contact from './components/Contact.jsx';
import Certifications from './components/Certifications.jsx';
import Footer from './components/Footer.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      offset: 100, 
      once: true, 
    });
  }, []);

  return (
    <div>
      <Header />
      <Home />
      <Portfolio />
      <Services />
      <Resume />
      <Contact />
      <Certifications />
      <Footer />
    </div>

  );
};

export default App;