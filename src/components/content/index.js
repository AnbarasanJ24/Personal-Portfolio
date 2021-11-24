import React from "react";
import About from "./about";
import Contact from "./contact";
import './content.css';
import Projects from "./projects";
import Skills from "./skills";
import Work from "./work";

const Content = () => {
    return (
        <main className="main">
            <section id="about">
                <About />
            </section>
            <section id="project">
                <Projects />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="work">
                <Work />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </main>
    )
}

export default Content
