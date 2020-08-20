import React from 'react';
import Card from 'react-bootstrap/Card';
import {NavLink} from 'react-router-dom';

function CompletedExercises (props) {
    const {title, description} = props

    return (
        <Card style={{ width: '40rem' }}>
        <Card.Body>
                <Card.Title>{title}</Card.Title>

                <Card.Text>
                {description}
                </Card.Text>

                <NavLink to="/introlesson" exact>See Lesson</NavLink>{' '}
                <NavLink to="/introexercises" exact>Practice Exercises</NavLink>

            </Card.Body>
            </Card>
    )
}
export default CompletedExercises;