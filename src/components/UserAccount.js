import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CompletedExercises from './CompletedExercises';

function UserAccount (props) {
    let {currentUser, handleCompletedExercises, lessons, exercises, completedExercises} = props
    const [completedLessons, setCompletedLessons] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/user_completed', {
            headers: {
            "Authorization": `Bearer ${localStorage.token}`
            }
        })
        .then(r => r.json())
        .then(data => {
            handleCompletedExercises(data)
        })                    
      }, [])

    function renderCompletes (lessonsArr, completedArr) {
        let returnArr = []
        for (let i=0; i < completedArr.length; i++) {
            for (let j=0; j < lessonsArr.length; j++){
                if (completedArr[i] === lessonsArr[j].id) {
                    returnArr = [...returnArr, lessonsArr[j]]
                }
            }
        }
        return (returnArr)
    }
    const lessonsArr = completedExercises.map(completed => completed.lesson_id)
    const uniqueLessonsArr = [...new Set(lessonsArr)]
    
    const array = renderCompletes(lessons, uniqueLessonsArr)

    const renderCompleted = 
        array.map((element, idx) => 
        <CompletedExercises 
        key={idx}
        title={element.title} 
        description={element.description} />)

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
                                Lessons Completed: {array.length}
                            </Card.Text>                            
                            <Card.Text>
                                Exercises Completed: {completedExercises.length}
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>

                        </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={8}>
                        <h2>Completed Lessons</h2>
                        {completedExercises ? renderCompleted : <p>You have not completed any lessons.</p>}
                    </Col>
                </Row>                
            </Container>


    )
}
export default UserAccount;