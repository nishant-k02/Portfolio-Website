import React from "react";
import PropTypes from "prop-types";

const EducationCard = ({ institution, degree, location, duration, gpa, coursework, classes }) => {
  return (
    <div
      className={
        "relative p-6 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors min-h-[320px] flex flex-col" +
        (classes ? " " + classes : "")
      }
    >
      {/* Education Icon */}
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center">
          <span className="material-symbols-rounded text-white text-2xl">school</span>
        </div>
      </div>

      <div className="flex flex-col flex-grow">
        <div className="flex-grow">
          {/* Institution Name */}
          <h3 className="title-1 mb-2 line-clamp-2 min-h-[3rem] leading-tight text-zinc-50">
            {institution}
          </h3>
          
          {/* Degree */}
          <p className="text-lg font-medium text-sky-400 mb-2">
            {degree}
          </p>
          
          {/* Location */}
          <p className="text-sm text-zinc-400 mb-2 flex items-center gap-1">
            <span className="material-symbols-rounded text-sm">location_on</span>
            {location}
          </p>
          
          {/* Duration */}
          <p className="text-sm text-zinc-400 mb-3 flex items-center gap-1">
            <span className="material-symbols-rounded text-sm">schedule</span>
            {duration}
          </p>
          
          {/* GPA */}
          {gpa && (
            <p className="text-sm text-zinc-300 mb-3">
              <span className="font-medium">GPA:</span> {gpa}
            </p>
          )}
          
          {/* Relevant Coursework */}
          {coursework && coursework.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-medium text-zinc-300 mb-2">Relevant Coursework:</h4>
              <div className="flex flex-wrap gap-1">
                {coursework.map((course, index) => (
                  <span
                    key={index}
                    className="text-xs text-zinc-400 bg-zinc-50/5 px-2 py-1 rounded-md whitespace-nowrap"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Graduation Icon */}
        <div className="flex items-center justify-end mt-auto">
          <div className="w-10 h-10 rounded-lg grid place-items-center bg-emerald-400 text-zinc-950 shrink-0 hover:bg-emerald-300 transition-colors">
            <span className="material-symbols-rounded text-lg" aria-hidden="true">
              school
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

EducationCard.propTypes = {
  institution: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  gpa: PropTypes.string,
  coursework: PropTypes.array,
  classes: PropTypes.string,
};

export default EducationCard; 