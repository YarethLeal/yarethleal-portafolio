import React from 'react';
import { Col, Container, Card, Row} from 'react-bootstrap';
import information from './information';
import '../styles/Projects.css';
const Projects = ({ language }) => {
  const { projects } = information[language];
  return (
    <section className="home-section" id="home">
      <Container className="p-5">
        <h1 className="title">{projects.title}</h1>
        <p className="description">{projects.content}</p>
        <div className="container-fluid">
          <Row>
            {projects.project.map((projectInfo, index) => (
              <Col className="col-6 col-sm-3" key={index}>
                <Card className="card-flip">
                    <div className="front">
                      <Card.Img src={projectInfo.image} />
                    </div>
                    <div className="back">
                      <Card.Body>
                        <Card.Title>{projectInfo.name}</Card.Title>
                        <Card.Text>{projectInfo.description}</Card.Text>
                        <Card.Link href={projectInfo.github}>Github</Card.Link>
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