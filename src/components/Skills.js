import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import information from './information';
//import '../styles/Home.css';
const Skills = ({ language }) => {
  const { skills } = information[language];
  return (
    <section className="home-section" id="home">
      <Container className="p-5">
        <h1 className="title">{skills.title}</h1>
        <p className="description">{skills.content}</p>
        <div className="container-fluid">
          <Row>
            {skills.badges.map((badge, index) => (
              <Col className="col-6 col-sm-3" key={index}>
                <Image src={badge.Src} alt={badge.Alt} title={badge.Alt}  />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Skills;