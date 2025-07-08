import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Blog() {
  return (
    <>
      <Header />
      <Navbar />
      <Container className="my-4">
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300" />
              <Card.Body>
                <Card.Title>Publicación 1</Card.Title>
                <Card.Text>Texto de prueba para la publicación 1.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Repetí con otras columnas si querés más publicaciones */}
        </Row>
      </Container>
      <Footer />
    </>
  );
}
