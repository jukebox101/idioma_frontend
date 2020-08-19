import React, { useState, useEffect } from  'react';
import Container from 'react-bootstrap/Container';
import ExerciseCard from './ExerciseCard';
import Button from 'react-bootstrap/Button';
import {NavLink} from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

function Exercises (props) {
    let {exercises, completedExercises} = props
    // const [exercises, setExercises] = useState([])
    const [counter, setCounter] = useState(0)
    const [buttonName, setButtonName] = useState('Next')
    let [correctAnswersArr, setCorrectAnswersArr] = useState([])
    const [show, setShow] = useState(false)
    const [correctAns, setCorrectAns] = useState("")
    let [variant, setVariant] = useState("primary")
    
    // useEffect(() => {
    //     fetch('http://localhost:3000/exercises', {
    //         headers: {
    //         "Authorization": `Bearer ${localStorage.token}`
    //         }
    //     })
    //     .then(r => r.json())
    //     .then(exercisesArr => {
    //         setExercises(exercisesArr)
    //     })
    // }, [])

console.log(completedExercises)
    if (correctAnswersArr.length === exercises.length) {

        exercises.map((exercise) => {

            const data = {exercise_id: exercise.id}
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
    console.log(exercises.length)
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
        exercises.map((question, idx)=> 
            <ExerciseCard
            key={idx}
            questions={question.questions}
            answers={question.answers}
            correct={question.correct}
            category={question.category}
            handleCorrect={handleCorrect}
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
            {renderQuestions[counter]}
            {
            <Button onClick={() => {
                setCounter(counter+1);
                {buttonChange()};
                {setShow(false)};
                }}>{buttonName === "Complete" ? <NavLink to="/lessons" exact>Complete</NavLink> : buttonName}
                </Button>                
            }

            
        </Container>
    )
}
export default Exercises;