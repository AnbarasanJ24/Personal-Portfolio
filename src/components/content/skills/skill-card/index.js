import React from "react";
import './skill-card.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SkillCard = ({ list }) => {
    AOS.init();
    return (
        <div className="skill-list" data-aos="fade-right" data-aos-delay="0" data-aos-duration="1500"
            data-aos-easing="linear" >
            {
                list.map(skill => {
                    return (
                        <div className="skill-item" >
                            {skill.icon}
                            <h6>{skill.name}</h6>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SkillCard
