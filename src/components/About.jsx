import { useState } from "react";

const aboutItems = [
  {
    label: "Project done",
    number: 15,
  },
  {
    label: "Year of experience",
    number: 1,
  },
];

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section id="about" className="section">
      <div className="container">
        {/* About Card */}
        <div className="max-w-6xl mx-auto">
          <div className="relative p-6 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm hover:border-emerald-300 dark:hover:border-emerald-600 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 group">
            
            {/* Header with Icon */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-400 to-sky-500 flex items-center justify-center">
                <span className="material-symbols-rounded text-white text-2xl">person</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  Software Developer & AI Enthusiast
                </h3>
                <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                  Full-Stack • Cloud Architecture • AI-Driven Systems
                </p>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-4 mb-6">
              {/* First paragraph - always visible */}
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed text-justify">
                Hello! I&apos;m Nishant, a passionate and adaptive software developer who specializes in full-stack application design, AI-driven systems, 
                and scalable cloud architectures. With hands-on experience across modern technologies such as React, Next.js, Node.js, Flask, and MongoDB, 
                I focus on building solutions that merge technical precision with user-centric design. My work spans web, mobile, and intelligent automation 
                systems leveraging tools like LangChain, OpenAI, and Azure to create products that enhance usability, reliability, and decision intelligence.
              </p>
              
              {/* Second paragraph - hidden on mobile unless expanded */}
              <div className={`md:block ${isExpanded ? 'block' : 'hidden'}`}>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed text-justify">
                  Having contributed to high-impact projects like an AI-powered healthcare assistant and an e-commerce platform with real-time chatbot integration, 
                  I enjoy translating complex ideas into elegant, deployable solutions. My recent work strengthened my skills in backend architecture, REST API optimization, 
                  and cross-platform development. Currently pursuing my Master&apos;s in Computer Science at the Illinois Institute of Technology (GPA 3.83), I aim to continue 
                  advancing in software innovation crafting intelligent, efficient, and secure systems that empower users and businesses alike.
                </p>
              </div>

              {/* View More/Less Button - only visible on mobile */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-sm text-emerald-600 dark:text-emerald-400 font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors flex items-center gap-1"
                >
                  <span>{isExpanded ? 'View less' : 'View more'}</span>
                  <span className={`material-symbols-rounded text-sm transition-transform duration-200 ${
                    isExpanded ? 'rotate-180' : ''
                  }`}>
                    keyboard_arrow_down
                  </span>
                </button>
              </div>
            </div>

            {/* Stats and Logo */}
            <div className="flex flex-wrap items-center justify-between gap-6 pt-4 border-t border-zinc-200 dark:border-zinc-700">
              <div className="flex flex-wrap items-center gap-6">
                {aboutItems.map(({ label, number }, key) => (
                  <div key={key} className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <span className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 md:text-3xl">
                        {number}
                      </span>
                      <span className="text-emerald-500 font-semibold md:text-2xl">
                        +
                      </span>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">{label}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-end">
                <div className="w-10 h-10 rounded-lg grid place-items-center bg-emerald-400 text-zinc-950 shrink-0 hover:bg-emerald-300 transition-colors">
                  <img
                    src="/images/logo.svg"
                    alt="Logo"
                    width={24}
                    height={24}
                    className="brightness-0 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
