// blog/src/pages/projects.js
import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

// Example JSON list of projects
const projectsData = [
    {
        title: "UNIEX",
        description: "Concept for Universal text extractor for web scraping using GPT4v",
        url: "https://github.com/Yalton/UNIEX"
    },
    {
        title: "Return the Bird",
        description: "Chrome extension to return the old twitter logo; no X",
        url: "https://chromewebstore.google.com/detail/return-the-bird/aadpflcdbgokehfllbocfnfblkkkeeeb?hl=en"
    },
    {
        title: "POG-Ext",
        description: "Chrome extension to give users a simulated random twitch chat",
        url: "https://chromewebstore.google.com/detail/pogext/dpmlanifplafcamjpkpaoddajjgndppc?hl=en"
    },
    {
        title: "Pixort",
        description: "Web Application designed to sort bulk images; names them and sorts them into Subfolders",
        url: "https://pixort.app/"
    },
    {
        title: "Docker Repo",
        description: "Repository containing some common docker compose configurations I use",
        url: "https://github.com/Yalton/Docker"
    },
    {
        title: "Green Line Test",
        description: "Web App Designed to perform the 'Green Line Test' Tiktok trend that classifies who is most masculine or feminine based on straightness of posture",
        url: "https://github.com/Yalton/greenLineTest"
    },
    {
        title: "Mendelbrot web",
        description: "Web App Designed to render an infinite mendelbrot zoom - pretty neat",
        url: "https://github.com/Yalton/MendelBrotWeb"
    },
];

const ProjectsPage = ({ pageTitle, pageHeading }) => {
    return (
        <Layout>
            <Seo title="Projects" />
            <div>
                <h1>My Projects</h1>
                {projectsData.map((project, index) => (
                    <div key={index}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <Link to={project.url}>Learn More</Link>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default ProjectsPage;