import React, { Component } from 'react'
import { Container , Row, Col, Card, Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './projectcard.css'

class ProjectCard extends Component {

    

    constructor(props){
        super(props)
        this.tags = this.props.tags

    }

    getTags = () => {
         return this.props.tags.map((tag) => {
            return (
                <span className="w3-tag">tag</span>
            );
        });
    };

    
    render(){
        return(
            <div className="project-card-container">
                <Card bg='primary'>
                    <Card.Body>
                        <Row>
                        <Col lg={2}>
                            <Image className='project-image' src={this.props.imgUrl}/>
                        </Col>
                        <Col className="project-content" lg={10}>
                            <Card.Title>{this.props.name}</Card.Title>
                            <Card.Text>{this.props.description}</Card.Text>
                            {this.getTags()}
                        </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer>
                        <Link className="project-link" to={this.props.link}>See project on Github</Link>
                    </Card.Footer>
                </Card>
            </div>
        );
    }
    


}



export default ProjectCard