import React from "react";
import PropTypes from "prop-types";

const ExperienceCard = ({ position, company, location, duration, responsibilities, techStack, classes }) => {
  return (
    <div
      className={
        "relative p-6 rounded-2xl bg-zinc-100 hover:bg-zinc-200/50 active:bg-zinc-200/80 dark:bg-zinc-800 dark:hover:bg-zinc-700/50 dark:active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-900/10 dark:ring-zinc-50/5 transition-colors flex flex-col" +
        (classes ? " " + classes : "")
      }
    >
      {/* Work Icon */}
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center">
          <span className="material-symbols-rounded text-white text-2xl">work</span>
        </div>
      </div>

      <div className="flex flex-col flex-grow">
        <div className="flex-grow">
          {/* Position Title */}
          <h3 className="title-1 mb-2 line-clamp-2 leading-tight text-zinc-900 dark:text-zinc-50">
            {position}
          </h3>
          
          {/* Company Name */}
          <p className="text-lg font-medium text-emerald-600 dark:text-emerald-400 mb-2">
            {company}
          </p>
          
          {/* Location */}
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2 flex items-center gap-1">
            <span className="material-symbols-rounded text-sm">location_on</span>
            {location}
          </p>
          
          {/* Duration */}
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 flex items-center gap-1">
            <span className="material-symbols-rounded text-sm">schedule</span>
            {duration}
          </p>
          
          {/* Responsibilities */}
          {responsibilities && responsibilities.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Key Achievements:</h4>
              <ul className="space-y-2">
                {responsibilities.map((responsibility, index) => (
                  <li
                    key={index}
                    className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex items-start gap-2"
                  >
                    <span className="text-emerald-600 dark:text-emerald-400 text-xs mt-1.5">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Tech Stack */}
          {techStack && techStack.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Tech Stack:</h4>
              <div className="flex flex-wrap gap-1">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs text-zinc-600 dark:text-zinc-400 bg-zinc-900/10 dark:bg-zinc-50/5 px-2 py-1 rounded-md whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Experience Icon */}
        <div className="flex items-center justify-end mt-auto">
          <div className="w-10 h-10 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0 hover:bg-sky-300 transition-colors">
            <span className="material-symbols-rounded text-lg" aria-hidden="true">
              trending_up
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

ExperienceCard.propTypes = {
  position: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  responsibilities: PropTypes.array,
  techStack: PropTypes.array,
  classes: PropTypes.string,
};

export default ExperienceCard; 