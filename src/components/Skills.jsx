/**
 * Copyright 2024 Nishant Khandhar
 * @license Apache-2.0
 */

/**
 * Components
 */

import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/src/assets/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/src/assets/images/angular.svg",
    label: "Angular",
    desc: "Frontend Framework",
  },
  {
    imgSrc: "/src/assets/images/react.svg",
    label: "React",
    desc: "Frontend Framework",
  },
  {
    imgSrc: "/src/assets/images/flutter.svg",
    label: "Flutter",
    desc: "Mobile Development",
  },
  {
    imgSrc: "/src/assets/images/dart.svg",
    label: "Dart",
    desc: "Programming Language",
  },
  {
    imgSrc: "/src/assets/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/src/assets/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/src/assets/images/java.svg",
    label: "Java",
    desc: "Backend Development",
  },
  {
    imgSrc: "/src/assets/images/python.svg",
    label: "Python",
    desc: "Programming Language",
  },
  {
    imgSrc: "/src/assets/images/cplusplus.svg",
    label: "C++",
    desc: "Programming Language",
  },
  {
    imgSrc: "/src/assets/images/php.svg",
    label: "PHP",
    desc: "Backend Development",
  },
  {
    imgSrc: "/src/assets/images/html5.svg",
    label: "HTML5",
    desc: "Markup Language",
  },
  {
    imgSrc: "/src/assets/images/css3.svg",
    label: "CSS3",
    desc: "User Interface",
  },
  {
    imgSrc: "/src/assets/images/mysql.svg",
    label: "MySQL",
    desc: "Database",
  },
  {
    imgSrc: "/src/assets/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/src/assets/images/sqlite.svg",
    label: "SQLite",
    desc: "Database",
  },
  {
    imgSrc: "/src/assets/images/git.svg",
    label: "Git",
    desc: "Version Control",
  },
  {
    imgSrc: "/src/assets/images/postman.svg",
    label: "Postman",
    desc: "API Testing",
  },
  {
    imgSrc: "/src/assets/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "CSS Framework",
  },
  {
    imgSrc: "/src/assets/images/firebase.svg",
    label: "Firebase",
    desc: "Backend-as-a-Service",
  },
  {
    imgSrc: "/src/assets/images/android.svg",
    label: "Android",
    desc: "Mobile Development",
  },
  {
    imgSrc: "/src/assets/images/django.svg",
    label: "Django",
    desc: "Web Framework",
  },
  {
    imgSrc: "/src/assets/images/flask.svg",
    label: "Flask",
    desc: "Web Framework",
  },
  {
    imgSrc: "/src/assets/images/latex.svg",
    label: "LaTeX",
    desc: "Document Preparation",
  },
  {
    imgSrc: "/src/assets/images/bootstrap.svg",
    label: "Bootstrap",
    desc: "CSS Framework",
  },
  {
    imgSrc: "/src/assets/images/nextjs.svg",
    label: "Next.js",
    desc: "React Framework",
  },
  {
    imgSrc: "/src/assets/images/vercel.svg",
    label: "Vercel",
    desc: "Deployment Platform",
  },
  {
    imgSrc: "/src/assets/images/figma.svg",
    label: "Figma",
    desc: "Design Tool",
  },
];

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="headline-2">Skills and TechStack</h2>
        {/* <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites and applications.
        </p> */}

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
