import { React, Component } from 'react';
import {Card, Col, Row, Container, Image} from 'react-bootstrap'
import experienceData from '../../static/experience.json'
import './experience.css'


/**
 *   Load Awards for index 0
 * 
 *   Load Experiece for index > 
 */

class Experience extends Component{

    render(){
        return(
            <Container>
                <h1>Work Experience</h1>
                {this.getExperienceCard()}
            </Container>
        );
    }


    getExperienceCard(){
        return experienceData.map((data, index)=>{
            
            return (
                    <Container className="project-card-container" fluid >
                        <Row className="justify-content-center">
                            <Col lg={6}>
                                <Card className='project-card'>
                                    <div className="card-horizontal">
                                        <Image className="contribution-image" src={data.imageUrl}/>
                                        <Card.Body className="project-content">
                                            <h4 className='class-title'>{data.name}</h4>
                                            <p className='card-title'>{data.description}</p>
                                            <p className='card-title'>{data.timeline}</p>
                                            <p className='card-title'>{data.place}</p>
                                        </Card.Body>
                                    </div>    
                                </Card>
                            </Col>
                        </Row>
                    </Container>
            );
        })
    }


}

export default Experience