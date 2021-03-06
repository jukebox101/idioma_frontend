import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SignUp (props){
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState([])

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {username: username, password: password}
        
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(r => r.json())
        .then(data => {
            const { user, token } = data
            if(user && token) {
                props.handleLogin(user)
                localStorage.token = token                
            } else {
                setErrorMessage(data.error)
            }

        })
    }

    return(
        <Container>
        <Row>
            <Col md={{ span: 6, offset: 3 }}>
        <Form onSubmit={handleSubmit}>
            <h1 style={{color:'orangered'}}>Sign Up</h1>

        <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter username" 
            value={username} 
            onChange={e => setUserName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type="password" 
            placeholder="Enter Password"
            value={password} 
            onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        {errorMessage.map((error) => <p style={{color:'red'}}>{error}</p>
        )}
        <Button style={{color:'orangered'}} variant="outline-dark" type="submit">
            Submit
        </Button>
        </Form>
        </Col>

</Row>
</Container>

    )
}

export default SignUp;