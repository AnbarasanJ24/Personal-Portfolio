import React from "react"
import Seperator from "../../common/seperator";
import { ProjectDetails } from "../../data/project-details"
import ProjectCard from "./project-card";
import './projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Projects = () => {
    const projectDetails = ProjectDetails;
    AOS.init();
    return (
        <div >
            <Seperator />
            <h1 className="project-dettails-title">Projects</h1>
            <div className="project-details">
                {
                    projectDetails.map(project => (
                        <ProjectCard project={project} />
                    ))
                }
            </div>
        </div>
    )
}

export default Projects
