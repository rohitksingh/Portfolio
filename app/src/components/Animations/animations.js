import React from 'react'
import { Component } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import '../Animations/animations.css'

class Animation extends Component{

    render(){

        return(
            <Jumbotron className='animation-jumbotron bg-warning' fluid>
                <Container>
                    <h1 className='display-1'>My Animation</h1>
                    <h4>These are examples of various animations I have used in different Android apps</h4>
                </Container>
            </Jumbotron>
        );
    }

}

export default Animation