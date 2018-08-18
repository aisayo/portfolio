import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
           <div className="NavBar">
                <Link
                    to="/home"
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
    )
}

export default NavBar;