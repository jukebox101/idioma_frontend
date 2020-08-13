import React from 'react';
import {NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'

function NavBar (props) {

    
    return(

        <Navbar expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">IDIOMA</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {props.currentUser ?
                        (
                        <>
                            {/* <Nav.Link href="/profile"> */}
                            <Button variant="dark">
                                <NavLink to="/profile" exact>Profile</NavLink>
                            </Button>
                                                 
                            {/* </Nav.Link> */}
                            {/* <Nav.Link href="/lessons"> */}
                            <Button variant="dark">
                                <NavLink to="/lessons" exact>Lessons</NavLink> 
                            </Button>                           
                            {/* </Nav.Link> */}
                            <Button variant="dark" onClick={() => {props.handleLogout()}} >Log Out</Button>
                        </>
                        ) : 
                        ( 
                        <>
                            {/* <Nav.Link> */}
                            <Button variant="dark">
                              <NavLink to="/signup">Sign Up</NavLink>  
                              </Button>
                            {/* </Nav.Link> */}
                            {/* <Nav.Link> */}
                            <Button variant="dark">
                              <NavLink to="/login">Log In</NavLink>
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