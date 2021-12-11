import React from "react";
import './project-card.css';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div className="project-info">
                <label className="project-title" >{project.title}</label>
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
                                <a href={project.github}>Github</a>
                            )
                        }
                    </div>

                </div>
                <div className="project-about">
                    {project.about}
                </div>
                <div className="project-tags">
                    {
                        project.tags.map(tag => {
                            return (
                                <label >{tag}</label>
                            )
                        })
                    }
                </div>
            </div>
            <div className="image-info">
                <img src={project.image} alt={project.title} />
            </div>
        </div>
    )
}

export default ProjectCard;


// {
//     id: 2,
//         title: "Project 2",
//             about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, recusandae saepe reprehenderit optio itaque nam perspiciatis ipsam quos velit. Qui ex harum sed aliquid magnam quod? Quo mollitia maiores nisi!",
//                 tags: ["Test1", "Test2", "Test3", "Test4"],
//                     demo: "www.example.com",
//                         github: "www.example.com",
//         // image: require('../../assets/project').default

//     },