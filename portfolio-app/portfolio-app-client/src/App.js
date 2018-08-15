import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Resume from './components/resume/Resume'
import Homepage from './components/resume/Homepage'
import About from './components/About';
import Skills from './components/Skills';
import BlogContainer from './components/blog/Blogcontainer';
import Projects from './components/Projects'; 
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Homepage />
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
