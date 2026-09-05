import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Section = ({ index, title, children }) => (
  <div className="grid gap-3 border-t border-ink-200/70 py-6 dark:border-white/[0.06] md:grid-cols-[220px_1fr] md:gap-8">
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-300">
        {index} / {title}
      </p>
    </div>
    <div className="text-[15px] leading-relaxed text-ink-700 dark:text-ink-200">{children}</div>
  </div>
);

Section.propTypes = {
  index: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

const CaseStudyModal = ({ project, onClose, onNext, onPrev }) => {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!project) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onNext) onNext();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = prevOverflow;
    };
  }, [project, onClose, onNext, onPrev]);

  // Reset scroll when switching projects
  useEffect(() => {
    panelRef.current?.scrollTo({ top: 0 });
  }, [project?.slug]);

  if (!project) return null;
  const cs = project.caseStudy;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6"
      data-lenis-prevent
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <button
        aria-label="Close case study"
        onClick={onClose}
        className="absolute inset-0 bg-ink-950/70 backdrop-blur-sm"
      />

      <div
        ref={panelRef}
        tabIndex={-1}
        className="animate-reveal relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-3xl border border-ink-200/70 bg-[#f7f7fb] shadow-2xl outline-none scrollbar-thin scrollbar-track-transparent scrollbar-thumb-ink-300 dark:border-white/10 dark:bg-ink-950 dark:scrollbar-thumb-ink-700 sm:rounded-3xl"
      >
        {/* Header image */}
        <div className="relative aspect-[21/9] overflow-hidden bg-ink-100 dark:bg-ink-900">
          <img src={project.imgSrc} alt={project.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f7f7fb] via-[#f7f7fb]/40 to-transparent dark:from-ink-950 dark:via-ink-950/40" />

          <div className="absolute right-4 top-4 flex items-center gap-2">
            {onPrev && (
              <button onClick={onPrev} aria-label="Previous project" className="menu-btn !bg-white/80 dark:!bg-ink-900/80">
                <span className="material-symbols-rounded">chevron_left</span>
              </button>
            )}
            {onNext && (
              <button onClick={onNext} aria-label="Next project" className="menu-btn !bg-white/80 dark:!bg-ink-900/80">
                <span className="material-symbols-rounded">chevron_right</span>
              </button>
            )}
            <button onClick={onClose} aria-label="Close" className="menu-btn !bg-white/80 dark:!bg-ink-900/80">
              <span className="material-symbols-rounded">close</span>
            </button>
          </div>
        </div>

        <div className="px-5 pb-8 sm:px-8">
          {/* Title block */}
          <div className="-mt-10 relative">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-300">
              {project.category}
            </p>
            <h2 id="case-study-title" className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {project.title}
            </h2>
            <p className="lead mt-3 max-w-[64ch]">{project.tagline}</p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Open project
                <span className="material-symbols-rounded">arrow_outward</span>
              </a>
              {project.repoLink && (
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <img src="/images/github.svg" alt="" className="h-4 w-4 dark:invert" />
                  Source
                </a>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 divide-x divide-ink-200/70 rounded-2xl border border-ink-200/70 bg-white/70 dark:divide-white/[0.06] dark:border-white/[0.06] dark:bg-white/[0.03]">
            {project.stats.map((s) => (
              <div key={s.label} className="px-4 py-4 text-center">
                <p className="font-display text-lg font-semibold sm:text-2xl">
                  <span className="text-gradient">{s.value}</span>
                </p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-ink-500 dark:text-ink-400">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Pipeline */}
          {cs?.pipeline && (
            <div className="mt-8">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-ink-400">
                How it works
              </p>
              <ol className="grid gap-2 sm:grid-cols-5">
                {cs.pipeline.map((p, i) => (
                  <li
                    key={p.step}
                    className="relative rounded-2xl border border-ink-200/70 bg-white/70 p-4 dark:border-white/[0.06] dark:bg-white/[0.03]"
                  >
                    <span className="text-[11px] font-semibold text-brand-600 dark:text-brand-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-1 font-display text-sm font-semibold">{p.step}</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink-600 dark:text-ink-300">{p.text}</p>
                    {i < cs.pipeline.length - 1 && (
                      <span className="material-symbols-rounded absolute -right-3 top-1/2 hidden -translate-y-1/2 text-[16px] text-brand-400 sm:block">
                        arrow_forward
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Narrative */}
          {cs && (
            <div className="mt-8">
              <Section index="01" title="Challenge">{cs.challenge}</Section>
              <Section index="02" title="Approach">{cs.approach}</Section>
              <Section index="03" title="Outcome">{cs.outcome}</Section>
            </div>
          )}

          {cs && (cs.contribution || cs.decisions) && (
            <div className="grid gap-4 border-t border-ink-200/70 pt-6 dark:border-white/[0.06] md:grid-cols-2">
              {cs.contribution && (
                <div className="card p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-300">
                    What I owned
                  </p>
                  <h3 className="title-1 mt-1">My contribution</h3>
                  <ul className="mt-3 space-y-2">
                    {cs.contribution.map((c) => (
                      <li key={c} className="flex gap-2 text-sm text-ink-700 dark:text-ink-200">
                        <span className="material-symbols-rounded shrink-0 text-[18px] text-brand-500">check</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {cs.decisions && (
                <div className="card p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-300">
                    Key decisions
                  </p>
                  <h3 className="title-1 mt-1">Design decisions</h3>
                  <ul className="mt-3 space-y-2">
                    {cs.decisions.map((d) => (
                      <li key={d} className="flex gap-2 text-sm text-ink-700 dark:text-ink-200">
                        <span className="material-symbols-rounded shrink-0 text-[18px] text-brand-500">check</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Tech */}
          <div className="mt-6 border-t border-ink-200/70 pt-6 dark:border-white/[0.06]">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-ink-400">
              Built with
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CaseStudyModal.propTypes = {
  project: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
};

export default CaseStudyModal;
