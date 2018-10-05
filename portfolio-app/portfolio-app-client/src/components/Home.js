import React from 'react';

const Home = () => {
    return (
                <div className="homepagecontainer"> 
                    <div className="name">
                        <text>Hi, I'm Aysan!</text>
                    </div>
                    <div className="homeimage">
                        <img src={require("./img/backgroundimg1.jpg")}/>
                    </div>

                </div>
    )
}

export default Home;