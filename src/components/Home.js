import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
function Home () {

    return(
        <Jumbotron fluid>
        <Container>
            <h1>Welcome To Idioma</h1>
            <p>
            A free language learning site for those that want to learn Spanish.
            We provide lessons and exercises that will help you achieve
            your Spanish learning goals.
            </p>
        </Container>
        </Jumbotron>
    )
}
export default Home;