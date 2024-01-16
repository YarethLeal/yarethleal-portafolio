import React from 'react';
import { Container} from 'react-bootstrap';
import information from './information';
//import '../styles/Home.css';
const Skills = ({ language }) => {
  const { skills } = information[language];
  return (
    <section className="home-section" id="home">
      <Container className="p-5">
        <h1 className="title">{skills.title}</h1>
        <p className="description">{skills.content}</p>
      </Container>
    </section>
  );
};

export default Skills;