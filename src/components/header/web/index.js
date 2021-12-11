/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import project from '../../../assets/project.svg';
import skills from '../../../assets/skills.svg';
import work from '../../../assets/work.svg';
import './web.css';

const Web = () => {
    return (
        <div className="web">
            <a href="#project" className="web-options">
                <h4>Projects</h4>
                <img src={project} />
            </a>
            <a href="#skills" className="web-options">
                <h4>Skills</h4>
                <img src={skills} />
            </a>
            <a href="#work" className="web-options">
                <h4>Work</h4>
                <img src={work} />
            </a>
            {/* <a href="#contact" className="web-options">
                <h4>Contact</h4>
                <img src={contact} />
            </a> */}
        </div>
    )
}

export default Web
