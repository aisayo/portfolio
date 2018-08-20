import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Homepage from './Homepage';
import About from './About';

const NavBar = () => {
    return(
        <Router> 
           <div className="NavBar">
           
                <Link
                    to="/"
                    exact
                    activeStyle={{
                        color: 'white'
                    }}
                    > Home  
                </Link>  

                <Link
                    to="/about"
                    activeStyle={{
                        color: 'white'
                    }}
                    >  About
                </Link> 

                <Link
                    to="/skills"
                    activeStyle={{
                        color: 'white'
                    }}
                    > Skills 
                </Link> 

                <Link
                    to="/blog"
                    activeStyle={{
                        color: 'white'
                    }}
                    > Blog 
                </Link> 

                <Link
                    to="/projects"
                    activeStyle={{
                        color: 'white'
                    }}
                    > Projects 
                </Link> 

                <Link
                    to="/contact"
                    activeStyle={{
                        color: 'white'
                    }}
                    > Contact 
                </Link> 
            </div>
            </Router>
    )
}

export default NavBar;