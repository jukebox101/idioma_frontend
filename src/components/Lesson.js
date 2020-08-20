import React from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Lesson () {

    return(
        <Container fluid >
            <Container>
            <Row>
                <Col>
                    {<br/>}
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={8}>
                    <Card style={{ width: '60rem' }}>
                        <Card.Header>
                            Introduction
                            </Card.Header>
                        <Card.Body>
                            <Card.Text>
                            Welcome to your first Spanish lesson! Let's hop right in!
                            </Card.Text>
                            <Card.Title>Gender</Card.Title>
                            <Card.Text>
                            In Spanish, all nouns are either masculine or feminine.
                            Masculine nouns end in -o and feminine nouns end in -a.
                            </Card.Text>
                            <Card.Text>
                            For example, to say "the boy" in Spanish, you would say "el niño",  
                            and to say the girl you would say "la niña".
                            </Card.Text>
                            <Card style={{ width: '30rem' }}>
                            <Card.Img variant="top" src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-charismatic-guy-cute-boy-q-version-boy-cute-little-boy-png-image_3785126.jpg" samesite="None" />
                                <Card.Body>
                                <Card.Text>
                                    el niño - the boy
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            {<br/>}
                            <Card style={{ width: '30rem' }}>
                            <Card.Img variant="top" src="https://png.pngtree.com/png-clipart/20190618/original/pngtree-little-girl-reading-little-girl-reading-a-book-read-reading-png-image_3934364.jpg" samesite="None"/>
                                <Card.Body>
                                <Card.Text>
                                    la niña - the girl
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            {<br/>}
                            <Card.Text>
                                Notice the word "the" is different between the boy and the girl.
                                For masculine words "the" is "el", and for feminine words "the" is "la".
                                </Card.Text>
                            {<br/>}
                            <Card.Text>
                                Objects can also be masculine or feminine. For example, to say "the bread" in Spanish
                                you would say "el pan". Although the bread isn't a male, it's still considered masucline
                                and uses an "el".
                                </Card.Text>
                                <Card.Link href="/introexercises">Start Exercises</Card.Link>
                        </Card.Body>
                        </Card>
                </Col>
                <Col xs={6} md={4}>

                </Col>
            </Row>
            </Container>
        </Container>


    )
}
export default Lesson;