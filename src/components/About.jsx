import { useState } from "react";

const stats = [
  { label: "Projects done", value: "15+" },
  { label: "Years of experience", value: "1+" },
  { label: "Master's GPA", value: "3.8" },
];

const highlights = [
  {
    icon: "auto_awesome",
    title: "AI & RAG systems",
    text: "Built an internal RAG pipeline at Nokia that cut manual ETL effort by 83% and sped up automated test-plan generation.",
  },
  {
    icon: "cloud_done",
    title: "Cloud-native backends",
    text: "Async reporting pipelines on GCP Pub/Sub and Cloud Functions, Firestore query optimisation with 97% fewer DB calls.",
  },
  {
    icon: "groups",
    title: "Mentoring & leadership",
    text: "Graduate Teaching Assistant at IIT and Android Developer Lead for a 50-student team at GDSC Pune.",
  },
];

const principles = [
  {
    icon: "verified",
    title: "Production-ready by default",
    text: "Reliability, testing and observability are built in, not added afterwards.",
  },
  {
    icon: "insights",
    title: "Measurable outcomes",
    text: "Every system is tied to a metric it is expected to move, and measured against it.",
  },
  {
    icon: "handshake",
    title: "Built with the team",
    text: "Clear pull requests, documentation and mentoring keep the whole team moving.",
  },
];

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">01 — About me</span>
          <h2 className="headline-2">
            Software Engineer &amp;{" "}
            <span className="text-gradient">AI enthusiast</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Bio card */}
          <div className="card reveal p-6 sm:p-8">
            <p className="text-brand-600 dark:text-brand-300 text-sm font-semibold">
              Full‑Stack • Cloud Architecture • AI‑Driven Systems
            </p>

            <p className="mt-4 text-[15px] leading-relaxed text-ink-700 dark:text-ink-200">
              I&apos;m a Software Engineer focused on full-stack development, AI
              systems, and scalable backend applications, building tools that
              solve real problems and improve how teams work. I recently
              completed my Master&apos;s in Computer Science at Illinois
              Institute of Technology with a 3.8 GPA. During my program, I also
              worked as a Graduate Teaching Assistant and led coding sessions
              for students in software engineering courses. At Nokia, I built an
              internal RAG pipeline using ChromaDB to automate ETL processing
              for feature PDFs. The system reduced manual effort by 83% and
              improved how teams generated automated test plans. I also
              developed a code review automation pipeline that reduced review
              time by 20% and built a PCAP traffic analysis tool that increased
              processing throughput by 50%. Previously at ONEBIT, I improved
              transaction categorization for 200–400 businesses by building
              intelligent filters and AI-based categorization systems. This
              reduced manual review time by 71% and improved reporting accuracy.
              I also helped increase platform reliability by implementing
              automated testing with 90%+ test coverage.
            </p>

            <div className={`md:block ${isExpanded ? "block" : "hidden"}`}>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-700 dark:text-ink-200">
                My technical background includes React, Next.js, Node.js, Flask,
                MongoDB, Python, AWS, Docker, Kubernetes, and AI/LLM-based
                systems. Outside of engineering, I enjoy mentoring developers
                and leading technical workshops. I previously led a team of 50
                students as Android Developer Lead at Google Developer Student
                Clubs in Pune. Open to software engineering, full-stack and AI
                roles.
              </p>
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-300 dark:hover:text-brand-200 md:hidden"
            >
              {isExpanded ? "View less" : "View more"}
              <span
                className={`material-symbols-rounded text-base transition-transform duration-200 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              >
                keyboard_arrow_down
              </span>
            </button>

            <div className="divider my-6" />

            <div className="grid gap-3 sm:grid-cols-3">
              {principles.map(({ icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-ink-200/70 bg-white/60 p-4 dark:border-white/[0.06] dark:bg-white/[0.03]"
                >
                  <span className="material-symbols-rounded text-[22px] text-brand-500">
                    {icon}
                  </span>
                  <p className="mt-2 text-sm font-semibold">{title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-ink-600 dark:text-ink-300">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div className="divider my-6" />

            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ label, value }) => (
                <div key={label}>
                  <p className="font-display text-2xl font-semibold sm:text-3xl">
                    <span className="text-gradient">{value}</span>
                  </p>
                  <p className="mt-1 text-xs font-medium text-ink-500 dark:text-ink-300">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="grid content-start gap-4">
            {highlights.map(({ icon, title, text }, i) => (
              <div
                key={title}
                className="card card-hover reveal flex gap-4 p-5"
                style={{ transitionDelay: `${100 + i * 90}ms` }}
              >
                <span className="icon-tile">
                  <span className="material-symbols-rounded text-[22px]">
                    {icon}
                  </span>
                </span>
                <div>
                  <h3 className="title-1">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
