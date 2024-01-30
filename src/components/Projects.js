import React from 'react';
import { Col, Container, Card, Row } from 'react-bootstrap';
import information from './information';
import '../styles/Projects.css';
import { FaGithub } from 'react-icons/fa';
const Projects = ({ language }) => {
  const { projects } = information[language];
  return (
    <section className="projects-section" id="projects">
      <Container className="p-5">
        <h1 className="title">{projects.title}</h1>
        <p className="description">{projects.content}</p>
        <div className="container-fluid">
          <Row xs={1} md={2} className="g-4">
            {projects?.project?.map((projectInfo, index) => (
              <Col key={index}>
                <Card className="card-flip">
                  <div className="front">
                    <Card.Img src={projectInfo.image} />
                  </div>
                  <div className="back">
                    <Card.Body>
                      <Card.Title>{projectInfo.name}</Card.Title>
                      <Card.Text>{projectInfo.description}</Card.Text>
                      <Card.Link href={projectInfo.github} target='_blank'><FaGithub /></Card.Link>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Projects;