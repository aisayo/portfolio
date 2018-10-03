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

<<<<<<< HEAD
                {/* <Link
=======
                <Link
>>>>>>> 2b1b8079dab973cba573bcd43d1eae3f4e608046
                    to="/blog"
                    activeStyle={{
                        color: 'white'
                    }}
                    > Blog 
<<<<<<< HEAD
                </Link>  */}

                {/* <Link
=======
                </Link> 

                <Link
>>>>>>> 2b1b8079dab973cba573bcd43d1eae3f4e608046
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
<<<<<<< HEAD
                </Link>  */}
=======
                </Link> 
>>>>>>> 2b1b8079dab973cba573bcd43d1eae3f4e608046
            </div>
    )
}

<<<<<<< HEAD
export default NavBar;

//need to add links back once components a
=======
export default NavBar;
>>>>>>> 2b1b8079dab973cba573bcd43d1eae3f4e608046
