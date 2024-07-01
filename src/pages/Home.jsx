import { Container } from "react-bootstrap";
import {Navbar, Nav} from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid className="home-bg d-flex justify-content-center align-items-center text-center vh-100">
        <h1 className="my-5">WELCOMEs YOU !!!</h1>
      </Container>
    </>
  );
}
