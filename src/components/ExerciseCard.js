import React, { useState } from  'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';

function ExerciseCard (props) {
    
    let [disabled, setDisabled] = useState(false)
    
    const handleInput = (e) => {
        if (e.target.value === props.correct){
            console.log(e.target.value)
            props.handleCorrect(e.target.value, props.correct)
            setDisabled(true)
        } else {
            props.handleCorrect(e.target.value, props.correct)
            setDisabled(true)
        }
    }

    return(
        <>
        <Card style={{ width: '40rem' }}>
            <Card.Header>{props.category}</Card.Header>        
            <Card.Body>
                <Card.Title>{props.questions}</Card.Title>
                {/* <Button 
                    key={0} 
                    variant={handleInput} 
                    size="lg"
                    disabled={disabled} 
                    block value={props.answers[0]} 
                    onClick={handleInput}> {props.answers[0]} </Button>{' '}
                <Button 
                    key={1} 
                    variant={handleInput} 
                    size="lg"
                    disabled={disabled}
                    block value={props.answers[1]} 
                    onClick={handleInput}> {props.answers[1]} </Button>{' '}
                <Button 
                    key={2} 
                    variant={handleInput} 
                    size="lg"
                    disabled={disabled} 
                    block value={props.answers[2]} 
                    onClick={handleInput}> {props.answers[2]} </Button>{' '}
                <Button 
                    key={3} 
                    variant={handleInput} 
                    size="lg"
                    disabled={disabled} 
                    block value={props.answers[3]} 
                    onClick={handleInput}> {props.answers[3]} </Button>{' '}                     */}
                    {props.answers.map((answer, idx) => (
                        <div key={idx} className="mb-3">
                            <Button 
                            key={idx} 
                            variant='primary' 
                            size="lg" 
                            disabled={disabled}
                            block value={answer} 
                            onClick={handleInput}> {answer} </Button>{' '}
                        </div>
                    ))}

            </Card.Body>
        </Card>
        {<br/>}
        </>
    )
}
export default ExerciseCard;