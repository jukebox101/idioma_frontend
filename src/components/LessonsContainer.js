import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {NavLink} from 'react-router-dom';


function LessonsContainer (props) {
    const {handleLessons, lessons} = props
// const [lessons, setLessons] = useState([])

    // useEffect(() => {
    
    //     fetch('http://localhost:3000/lessons', {
    //         headers: {
    //         "Authorization": `Bearer ${localStorage.token}`
    //         }
    //     })
    //     .then(r => r.json())
    //     .then(lessonsArr => {
    //         console.log(lessonsArr)
    //         handleLessons(lessonsArr)
    //     })            
    

    // }, [])

    const renderLessons = 
        lessons.map((lesson, idx) => 
            <div key={idx}>
            <br/>
            <Row>
            <Col md={{ span: 6, offset: 3 }}>
            <Card style={{ width: '40rem' }}>
                <Card.Body>
                        <Card.Title>{lesson.title}</Card.Title>
    
                        <Card.Text>
                        {lesson.description}
                        </Card.Text>

                        <NavLink to="/introlesson" exact>Start Lesson</NavLink>{' '}
                        <NavLink to="/introexercises" exact>Start Exercises</NavLink>

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