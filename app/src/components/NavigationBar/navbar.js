import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationBar(){
    return(
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto container">
                <Nav.Link href="#Home">About Me</Nav.Link>
                <Nav.Link href="#">Android Projects</Nav.Link>
                <Nav.Link href="#">Other Projects</Nav.Link>
                <Nav.Link href="#">Android Animations</Nav.Link>
            </Nav>
        </Navbar> 
    );
}

export default NavigationBar;