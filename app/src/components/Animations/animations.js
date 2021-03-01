import React from 'react'
import { Component } from 'react';
import { Container, Jumbotron, Image , Row} from 'react-bootstrap';
import '../Animations/animations.css'

class Animation extends Component{

    render(){

        return(
            <div>
            <Jumbotron className='animation-jumbotron bg-warning' fluid>
                <Container>
                    <h1 className='display-1'>My Animation</h1>
                    <h4>These are examples of various animations I have used in different Android apps</h4>
                </Container>
            </Jumbotron>
            {this.getSection(this.project1)}
            {this.getSection(this.project2)}
            {this.getSection(this.project3)}
            {this.getSection(this.project4)}
            </div>
        );
    }

    project1 = [
        'https://user-images.githubusercontent.com/11274840/93067182-bc397780-f62f-11ea-8853-04c7a12a5a73.gif',
        'https://user-images.githubusercontent.com/11274840/93066713-2dc4f600-f62f-11ea-9f9b-ee36686d4356.gif',
        'https://rohitksingh.github.io/animation1.gif',
        'https://user-images.githubusercontent.com/11274840/93064515-70d19a00-f62c-11ea-95f8-24cb26a1dce1.gif'
    ]

    project2 = [
        'https://user-images.githubusercontent.com/11274840/93065439-9317e780-f62d-11ea-8162-48252836e8a1.gif',
        'https://user-images.githubusercontent.com/11274840/93065461-990dc880-f62d-11ea-9347-07a1bfa35a2a.gif'
    ]

    project3 = [
        'https://user-images.githubusercontent.com/11274840/74808379-fca66200-52a7-11ea-9564-7899e501e985.gif',
        'https://user-images.githubusercontent.com/11274840/74808454-1c3d8a80-52a8-11ea-911a-45874216a1e1.gif',
        'https://user-images.githubusercontent.com/11274840/74808488-2f505a80-52a8-11ea-9cba-be742a6d4bff.gif'
    ]

    project4 = [
        'https://user-images.githubusercontent.com/11274840/74304946-b8e9b080-4d1b-11ea-8ab7-a442d60ce842.gif'
    ]

    getSection(imageList){
        return <Container fluid>
            <Row className='animation-row justify-content-center'>
                    {this.getAnimation(imageList)}
               </Row>
        </Container>
         
    }

    getAnimation(imageList){
        return imageList.map((link) =>{
            return <Image className='col-md-2 col=sm-2 card animation-card' src={link}/>
        })
    } 

}

export default Animation