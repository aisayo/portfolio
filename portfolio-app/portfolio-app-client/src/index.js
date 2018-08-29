import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

import Homepage from './components/landingpage/Homepage';


ReactDOM.render(
    <Homepage />, 
    document.getElementById('root'));
registerServiceWorker();
