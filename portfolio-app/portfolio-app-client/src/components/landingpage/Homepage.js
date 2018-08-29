import React from 'react';

import '../../App.css';


import Header from '../Header';
import NavBar from '../NavBar';


const Homepage = () => {
    return (
                <div className="homepagecontainer">
                    <div> 
                        <NavBar />
                    </div>
                    <div className="name">
                        <text>Hi, I'm Aysan!</text>
                    </div>
                </div>
    )
}

export default Homepage;