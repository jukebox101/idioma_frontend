import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'
function NavBar (props) {
    console.log(props.currentUser)
    
    
    return(
        <div>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">IDIOMA</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {props.currentUser ?
                        (
                        <>
                            <Nav.Link href="/profile">Profile</Nav.Link>
                            <Button variant="dark" onClick={() => {props.handleLogout()}} >Log Out</Button>
                        </>
                        ) : 
                        ( 
                        <>
                            <Nav.Link href="/signup">Sign Up</Nav.Link>
                            <Nav.Link href="/login">Log In</Nav.Link>
                        </>
                        )
                    }
                
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>

    )
}

export default NavBar;