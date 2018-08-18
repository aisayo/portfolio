import React from 'react';

const About = () => {
    return(
        <div className="Aboutcontainer"> 
            <div className="AboutMe">
                <header>About Me</header>
            </div>
            <div className="pic">
                <img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/10464179_10152304081826107_2383092918130193422_n.jpg?_nc_cat=0&oh=f0a102d2bdf1a02889080b4be2e2ef6b&oe=5C01465C" alt="pic"/>
            </div>
            <div className="AboutMeDetails">
                <p>
                    At the time being, I'm working as a tech coach at Flatiron, having 
                    fun with students who want to learn code, while I continue to learn code myself. 
                    I recently graduated from Flatiron's online bootcamp 
                </p>
            </div>
        </div>
    )
}

export default About;