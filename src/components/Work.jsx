import React from "react";
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/project1.jpg",
    title: "Healthcare AI Assistant",
    tags: ["Flutter", "Python", "Autogen"],
    projectLink: "https://github.com/nishant-k02/HealthCareAIAssistant.git",
  },
  {
    imgSrc: "/images/project2.jpg",
    title: "Car Damage Detection",
    tags: ["Python", "Django", "Tensorflow"],
    projectLink: "https://github.com/nishant-k02/BE-Project.git",
  },
  {
    imgSrc: "/images/project7.jpg",
    title: "SunWise",
    tags: ["React", "ML", "Google Maps API"],
    projectLink:
      "https://github.com/nishant-k02/SunWise_Scarlet_Hawks_Hackathon_2025.git",
  },
  {
    imgSrc: "/images/project3.jpeg",
    title: "Smart Homes Web App",
    tags: ["JSP", "MongoDB", "MySQL"],
    projectLink:
      "https://github.com/nishant-k02/Enterprise-Web-Applications.git",
  },
  {
    imgSrc: "/images/project8.jpeg",
    title: "BlogBoard",
    tags: ["React", "ElasticSearch", "OpenAI"],
    projectLink: "https://github.com/nishant-k02/School-Blogging-Website.git",
  },
  {
    imgSrc: "/images/project9.jpg",
    title: "Sportify",
    tags: ["React", "MongoDB", "OpenAI"],
    projectLink: "https://github.com/nishant-k02/Sportify.git",
  },
  {
    imgSrc: "/images/project4.jpg",
    title: "Covid Stats. Analyzer",
    tags: ["Python", "API", "PowerBI"],
    projectLink: "https://github.com/nishant-k02/Covid-Dashboard-Project.git",
  },
  {
    imgSrc: "/images/project5.jpg",
    title: "Online Code Editor",
    tags: ["React", "Bootstrap", "Codemirror", "HTML", "CSS", "JS"],
    projectLink: "https://code-editor-ten-inky.vercel.app/",
  },
  {
    imgSrc: "/images/project6.jpg",
    title: "Android Weather App",
    tags: ["Android", "Java", "API", "JSON"],
    projectLink: "https://github.com/nishant-k02/Android-Weather-App.git",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">My Portfolio Highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
