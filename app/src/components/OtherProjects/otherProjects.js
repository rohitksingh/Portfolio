import React from 'react-bootstrap'
import ProjectCard from '../ProjectCard/projectcard'
import projectData from  '../../static/otherprojects.json'


function loaddata() {  
   
    

}

function OtherProjects(){

    loaddata()
    
    //var project = new ProjectModel('First App', 'My first App', 'https://google.com')

    

    //  let project = { 
    //      name: "ALKSLAKLSKA",
    //      description: "My First App", 
    //      link: "https://google.com",
    //      imgUrl: "https://user-images.githubusercontent.com/11274840/93257120-3f9eba00-f751-11ea-8b7e-b9b1fb99ab79.png",
    //      tags: [
    //          "ios", "swift", "xcode"
    //      ]
    //     }

    //     let project1 = { 
    //         name: "Anew ",
    //         description: "My Second App", 
    //         link: "https://google.com",
    //         imgUrl: "https://user-images.githubusercontent.com/11274840/93257120-3f9eba00-f751-11ea-8b7e-b9b1fb99ab79.png",
    //         tags: [
    //             "ios", "swift", "xcode", "swift", "xcode", "swift", "xcode", "swift", "xcode", "swift", "xcode", "swift", "xcode", "swift", "xcode", "swift", "xcode", "swift", "xcode", "swift", "xcode", "swift", "xcode"
    //         ]
    //        } 
           
           

    return (
        <div>
            Other projects
            {
                projectData.map((data, index) => {
                    return <ProjectCard key={index} {...data} />
                })
            }
        </div>
    );
}

export default OtherProjects;