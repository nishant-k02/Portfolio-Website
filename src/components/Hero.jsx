import { ButtonPrimary, ButtonOutline } from "./Button";

const highlights = [
  { icon: "rocket_launch", value: "15+", label: "Projects shipped" },
  { icon: "psychology", value: "AI + Full‑stack", label: "RAG · LLM · Cloud" },
];

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Flask",
  "GCP",
  "AWS",
  "Docker",
  "LLMs / RAG",
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-12 sm:pt-32 lg:pt-44 lg:pb-24"
    >
      {/* ambient glow */}
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[560px] bg-hero-glow"
        aria-hidden="true"
      />
      <div
        className="blob -left-24 top-24 h-72 w-72 bg-brand-500/40"
        aria-hidden="true"
      />
      <div
        className="blob right-0 top-64 h-80 w-80 bg-violet-500/30"
        aria-hidden="true"
      />

      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Copy */}
          <div>
            <div className="reveal inline-flex items-center gap-2 rounded-full border border-ink-200/80 bg-white/70 px-3 py-1.5 text-xs font-medium text-ink-700 backdrop-blur dark:border-white/10 dark:bg-white/[0.05] dark:text-ink-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
              </span>
              Available for work · Chicago, IL · Open to relocate
            </div>

            <h1
              className="headline-1 reveal mt-6"
              style={{ transitionDelay: "80ms" }}
            >
              Nishant Khandhar
            </h1>

            <p
              className="reveal mt-4 font-display text-2xl font-semibold leading-snug tracking-[-0.01em] text-ink-800 dark:text-ink-100 sm:text-[28px]"
              style={{ transitionDelay: "120ms" }}
            >
              Building{" "}
              <span className="text-gradient animate-shimmer">
                scalable products
              </span>{" "}
              and AI‑driven systems.
            </p>

            <p
              className="lead reveal mt-6 max-w-[52ch]"
              style={{ transitionDelay: "160ms" }}
            >
              Software Engineer specialising in full‑stack development, cloud
              architecture and LLM‑powered automation. Currently at Reliance IQ;
              previously Nokia and ONEBIT.
            </p>

            <div
              className="reveal mt-8 flex flex-wrap items-center gap-3"
              style={{ transitionDelay: "240ms" }}
            >
              <ButtonPrimary
                href="/files/resume.pdf"
                label="Download CV"
                icon="download"
                download
              />
              <ButtonOutline
                href="#work"
                label="View Projects"
                icon="arrow_downward"
              />
            </div>

            <ul
              className="reveal mt-10 flex flex-wrap gap-2"
              style={{ transitionDelay: "320ms" }}
              aria-label="Core stack"
            >
              {stack.map((s) => (
                <li key={s} className="chip">
                  {s}
                </li>
              ))}
            </ul>

            {/* Compact stats — shown where the portrait is hidden */}
            <div
              className="reveal mt-8 grid gap-3 min-[420px]:grid-cols-2 lg:hidden"
              style={{ transitionDelay: "380ms" }}
            >
              {highlights.map(({ icon, value, label }) => (
                <div
                  key={label}
                  className="card flex items-center gap-3 px-4 py-3"
                >
                  <span className="icon-tile !h-9 !w-9 !rounded-lg">
                    <span className="material-symbols-rounded text-[18px]">
                      {icon}
                    </span>
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-base font-semibold leading-tight">
                      {value}
                    </p>
                    <p className="text-xs text-ink-500 dark:text-ink-300">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Portrait — desktop only */}
          <div
            className="reveal relative mx-auto hidden w-full max-w-[420px] lg:block lg:max-w-none"
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/40 bg-gradient-to-b from-brand-100 to-violet-100/40 shadow-glow dark:border-white/10 dark:from-brand-500/20 dark:to-ink-900">
              <img
                src="/images/profile2.png"
                width={656}
                height={800}
                alt="Nishant Khandhar"
                className="h-full w-full object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/25 via-transparent to-transparent dark:from-ink-950/55" />
            </div>

            {/* floating stat cards */}
            <div className="card animate-float absolute -left-4 bottom-10 flex items-center gap-3 px-4 py-3 sm:-left-8">
              <span className="icon-tile !h-9 !w-9 !rounded-lg">
                <span className="material-symbols-rounded text-[18px]">
                  rocket_launch
                </span>
              </span>
              <div>
                <p className="font-display text-lg font-semibold leading-none">
                  15+
                </p>
                <p className="text-xs text-ink-500 dark:text-ink-300">
                  Projects shipped
                </p>
              </div>
            </div>
            <div
              className="card animate-float absolute -right-3 top-8 flex items-center gap-3 px-4 py-3 sm:-right-6"
              style={{ animationDelay: "-3s" }}
            >
              <span className="icon-tile !h-9 !w-9 !rounded-lg">
                <span className="material-symbols-rounded text-[18px]">
                  psychology
                </span>
              </span>
              <div>
                <p className="font-display text-lg font-semibold leading-none">
                  AI + Full‑stack
                </p>
                <p className="text-xs text-ink-500 dark:text-ink-300">
                  RAG · LLM · Cloud
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
