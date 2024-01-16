// src/components/Home.js
import React from 'react';
import { Container, } from 'react-bootstrap';
import information from './information';
//import '../styles/Home.css';
const Home = ({ language }) => {
  const { home } = information[language];
  return (
    <section className="home-section" id="home">
      <Container className="p-5">
        <h1 className="title">{home.title}</h1>
        <p className="description">{home.description}</p>
      </Container>
    </section>
  );
};

export default Home;
