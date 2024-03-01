import NavBar from "./components/NavBar";
import Contacts from './components/Contacts';
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';



function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about').offsetTop;
      const skillSection = document.getElementById('skill').offsetTop;

      const projectsSection = document.getElementById('project').offsetTop;
      const contactSection = document.getElementById('contact').offsetTop;

      const scrollPosition = window.scrollY + window.innerHeight;

      if (scrollPosition < skillSection) {
        setActiveSection('about');
      } else if (scrollPosition < projectsSection) {
        setActiveSection('skill');
      }
      else if (scrollPosition < contactSection) {
        setActiveSection('projects');
      } else {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleNavClick = (section) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      window.scrollTo({
        top: sectionElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };
  return (
    <div>
      <NavBar click={handleNavClick}/>
      <div id="about"><About isVisible={activeSection === 'about'} click={handleNavClick} /></div>
      <div id="skill"><Skills isVisible={activeSection === 'skill'} /></div>

      <div id="project"><Projects isVisible={activeSection === 'project'} /></div>
      <div id="contact"><Contacts isVisible={activeSection === 'contact'} /></div>
      <Footer/>
    </div>
  );
}

export default App;
