import { useState, useRef, useEffect } from "react";

const experienceData = [
  // Work Experience
  {
    id: 1,
    position: "Agentic Software Engineer Co-op",
    company: "Nokia",
    location: "Chicago, IL",
    duration: "Jan 2026 – May 2026",
    type: "experience",
    responsibilities: [
      "Engineered a secure internal RAG pipeline using ChromaDB, automated ETL processing of feature PDFs with advanced chunking, embeddings (bge-m3 embeddings), and reranking (bge-reranker-large) to deliver automated test plans, reducing manual efforts by 83%.",
      "Built AI-powered code review automation tools via Nokia LLM Gateway, optimizing context-window usage and providing logical differences and bugs. Created a Python-based Wireshark log analysis tool while supporting TCP/UDP inspection and secure SSH configurations.",
    ],
    techStack: [
      "Python",
      "Artificial Intelligence",
      "Large Language Models",
      "Automation",
      "Test Automation",
      "Embeddings",
    ],
  },
  {
    id: 2,
    position: "Software Engineer Intern",
    company: "ONEBIT INC.",
    location: "Chicago, IL",
    duration: "Sept 2025 – Dec 2025",
    type: "experience",
    responsibilities: [
      "Optimized transaction categorization and reporting accuracy by architecting intelligent filters and real-time category search using Node.js and Prisma while integrating an AI-powered categorization for automated labeling.",
      "Fixed major inconsistencies in uncategorized expense calculations and optimized front-end data handling for seamless alignment with backend financial logic.",
      "Strengthened platform reliability through automated Cypress tests, transaction deduplication via SHA-256 hashing, and cross-account transfer matching, improving data integrity and user experience across the platform.",
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
    id: 3,
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
      "Contributed to system design efforts by designing and prototyping a real-time visitor tracking feature using Azure Functions and Cosmos DB, successfully deployed and tested on Microsoft Azure",
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
    id: 4,
    position: "Android Developer Intern",
    company: "Visanka Technologies",
    location: "Remote",
    duration: "Feb 2023 – Mar 2023",
    type: "experience",
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
    id: 5,
    position: "Master of Computer Science",
    company: "Illinois Institute of Technology",
    location: "Chicago, IL",
    duration: "Aug 2024 - May 2026",
    type: "education",
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
    id: 6,
    position: "Bachelor of Engineering in Computer Engineering",
    company: "Savitribai Phule Pune University",
    location: "Pune, India",
    duration: "Jan 2020 - Jun 2024",
    type: "education",
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

const EducationExperience = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const [selectedItem, setSelectedItem] = useState(null);
  const experienceTabRef = useRef(null);
  const educationTabRef = useRef(null);
  const activeBackgroundRef = useRef(null);

  const filteredData = experienceData.filter((item) => item.type === activeTab);

  // Set the first item as selected when tab changes
  useEffect(() => {
    if (filteredData.length > 0) {
      setSelectedItem(filteredData[0]);
    }
  }, [activeTab]);

  const updateActiveBackground = () => {
    if (!activeBackgroundRef.current) return;

    const activeTabElement =
      activeTab === "experience"
        ? experienceTabRef.current
        : educationTabRef.current;
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
    window.addEventListener("resize", updateActiveBackground);
    return () => window.removeEventListener("resize", updateActiveBackground);
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

        {/* Two Column Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left Column - Company/Institution Cards */}
            <div className="lg:col-span-2 space-y-4">
              {filteredData.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`group cursor-pointer transition-all duration-300 ${
                    selectedItem?.id === item.id
                      ? "transform scale-105"
                      : "hover:transform hover:scale-102"
                  }`}
                >
                  <div
                    className={`relative p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
                      selectedItem?.id === item.id
                        ? "border-sky-300 dark:border-sky-600 bg-gradient-to-br from-sky-50 to-emerald-50 dark:from-sky-900/20 dark:to-emerald-900/20 shadow-xl shadow-sky-500/10"
                        : "border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 hover:border-sky-300 dark:hover:border-sky-600 hover:shadow-xl hover:shadow-sky-500/10"
                    }`}
                  >
                    {/* Company/Institution Icon */}
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          selectedItem?.id === item.id
                            ? "bg-gradient-to-br from-sky-400 to-emerald-500 shadow-lg"
                            : "bg-gradient-to-br from-emerald-400 to-sky-500"
                        }`}
                      >
                        <span className="material-symbols-rounded text-white text-xl">
                          {item.type === "experience" ? "business" : "school"}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`font-semibold text-lg leading-tight transition-colors ${
                            selectedItem?.id === item.id
                              ? "text-sky-700 dark:text-sky-300"
                              : "text-zinc-900 dark:text-zinc-50 group-hover:text-sky-600 dark:group-hover:text-sky-400"
                          }`}
                        >
                          {item.company}
                        </h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                          {item.location}
                        </p>
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                          selectedItem?.id === item.id
                            ? "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300"
                            : item.type === "experience"
                              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                              : "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300"
                        }`}
                      >
                        {item.type === "experience"
                          ? "Work Experience"
                          : "Education"}
                      </span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">
                        {item.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column - Detailed Information */}
            <div className="lg:col-span-3">
              {selectedItem && (
                <div className="sticky top-8">
                  <div className="relative p-8 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm shadow-xl">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-400 to-emerald-500 flex items-center justify-center shadow-lg">
                          <span className="material-symbols-rounded text-white text-2xl">
                            {selectedItem.type === "experience"
                              ? "work"
                              : "school"}
                          </span>
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">
                            {selectedItem.company}
                          </h2>
                          <p className="text-sky-600 dark:text-sky-400 font-medium">
                            {selectedItem.position}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
                        <span className="flex items-center gap-2">
                          <span className="material-symbols-rounded text-lg">
                            location_on
                          </span>
                          {selectedItem.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <span className="material-symbols-rounded text-lg">
                            schedule
                          </span>
                          {selectedItem.duration}
                        </span>
                        {selectedItem.type === "education" && (
                          <span className="flex items-center gap-2">
                            <span className="material-symbols-rounded text-lg text-amber-500">
                              grade
                            </span>
                            <span className="font-medium">
                              GPA: {selectedItem.gpa}
                            </span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                      {selectedItem.type === "experience" ? (
                        <div>
                          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-4 flex items-center gap-2">
                            <span className="material-symbols-rounded text-emerald-500">
                              star
                            </span>
                            Key Achievements
                          </h3>
                          <div className="space-y-4">
                            {selectedItem.responsibilities.map(
                              (responsibility, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start gap-3"
                                >
                                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-sky-400 mt-2 flex-shrink-0"></div>
                                  <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                                    {responsibility}
                                  </p>
                                </div>
                              ),
                            )}
                          </div>

                          {/* Tech Stack */}
                          <div className="mt-6">
                            <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-3 flex items-center gap-2">
                              <span className="material-symbols-rounded text-sky-500">
                                code
                              </span>
                              Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {selectedItem.techStack.map((tech, idx) => (
                                <span
                                  key={idx}
                                  className="px-4 py-2 text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all duration-200"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-4 flex items-center gap-2">
                            <span className="material-symbols-rounded text-sky-500">
                              menu_book
                            </span>
                            Relevant Coursework
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {selectedItem.coursework.map((course, idx) => (
                              <span
                                key={idx}
                                className="px-4 py-2 text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all duration-200"
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
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
