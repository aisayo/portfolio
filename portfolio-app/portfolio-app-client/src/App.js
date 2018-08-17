import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

import './App.css';

import Homepage from './components/resume/Homepage'
import About from './components/About';
import Skills from './components/Skills';
import BlogContainer from './components/blog/Blogcontainer';
import Projects from './components/Projects'; 
import Contact from './components/Contact';
import NavBar from './components/NavBar';


//need to figure out how to position the navbar to the right
// 
class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
      <div className="navbar">
          <NavBar />
        </div>
      </Router>
        <div className="HomepageContainer">
          <Homepage />
        </div>
        <About />
        <Skills />
        <BlogContainer/>
        <Projects />
        <Contact />
    
      </div>
    );
  }
}

export default App;
