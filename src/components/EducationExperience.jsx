import { useState, useRef, useEffect } from "react";

const experienceData = [
  // Work Experience
  {
    id: 1,
    position: "Software Engineer Intern",
    company: "ONEBIT INC.",
    location: "Chicago, IL",
    duration: "Sept 2025 – Present",
    type: "experience",
    responsibilities: [
      "Improved transaction categorization and reporting accuracy by developing intelligent filters, real-time category search, using React, Node.js, and Prisma, while integrating an AI-powered categorization that uses contextual cues and embeddings for automated labeling.",
      "Developed an AI-driven recommendation module that generates personalized financial summaries, insights, and actionable suggestions to enhance user and business financial decision-making.",
      "Enhanced reliability through automated Cypress tests, transaction deduplication via SHA-256 hashing, and cross-account transfer matching, strengthening data integrity and user experience across the platform."
    ],
    techStack: ["Node.js", "Express.js", "JWT", "Prisma", "React", "Cypress", "SHA-256", "PostgreSQL"]
  },
  {
    id: 2,
    position: "Full Stack Developer Intern",
    company: "Find Me LLC",
    location: "Charlotte, NC (Remote)",
    duration: "May 2025 – Aug 2025",
    type: "experience",
    responsibilities: [
      "Built and maintained the backend for secure user portfolios with 6+ personalized pages using Node.js and Express.js",
      "Implemented JWT-based authentication for user-specific access control and applied robust Joi validation, reducing invalid API requests by 40% and improving data integrity",
      "Developed modular RESTful APIs and wrote extensive unit tests using Jest achieving 90%+ code coverage, significantly improving backend reliability and reducing integration bugs",
      "Collaborated on frontend development by transforming Figma designs into pixel-perfect interfaces, added Zod validations for robust form handling",
      "Utilized session storage to enhance user continuity—resulting in a 30% boost in form completion rate",
      "Contributed to system design efforts by designing and prototyping a real-time visitor tracking feature using Azure Functions and Cosmos DB, successfully deployed and tested on Microsoft Azure"
    ],
    techStack: ["Node.js", "Express.js", "JWT", "Joi", "Jest", "Zod", "Azure Functions", "Cosmos DB", "Microsoft Azure", "Figma"]
  },
  {
    id: 3,
    position: "Android Developer Intern",
    company: "Visanka Technologies",
    location: "Remote",
    duration: "Feb 2023 – Mar 2023",
    type: "experience",
    responsibilities: [
      "Built an Android-based (JAVA) Job Portal App simplifying job searches for seekers, while assisting employers in managing applications and optimizing the hiring process",
      "Added features like Applications Management and User Authentication, resulting in a 40% improvement in user engagement",
      "Developed comprehensive mobile application with seamless user experience and robust backend integration"
    ],
    techStack: ["Java", "MySQL", "XAMPP", "Firebase", "PHP", "Android Studio", "GitHub"]
  },
  // Education
  {
    id: 4,
    position: "Master of Computer Science",
    company: "Illinois Institute of Technology",
    location: "Chicago, IL",
    duration: "2024 - 2026 (Expected)",
    type: "education",
    gpa: "3.83/4.0",
    coursework: [
      "Enterprise Web Applications",
      "Machine Learning", 
      "Software Systems Architecture",
      "Mobile Application Development",
      "Software Modelling Development using UML",
      "Data Preparation and Analysis"
    ]
  },
  {
    id: 5,
    position: "Bachelor of Engineering in Computer Engineering",
    company: "Savitribai Phule Pune University",
    location: "Pune, India",
    duration: "2020 - 2024",
    type: "education",
    gpa: "8.93/10.0",
    coursework: [
      "Object-Oriented Programming",
      "Web Technology",
      "Database Management Systems", 
      "Computer Networks",
      "Operating Systems",
      "Software Engineering"
    ]
  }
];

const EducationExperience = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const [expandedCards, setExpandedCards] = useState({});
  const experienceTabRef = useRef(null);
  const educationTabRef = useRef(null);
  const activeBackgroundRef = useRef(null);

  const filteredData = experienceData.filter(item => item.type === activeTab);

  const toggleCardExpansion = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const updateActiveBackground = () => {
    if (!activeBackgroundRef.current) return;
    
    const activeTabElement = activeTab === "experience" ? experienceTabRef.current : educationTabRef.current;
    if (activeTabElement) {
      const { offsetLeft, offsetWidth } = activeTabElement;
      activeBackgroundRef.current.style.left = `${offsetLeft}px`;
      activeBackgroundRef.current.style.width = `${offsetWidth}px`;
    }
  };

  useEffect(() => {
    updateActiveBackground();
  }, [activeTab]);

  useEffect(() => {
    updateActiveBackground();
    window.addEventListener('resize', updateActiveBackground);
    return () => window.removeEventListener('resize', updateActiveBackground);
  }, []);

  return (
    <section id="education-experience" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="headline-2 mb-8 text-zinc-900 dark:text-zinc-50">
            Education and Work Experience
          </h2>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-zinc-100 dark:bg-zinc-800 rounded-xl p-1 relative">
              <button
                ref={experienceTabRef}
                onClick={() => setActiveTab("experience")}
                className={`relative z-10 px-6 py-3 text-sm font-medium rounded-lg transition-colors duration-300 whitespace-nowrap ${
                  activeTab === "experience"
                    ? "text-white"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                }`}
              >
                WORK EXPERIENCE
              </button>
              <button
                ref={educationTabRef}
                onClick={() => setActiveTab("education")}
                className={`relative z-10 px-6 py-3 text-sm font-medium rounded-lg transition-colors duration-300 whitespace-nowrap ${
                  activeTab === "education"
                    ? "text-white"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                }`}
              >
                EDUCATION
              </button>
              
              {/* Active Tab Background */}
              <div
                ref={activeBackgroundRef}
                className="absolute top-1 bottom-1 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-lg transition-all duration-300 ease-in-out"
              ></div>
            </div>
          </div>
        </div>

        {/* Column Timeline Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Timeline Line - Vertical for large screens */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-sky-400 to-blue-400 hidden xl:block transform -translate-x-1/2"></div>
            
            {/* Cards Grid */}
            <div className="grid gap-8 md:grid-cols-2 xl:gap-12">
              {filteredData.map((item, index) => (
                <div key={item.id} className="relative">
                  {/* Timeline Dot - Positioned for column layout */}
                  <div className={`absolute w-4 h-4 bg-gradient-to-br from-emerald-400 to-sky-400 rounded-full border-4 border-white dark:border-zinc-900 shadow-lg hidden xl:block z-10 top-6 ${
                    index % 2 === 0 ? '-right-2' : '-left-2'
                  }`}></div>
                  
                  {/* Card */}
                  <div className="group">
                    <div className="relative p-6 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm hover:border-emerald-300 dark:hover:border-emerald-600 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-sky-500 flex items-center justify-center">
                              <span className="material-symbols-rounded text-white text-lg">
                                {item.type === 'experience' ? 'work' : 'school'}
                              </span>
                            </div>
                            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                              item.type === 'experience' 
                                ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
                                : 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300'
                            }`}>
                              {item.type === 'experience' ? 'Internship' : item.position.includes('Master') ? 'Graduate' : 'Undergraduate'}
                            </span>
                          </div>
                          
                          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                            {item.position}
                          </h3>
                          
                          <p className="text-lg font-medium text-emerald-600 dark:text-emerald-400 mb-2">
                            {item.company}
                          </p>
                          
                          <div className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                            <span className="flex items-center gap-1">
                              <span className="material-symbols-rounded text-sm">location_on</span>
                              {item.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <span className="material-symbols-rounded text-sm">schedule</span>
                              {item.duration}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="mb-4">
                        {item.type === 'experience' ? (
                          <div>
                            <h4 className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-3">Key Achievements:</h4>
                            <div className="space-y-2">
                              {/* Always show first achievement */}
                              <div className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></span>
                                <span className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                                  {item.responsibilities[0]}
                                </span>
                              </div>
                              
                              {/* Show remaining achievements if expanded */}
                              {expandedCards[item.id] && item.responsibilities.length > 1 && (
                                <div className="space-y-2 mt-3 pt-3 border-t border-zinc-200 dark:border-zinc-700">
                                  {item.responsibilities.slice(1).map((responsibility, idx) => (
                                    <div key={idx + 1} className="flex items-start gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></span>
                                      <span className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                                        {responsibility}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              )}
                              
                              {/* View More/Less Button for Experience */}
                              {item.responsibilities.length > 1 && (
                                <div className="mt-3">
                                  <button
                                    onClick={() => toggleCardExpansion(item.id)}
                                    className="text-sm text-emerald-600 dark:text-emerald-400 font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors flex items-center gap-1"
                                  >
                                    <span>
                                      {expandedCards[item.id] ? 'View less' : `View ${item.responsibilities.length - 1} more achievements`}
                                    </span>
                                    <span className={`material-symbols-rounded text-sm transition-transform duration-200 ${
                                      expandedCards[item.id] ? 'rotate-180' : ''
                                    }`}>
                                      keyboard_arrow_down
                                    </span>
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-3">
                            {/* GPA */}
                            <div className="flex items-center gap-1 text-sm">
                              <span className="material-symbols-rounded text-sm text-amber-500">grade</span>
                              <span className="font-medium text-zinc-700 dark:text-zinc-300">GPA: {item.gpa}</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Tech Stack for Experience / Coursework for Education */}
                      <div>
                        {item.type === 'experience' ? (
                          <div className="flex flex-wrap gap-2">
                            {item.techStack.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <div>
                            <h4 className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-3">Relevant Coursework:</h4>
                            <div className="flex flex-wrap gap-2">
                              {item.coursework.map((course, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors"
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
