//import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavbarComponent from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
function App() {
  const [language, setLanguage] = useState('es');

  const toggleLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };
  return (
    <div className="App">
      <NavbarComponent onLanguageChange={toggleLanguage} currentLanguage={language} />
      <Parallax pages={4} style={{ top: '0', left: '0' }}>
        <ParallaxLayer offset={0} speed={2.5}>
          <Home language={language} />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={2.5}>
          <AboutMe language={language} />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={2.5}>
          <Skills language={language} />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={2.5}>
          <Projects language={language} />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
