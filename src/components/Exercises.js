import React, { useState } from  'react';
import Container from 'react-bootstrap/Container';
import ExerciseCard from './ExerciseCard';
import Button from 'react-bootstrap/Button';

function Exercises () {
    const [counter, setCounter] = useState(0)
    const [buttonName, setButtonName] = useState('Next')
    const questionCollection = [
        {
            questions: 'How do you say "The boy." ?',
            answers: ["El niño.", "El niña.", "La manzana.", "El pan."],
            correct: "El niño.",
            category: "Select the Spanish meaning"
        },
        {
            questions: 'How do you say "The girl." ?',
            answers: ["El niño.", "El niña.", "La manzana.", "El pan."],
            correct: "El niña.",
            category: "Select the Spanish meaning"
        },
        {
            questions: 'How do you say "The apple." ?',
            answers: ["El niño.", "El niña.", "La manzana.", "El pan."],
            correct: "La manzana.",
            category: "Select the Spanish meaning"
        },
    ]

    const renderQuestions =
        questionCollection.map((question, idx)=> 
            <ExerciseCard
            key={idx}
            questions={question.questions}
            answers={question.answers}
            correct={question.correct}
            category={question.category}
            />
        )
    
        if (counter > renderQuestions.length-1){
            setButtonName("Complete")
            setCounter(0)
        }
    console.log(counter)
    return (
        <Container fluid>

            {<br/>}
            {renderQuestions[counter]}              
            <Button onClick={() => {setCounter(counter+1)}}>{buttonName}</Button>


        </Container>
    )
}
export default Exercises;