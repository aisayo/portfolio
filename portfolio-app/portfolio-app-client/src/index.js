import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

import Homepage from './components/landingpage/Homepage';
import About from './components/About';
import Skills from './components/Skills';
import Blog from './components/blog/Blogcontainer';
import Projects from './components/Projects';
import Contact from './components/Contact';

ReactDOM.render(
  <App />,

    document.getElementById('root'));
registerServiceWorker();
