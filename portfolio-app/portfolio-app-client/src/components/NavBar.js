import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Homepage from './landingpage/Homepage';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import App from '../App';

const NavBar = () => {
    return(
        <Router> 
           <div className="navbar">
           
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

                <Switch>
                    <Route path='/contact' component={Contact} />
                    <Route path="/about" component={About} />
                </Switch>

            </div>
    </Router>
    )
}

export default NavBar;