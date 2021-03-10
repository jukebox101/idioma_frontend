import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Home () {

    return(
        <>
        {/* <Jumbotron fluid>
        <Container>
            <h1>Welcome To Idioma</h1>
            <p>
            A free language learning site for those that want to learn Spanish.
            We provide lessons and exercises that will help you achieve
            your Spanish learning goals.
            </p>
        </Container>
        </Jumbotron> */}
        <Carousel>
            <Carousel.Item >
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
            {/* <Carousel.Item >
                <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1515443961218-a51367888e4b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Learn With Us!</h3>
                <p>We provide lessons and exercises that will help you achieve your Spanish learning goals.</p>
                </Carousel.Caption>
            </Carousel.Item> */}
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1495648013863-7f0f0f7b14a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Learn With Us!</h3>
                <p>We provide lessons and exercises that will help you achieve your Spanish learning goals.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            </>
    )
}
export default Home;