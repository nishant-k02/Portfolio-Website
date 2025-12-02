import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, tags, projectLink, classes }) => {
  return (
    <div
      className={
        "relative p-6 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm hover:border-sky-300 dark:hover:border-sky-600 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 h-[420px] flex flex-col group" +
        (classes ? " " + classes : "")
      }
    >
      <figure className="img-box aspect-square rounded-lg mb-4 overflow-hidden bg-zinc-300 dark:bg-zinc-700">
        <img src={imgSrc} alt={title} loading="lazy" className="img-cover w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </figure>

      <div className="flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="title-1 mb-3 line-clamp-2 min-h-[3.5rem] leading-tight text-zinc-900 dark:text-zinc-50 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">{title}</h3>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {tags.map((label, key) => (
              <span
                key={key}
                className="h-8 text-sm text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 grid items-center px-3 rounded-lg whitespace-nowrap hover:bg-sky-50 dark:hover:bg-sky-900/20 transition-colors"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-end mt-auto">
          <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0 hover:bg-sky-300 group-hover:scale-110 transition-all duration-300 shadow-lg">
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
