import React, { Container, Jumbotron, Image } from 'react-bootstrap'
import ProjectCard from '../ProjectCard/projectcard'
import projectData from  '../../static/otherprojects.json'
import '../OtherProjects/otherProjects.css'


function loaddata() {  
    return projectData.map((data, index) => {
        return <ProjectCard key={index} {...data} />
    })
}

function OtherProjects(){

    return (
        <div>
            {getJumbotron()} 
            {loaddata()}
        </div>
    );
}

function getProjectImages(){
    return projectData.map((data) => {
        return <Image className="project-image" src={data.imgUrl} />
    })
}

function getJumbotron() {
    return (
        <Jumbotron className="project-jumbotron">
            <Container>
                <h1 className="jumbotron-title display-1">Other Projects</h1>
                <div id="skills" class="skills">
                    <div class="skill-name">
                        {getProjectImages()}
                    </div>
                </div>        
            </Container>
        </Jumbotron>
    )
}

export default OtherProjects;