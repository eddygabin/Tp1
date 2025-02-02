import React from "react";
import { ListGroup, Form, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap/lib/Tab";

const MainContent: React.FC = () => {
  return (
    <Container className="mt-4">
      {/* Hero Section */}
      <section id="hero" className="text-center p-5 bg-light rounded">
        <h1>Bienvenue sur FoodWagon</h1>
        <p>Découvrez les meilleures recettes et astuces culinaires</p>
      </section>

      {/* Topics Section */}
      <section id="topics" className="mt-5">
        <h2>Sujets Populaires</h2>
        <div className="d-flex flex-wrap gap-3">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Recettes rapides</Card.Title>
              <Card.Text>Des plats faciles et rapides à préparer.</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Cuisine santé</Card.Title>
              <Card.Text>Des repas équilibrés pour une alimentation saine.</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="mt-5">
        <h2>Ressources</h2>
        <ListGroup>
          <ListGroup.Item>Livres de cuisine</ListGroup.Item>
          <ListGroup.Item>Blogs culinaires</ListGroup.Item>
          <ListGroup.Item>Vidéos tutorielles</ListGroup.Item>
        </ListGroup>
      </section>

      {/* Contact Form */}
      <section id="contact" className="mt-5">
        <h2>Contactez-nous</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="text" placeholder="Votre nom" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Votre email" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Envoyer
          </Button>
        </Form>
      </section>
    </Container>
  );
};

export default MainContent;
