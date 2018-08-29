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
  <Router>
    <div>
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/about' component={About} />
      <Route path='/skills' component={Skills} />
      <Route path='/blog' component={Blog} />
      <Route path='/projects' component={Projects} />
      <Route path='/contact' component={Contact} />
    </Switch>
    </div>
  </Router>,

    document.getElementById('root'));
registerServiceWorker();
