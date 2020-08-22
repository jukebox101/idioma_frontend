import React from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {NavLink} from 'react-router-dom';


function LessonsContainer (props) {
    const { lessons, handleLessonId } = props


    const renderLessons = 
        lessons.map((lesson, idx) => 
            <div key={idx}>
            <br/>
            <Row>
            <Col md={{ span: 6, offset: 3 }}>
                
            <Card style={{ width: '40rem' }}>
                <Card.Body>
                        <Card.Title style={{color:'orangered'}}>{lesson.title}</Card.Title>
    
                        <Card.Text>
                            {lesson.description}
                        </Card.Text>
                        <Button variant="outline-dark" onClick={() => handleLessonId(lesson.id)}>
                            <NavLink style={{color:'green'}} to={lesson.nav_link} exact>Start Lesson</NavLink>
                        </Button>{' '}
                        <Button variant="outline-dark" onClick={() => handleLessonId(lesson.id)}>
                            <NavLink style={{color:'green'}} to="/introexercises" exact>Start Exercises</NavLink>
                        </Button>{' '}
                        

                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            </div>
        )
    return(

        <Container>
            {renderLessons}
        </Container>

    )
}
export default LessonsContainer;