import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LessonCard from './LessonCard';

function LessonsContainer (props) {
    const {lessons} = props
// const [lessons, setLessons] = useState([])

//     useEffect(() => {
    
//         fetch('http://localhost:3000/lessons', {
//             headers: {
//             "Authorization": `Bearer ${localStorage.token}`
//             }
//         })
//         .then(r => r.json())
//         .then(lessonsArr => {
//             setLessons(lessonsArr)
//         })            
    

//     }, [])

    const renderLessons = 
        lessons.map((lesson, idx) => 
            // <LessonCard
            // key={idx}
            // title={lesson.title}
            // description={lesson.description}
            // />
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
                        <Card.Link href="/introlesson">Start Lesson</Card.Link>
                        <Card.Link href="/introexercises">Start Exercises</Card.Link>
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