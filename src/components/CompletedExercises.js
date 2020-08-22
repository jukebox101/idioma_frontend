import React from 'react';
import Card from 'react-bootstrap/Card';
import {NavLink} from 'react-router-dom';

function CompletedExercises (props) {
    const {title, description} = props

    return (
        <Card style={{ width: '40rem' }}>
        <Card.Body>
                <Card.Title style={{color:'green'}}>{title}</Card.Title>

                <Card.Text>
                {description}
                </Card.Text>

                <NavLink style={{color:'orangered'}} to="/introlesson" exact>View Lesson</NavLink>{' '}
                <NavLink style={{color:'orangered'}} to="/introexercises" exact>Practice Exercises</NavLink>

            </Card.Body>
            </Card>
    )
}
export default CompletedExercises;