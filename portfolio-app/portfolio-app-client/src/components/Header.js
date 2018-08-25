import React from 'react';

import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

import NavBar from './NavBar';

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