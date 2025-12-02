import { useRef } from "react";
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/project1.jpg",
    title: "Healthcare AI Assistant",
    tags: ["Flutter", "Python", "Autogen"],
    projectLink: "https://github.com/nishant-k02/HealthCareAIAssistant.git",
  },
  {
    imgSrc: "/images/project10.jpg",
    title: "ShopHub – AI-Powered E-commerce Platform",
    tags: ["NextJS", "LangChain", "OpenAI"],
    projectLink: "https://shop-hub-ecommerce.vercel.app",
  },
  {
    imgSrc: "/images/project2.jpg",
    title: "Car Damage Detection",
    tags: ["Django", "Tensorflow"],
    projectLink: "https://github.com/nishant-k02/BE-Project.git",
  },
  {
    imgSrc: "/images/project11.png",
    title: "GitPulse",
    tags: ["Neon Postgres", "LangGraph", "Streamlit", "OpenAI" ],
    projectLink:
      "https://gitagenticanalysis.streamlit.app/",
  },
  {
    imgSrc: "/images/project7.jpg",
    title: "SunWise",
    tags: ["React", "ML", "Google Maps API"],
    projectLink:
      "https://github.com/nishant-k02/SunWise_Scarlet_Hawks_Hackathon_2025.git",
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
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <h2 className="headline-2 mb-4 bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
            My Portfolio Highlights
          </h2>
        </div>

        {/* Enhanced Scroll Buttons */}
        <button
          onClick={scrollLeft}
          aria-label="Scroll Left"
          className="
            hidden md:flex
            absolute left-0 top-1/2 -translate-y-1/2
            z-20
            w-12 h-12
            bg-gradient-to-r from-zinc-300 to-zinc-400
            hover:from-zinc-400 hover:to-zinc-500
            dark:from-zinc-700 dark:to-zinc-600 
            dark:hover:from-zinc-600 dark:hover:to-zinc-500
            text-zinc-900 dark:text-white rounded-full
            items-center justify-center
            shadow-xl hover:shadow-2xl
            transform hover:scale-105
            transition-all duration-200
            border border-zinc-500/20
          "
        >
          <span className="material-symbols-rounded text-xl">chevron_left</span>
        </button>

        <button
          onClick={scrollRight}
          aria-label="Scroll Right"
          className="
            hidden md:flex
            absolute right-0 top-1/2 -translate-y-1/2
            z-20
            w-12 h-12
            bg-gradient-to-r from-zinc-300 to-zinc-400
            hover:from-zinc-400 hover:to-zinc-500
            dark:from-zinc-700 dark:to-zinc-600 
            dark:hover:from-zinc-600 dark:hover:to-zinc-500
            text-zinc-900 dark:text-white rounded-full
            items-center justify-center
            shadow-xl hover:shadow-2xl
            transform hover:scale-105
            transition-all duration-200
            border border-zinc-500/20
          "
        >
          <span className="material-symbols-rounded text-xl">chevron_right</span>
        </button>

        {/* Enhanced Frame with gradient border */}
        <div className="relative md:border md:border-zinc-600/50 md:rounded-3xl md:p-6 md:bg-gradient-to-br md:from-zinc-800/30 md:to-zinc-900/30 md:backdrop-blur-sm">
          {/* Projects Grid/Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide"
            style={{ scrollPaddingLeft: "1.5rem", scrollPaddingRight: "1.5rem" }}
          >
            <div
              className="
                flex gap-6
                snap-x snap-mandatory
                scroll-smooth
                min-w-max
                pb-2
              "
            >
              {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                <div
                  key={key}
                  className="
                    flex-shrink-0
                    snap-center
                    w-[85vw]          /* Small screens: 85% viewport width */
                    sm:w-[42vw]       /* Small+ screens: ~2 cards */
                    md:w-[28vw]       /* Medium+ screens: ~3 cards */
                    lg:w-[22vw]       /* Large screens: ~4 cards */
                    max-w-[300px]     /* Max width constraint */
                    min-w-[280px]     /* Min width constraint */
                  "
                >
                  <ProjectCard
                    imgSrc={imgSrc}
                    title={title}
                    tags={tags}
                    projectLink={projectLink}
                    classes="hover:transform hover:scale-[1.02] transition-transform duration-200"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Counter */}
        <div className="text-center mt-8">
          <p className="text-zinc-500 text-sm">
            <span className="text-sky-400 font-semibold">{works.length}</span> projects and counting...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;
