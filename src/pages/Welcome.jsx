import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <Container className="text-center mt-5">
      <h1>Bienvenido al Blog</h1>
      <p>Explorá nuestras publicaciones y descubrí más contenido.</p>
      <Button variant="primary" onClick={() => navigate('/blog')}>
        Ingresar al Blog
      </Button>
    </Container>
  );
}
