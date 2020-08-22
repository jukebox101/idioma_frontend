import React from 'react';
import YouTubePlayer from 'react-player/youtube';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import './Resources.css'
function Resources () {

    return (

        <Container fluid >
        <Accordion defaultActiveKey="0">
            <br/>
        <Card>
            <Card.Header >
            <Accordion.Toggle style={{color:'green'}} as={Button} variant="link" eventKey="0">
                Listening Comprehension Tips
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
            <Card.Body>
                <Container fluid>
            <Row className="row">
                <Col className="col" xs={6} md={4}>
                <div className='player-wrapper'>
                    <br/>
                <YouTubePlayer
                className='react-player'
                url="https://youtu.be/MDuXnGQA3oQ"
                width='100%'
                />
                <br/>
                </div>  
                </Col>
                <Col className="col" xs={6} md={4}>
                <div className='player-wrapper'>
                    <br/>
                <YouTubePlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=f7eqnvfzUBQ'
                width='100%'
                />
                <br/>
                </div> 
                </Col>
                <Col className="col" xs={6} md={4}>
                <div className='player-wrapper'>
                    <br/>
                <YouTubePlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=AoskT35AESY'
                width='100%'
                />
                <br/>
                </div> 
                </Col>              
            </Row>

                </Container>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Card.Header>
            <Accordion.Toggle style={{color:'green'}} as={Button} variant="link" eventKey="1">
                Listening Comprehension Practice - Beginners
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
            <Card.Body>
                <Container fluid>
            <Row className="row">
                <Col className="col" xs={6} md={4}>
                <div className='player-wrapper'>
                    <br/>
                <YouTubePlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=etQvoqugIWY'
                width='100%'
                />
                <br/>
                </div>  
                </Col>
                <Col className="col" xs={6} md={4}>
                <div className='player-wrapper'>
                    <br/>
                <YouTubePlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=SEROD8pUnCA'
                width='100%'
                />
                <br/>
                </div> 
                </Col>
                <Col className="col" xs={6} md={4}>
                <div className='player-wrapper'>
                    <br/>
                <YouTubePlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=ddgB687vq_s'
                width='100%'
                />
                <br/>
                </div> 
                </Col>              
            </Row>
            <Row>
                <Col>
                <div className='player-wrapper'>
                    <br/>
                <YouTubePlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=dY2tjhBVAps'
                width='100%'

                />
                <br/>
                </div>
                </Col>
                <Col>
                {/* <div className='player-wrapper'>
                    <br/>
                <YouTubePlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=gSy-qruBov0'
                width='100%'

                />
                <br/>
                </div> */}
                </Col>
                <Col>
                {/* <div className='player-wrapper'>
                    <br/>
                <YouTubePlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=gSy-qruBov0'
                width='100%'

                />
                <br/>
                </div> */}
                </Col>
            </Row>                    
                </Container>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Card.Header>
            <Accordion.Toggle style={{color:'green'}} as={Button} variant="link" eventKey="2">
            Listening Comprehension Practice - Advanced
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
            <Card.Body>
                <Container fluid>
            <Row className="row">
                <Col className="col" xs={6} md={4}>
                <div className='player-wrapper'>
                    <br/>
                <YouTubePlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=870kQQ2PtwI'
                width='100%'
                />
                <br/>
                </div>  
                </Col>
                <Col className="col" xs={6} md={4}>
                <div className='player-wrapper'>
                    <br/>
                <YouTubePlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=vrLIm2T2V_U'
                width='100%'
                />
                <br/>
                </div> 
                </Col>
                <Col className="col" xs={6} md={4}>
                <div className='player-wrapper'>
                    <br/>
                <YouTubePlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=cCXLqsktJXQ'
                width='100%'
                />
                <br/>
                </div> 
                </Col>              
            </Row>
            <Row>
                <Col>
                <div className='player-wrapper'>
                    <br/>
                <YouTubePlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=pMWh6Fs_Vvo'
                width='100%'

                />
                <br/>
                </div>
                </Col>
                <Col>
                <div className='player-wrapper'>
                    <br/>
                <YouTubePlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=XvVvWeRYYh0'
                width='100%'

                />
                <br/>
                </div>
                </Col>
                <Col>
                {/* <div className='player-wrapper'>
                    <br/>
                <YouTubePlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=gSy-qruBov0'
                width='100%'

                />
                <br/>
                </div> */}
                </Col>
            </Row>                    
                </Container>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
        <Card>
            <Card.Header>
            <Accordion.Toggle style={{color:'green'}} as={Button} variant="link" eventKey="3">
                Practice With Music and Lyrics
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
            <Card.Body>
                <Container fluid>
            <Row className="row">
                <Col className="col" xs={6} md={4}>
                <div className='player-wrapper'>
                    <br/>
                <YouTubePlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=P6pIlkRgiFk'
                width='100%'
                />
                <br/>
                </div>  
                </Col>
                <Col className="col" xs={6} md={4}>
                <div className='player-wrapper'>
                    <br/>
                <YouTubePlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=Vi6tElj6Do4'
                width='100%'
                />
                <br/>
                </div> 
                </Col>
                <Col className="col" xs={6} md={4}>
                <div className='player-wrapper'>
                    <br/>
                <YouTubePlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=t9_RroQyNIg'
                width='100%'
                />
                <br/>
                </div> 
                </Col>              
            </Row>
            <Row>
                <Col>
                <div className='player-wrapper'>
                    <br/>
                <YouTubePlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=jtmT9QYB5YA'
                width='100%'

                />
                <br/>
                </div>
                </Col>
                <Col>
                <div className='player-wrapper'>
                    <br/>
                <YouTubePlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=q7nlN8CVD-Q'
                width='100%'

                />
                <br/>
                </div>
                </Col>
                <Col>
                <div className='player-wrapper'>
                    <br/>
                <YouTubePlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=QWkRjWXIjq4'
                width='100%'

                />
                <br/>
                </div>
                </Col>
            </Row>                    
                </Container>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
        </Accordion>            
          
        </Container>

      )
}
export default Resources;