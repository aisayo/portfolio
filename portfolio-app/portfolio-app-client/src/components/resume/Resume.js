import React from 'react';
import Objective from './Objective';
import Projects from './Projects';

const Resume = () => {
    return (
        <div className="Resume">
            <h1>Aysan Isayo</h1>
            <text className="ResumeLinks">209-202-1980 | 
                aisayo@icloud.com | 
                Github: Aisayo | 
                Aisayo.github.io | 
                LinkedIn: https://www.linkedin.com/in/aisayo
            </text>
            <Objective/>
            <Projects />
        </div>
    )
}

export default Resume;