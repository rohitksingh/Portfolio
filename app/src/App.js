import React from 'react'
import Footer from './components/Footer/footer'
import NavigationBar from './components/NavigationBar/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import OtherProects from './components/OtherProjects/otherProjects'
import Experience from './components/Experience/experience'
import Animations from './components/Animations/animations'
import {BrowserRouter as Router, Route} from 'react-router-dom' 


function App() {
  return (
    <div>
      <NavigationBar/>
      <Router>
        <Route path="/" exact component={OtherProects}/>
        <Route path="/otherprojects" component={OtherProects}/>
        <Route path="/experience" component={Experience}/>
        <Route path="/animations" component={Animations}/>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
