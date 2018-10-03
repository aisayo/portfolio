import React from 'react';
import Project from './Project';


const Projects = () => {
    return (
        <div className="Projects">
            <div className="Projectsheadline" >
                Some of the projects I've worked on:
                <div>
                <Project 
                    projectitle={'Tic Tac Toe'}
                    projectimage={'test'}
                    projectdescr={'test'}
                    githublink={"test"}
                    demo={'test'}
                />
                </div>
            </div>
        </div>
    )
}

export default Projects;