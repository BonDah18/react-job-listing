import React, { Component } from "react";
import {Switch, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import "./index.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/jobs" component={Jobs} />
          <Route path="/candidates" component={Candidates} />
          <Route path="/job_details" component={JobDetails} />
          <Route path="/elements" componenet={Elements} />
          <Route path="/blog" components={Blog} />
          <Route path="/single-blog" components={SingleBlog} />
          <Route path="contact" components={Contact} />
        </Switch>
      </React.Fragment>

    );
  }
}
  


export default App