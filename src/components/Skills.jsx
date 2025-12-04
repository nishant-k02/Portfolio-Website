const skillCategories = [
  {
    title: "Backend",
    icon: "storage",
    skills: [
      { imgSrc: "/images/java.svg", label: "Java" },
      { imgSrc: "/images/python.svg", label: "Python" },
      { imgSrc: "/images/nodejs.svg", label: "Node.js" },
      { imgSrc: "/images/flask.svg", label: "Flask" },
      { imgSrc: "/images/django.svg", label: "Django" },
      { imgSrc: "/images/expressjs.svg", label: "ExpressJS" },
      { imgSrc: "/images/php.svg", label: "PHP" },
    ]
  },
  {
    title: "Frontend",
    icon: "code",
    skills: [
      { imgSrc: "/images/react.svg", label: "React" },
      { imgSrc: "/images/javascript.svg", label: "JavaScript" },
      { imgSrc: "/images/html5.svg", label: "HTML5" },
      { imgSrc: "/images/css3.svg", label: "CSS3" },
      { imgSrc: "/images/angular.svg", label: "Angular" },
      { imgSrc: "/images/nextjs.svg", label: "Next.js" },
      { imgSrc: "/images/tailwindcss.svg", label: "TailwindCSS" },
      { imgSrc: "/images/bootstrap.svg", label: "Bootstrap" },
    ]
  },
  {
    title: "Databases",
    icon: "database",
    skills: [
      { imgSrc: "/images/mysql.svg", label: "MySQL" },
      { imgSrc: "/images/mongodb.svg", label: "MongoDB" },
      { imgSrc: "/images/sqlite.svg", label: "SQLite" },
      { imgSrc: "/images/firebase.svg", label: "Firebase" },
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    skills: [
      { imgSrc: "/images/git.svg", label: "Git" },
      { imgSrc: "/images/vercel.svg", label: "Vercel" },
      { imgSrc: "/images/postman.svg", label: "Postman" },
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: "psychology",
    skills: [
      { imgSrc: "/images/openai.svg", label: "OpenAI" },
      { imgSrc: "/images/langgraph.png", label: "LangGraph" },
    ]
  },
  {
    title: "Mobile & Other",
    icon: "phone_android",
    skills: [
      { imgSrc: "/images/flutter.svg", label: "Flutter" },
      { imgSrc: "/images/dart.svg", label: "Dart" },
      { imgSrc: "/images/android.svg", label: "Android" },
      { imgSrc: "/images/cplusplus.svg", label: "C++" },
      { imgSrc: "/images/figma.svg", label: "Figma" },
      { imgSrc: "/images/latex.svg", label: "LaTeX" },
    ]
  }
];

const Skills = () => {
  return (
    <section className="section relative overflow-hidden" id="skills">
      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-left mb-10">
            <h2 className="headline-2 mb-8 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 bg-clip-text text-transparent">
              Skills and Technologies
            </h2>
        </div>

        {/* Skills Grid - Modern Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group relative"
            >
              {/* Card Background with Glassmorphism */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/30 dark:from-zinc-800/60 dark:to-zinc-900/30 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-zinc-700/50 shadow-xl shadow-black/5 dark:shadow-black/20"></div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400/0 via-sky-300/0 to-sky-500/0 group-hover:from-sky-400/8 group-hover:via-sky-300/8 group-hover:to-sky-500/8 rounded-3xl transition-all duration-500"></div>
              
              {/* Card Content */}
              <div className="relative p-8 min-h-[380px] flex flex-col">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-400 to-sky-500 flex items-center justify-center shadow-lg shadow-sky-400/25 group-hover:shadow-sky-400/40 transition-all duration-300 group-hover:scale-110">
                      <span className="material-symbols-rounded text-zinc-950 text-2xl">
                        {category.icon}
                      </span>
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-br from-sky-400 to-sky-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-sky-300 rounded-full mt-2 group-hover:w-16 transition-all duration-300"></div>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="flex-1 grid grid-cols-2 gap-4 content-start">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/40 dark:bg-zinc-800/40 backdrop-blur-sm border border-white/30 dark:border-zinc-700/30 hover:bg-white/60 dark:hover:bg-zinc-700/60 hover:border-sky-300/50 dark:hover:border-sky-400/50 hover:shadow-lg hover:shadow-sky-400/10 transition-all duration-300 group/skill hover:-translate-y-0.5"
                    >
                      <div className="relative">
                        <img
                          src={skill.imgSrc}
                          alt={skill.label}
                          width={28}
                          height={28}
                          className="w-7 h-7 object-contain group-hover/skill:scale-110 transition-transform duration-300 relative z-10"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-300/20 to-sky-400/20 rounded-lg blur-sm opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 group-hover/skill:text-sky-600 dark:group-hover/skill:text-sky-400 transition-colors duration-300 leading-tight">
                        {skill.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom Accent */}
                <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-sky-400/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
