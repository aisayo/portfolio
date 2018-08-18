import React from 'react';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

import Homepage from './resume/Homepage';
import About from './About';


const Header = () => {
    return(
        <Router>
        <div className="header">
            <div className="navbar">
                <NavBar />
                <Switch>
                    <Route path="/about" component={About} />} />
                  </Switch>
            </div>
        </div>
        </Router>
    )
}

export default Header;