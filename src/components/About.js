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
                    I recently graduated from an online coding camp at Flatiron school where I got to 
                    indulge in constant self-teaching and some major problem solving.  <br/><br/>

                    I had so much fun learning the different languages and 
                    frameworks, I wanted to help other students in their learning journey! So after I graduated, I applied for Flatirons
                    Technical Coach Fellowship program and was hired on to be apart of the awesome team. As a technical 
                    coach, I get to help students learn how to utilize the tools that are provided to them to quickly 
                    debug and resolve their code. <br/><br/>

                    When I'm not helping students find their way through code-land, you can catch me lost somewhere
                    in nature, fishing or at home solving jigsaw puzzles while watching Lord of the Rings!

                </p>
            </div>
        </div>
    )
}

export default About;