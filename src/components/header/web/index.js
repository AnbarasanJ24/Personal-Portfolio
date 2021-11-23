import React from "react";
import skills from '../../../assets/skills.svg';
import './web.css';

const Web = () => {
    return (
        <div className="web">
            <a href="#project" className="web-options">
                <h4>Projects</h4>
                <img src="https://img.icons8.com/nolan/64/krita.png" />
            </a>
            <a href="#skills">
                <h4>Skills</h4>
                <img src={skills} />
            </a>
            <a href="#work">
                <h4>Work</h4>
                <img src="https://img.icons8.com/nolan/64/krita.png" />
            </a>
            <a href="#contact">
                <h4>Contact</h4>
                <img src="https://img.icons8.com/nolan/64/krita.png" />
            </a>
        </div>
    )
}

export default Web
