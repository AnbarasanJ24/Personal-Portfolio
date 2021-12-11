/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import './about.css';
import profile from '../../../assets/coding.svg'
import SocialContent from "../../common/social-contact";

const About = () => {
    return (
        <div className="about">
            <div className="about-me">
                <h1>Hello There, <span >I am Anbarasan </span>
                </h1>
                <h4>
                    Proficient front-end engineer with 2.5 years of experience.
                    Enhanced web performance & security using the relevant tech stack.
                </h4>
                <SocialContent />
            </div>
            <div className="profile_image">
                <img className="vector" src={profile} alt="profile-image" />

            </div>
        </div>
    )
}

export default About;

