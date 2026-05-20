import { useState } from "react";

const aboutItems = [
  {
    label: "Project done",
    number: 15,
  },
  {
    label: "Year of experience",
    number: 1,
  },
];

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section id="about" className="section">
      <div className="container">
        {/* About Card */}
        <div className="max-w-6xl mx-auto">
          <div className="relative p-6 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm hover:border-emerald-300 dark:hover:border-emerald-600 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 group">
            {/* Header with Icon */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-400 to-sky-500 flex items-center justify-center">
                <span className="material-symbols-rounded text-white text-2xl">
                  person
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  Software Developer & AI Enthusiast
                </h3>
                <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                  Full-Stack • Cloud Architecture • AI-Driven Systems
                </p>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-4 mb-6">
              {/* First paragraph - always visible */}
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed text-justify">
                Hello! I&apos;m Nishant, a Software Engineer focused on
                full-stack development, AI systems, and scalable backend
                applications. I enjoy building tools that solve real problems
                and improve how teams work. I recently completed my
                Master&apos;s in Computer Science at Illinois Institute of
                Technology with a 3.8 GPA. During my program, I also worked as a
                Graduate Teaching Assistant and led coding sessions for students
                in software engineering courses. At Nokia, I built an internal
                RAG pipeline using ChromaDB to automate ETL processing for
                feature PDFs. The system reduced manual effort by 83% and
                improved how teams generated automated test plans. I also
                developed a code review automation pipeline that reduced review
                time by 20% and built a PCAP traffic analysis tool that
                increased processing throughput by 50%. Previously at ONEBIT, I
                improved transaction categorization for 200–400 businesses by
                building intelligent filters and AI-based categorization
                systems. This reduced manual review time by 71% and improved
                reporting accuracy. I also helped increase platform reliability
                by implementing automated testing with 90%+ test coverage.
              </p>

              {/* Second paragraph - hidden on mobile unless expanded */}
              <div className={`md:block ${isExpanded ? "block" : "hidden"}`}>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed text-justify">
                  My technical background includes React, Next.js, Node.js,
                  Flask, MongoDB, Python, AWS, Docker, Kubernetes, and
                  AI/LLM-based systems. Outside of engineering, I enjoy
                  mentoring developers and leading technical workshops. I
                  previously led a team of 50 students as Android Developer Lead
                  at Google Developer Student Clubs in Pune. Skills: Full-Stack
                  Development, AI Systems, React, Next.js, Node.js, Flask,
                  MongoDB, Cloud Architecture, Intelligent Automation. Open to
                  software engineering, full-stack and AI roles.
                </p>
              </div>

              {/* View More/Less Button - only visible on mobile */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-sm text-emerald-600 dark:text-emerald-400 font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors flex items-center gap-1"
                >
                  <span>{isExpanded ? "View less" : "View more"}</span>
                  <span
                    className={`material-symbols-rounded text-sm transition-transform duration-200 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  >
                    keyboard_arrow_down
                  </span>
                </button>
              </div>
            </div>

            {/* Stats and Logo */}
            <div className="flex flex-wrap items-center justify-between gap-6 pt-4 border-t border-zinc-200 dark:border-zinc-700">
              <div className="flex flex-wrap items-center gap-6">
                {aboutItems.map(({ label, number }, key) => (
                  <div key={key} className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <span className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 md:text-3xl">
                        {number}
                      </span>
                      <span className="text-emerald-500 font-semibold md:text-2xl">
                        +
                      </span>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-end">
                <div className="w-10 h-10 rounded-lg grid place-items-center bg-emerald-400 text-zinc-950 shrink-0 hover:bg-emerald-300 transition-colors">
                  <img
                    src="/images/logo.svg"
                    alt="Logo"
                    width={24}
                    height={24}
                    className="brightness-0 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
