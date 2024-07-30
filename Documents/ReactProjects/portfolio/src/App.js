import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Introduction from './Introduction'
import Services from './Services'
import Works from './Works'
import Experience from './Experience'
import Skill from './Skill'
import Contact from './Contact'


function App() {
  const [navbarColor, setNavbarColor] = useState('bg-gradient-to-r from-black via-indigo-950 to-black');
  const [active, setActive] = useState("Introduction");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navbar = document.querySelector('nav');

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const navbarHeight = navbar.offsetHeight;
        const scrollPosition = window.scrollY + navbarHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          switch (section.id) {
            case 'introduction':
              setNavbarColor('bg-gradient-to-r from-black via-indigo-950 to-black'); // change navbar color to red
              setActive('Introduction')
              break;
            case 'services':
              setNavbarColor('bg-gray-950'); // change navbar color to blue
              setActive('Services')
              break;
            case 'resume':
              setNavbarColor('bg-gradient-to-r from-black via-indigo-950 to-black'); // change navbar color to green
              setActive('Resume')
              break;
            case 'experience':
              setNavbarColor('bg-gray-950'); // change navbar color to green
              setActive('Resume')
              break;
            case 'skills':
              setNavbarColor('bg-gradient-to-r from-black via-indigo-950 to-black'); // change navbar color to green
              setActive('Skills')
              break;
            case 'contact':
              setNavbarColor('bg-gray-950'); // change navbar color to green
              setActive('Contact')
              break;
            default:
              setNavbarColor('bg-gradient-to-r from-black via-indigo-950 to-black'); // default navbar color
              setActive('introduction')
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header 
        bgColor = {navbarColor}
        active = {active}
        setActive = {setActive} 
      />
      <Introduction />
      <Services />
      <Works />
      <Experience />
      <Skill />
      <Contact />
    </div>
  );
}

export default App;
