import React from "react";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaCheckCircle,
} from "react-icons/fa";

const Experience = () => {
  const responsibilities = [
    "Developed responsive and user-friendly web interfaces using React.js, JavaScript/TypeScript, HTML5, and CSS3.",
    "Built reusable and maintainable React components for scalable applications.",
    "Integrated frontend applications with RESTful APIs.",
    "Collaborated with product managers, UI/UX designers, and backend developers.",
    "Optimized application performance and cross-browser compatibility.",
    "Maintained clean, readable, and reusable code following best practices.",
    "Debugged and fixed frontend issues to improve user experience.",
    "Participated in Git-based development workflows and code reviews.",
    "Developed responsive layouts for desktop, tablet, and mobile devices.",
  ];

  const technologies = [
    "React.js",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "REST API",
    "Git",
    "GitHub",
    "Responsive Design",
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Work Experience
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">

          {/* Header */}
          <div className="flex items-start gap-5">
            <div className="bg-blue-600 text-white p-4 rounded-xl">
              <FaBriefcase size={28} />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold">
                Frontend Engineer Intern
              </h3>

              <p className="text-blue-600 font-semibold text-lg">
              <a href="https://www.evu.com/" target="_blank" rel="noopener noreferrer">
                 EVU Inc.
              </a>
              </p>

              <div className="flex flex-wrap gap-6 mt-4 text-gray-600 dark:text-gray-300">

                <div className="flex items-center gap-2">
                  <FaCalendarAlt />
                  <span>April 2026 - Present</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt />
                  <span>Remote (New York, NY)</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaLaptopCode />
                  <span>20 hrs/week</span>
                </div>

              </div>
            </div>
          </div>

          {/* Responsibilities */}
          <div className="mt-10">
            <h4 className="text-xl font-bold mb-5">
              Responsibilities
            </h4>

            <div className="space-y-4">
              {responsibilities.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-3 items-start"
                >
                  <FaCheckCircle className="text-green-500 mt-1" />
                  <p className="text-gray-700 dark:text-gray-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-10">
            <h4 className="text-xl font-bold mb-5">
              Technologies
            </h4>

            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;