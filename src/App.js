import React, { Component } from "react";
import {Switch, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import "./style.css";

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





export default function App() {
  return (
    <div>
      <h1>Hello Job Seekers!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
