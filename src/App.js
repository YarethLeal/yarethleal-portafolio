//import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavbarComponent from './components/Navbar';
import Home from './components/Home';
import { useState } from 'react';
function App() {
  const [language, setLanguage] = useState('es');

  const toggleLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };
  return (
    <div className="App">
      <NavbarComponent onLanguageChange={toggleLanguage} currentLanguage={language}/>
      <Home language={language}/>
    </div>
  );
}

export default App;
