import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Profile = () => {
  const navigate = useNavigate();
  

  const handleLogout = () => {
    navigate('/login'); // Redirect to the login page
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">MyApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Button variant="outline-light" onClick={handleLogout}>
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="my-5">
        <h1 className="text-center">Your Account is Activated</h1>
      </Container>
    </>
  );
};

export default Profile;
