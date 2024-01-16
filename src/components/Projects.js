import React from 'react';
import { Container} from 'react-bootstrap';
import information from './information';
//import '../styles/Home.css';
const Projects = ({ language }) => {
  const { projects } = information[language];
  return (
    <section className="home-section" id="home">
      <Container className="p-5">
        <h1 className="title">{projects.title}</h1>
        <p className="description">{projects.content}</p>
      </Container>
    </section>
  );
};

export default Projects;