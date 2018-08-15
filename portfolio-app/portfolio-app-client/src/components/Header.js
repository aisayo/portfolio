import React from 'react';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

const Header = () => {
    return(
        <Router>
        <div className>
           <NavBar />
        </div>
        </Router>
    )
}

export default Header;