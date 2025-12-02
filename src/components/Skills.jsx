import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/angular.svg",
    label: "Angular",
    desc: "Frontend Framework",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Frontend Framework",
  },
  {
    imgSrc: "/images/flutter.svg",
    label: "Flutter",
    desc: "Mobile Development",
  },
  {
    imgSrc: "/images/dart.svg",
    label: "Dart",
    desc: "Programming Language",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/images/java.svg",
    label: "Java",
    desc: "Backend Development",
  },
  {
    imgSrc: "/images/python.svg",
    label: "Python",
    desc: "Programming Language",
  },
  {
    imgSrc: "/images/cplusplus.svg",
    label: "C++",
    desc: "Programming Language",
  },
  {
    imgSrc: "/images/php.svg",
    label: "PHP",
    desc: "Backend Development",
  },
  {
    imgSrc: "/images/html5.svg",
    label: "HTML5",
    desc: "Markup Language",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS3",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/mysql.svg",
    label: "MySQL",
    desc: "Database",
  },
  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/images/sqlite.svg",
    label: "SQLite",
    desc: "Database",
  },
  {
    imgSrc: "/images/git.svg",
    label: "Git",
    desc: "Version Control",
  },
  {
    imgSrc: "/images/postman.svg",
    label: "Postman",
    desc: "API Testing",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "CSS Framework",
  },
  {
    imgSrc: "/images/firebase.svg",
    label: "Firebase",
    desc: "Backend-as-a-Service",
  },
  {
    imgSrc: "/images/android.svg",
    label: "Android",
    desc: "Mobile Development",
  },
  {
    imgSrc: "/images/django.svg",
    label: "Django",
    desc: "Web Framework",
  },
  {
    imgSrc: "/images/flask.svg",
    label: "Flask",
    desc: "Web Framework",
  },
  {
    imgSrc: "/images/latex.svg",
    label: "LaTeX",
    desc: "Document Preparation",
  },
  {
    imgSrc: "/images/bootstrap.svg",
    label: "Bootstrap",
    desc: "CSS Framework",
  },
  {
    imgSrc: "/images/nextjs.svg",
    label: "Next.js",
    desc: "React Framework",
  },
  {
    imgSrc: "/images/vercel.svg",
    label: "Vercel",
    desc: "Deployment Platform",
  },
  {
    imgSrc: "/images/figma.svg",
    label: "Figma",
    desc: "Design Tool",
  },
  {
    imgSrc: "/images/openai.svg",
    label: "OpenAI",
    desc: "LLM",
  },
  {
    imgSrc: "/images/langgraph.png",
    label: "LangGraph",
    desc: "LLM",
  },
];

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="headline-2">Skills and TechStack</h2>

        <div className="mt-6 grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
