import { useCallback, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import CaseStudyModal from "./CaseStudyModal";
import projects from "../data/projects";

const Work = () => {
  const scrollContainerRef = useRef(null);
  const [showAll, setShowAll] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const scrollBy = (dir) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.scrollBy({
      left: dir * Math.min(el.clientWidth * 0.8, 640),
      behavior: "smooth",
    });
  };

  const openProject = useCallback((project) => {
    setOpenIndex(projects.findIndex((p) => p.slug === project.slug));
  }, []);
  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(
    () => setOpenIndex((i) => (i + 1) % projects.length),
    [],
  );
  const prev = useCallback(
    () => setOpenIndex((i) => (i - 1 + projects.length) % projects.length),
    [],
  );

  const [featured, ...rest] = projects;

  return (
    <section id="work" className="section">
      <div
        className="blob right-0 top-10 h-80 w-80 bg-brand-500/20"
        aria-hidden="true"
      />

      <div className="container">
        <div className="section-head reveal lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-4">
            <span className="eyebrow">04 — Selected work</span>
            <h2 className="headline-2">
              Projects I&apos;m <span className="text-gradient">proud of</span>
            </h2>
            <p className="max-w-[52ch] text-sm leading-relaxed text-ink-600 dark:text-ink-300">
              Each case study covers the problem, the architecture and the
              outcome. Select a project for the full write-up.
            </p>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
              className="menu-btn"
            >
              <span className="material-symbols-rounded">chevron_left</span>
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
              className="menu-btn"
            >
              <span className="material-symbols-rounded">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Featured project */}
        <article className="card card-hover reveal group mb-6 grid overflow-hidden md:grid-cols-[1.1fr_0.9fr]">
          <button
            type="button"
            onClick={() => openProject(featured)}
            className="img-box relative aspect-[16/10] text-left focus:outline-none md:aspect-auto md:min-h-[360px]"
            aria-label={`Open case study: ${featured.title}`}
          >
            <img
              src={featured.imgSrc}
              alt={featured.title}
              loading="lazy"
              className="img-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent md:bg-gradient-to-r" />
          </button>
          <div className="flex flex-col p-6 sm:p-8">
            <div className="flex items-center gap-2">
              <span className="chip-brand">Featured</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-500 dark:text-ink-400">
                {featured.category}
              </span>
            </div>
            <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              {featured.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
              {featured.tagline}
            </p>

            <div className="mt-5 grid grid-cols-3 gap-3 border-y border-ink-200/70 py-4 dark:border-white/[0.06]">
              {featured.stats.map((s) => (
                <div key={s.label} className="min-w-0">
                  <p className="font-display text-lg font-semibold leading-tight">
                    <span className="text-gradient">{s.value}</span>
                  </p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-wider text-ink-500 dark:text-ink-400">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {featured.tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
              <button
                type="button"
                onClick={() => openProject(featured)}
                className="btn btn-primary"
              >
                View case study
                <span className="material-symbols-rounded">arrow_forward</span>
              </button>
              <a
                href={featured.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Live app
                <span className="material-symbols-rounded">arrow_outward</span>
              </a>
            </div>
          </div>
        </article>

        {/* Horizontal scroller (desktop) */}
        <div
          ref={scrollContainerRef}
          className="reveal -mx-5 hidden snap-x snap-mandatory overflow-x-auto px-5 pb-4 scroll-pl-5 scrollbar-hide sm:-mx-6 sm:px-6 sm:scroll-pl-6 md:flex md:gap-5 lg:-mx-8 lg:px-8 lg:scroll-pl-8"
          style={{ transitionDelay: "100ms" }}
        >
          {rest.map((project) => (
            <div
              key={project.slug}
              className="w-[320px] shrink-0 snap-start lg:w-[340px]"
            >
              <ProjectCard project={project} onOpen={openProject} />
            </div>
          ))}
        </div>

        {/* Stacked grid (mobile) */}
        <div className="grid gap-4 md:hidden">
          {(showAll ? rest : rest.slice(0, 4)).map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onOpen={openProject}
            />
          ))}
          {rest.length > 4 && (
            <button
              onClick={() => setShowAll((s) => !s)}
              className="btn btn-outline mx-auto mt-2"
            >
              {showAll ? "Show fewer" : `Show all ${projects.length} projects`}
              <span className="material-symbols-rounded">
                {showAll ? "expand_less" : "expand_more"}
              </span>
            </button>
          )}
        </div>

        <p className="mt-8 text-center text-sm text-ink-500 dark:text-ink-400">
          <span className="font-semibold text-brand-600 dark:text-brand-300">
            {projects.length}
          </span>{" "}
          projects. More on{" "}
          <a
            href="https://www.github.com/nishant-k02"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-ink-800 underline decoration-brand-400/60 underline-offset-4 hover:text-brand-600 dark:text-ink-100 dark:hover:text-brand-300"
          >
            GitHub
          </a>
          .
        </p>
      </div>

      <CaseStudyModal
        project={openIndex === null ? null : projects[openIndex]}
        onClose={close}
        onNext={next}
        onPrev={prev}
      />
    </section>
  );
};

export default Work;
