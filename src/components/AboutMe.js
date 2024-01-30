import React from 'react';
import { Container} from 'react-bootstrap';
import information from './information';
//import '../styles/Home.css';
const AboutMe = ({ language }) => {
  const { aboutMe } = information[language];
  return (
    <section className="aboutMe-section" id="aboutMe">
      <Container className="p-5">
        <h1 className="title">{aboutMe.title}</h1>
        <p className="description">{aboutMe.content}</p>
      </Container>
    </section>
  );
};

export default AboutMe;