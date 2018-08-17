import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
           <div className="navbar">

            <NavLink
                to="/home"
                exact
                activeStyle={{
                    color: 'white'
                }}
                > Home  
            </NavLink> | 

            <NavLink
                to="/about"
                activeStyle={{
                    color: 'white'
                }}
                >  About
            </NavLink> |

            <NavLink
                to="/skills"
                activeStyle={{
                    color: 'white'
                }}
                > Skills 
            </NavLink> |

            <NavLink
                to="/blog"
                activeStyle={{
                    color: 'white'
                }}
                > Blog 
            </NavLink> |

            <NavLink
                to="/projects"
                activeStyle={{
                    color: 'white'
                }}
                > Projects 
            </NavLink> |

            <NavLink
                to="/contact"
                activeStyle={{
                    color: 'white'
                }}
                > Contact 
            </NavLink> 
            

            </div>
    )
}

export default NavBar;