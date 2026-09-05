import { useState, useRef, useEffect, useCallback } from "react";

const experienceData = [
  // Work Experience
  {
    id: 1,
    position: "Associate AI Software Engineer",
    company: "Reliance IQ",
    location: "Chicago, IL",
    duration: "Jun 2026 – Present",
    type: "experience",
    headline:
      "Cut Firestore reads by 97% and shipped an async GCP reporting pipeline for 1000+ part portfolios.",
    responsibilities: [
      "Maintained a full-stack application for OEM customers, delivering scalable and reliable solutions across frontend and backend systems.",
      "Optimized Firestore data access by eliminating an N+1 query bottleneck, replacing sequential reads with batched collection-group queries (30-record chunks), reducing database calls by 97% and improving report generation performance.",
      "Built an asynchronous PDF reporting pipeline using GCP Pub/Sub, Cloud Functions, and email delivery, offloading long-running tasks and enabling scalable processing of 1000+ part portfolios.",
      "Introduced a real-time job progress tracking feature using Firestore subscriptions (onSnapshot) and React Context, reducing listeners by 67% while enabling live progress and ETA updates.",
      "Improved application security and reliability across repositories by fixing code quality issues, strengthening tenant isolation, handling edge cases, and reducing potential failure cases.",
    ],
    techStack: [
      "Flask",
      "Python",
      "Artificial Intelligence",
      "Google Cloud Platform (Pub/Sub, Cloud Functions, Firestore, Cloud SQL, Cloud Storage)",
      "React",
      "TypeScript",
      "Redux",
      "REST APIs.",
    ],
  },
  {
    id: 2,
    position: "Agentic Software Engineer Co-op",
    company: "Nokia",
    location: "Chicago, IL",
    duration: "Jan 2026 – May 2026",
    type: "experience",
    headline:
      "Built a ChromaDB RAG pipeline that removed 83% of manual ETL effort and sped up PCAP analysis by 50%.",
    responsibilities: [
      "Built a secure internal RAG pipeline using ChromaDB and Python to automate ETL processing for feature PDFs, reducing manual effort by 83%.",
      "Developed AI-powered code review automation tools through the Nokia LLM Gateway to analyze code context, detect logical issues, and improve engineering review workflows by 20%.",
      "Created a high-performance Python-based network traffic analysis tool using TShark and multiprocessing, increasing PCAP processing throughput by 50%.",
      "Improved retrieval accuracy through advanced chunking, embedding optimization, and re-ranking techniques for LLM-powered workflows.",
    ],
    techStack: [
      "Python",
      "Artificial Intelligence",
      "Large Language Models",
      "Automation",
      "Test Automation",
      "Embeddings",
      "RAG Pipelines",
    ],
  },
  {
    id: 3,
    position: "Software Engineer Intern",
    company: "ONEBIT INC.",
    location: "Chicago, IL",
    duration: "Sept 2025 – Dec 2025",
    type: "experience",
    headline:
      "AI-driven categorization for 200–400 businesses, cutting review time 71% with 90%+ test coverage.",
    responsibilities: [
      "Improved transaction categorization and reporting accuracy by building intelligent filters and real-time category search systems using Node.js and Prisma for 200–400 businesses.",
      "Integrated AI-powered categorization workflows that reduced manual review time by 71% and improved financial reporting accuracy.",
      "Fixed inconsistencies in uncategorized expense calculations and improved front-end data handling to align with backend financial logic, reducing calculation errors by 40%.",
      "Increased platform reliability by implementing automated Cypress testing, SHA-256 transaction deduplication, and cross-account transfer matching, achieving 90%+ test coverage.",
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "JWT",
      "Prisma",
      "React",
      "Cypress",
      "SHA-256",
      "PostgreSQL",
    ],
  },
  {
    id: 4,
    position: "Full Stack Developer Intern",
    company: "Find Me LLC",
    location: "Charlotte, NC (Remote)",
    duration: "May 2025 – Aug 2025",
    type: "experience",
    headline:
      "Secure Node/Express APIs with JWT + Joi that cut invalid requests by 40%; 90%+ Jest coverage.",
    responsibilities: [
      "Developed secure backend services for user portfolio platforms with 6+ personalized pages using Node.js and Express.js.",
      "Implemented JWT authentication and Joi validation to improve access control, reduce invalid API requests by 40%, and strengthen data integrity.",
      "Built modular RESTful APIs and automated unit testing with Jest, achieving 90%+ test coverage and reducing integration issues across services.",
      "Collaborated on frontend development by converting Figma designs into responsive user interfaces and implementing Zod validation for improved form handling.",
      "Improved user experience by implementing session storage for workflow continuity, increasing form completion rates by 30%.",
      "Designed and deployed a real-time visitor tracking proof-of-concept using Azure Functions and Cosmos DB on Microsoft Azure.",
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "JWT",
      "Joi",
      "Jest",
      "Zod",
      "Azure Functions",
      "Cosmos DB",
      "Microsoft Azure",
      "Figma",
    ],
  },
  {
    id: 5,
    position: "Android Developer Intern",
    company: "Visanka Technologies",
    location: "Remote",
    duration: "Feb 2023 – Mar 2023",
    type: "experience",
    headline:
      "Shipped a Java job-portal app whose new features lifted engagement by 40%.",
    responsibilities: [
      "Engineered an Android (Java) job portal application that streamlined job discovery for candidates while enabling employers to efficiently manage applications and hiring workflows.",
      "Introduced core features like Applications, Management, and User Authentication, resulting in a 40% improvement in user engagement.",
      "Developed comprehensive mobile application with seamless user experience and robust backend integration",
    ],
    techStack: [
      "Java",
      "MySQL",
      "XAMPP",
      "Firebase",
      "PHP",
      "Android Studio",
      "GitHub",
    ],
  },
  // Education
  {
    id: 6,
    position: "Master of Computer Science",
    company: "Illinois Institute of Technology",
    location: "Chicago, IL",
    duration: "Aug 2024 - May 2026",
    type: "education",
    headline:
      "M.S. Computer Science · 3.8 GPA · Graduate Teaching Assistant for Advanced Database Organization.",
    gpa: "3.8/4.0",
    coursework: [
      "Enterprise Web Applications",
      "Machine Learning",
      "Big Data Technologies",
      "Software Systems Architecture",
      "Mobile Application Development",
      "Software Modelling Development using UML",
      "Data Preparation and Analysis",
    ],
  },
  {
    id: 7,
    position: "Bachelor of Engineering in Computer Engineering",
    company: "Savitribai Phule Pune University",
    location: "Pune, India",
    duration: "Jan 2020 - Jun 2024",
    type: "education",
    headline:
      "B.E. Computer Engineering · 8.93/10 · Android Developer Lead for a 50-student GDSC team.",
    gpa: "8.93/10.0",
    coursework: [
      "Object-Oriented Programming",
      "Data Structures and Algorithms",
      "Computer Networks",
      "Web Technology",
      "Software Engineering",
      "Database Management Systems",
      "Operating Systems",
      "Deep learning",
    ],
  },
];

const tabs = [
  { key: "experience", label: "Work Experience", icon: "work" },
  { key: "education", label: "Education", icon: "school" },
];

const EducationExperience = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const filteredData = experienceData.filter((item) => item.type === activeTab);
  const [selectedId, setSelectedId] = useState(filteredData[0]?.id);
  const tabRefs = useRef({});
  const pillRef = useRef(null);

  const selectedItem =
    filteredData.find((i) => i.id === selectedId) ?? filteredData[0];

  useEffect(() => {
    setSelectedId(experienceData.find((i) => i.type === activeTab)?.id);
  }, [activeTab]);

  const movePill = useCallback(() => {
    const el = tabRefs.current[activeTab];
    if (!el || !pillRef.current) return;
    pillRef.current.style.left = `${el.offsetLeft}px`;
    pillRef.current.style.width = `${el.offsetWidth}px`;
  }, [activeTab]);

  useEffect(() => {
    movePill();
    window.addEventListener("resize", movePill);
    document.fonts?.ready?.then(movePill);
    return () => window.removeEventListener("resize", movePill);
  }, [movePill]);

  return (
    <section id="education-experience" className="section">
      <div className="blob -right-32 top-1/3 h-96 w-96 bg-violet-500/20" aria-hidden="true" />

      <div className="container">
        <div className="section-head reveal items-center text-center">
          <span className="eyebrow">02 — Journey</span>
          <h2 className="headline-2">
            Education &amp; <span className="text-gradient">work experience</span>
          </h2>

          {/* Tabs */}
          <div
            className="relative mt-2 inline-flex rounded-full border border-ink-200/80 bg-white/70 p-1 backdrop-blur dark:border-white/10 dark:bg-white/[0.04]"
            role="tablist"
          >
            <span
              ref={pillRef}
              className="absolute inset-y-1 rounded-full bg-brand-gradient shadow-glow-sm transition-[left,width] duration-300 ease-out"
              aria-hidden="true"
            />
            {tabs.map(({ key, label, icon }) => (
              <button
                key={key}
                ref={(el) => (tabRefs.current[key] = el)}
                role="tab"
                aria-selected={activeTab === key}
                onClick={() => setActiveTab(key)}
                className={`relative z-10 inline-flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-300 sm:px-5 ${
                  activeTab === key
                    ? "text-white"
                    : "text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white"
                }`}
              >
                <span className="material-symbols-rounded text-[18px]">{icon}</span>
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.4fr] lg:gap-8">
          {/* Timeline list */}
          <ol className="reveal relative space-y-3 lg:pl-6">
            <span
              className="absolute bottom-6 left-[3px] top-6 hidden w-px bg-gradient-to-b from-brand-400/0 via-brand-400/60 to-brand-400/0 lg:block"
              aria-hidden="true"
            />
            {filteredData.map((item) => {
              const active = selectedItem?.id === item.id;
              return (
                <li key={item.id} className="relative">
                  <span
                    className={`absolute -left-[1.62rem] top-7 hidden h-2.5 w-2.5 rounded-full ring-4 ring-[#f7f7fb] transition-colors dark:ring-ink-950 lg:block ${
                      active ? "bg-brand-500" : "bg-ink-300 dark:bg-ink-600"
                    }`}
                    aria-hidden="true"
                  />
                  <button
                    onClick={() => setSelectedId(item.id)}
                    aria-pressed={active}
                    className={`card w-full p-5 text-left transition-all ${
                      active
                        ? "border-brand-300/70 shadow-glow-sm dark:border-brand-400/50"
                        : "card-hover"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="title-1 truncate">{item.company}</h3>
                        <p className="mt-0.5 truncate text-sm text-ink-600 dark:text-ink-300">
                          {item.position}
                        </p>
                      </div>
                      <span
                        className={`material-symbols-rounded shrink-0 text-[20px] transition-transform ${
                          active ? "translate-x-0 text-brand-500" : "-translate-x-1 text-ink-400"
                        }`}
                      >
                        arrow_forward
                      </span>
                    </div>
                    {item.headline && (
                      <p className="mt-2 text-[13px] leading-snug text-ink-700 dark:text-ink-200">
                        {item.headline}
                      </p>
                    )}
                    <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-ink-500 dark:text-ink-400">
                      <span className={active ? "chip-brand" : "chip"}>{item.duration}</span>
                      <span className="inline-flex items-center gap-1">
                        <span className="material-symbols-rounded text-[16px]">location_on</span>
                        {item.location}
                      </span>
                    </div>
                  </button>
                </li>
              );
            })}
          </ol>

          {/* Detail panel */}
          <div className="reveal" style={{ transitionDelay: "120ms" }}>
            {selectedItem && (
              <article
                key={selectedItem.id}
                className="card animate-reveal p-6 sm:p-8 lg:sticky lg:top-24"
              >
                <div className="flex items-start gap-4">
                  <span className="icon-tile h-14 w-14 rounded-2xl">
                    <span className="material-symbols-rounded text-[26px]">
                      {selectedItem.type === "experience" ? "work" : "school"}
                    </span>
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-2xl font-semibold tracking-tight">
                      {selectedItem.position}
                    </h3>
                    <p className="mt-1 font-medium text-brand-600 dark:text-brand-300">
                      {selectedItem.company}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-600 dark:text-ink-300">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="material-symbols-rounded text-[18px]">location_on</span>
                    {selectedItem.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="material-symbols-rounded text-[18px]">schedule</span>
                    {selectedItem.duration}
                  </span>
                  {selectedItem.type === "education" && (
                    <span className="inline-flex items-center gap-1.5 font-medium">
                      <span className="material-symbols-rounded text-[18px] text-amber-500">grade</span>
                      GPA: {selectedItem.gpa}
                    </span>
                  )}
                </div>

                <div className="divider my-6" />

                {selectedItem.type === "experience" ? (
                  <>
                    <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400">
                      <span className="material-symbols-rounded text-[18px] text-brand-500">star</span>
                      Key achievements
                    </h4>
                    <ul className="space-y-3">
                      {selectedItem.responsibilities.map((r, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gradient" />
                          <p className="text-[15px] leading-relaxed text-ink-700 dark:text-ink-200">{r}</p>
                        </li>
                      ))}
                    </ul>

                    <h4 className="mb-3 mt-7 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400">
                      <span className="material-symbols-rounded text-[18px] text-brand-500">code</span>
                      Technologies used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.techStack.map((tech) => (
                        <span key={tech} className="chip">{tech}</span>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400">
                      <span className="material-symbols-rounded text-[18px] text-brand-500">menu_book</span>
                      Relevant coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.coursework.map((course) => (
                        <span key={course} className="chip">{course}</span>
                      ))}
                    </div>
                  </>
                )}
              </article>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
