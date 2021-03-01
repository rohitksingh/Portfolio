import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import '../NavigationBar/navbar.css'

function NavigationBar(){
    return(
        <Navbar className='navbar-container' collapseOnSelect expand="md" bg="success" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto container">
                <Nav.Link href="#Home">About Me</Nav.Link>
                <Nav.Link href="/experience">Experience</Nav.Link>
                <Nav.Link href="#">Android Projects</Nav.Link>
                <Nav.Link href="/otherprojects">Other Projects</Nav.Link>
                <Nav.Link href="/animations">Android Animations</Nav.Link>
            </Nav>
        </Navbar.Collapse>    
        </Navbar> 
    );
}

export default NavigationBar;