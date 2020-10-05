import React from 'react';


import {NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import './NavBar.css';

function NavBar (props) {

    
    return(

        <Navbar expand="lg" bg="dark" variant="dark">
            <Navbar.Brand style={{color:'green'}} href="/">IDIOMA</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {props.currentUser ?
                        (
                        <>
                            {/* <Nav.Link href="/profile"> */}
                            <Button variant="dark">
                                <NavLink style={{color:'tomato'}} to="/profile" exact>Profile</NavLink>
                            </Button>
                                                 
                            {/* </Nav.Link> */}
                            {/* <Nav.Link href="/lessons"> */}
                            <Button variant="dark">
                                <NavLink style={{color:'tomato'}} to="/lessons" exact>Lessons</NavLink> 
                            </Button>                           
                            {/* </Nav.Link> */}
                            <Button variant="dark">
                                <NavLink style={{color:'tomato'}} to="/resources" exact>Resources</NavLink> 
                            </Button> 
                            <Button style={{color:'moccasin'}} variant="dark" onClick={() => {props.handleLogout()}} >Log Out</Button>
                        </>
                        ) : 
                        ( 
                        <>
                            {/* <Nav.Link> */}
                            <Button variant="dark">
                              <NavLink style={{color:'tomato'}} to="/signup">Sign Up</NavLink>  
                              </Button>
                            {/* </Nav.Link> */}
                            {/* <Nav.Link> */}
                            <Button variant="dark">
                              <NavLink style={{color:'tomato'}} to="/login">Log In</NavLink>
                              </Button>  
                            {/* </Nav.Link>  */}
                        </>
                        )
                    }
                
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default NavBar;