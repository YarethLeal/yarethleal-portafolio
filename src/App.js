//import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavbarComponent from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
function App() {
  const [language, setLanguage] = useState('es');

  const toggleLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };
  return (
    <div>
      <NavbarComponent onLanguageChange={toggleLanguage} currentLanguage={language} />
      <Parallax pages={4}>
        <ParallaxLayer id="home" offset={0} className='center'><Home language={language} /></ParallaxLayer>
        <ParallaxLayer id="aboutMe" offset={1} className='center'><AboutMe language={language} /></ParallaxLayer>
        <ParallaxLayer id="skills" offset={2} className='center'><Skills language={language} /></ParallaxLayer>
        <ParallaxLayer id="projects" offset={3} className='center'><Projects language={language} /></ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
