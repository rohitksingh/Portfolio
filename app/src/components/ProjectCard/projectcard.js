import React, { Component } from 'react'
import { Container , Row, Col, Card, Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './projectcard.css'

const colors = [
    'primary', 'secondary', 'success', 'danger', 'warning', 'info','dark'
]

class ProjectCard extends Component {


    getColor(){
        
        return colors[Math.floor(Math.random()*(colors.length-1))]
    }

    constructor(props){
        super(props)
        this.tags = this.props.tags

    }

    getTags = () => {
         return this.props.tags.map((tag, index) => {
            return (
                <span key={index} className="w3-tag">{tag}</span>
            );
        });
    };

    getLink = () =>{
        return this.props.link
    }

    
    
    render(){
        return(
            <Container className="project-card-container" fluid >
                <Row className="justify-content-center">
                    <Col lg={6}>
                        <Card className='card-horizontal' bg={this.getColor()}>
                            <div className="card-horizontal">
                                <Image className="project-image" src={this.props.imgUrl}/>
                                <Card.Body className="project-content">
                                    <Card.Title>{this.props.name}</Card.Title>
                                    <Card.Text>{this.props.description}</Card.Text>
                                    <div className="skills">
                                        {this.getTags()}
                                    </div>
                                </Card.Body>
                            </div>
                            <Card.Footer>
                                <a className="project-link" href={this.getLink()} target="_blank">See project on Github</a>
                            </Card.Footer>    
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }

}



export default ProjectCard