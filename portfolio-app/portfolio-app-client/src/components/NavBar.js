import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
           <div className="navbar">

            <NavLink
                to="/home"
                exact
                activeStyle={{
                    color: 'purple'
                }}
                > Home  
            </NavLink> | 

            <NavLink
                to="/about"
                activeStyle={{
                    color: 'black'
                }}
                >  About
            </NavLink> |

            <NavLink
                to="/skills"
                activeStyle={{
                    color: 'black'
                }}
                > Skills 
            </NavLink> |

            <NavLink
                to="/blog"
                activeStyle={{
                    color: 'black'
                }}
                > Blog 
            </NavLink> |

            <NavLink
                to="/projects"
                activeStyle={{
                    color: 'black'
                }}
                > Projects 
            </NavLink> |

            <NavLink
                to="/contact"
                activeStyle={{
                    color: 'black'
                }}
                > Contact 
            </NavLink> 
            

            </div>
    )
}

export default NavBar;