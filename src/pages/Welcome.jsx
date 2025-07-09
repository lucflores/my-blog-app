import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

export default function Welcome() {
  const navigate = useNavigate();

return (
<div
  className="text-white text-center d-flex align-items-center justify-content-center"
  style={{
    backgroundImage: 'url(https://picsum.photos/1920/1080?blur)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    backgroundRepeat: 'no-repeat',
  }}
>
  <div className="bg-dark bg-opacity-50 p-5 rounded">
    <Container>
      <h1 className="display-4 fw-bold mb-3">Bienvenido al Blog</h1>
      <p className="lead mb-4">
        Explorá nuestras publicaciones y descubrí contenido interesante.
      </p>
      <Button variant="light" size="lg" onClick={() => navigate('/blog')}>
        Ingresar al Blog
      </Button>
    </Container>
  </div>
</div>
  );
}
