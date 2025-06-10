import React, { useRef } from "react";
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
    tags: ["Django", "Tensorflow"],
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
    title: "Code Editor",
    tags: ["React", "Bootstrap", "Codemirror"],
    projectLink: "https://code-editor-ten-inky.vercel.app/",
  },
  {
    imgSrc: "/images/project6.jpg",
    title: "Android Weather App",
    tags: ["Android", "Java", "API"],
    projectLink: "https://github.com/nishant-k02/Android-Weather-App.git",
  },
];

const Work = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <section id="work" className="section">
      <div className="container relative">
        <h2 className="headline-2 mb-8">My Portfolio Highlights</h2>

        {/* Scroll Buttons - visible only md and up */}
        <button
          onClick={scrollLeft}
          aria-label="Scroll Left"
          className="
            hidden md:flex
            absolute left-2 top-1/2 -translate-y-1/2
            z-10
            w-10 h-10
            bg-zinc-700 hover:bg-zinc-600
            text-white rounded-full
            items-center justify-center
            shadow-lg
            select-none
          "
        >
          <span className="material-symbols-rounded">chevron_left</span>
        </button>

        <button
          onClick={scrollRight}
          aria-label="Scroll Right"
          className="
            hidden md:flex
            absolute right-2 top-1/2 -translate-y-1/2
            z-10
            w-10 h-10
            bg-zinc-700 hover:bg-zinc-600
            text-white rounded-full
            items-center justify-center
            shadow-lg
            select-none
          "
        >
          <span className="material-symbols-rounded">chevron_right</span>
        </button>

        {/* Frame with equal vertical padding on md+ screens */}
        <div className="relative md:border-2 md:border-zinc-700 md:rounded-2xl md:px-4 md:py-4">
          {/* Scrollable Projects */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide"
            style={{ scrollPaddingLeft: "1rem", scrollPaddingRight: "1rem" }}
          >
            <div
              className="
                flex gap-6
                snap-x snap-mandatory
                scroll-smooth
                min-w-max
              "
            >
              {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                <div
                  key={key}
                  className="
                    flex-shrink-0
                    snap-center
                    w-[90vw]          /* Small screens: 90% viewport width */
                    sm:w-[45vw]       /* Small+ screens: ~2 cards */
                    md:w-[30vw]       /* Medium+ screens: ~3 cards */
                    max-w-[320px]     /* Max width so cards don't get too wide */
                  "
                >
                  <ProjectCard
                    imgSrc={imgSrc}
                    title={title}
                    tags={tags}
                    projectLink={projectLink}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
