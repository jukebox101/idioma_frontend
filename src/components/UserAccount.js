import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CompletedExercises from './exercises/CompletedExercises';

function UserAccount (props) {
    let {currentUser, handleCompletedExercises, lessons, completedExercises} = props

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
                        <Card.Img variant="bottom" src="https://www.uokpl.rs/fpng/f/276-2761720_circle-hd-png.png" />
                        <Card.Body>
                            <Card.Title style={{color:'green'}}>{currentUser.username}</Card.Title>
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
                        {completedExercises ? renderCompleted : <p>You have not completed any lessons.</p>}
                    </Col>
                </Row>                
            </Container>


    )
}
export default UserAccount;