import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate=useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      return alert('Passwords do not match.');
    }
    alert('Signup successful!');
    navigate('/login');
  };

  return (
    <Container className="my-5">
      <h1 className="text-center">Signup</h1>
      <Form onSubmit={handleSignup}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button variant="primary" type="submit">
            Signup
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Signup;
