import { Nav } from 'react-bootstrap';

export default function Navbar() {
  return (
    <Nav className="justify-content-center bg-light p-2">
      <Nav.Item>
        <Nav.Link href="/">Inicio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/blog">Blog</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
