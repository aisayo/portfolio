import React from 'react';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';
import Homepage from './Homepage';

const Header = () => {
    return(
        <Router>
        <div className="header">
            <div className="navbar">
                <NavBar />
            </div>
        </div>
        </Router>
    )
}

export default Header;