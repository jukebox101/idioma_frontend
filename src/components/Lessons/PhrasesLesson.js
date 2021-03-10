import React from './node_modules/react';
import Card from './node_modules/react-bootstrap/Card'
import Container from './node_modules/react-bootstrap/Container';
import Row from './node_modules/react-bootstrap/Row';
import Col from './node_modules/react-bootstrap/Col';
import Table from './node_modules/react-bootstrap/Table';

function PhrasesLesson (props) {

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
                            Common Phrases
                            </Card.Header>
                        <Card.Body>
                            <Card.Text>
                            Let's get into some common phrases in Spanish!
                            </Card.Text>
                            <Card.Title>Greetings</Card.Title>
                            <Card.Text>
                            Many Spanish greetings depend on the time of day.
                            </Card.Text>
                            <Card.Text>
                            Note that even though Buenos días includes the word día, it's only used in the morning.
                            </Card.Text>
                            <Card style={{ width: '30rem' }}>
                            <Card.Img variant="top" src="https://previews.123rf.com/images/yanabear/yanabear1706/yanabear170600029/79752881-cartoon-sun-in-clouds-smiles-good-morning-card-flat-style-vector-illustration-.jpg" samesite="None" />
                                <Card.Body>
                                <Card.Text>
                                    Buenos dias. - Good morning.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            {<br/>}
                            <Card style={{ width: '30rem' }}>
                            <Card.Img variant="top" src="https://previews.123rf.com/images/ikonstudio/ikonstudio1601/ikonstudio160100006/51630403-sun-with-rays-and-flares-on-blue-sky-green-grass-lawn-.jpg" samesite="None"/>
                                <Card.Body>
                                <Card.Text>
                                    Buenas tardes. - Good afternoon.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            {<br/>}
                            <Card style={{ width: '30rem' }}>
                            <Card.Img variant="top" src="https://previews.123rf.com/images/iaroslavbrylov/iaroslavbrylov1801/iaroslavbrylov180100163/94405206-retro-illustration-moon.jpg" samesite="None"/>
                                <Card.Body>
                                <Card.Text>
                                    Buenas noches. - Good night./Good evening.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            {<br/>}
                            <Card.Text>
                            Buenas noches can mean both Good evening and Good night
                                </Card.Text>
                            {<br/>}
                            <Table striped bordered hover>
                            <thead>
                                <th colSpan="2">Common Phrases</th>
                                </thead>
                                <thead>
                                    <tr>
                                    <th>Phrase</th>
                                    <th>Engish Meaning</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>Hola.</td>
                                    <td>Hello.</td>                                         
                                    </tr>
                                    <tr>
                                    <td>Adios.</td>
                                    <td>Goodbye.</td>
                                    </tr>
                                    <tr>
                                    <td>Mucho gusto.</td>
                                    <td>Nice to meet you.</td>
                                    </tr>
                                    <tr>
                                    <td>Perdon.</td>
                                    <td>Pardon.</td>
                                    </tr>
                                    <tr>
                                    <td>Por favor.</td>
                                    <td>Please.</td>
                                    </tr>
                                    <tr>
                                    <td>Lo siento.</td>
                                    <td>I'm sorry.</td>
                                    </tr>
                                    <tr>
                                    <td>Gracias.</td>
                                    <td>Thank you.</td>
                                    </tr>                                    
                                    <tr>
                                    <td>De nada.</td>
                                    <td>You're welcome.</td>
                                    </tr>                                    
                                    <tr>
                                    <td>Buenos días.</td>
                                    <td>Good morning.</td>
                                    </tr>                                    
                                    <tr>
                                    <td>Buenas tardes.</td>
                                    <td>Good afternoon.</td>
                                    </tr>                                    
                                    <tr>
                                    <td>Buenas noches.</td>
                                    <td>Good night.</td>
                                    </tr>
                                </tbody>
                                </Table>
                            <Card.Text>
                                Objects can also be masculine or feminine. For example, to say "the bread" in Spanish
                                you would say "el pan". Although the bread isn't a male, it's still considered masucline
                                and uses an "el".
                                </Card.Text>
                                {/* <Button variant="outline-secondary" onClick={() => handleLessonId(13)}>
                                <NavLink to="/introexercises" exact>Start Exercises</NavLink> 
                                </Button> */}
                                
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
export default PhrasesLesson;