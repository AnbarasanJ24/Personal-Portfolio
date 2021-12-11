import React from "react";
import './skill-card.css';

const SkillCard = ({ list }) => {
    return (
        <div className="skill-list">
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
