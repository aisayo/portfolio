import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

import About from '../About';


const Homepage = () => {
    return (
                <div className="homepagecontainer"> 
                    <div className="name">
                        <text>Hi, I'm Aysan!</text>
                    </div>
                </div>
    )
}

export default Homepage;