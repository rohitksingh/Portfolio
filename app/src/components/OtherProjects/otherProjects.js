import React from 'react-bootstrap'
import ProjectCard from '../ProjectCard/projectcard'
import ProjectModel from '../ProjectCard/ProjectModel'

function OtherProjects(){
    
    //var project = new ProjectModel('First App', 'My first App', 'https://google.com')

     let project = { name: "ALKSLAKLSKA"}

    return (
        <div>
            Other projects
            <ProjectCard project={project}/>
        </div>
    );
}

export default OtherProjects;