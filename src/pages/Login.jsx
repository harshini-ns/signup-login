import { Container } from "react-bootstrap"
import { Form } from "react-bootstrap"
import { Button } from "react-bootstrap"
import {  useState } from 'react'
import {useNavigate} from "react-router-dom";



export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate();
    function login() {
        const isCorrectUsername = username === "abc@gmail.com"
        const isCorrectPassword = password === "password"
        if (isCorrectUsername && isCorrectPassword) {
            alert("login is successful");
            navigate('/profile');
        }
        else{
            return alert("login is unsuccessful");
        }
    }
    return (
        <Container>
            <h1 className="my-3"> Log in to your account ! </h1>

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"
                        placeholder="Enter email"
                        value={username} onChange={(e) => setUsername(e.target.value)} />
                    <Form.Text className="text-muted">
                        We&apos;ll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                  <div className="d-flex justify-content-center">
                    <Button variant="primary" onClick={login}>
                    SUBMIT
                </Button>
                  </div>
                
            </Form>
        </Container>
    );
}





