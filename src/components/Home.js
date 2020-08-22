import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
function Home () {

    return(
        // <Jumbotron fluid>
        // <Container>
        //     <h1>Welcome To Idioma</h1>
        //     <p>
        //     A free language learning site for those that want to learn Spanish.
        //     We provide lessons and exercises that will help you achieve
        //     your Spanish learning goals.
        //     </p>
        // </Container>
        // </Jumbotron>
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1489945052260-4f21c52268b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Welcome to Idioma!</h3>
                <p>A free language learning site for people who want to learn Spanish.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Learn With Us!</h3>
                <p>We provide lessons and exercises that will help you achieve your Spanish learning goals.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1495648013863-7f0f0f7b14a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Spread love in a new language! </h3>
                <p>Use your new Spanish skills to connect with someone in a different way.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
    )
}
export default Home;