import React from 'react'

function Navbar(){
    return(
        <nav class="navbar navbar-dark bg-dark">
        <div class="container">
            <a class="nav-item" href="index1.html">About Me <span class="sr-only">(current)</span></a>
            <a class="nav-item" href="experience.html">Awards/Experience<span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="other_projects.html">Other Projects</a>
            <a class="nav-item nav-link" href="my_animations.html">Android Animations</a>
            <a class="nav-item nav-link" href="contribution.html">Online Contribution</a>
        </div>
      </nav>  
    );
}

export default Navbar;