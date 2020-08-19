import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CompletedExercises from './CompletedExercises';

function UserAccount (props) {
    let {currentUser, completedExercises} = props
    // const [completedExercises, setCompletedExercises] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:3000/completed_exercises', {
    //         headers: {
    //         "Authorization": `Bearer ${localStorage.token}`
    //         }
    //     })
    //     .then(r => r.json())
    //     .then(data => {
    //         setCompletedExercises(data)
    //     })                    
    // }, [])

    const renderCompletedExercises =
        completedExercises.map((exercise, idx) => 
            <CompletedExercises 
            key={idx}
            completedExercises={completedExercises}
            />
        )
    
    return(
            <Container>
                {<br/>}
                <Row>
                    <Col sm={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" />
                        <Card.Body>
                            <Card.Title>{currentUser.username}</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={8}>
                        {completedExercises ? renderCompletedExercises : <p>You have not completed any lessons.</p>}
                    </Col>
                </Row>                
            </Container>


    )
}
export default UserAccount;