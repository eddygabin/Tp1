import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap/lib/Tab";

const NavbarComponent: React.FC = () => {
  return (
    <Navbar className="bg-dark navbar-dark" expanded={true}>
      <Container>
        <Navbar.Brand href="#">FoodWagon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#hero">Accueil</Nav.Link>
            <Nav.Link href="#topics">Sujets</Nav.Link>
            <Nav.Link href="#resources">Ressources</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
