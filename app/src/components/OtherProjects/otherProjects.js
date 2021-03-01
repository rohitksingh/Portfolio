import React from 'react-bootstrap'
import ProjectCard from '../ProjectCard/projectcard'
import projectData from  '../../static/otherprojects.json'


function loaddata() {  
    return projectData.map((data, index) => {
        return <ProjectCard key={index} {...data} />
    })
}

function OtherProjects(){

    return (
        <div>
            Other projects
            {loaddata()}
        </div>
    );
}

export default OtherProjects;