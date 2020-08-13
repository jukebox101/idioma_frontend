import React from  'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';

function ExerciseCard (props) {
    let variant = "primary"
    console.log(variant)
    const handleInput = (e) => {
        e.target.value === props.correct ?
        variant = "success"
        :
        variant = "danger";
        console.log(variant)
    }
    return(
        <>
        <Card style={{ width: '40rem' }}>
            <Card.Header>{props.category}</Card.Header>        
            <Card.Body>
                <Card.Title>{props.questions}</Card.Title>

                    {props.answers.map((answer, idx) => (
                        <div key={idx} className="mb-3">
                            <Button key={idx} variant={variant} size="lg" block value={answer} onClick={handleInput}> {answer} </Button>{' '}
                        </div>
                    ))}

            </Card.Body>
        </Card>
        {<br/>}
        </>
    )
}
export default ExerciseCard;