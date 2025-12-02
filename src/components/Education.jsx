import EducationCard from "./EducationCard";

const educationData = [
  {
    institution: "Illinois Institute of Technology",
    degree: "Master of Science in Computer Science",
    location: "Chicago, IL",
    duration: "Present",
    gpa: "3.83/4.0",
    coursework: [
      "Enterprise Web Applications",
      "Machine Learning",
      "Software Systems Architecture",
      "Mobile Application Development",
      "Software Modelling Development using UML ",
      "Data Preparation and Analysis"
    ]
  },
  {
    institution: "Savitribai Phule Pune University",
    degree: "Bachelor of Engineering in Computer Engineering",
    location: "Pune, India",
    duration: "2020 - 2024",
    gpa: "8.93/10.0",
    coursework: [
      "Object-Oriented Programming",
      "Web Technology",
      "Database Management systems",
      "Computer Networks",
      "Operating Systems",
      "Software Engineeering"
    ]
  }
];

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="headline-2 mb-4 bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
            Education
          </h2>
        </div>

        {/* Education Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {educationData.map((education, index) => (
            <EducationCard
              key={index}
              institution={education.institution}
              degree={education.degree}
              location={education.location}
              duration={education.duration}
              gpa={education.gpa}
              coursework={education.coursework}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 