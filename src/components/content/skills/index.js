import React from "react"
import Seperator from "../../common/seperator";
import { SkillList } from "../../data/skills";
import SkillCard from "./skill-card";
import './skills.css';

const Skills = () => {
    const skills = SkillList;
    return (
        <div>
            <Seperator />
            <h1 className="skills-title">Skills</h1>
            <div className="skills-container">
                {
                    skills.map(skill => {
                        return (
                            <div className="skill-list-container" key={skill.type}>
                                <h2>{skill.type}</h2>
                                <SkillCard list={skill.list} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills
