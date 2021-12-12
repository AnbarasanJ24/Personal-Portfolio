import React from "react";
import './project-card.css';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div className="project-info">
                <label className="project-title" >{project.title}</label>
                <div className="project-tags">
                    {
                        project.tags.map(tag => {
                            return (
                                <label >{tag}</label>
                            )
                        })
                    }
                </div>
                <div className="project-about">
                    {project.about}
                </div>

                <div className="project-source">
                    <div className="project-source-demo">
                        {
                            project.demo && (
                                <a href={project.demo}>Demo</a>
                            )
                        }
                    </div>
                    <div className="project-source-github">
                        {
                            project.github && (
                                <a target='_blank' href={project.github} rel="noreferrer">Github</a>
                            )
                        }
                    </div>

                </div>
            </div>
            {/* <div className="image-info">
                <img src={project.image} alt={project.title} />
            </div> */}
        </div>
    )
}

export default ProjectCard;

