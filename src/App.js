import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './App.css';

import Homepage from './components/landingpage/Homepage';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
<<<<<<< HEAD
=======
import Blogcontainer from './components/blog/Blogcontainer';
>>>>>>> 2b1b8079dab973cba573bcd43d1eae3f4e608046
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="app">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/about' component={About} />
          <Route path='/skills' component={Skills} />
<<<<<<< HEAD
=======
          <Route path='/blog' component={Blogcontainer} />
>>>>>>> 2b1b8079dab973cba573bcd43d1eae3f4e608046
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
        </Switch>


      </div>
      </Router>
    );
  }
}

export default App;
