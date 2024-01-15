// src/components/Navbar.js
import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import information from './information';

const NavbarComponent = ({ onLanguageChange, currentLanguage }) => {
  const { navbar } = information[currentLanguage];
  const languageOptions = [
    { label: 'Español', value: 'es' },
    { label: 'English', value: 'en' },
  ];
  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home">{navbar.home}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#sobre-mi">{navbar.sobreMi}</Nav.Link>
            <Nav.Link href="#skills">{navbar.skills}</Nav.Link>
            <Nav.Link href="#proyectos">{navbar.proyectos}</Nav.Link>
            <Nav.Link href="#contacto">{navbar.contacto}</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown menuVariant="dark" id="nav-dropdown" title={currentLanguage === 'es' ? 'ES' : 'EN'} onSelect={onLanguageChange}>
              {languageOptions.map((option) => (
                <NavDropdown.Item key={option.value} eventKey={option.value}>
                  {option.label}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link href="https://github.com/YarethLeal" target="_blank">
              <FaGithub />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/yareth-leal/" target="_blank">
              <FaLinkedin />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
