import React from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LessonCard (props) {
const {title, description} = props
    return (
        <Row>
        <Col md={{ span: 6, offset: 3 }}>
        <Card style={{ width: '40rem' }}>
            <Card.Body>
                    <Card.Title>{title}</Card.Title>

                    <Card.Text>
                    {description}
                    </Card.Text>
                    <Card.Link href="/introlesson">Start Lesson</Card.Link>
                    <Card.Link href="/introexercises">Start Exercises</Card.Link>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}
export default LessonCard;