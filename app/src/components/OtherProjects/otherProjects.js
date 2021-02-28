import React from 'react-bootstrap'
import ProjectCard from '../ProjectCard/projectcard'


function OtherProjects(){
    
    //var project = new ProjectModel('First App', 'My first App', 'https://google.com')

     let project = { 
         name: "ALKSLAKLSKA",
         description: "My First App", 
         link: "https://google.com",
         imgUrl: "https://user-images.githubusercontent.com/11274840/93257120-3f9eba00-f751-11ea-8b7e-b9b1fb99ab79.png",
         tags: [
             "ios", "swift", "xcode"
         ]
        }

    return (
        <div>
            Other projects
            <ProjectCard {...project}/>
        </div>
    );
}

export default OtherProjects;