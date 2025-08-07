import React from "react";
import ExperienceCard from "./ExperienceCard";

const experienceData = [
  {
    position: "Software Developer Intern - Full Stack Developer",
    company: "Find Me LLC",
    location: "Charlotte, NC (Remote)",
    duration: "Present",
    responsibilities: [
      "Built and maintained the backend for secure user portfolios with 6+ personalized pages using Node.js and Express.js",
      "Implemented JWT-based authentication for user-specific access control and applied robust Joi validation, reducing invalid API requests by 40% and improving data integrity",
      "Developed modular RESTful APIs and wrote extensive unit tests using Jest achieving 90%+ code coverage, significantly improving backend reliability and reducing integration bugs",
      "Collaborated on frontend development by transforming Figma designs into pixel-perfect interfaces, added Zod validations for robust form handling",
      "Utilized session storage to enhance user continuity—resulting in a 30% boost in form completion rate",
      "Contributed to system design efforts by designing and prototyping a real-time visitor tracking feature using Azure Functions and Cosmos DB, successfully deployed and tested on Microsoft Azure"
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
      "Figma"
    ]
  },
  {
    position: "Software Developer Intern - Android Developer",
    company: "Visanka Technologies",
    location: "Remote",
    duration: "Feb 2023 – Mar 2023",
    responsibilities: [
      "Built an Android-based (JAVA) Job Portal App simplifying job searches for seekers, while assisting employers in managing applications and optimizing the hiring process",
      "Added features like Applications Management and User Authentication, resulting in a 40% improvement in user engagement",
      "Developed comprehensive mobile application with seamless user experience and robust backend integration"
    ],
    techStack: [
      "Java",
      "MySQL",
      "XAMPP",
      "Firebase",
      "PHP",
      "Android Studio",
      "GitHub"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="headline-2 mb-4 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
        </div>

        {/* Experience Grid */}
        <div className="grid gap-6 lg:grid-cols-1 xl:grid-cols-2 lg:gap-8">
          {experienceData.map((experience, index) => (
            <ExperienceCard
              key={index}
              position={experience.position}
              company={experience.company}
              location={experience.location}
              duration={experience.duration}
              responsibilities={experience.responsibilities}
              techStack={experience.techStack}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 