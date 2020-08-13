import React from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function UserAccount (props) {
    return(
            <Container>
                {<br/>}
                <Row>
                    <Col sm={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" />
                        <Card.Body>
                            <Card.Title>{props.currentUser.username}</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={8}>
                        You have not completed any lessons.
                    </Col>
                </Row>                
            </Container>


    )
}
export default UserAccount;