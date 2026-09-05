const skillCategories = [
  {
    title: "Backend",
    icon: "storage",
    skills: [
      { imgSrc: "/images/python.svg", label: "Python" },
      { imgSrc: "/images/java.svg", label: "Java" },
      { imgSrc: "/images/nodejs.svg", label: "Node.js" },
      { imgSrc: "/images/expressjs.svg", label: "Express.js" },
      { imgSrc: "/images/flask.svg", label: "Flask" },
      { imgSrc: "/images/django.svg", label: "Django" },
      { imgSrc: "/images/prisma.svg", label: "Prisma" },
      { imgSrc: "/images/jwt.svg", label: "JWT Auth" },
      { imgSrc: "/images/php.svg", label: "PHP" },
    ],
  },
  {
    title: "Frontend",
    icon: "code",
    skills: [
      { imgSrc: "/images/react.svg", label: "React" },
      { imgSrc: "/images/nextjs.svg", label: "Next.js" },
      { imgSrc: "/images/typescript.svg", label: "TypeScript" },
      { imgSrc: "/images/javascript.svg", label: "JavaScript" },
      { imgSrc: "/images/redux.svg", label: "Redux" },
      { imgSrc: "/images/tailwindcss.svg", label: "Tailwind CSS" },
      { imgSrc: "/images/html5.svg", label: "HTML5" },
      { imgSrc: "/images/css3.svg", label: "CSS3" },
      { imgSrc: "/images/angular.svg", label: "Angular" },
      { imgSrc: "/images/bootstrap.svg", label: "Bootstrap" },
    ],
  },
  {
    title: "Databases",
    icon: "database",
    skills: [
      { imgSrc: "/images/postgres.jpeg", label: "PostgreSQL" },
      { imgSrc: "/images/mysql.svg", label: "MySQL" },
      { imgSrc: "/images/sql.svg", label: "SQL" },
      { imgSrc: "/images/mongodb.svg", label: "MongoDB" },
      { imgSrc: "/images/firestore.svg", label: "Firestore" },
      { imgSrc: "/images/firebase.svg", label: "Firebase" },
      { imgSrc: "/images/Chroma.svg", label: "Chroma DB" },
      { imgSrc: "/images/elasticsearch.svg", label: "Elasticsearch" },
      { imgSrc: "/images/sqlite.svg", label: "SQLite" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    skills: [
      { imgSrc: "/images/gcp.svg", label: "GCP" },
      { imgSrc: "/images/aws.jpeg", label: "AWS" },
      { imgSrc: "/images/azure.svg", label: "Azure" },
      { imgSrc: "/images/docker.svg", label: "Docker" },
      { imgSrc: "/images/kubernetes.svg", label: "Kubernetes" },
      { imgSrc: "/images/githubactions.svg", label: "CI/CD" },
      { imgSrc: "/images/git.svg", label: "Git" },
      { imgSrc: "/images/github.svg", label: "GitHub" },
      { imgSrc: "/images/vercel.svg", label: "Vercel" },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: "psychology",
    skills: [
      { imgSrc: "/images/RAG.jpg", label: "RAG Pipelines" },
      { imgSrc: "/images/openai.svg", label: "OpenAI" },
      { imgSrc: "/images/claude.svg", label: "Claude" },
      { imgSrc: "/images/langchain.svg", label: "LangChain" },
      { imgSrc: "/images/langgraph.png", label: "LangGraph" },
      { imgSrc: "/images/tensorflow.svg", label: "TensorFlow" },
      { imgSrc: "/images/streamlit.svg", label: "Streamlit" },
    ],
  },
  {
    title: "Testing & Tooling",
    icon: "build",
    skills: [
      { imgSrc: "/images/jest.svg", label: "Jest" },
      { imgSrc: "/images/cypress.svg", label: "Cypress" },
      { imgSrc: "/images/postman.svg", label: "Postman" },
      { imgSrc: "/images/zod.svg", label: "Zod" },
      { imgSrc: "/images/wireshark.svg", label: "TShark" },
      { imgSrc: "/images/googleanalytics.svg", label: "Google Analytics" },
      { imgSrc: "/images/googletagmanager.svg", label: "GTM" },
      { imgSrc: "/images/figma.svg", label: "Figma" },
    ],
  },
  {
    title: "Mobile & Other",
    icon: "phone_android",
    skills: [
      { imgSrc: "/images/android.svg", label: "Android" },
      { imgSrc: "/images/kotlin.svg", label: "Kotlin" },
      { imgSrc: "/images/flutter.svg", label: "Flutter" },
      { imgSrc: "/images/dart.svg", label: "Dart" },
      { imgSrc: "/images/cplusplus.svg", label: "C++" },
      { imgSrc: "/images/latex.svg", label: "LaTeX" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="blob -left-40 top-20 h-96 w-96 bg-brand-500/20" aria-hidden="true" />

      <div className="container">
        <div className="section-head reveal lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-4">
            <span className="eyebrow">03 — Toolbox</span>
            <h2 className="headline-2">
              Skills &amp; <span className="text-gradient">technologies</span>
            </h2>
          </div>
          <p className="max-w-[44ch] text-sm leading-relaxed text-ink-600 dark:text-ink-300">
            The languages, frameworks and platforms I reach for most — from
            backend services and data stores to LLM tooling and cloud infra.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <div
              key={category.title}
              className={`card card-hover reveal group flex flex-col p-6 ${i === skillCategories.length - 1 && skillCategories.length % 3 === 1 ? "lg:col-span-3" : ""}`}
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="icon-tile transition-transform duration-300 group-hover:scale-105">
                  <span className="material-symbols-rounded text-[22px]">{category.icon}</span>
                </span>
                <div>
                  <h3 className="title-1">{category.title}</h3>
                  <p className="text-xs text-ink-500 dark:text-ink-400">
                    {category.skills.length} tools
                  </p>
                </div>
              </div>

              <ul className={`grid grid-cols-2 gap-2 ${i === skillCategories.length - 1 && skillCategories.length % 3 === 1 ? "lg:grid-cols-6" : ""}`}>
                {category.skills.map((skill) => (
                  <li
                    key={skill.label}
                    className="flex items-center gap-2.5 rounded-xl border border-ink-200/70 bg-white/60 px-3 py-2 text-sm font-medium text-ink-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:bg-white dark:border-white/[0.06] dark:bg-white/[0.03] dark:text-ink-100 dark:hover:border-brand-400/40 dark:hover:bg-white/[0.06]"
                  >
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-white p-1 ring-soft dark:bg-white/90">
                      <img
                        src={skill.imgSrc}
                        alt=""
                        width={20}
                        height={20}
                        loading="lazy"
                        className="h-5 w-5 object-contain"
                      />
                    </span>
                    <span className="leading-tight">{skill.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
