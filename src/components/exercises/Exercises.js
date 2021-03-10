import React, { useState, useEffect } from  'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ExerciseCard from './ExerciseCard';
import Button from 'react-bootstrap/Button';
import {NavLink} from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

function Exercises (props) {
    let {handleCompletedExercises, handleExercises, lessonId, exercises} = props
    // const [exercises, setExercises] = useState([])
    const [counter, setCounter] = useState(0)
    const [buttonName, setButtonName] = useState('Next')
    let [correctAnswersArr, setCorrectAnswersArr] = useState([])
    const [show, setShow] = useState(false)
    const [correctAns, setCorrectAns] = useState("")
    let [variant, setVariant] = useState("primary")
    
    useEffect(() => {
        fetch('http://localhost:3000/exercises', {
            headers: {
            "Authorization": `Bearer ${localStorage.token}`
            }
        })
        .then(r => r.json())
        .then(exercisesArr => {
            handleExercises(exercisesArr)
        })
    }, [])

    const lessonExercises = exercises.filter(exercise => exercise.lesson_id === lessonId)
    console.log("exercises: ",lessonExercises)

    //posts completed exercises
    if (correctAnswersArr.length === lessonExercises.length) {
        lessonExercises.map((exercise) => {
            const data = {exercise_id: exercise.id, lesson_id: exercise.lesson_id}
            fetch("http://localhost:3000/completed_exercises", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${localStorage.token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(r => r.json())
            .then(data => {
                console.log(data)
            })    
         }   
        )
    }

    console.log("exercise array length: ",lessonExercises.length)
    const handleCorrect = (answer, correctAnswer) => {
        if(answer === correctAnswer){
            setCorrectAnswersArr(correctAnswersArr => [...correctAnswersArr, answer])
            setShow(true)
            setVariant("success")
            setCorrectAns(correctAnswer)
        }
        else {
            setShow(true)
            setVariant("danger")
            setCorrectAns(correctAnswer)
        }
    }

    const renderQuestions =
        lessonExercises.map((question, idx)=> 
            <ExerciseCard
            key={idx}
            questions={question.questions}
            answers={question.answers}
            correct={question.correct}
            category={question.category}
            handleCorrect={handleCorrect}
            handleCompletedExercises={handleCompletedExercises}
            />
        )

    const buttonChange = () => {
        if (counter === renderQuestions.length-2){
            setButtonName("Complete")
        }
        if (counter > renderQuestions.length){
            setCounter(0)
        }
    }

    return (
        <Container fluid>

            {
                <Alert variant={variant} show={show} >
                    <Alert.Heading>{variant === "success" ? "Correct! " : "Incorrect!"}</Alert.Heading>
                    <p>
                        {correctAns}
                    </p>
                    </Alert>
            }    
            {<br/>}

            {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
            <Row>
                <Col xs={6} md={4}>

                </Col>
                <Col xs={6} md={4}>
            {renderQuestions[counter]}
            {
            <Button style={{color:'cornsilk'}} variant="outline-dark" onClick={() => {
                setCounter(counter+1);
                {buttonChange()};
                {setShow(false)};
                }}>{buttonName === "Complete" ? <NavLink style={{color:'cornsilk'}} to="/lessons" exact>Complete</NavLink> : buttonName}
                </Button>                
            }

                </Col>
                <Col xs={6} md={4}>

                </Col>
            </Row>


            
        </Container>
    )
}
export default Exercises;