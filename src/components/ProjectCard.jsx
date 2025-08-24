import React from "react";
import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, tags, projectLink, classes }) => {
  return (
    <div
      className={
        "relative p-6 rounded-2xl bg-zinc-100 hover:bg-zinc-200/50 active:bg-zinc-200/80 dark:bg-zinc-800 dark:hover:bg-zinc-700/50 dark:active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-900/10 dark:ring-zinc-50/5 transition-colors h-[420px] flex flex-col" +
        (classes ? " " + classes : "")
      }
    >
      <figure className="img-box aspect-square rounded-lg mb-4 overflow-hidden">
        <img src={imgSrc} alt={title} loading="lazy" className="img-cover w-full h-full object-cover" />
      </figure>

      <div className="flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="title-1 mb-3 line-clamp-2 min-h-[3.5rem] leading-tight text-zinc-900 dark:text-zinc-50">{title}</h3>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {tags.map((label, key) => (
              <span
                key={key}
                className="h-8 text-sm text-zinc-600 dark:text-zinc-400 bg-zinc-900/10 dark:bg-zinc-50/5 grid items-center px-3 rounded-lg whitespace-nowrap"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-end mt-auto">
          <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0 hover:bg-sky-300 transition-colors">
            <span className="material-symbols-rounded" aria-hidden="true">
              arrow_outward
            </span>
          </div>
        </div>
      </div>

      <a href={projectLink} target="_blank" rel="noopener noreferrer" className="absolute inset-0 rounded-2xl focus:ring-2 focus:ring-sky-400 focus:outline-none"></a>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
