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
                to="/contact"
                activeStyle={{
                    color: 'black'
                }}
                > About</NavLink> |

                <NavLink
                to="/about"
                activeStyle={{
                    color: 'black'
                }}
                > Skills </NavLink> |

                <NavLink
                to="/"
                activeStyle={{
                    color: 'black'
                }}
                > Blog </NavLink>
            </div>
    )
}

export default NavBar;