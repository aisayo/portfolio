import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

import './App.css';

import Homepage from './components/Homepage';
import About from './components/About';
import Skills from './components/Skills';
import BlogContainer from './components/blog/Blogcontainer';
import Projects from './components/Projects'; 
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="header">
            <div className="navbar">
                <NavBar />
            </div>
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
