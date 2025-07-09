import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Blog() {
return (
  <div className="d-flex flex-column min-vh-100">
    <Header />
    <Navbar />
    
    <Container as="main" className="my-5 flex-grow-1">
      <Row className="g-4">
        {[1, 2, 3].map((item) => (
          <Col md={4} key={item}>
            <Card className="shadow-sm">
              <Card.Img variant="top" src="https://picsum.photos/300/200" />
              <Card.Body>
                <Card.Title>Publicación {item}</Card.Title>
                <Card.Text>
                  Texto de prueba para la publicación {item}.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

    <Footer />
  </div>
);
}