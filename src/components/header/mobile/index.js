/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import close from '../../../assets/close.svg';
import project from '../../../assets/project.svg';
import skills from '../../../assets/skills.svg';
import work from '../../../assets/work.svg';
import contact from '../../../assets/contact.svg';
import './mobile.css';

const Mobile = ({ isOpen, setIsOpen }) => {
    return (
        <div className="mobile">
            <div className="close" onClick={() => setIsOpen(!isOpen)}>
                <img src={close} alt="close" />
            </div>
            <div className="mobile_options">
                <a href="#project" className="mobile_option">
                    <h4>Projects</h4>
                    <img src={project} />
                </a>
                <a href="#skills" className="mobile_option">
                    <h4>Skills</h4>
                    <img src={skills} />
                </a>
                <a href="#work" className="mobile_option">
                    <h4>Work</h4>
                    <img src={work} />
                </a>
                <a href="#contact" className="mobile_option">
                    <h4>Contact</h4>
                    <img src={contact} />
                </a>
            </div>
        </div>
    )
}

export default Mobile
