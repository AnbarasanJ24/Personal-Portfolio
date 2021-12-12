/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import './about.css';
import profile from '../../../assets/coding.svg'
import SocialContent from "../../common/social-contact";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    AOS.init();
    return (
        <div className="about">
            <div className="about-me" data-aos="fade-left" data-aos-delay="0" data-aos-duration="1500"
                data-aos-easing="ease-in-out" >
                <h1>Hello There, <span >I am Anbarasan </span>
                </h1>
                <h4>
                    Proficient front-end engineer with 2.5 years of experience in designing and
                    building responsive websites in the insurance domain
                </h4>
                <SocialContent />
                <div className="resume">
                    <a download href={require('../../../assets/Anbarasan-Front End Engineer-2.5YOE.pdf').default}>Download Resume</a>
                </div>
            </div>
            <div className="profile_image" data-aos="fade-right" data-aos-delay="0" data-aos-duration="1000"
                data-aos-easing="ease-in-out" >
                <img className="vector" src={profile} alt="profile-image" />
            </div>
        </div>
    )
}

export default About;

