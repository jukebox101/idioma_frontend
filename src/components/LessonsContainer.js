import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LessonsContainer () {
const [lessons, setLessons] = useState([])

    useEffect(() => {
    
        fetch('http://localhost:3000/lessons', {
            headers: {
            "Authorization": `Bearer ${localStorage.token}`
            }
        })
        .then(r => r.json())
        .then(lessonsArr => {
            setLessons(lessonsArr)
        })            
    

    }, [])
console.log(lessons)
    return(

        <Container>
            <br/>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                <Card style={{ width: '40rem' }}>
                    <Card.Body>
                        <Card.Title>Introduction</Card.Title>

                        <Card.Text>
                        Introductory topics like gender and basic verb conjugation.
                        </Card.Text>
                        <Card.Link href="/introlesson">Start Lesson</Card.Link>
                        <Card.Link href="/introexercises">Start Exercises</Card.Link>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    )
}
export default LessonsContainer;