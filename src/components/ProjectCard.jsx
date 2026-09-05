import PropTypes from "prop-types";

const ProjectCard = ({ project, onOpen, classes = "" }) => {
  const { imgSrc, title, category, tagline, tags, projectLink, stats, caseStudy } = project;

  return (
    <article className={`card card-hover group flex h-full flex-col overflow-hidden ${classes}`}>
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="img-box relative aspect-[4/3] w-full text-left focus:outline-none"
        aria-label={`Open case study: ${title}`}
      >
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="img-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-ink-950/70 to-transparent px-4 pb-3 pt-10 text-xs font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {caseStudy ? "View case study" : "View details"}
          <span className="material-symbols-rounded text-[18px]">north_east</span>
        </span>
      </button>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-600 dark:text-brand-300">
          {category}
        </p>
        <h3 className="title-1 mt-1.5 line-clamp-2 transition-colors group-hover:text-brand-600 dark:group-hover:text-brand-300">
          <button type="button" onClick={() => onOpen(project)} className="text-left focus:outline-none">
            {title}
          </button>
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300">{tagline}</p>

        {stats && (
          <div className="mt-4 grid grid-cols-3 gap-2 border-y border-ink-200/70 py-3 dark:border-white/[0.06]">
            {stats.map((s) => (
              <div key={s.label} className="min-w-0">
                <p className="truncate font-display text-sm font-semibold">{s.value}</p>
                <p className="text-[10px] leading-tight uppercase tracking-wider text-ink-500 dark:text-ink-400">{s.label}</p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.slice(0, 4).map((label) => (
            <span key={label} className="chip">
              {label}
            </span>
          ))}
          {tags.length > 4 && <span className="chip">+{tags.length - 4}</span>}
        </div>

        <div className="mt-auto flex items-center justify-between pt-4">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-300 dark:hover:text-brand-200"
          >
            {caseStudy ? "Case study" : "Details"}
            <span className="material-symbols-rounded text-[18px]">arrow_forward</span>
          </button>
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title}`}
            className="grid h-9 w-9 place-items-center rounded-full border border-ink-200/80 text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-600 dark:border-white/10 dark:text-ink-200 dark:hover:border-brand-400/50 dark:hover:text-brand-300"
          >
            <span className="material-symbols-rounded text-[18px]">arrow_outward</span>
          </a>
        </div>
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  onOpen: PropTypes.func.isRequired,
  classes: PropTypes.string,
};

export default ProjectCard;
