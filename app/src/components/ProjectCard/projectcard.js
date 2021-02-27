import React, { Component } from 'react'

class ProjectCard extends Component {

    

    constructor(props){
        super(props)
        
    }

    render(){
        return(
            <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-6 mt-3">
                    <div class="card bg-warning">
                        <div class="card-horizontal">
                           
                            <div class="card-body">
                                <h4 class="card-title">iOS Places App</h4>
                                <p>iOS which sync address with JSON RPC Server and Other Android device</p>
                                <div id="skills" class="skills">
                                    <div class="skill-name">
                                        <span class="w3-tag ">XCode</span>
                                        <span class="w3-tag ">Swift</span>
                                        <span class="w3-tag ">Coredate</span>
                                        <span class="w3-tag ">JSON RPC</span>
                                        <span class="w3-tag ">SQLite3</span>
                                        <span class="w3-tag ">UIRefreshControl</span>
                                        <span class="w3-tag ">UIAlertController</span>
                                        <span class="w3-tag ">Segue, Unwind Segue</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted"><a href="https://github.com/rohitksingh/IOS-Places" target="_blank">See project on Github</a></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
    

}

export default ProjectCard