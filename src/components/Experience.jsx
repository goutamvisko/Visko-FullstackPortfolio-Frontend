import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBuilding, FaCode, FaLaptopCode, FaReact } from "react-icons/fa";

// Data for different job experiences
const experienceData = [
  {
    icon: <FaBuilding className="text-2xl text-red-500" />,
    company: "Visko Group Pvt. Ltd | Indore",
    duration: "Dec 2024 – Present",
    role: "Full-Stack Developer",
    responsibilities: [
      "Developed multi-role JWT authentication, POS workflows, and centralized admin modules.",
      "Built CRM & POS platform with dashboards to streamline operations.",
      "Collaborated with cross-functional teams to integrate scalable solutions.",
    ],
    techStack: ["React.js", "PHP (CI4)", "MySQL", "JWT", "Redux", "Material UI", "Mantine UI", "Bootstrap"],
  },
  {
    icon: <FaLaptopCode className="text-2xl text-sky-400" />,
    company: "Virtual Height IT Service Pvt. Ltd | Indore",
    duration: "Jun 2023 – Jul 2024",
    role: "MERN Stack Developer",
    responsibilities: [
      "Developed gaming modules for Avisagameguild platform with 30% faster performance.",
      "Implemented secure JWT-based authentication for real-time interactions.",
      "Enhanced PMS system with 10+ features, boosting performance by 70% for 300+ users.",
    ],
    techStack: ["React.js", "Express.js", "MongoDB", "Redux", "JWT", "SQL", "Redux Toolkit", "REST API", "Material UI", "Mantine UI"],
  },
  {
    icon: <FaReact className="text-2xl text-green-400" />,
    company: "Yuvasoft Technology Pvt. Ltd | Indore",
    duration: "Jun 2022 – Jun 2023",
    role: "Frontend Developer",
    responsibilities: [
      "Developed UI for XAMEEL food ordering platform used by 2,500+ users.",
      "Built analytics dashboards and integrated APIs for real-time tracking.",
      "Improved frontend performance and user experience.",
    ],
    techStack: ["React.js", "Material UI", "React-Chart", "Redux", "REST API"],
  },
  {
    icon: <FaCode className="text-2xl text-yellow-500" />,
    company: "Aking Web Tech Pvt. Ltd | Indore",
    duration: "Jan 2021 – May 2022",
    role: "React Developer",
    responsibilities: [
      "Built responsive product listings and secure checkout workflows for e-commerce.",
      "Developed order & payment management features.",
      "Optimized frontend performance with reusable components.",
    ],
    techStack: ["React.js", "Redux", "Material UI", "Bootstrap", "REST API"],
  },
  {
    icon: <FaReact className="text-2xl text-blue-400" />,
    company: "Elite Capital | Indore",
    duration: "Jan 2019 – Dec 2020",
    role: "React Developer",
    responsibilities: [
      "Developed investment tracking dashboards and secure financial web portals.",
      "Built responsive reports and financial data visualizations.",
      "Enhanced UI for seamless financial monitoring.",
    ],
    techStack: ["React.js", "JavaScript", "Bootstrap", "SQL"],
  },
];

export default function Experience({ id }) {
  // State to track the currently selected experience
  const [selectedExperience, setSelectedExperience] = useState(experienceData[0]);

  return (
    <section id={id} className="bg-[#1e1e1e] py-6 px-6 md:px-12 flex justify-center font-mono">
      <div className="w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Animated gradient border wrapper */}
          <div className="animate-gradient-border p-[2px] rounded-2xl">
            <div className="bg-[#2a2a30] rounded-2xl p-8 md:p-12">
              
              {/* Header */}
              <div className="text-center md:text-left mb-10">
                <p className="text-green-400 font-medium mb-2">• My Career Path</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
                  Work Experience
                </h2>
              </div>
              
              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Left Side – Companies List */}
                <motion.div
                  className="flex flex-col space-y-4"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {experienceData.map((exp) => (
                    <button
                      key={exp.company}
                      onClick={() => setSelectedExperience(exp)}
                      className={`flex items-center gap-4 p-4 rounded-lg text-left transition-all duration-300 w-full
                        ${selectedExperience.company === exp.company
                          ? 'bg-[#3c3c43] border border-gray-600 scale-105 shadow-lg'
                          : 'bg-[#3c3c43]/60 border border-transparent hover:bg-[#3c3c43]'
                        }`}
                    >
                      {exp.icon}
                      <div>
                        <h4 className="text-white font-semibold">{exp.company}</h4>
                        <p className="text-sm text-gray-400">{exp.duration}</p>
                      </div>
                    </button>
                  ))}
                </motion.div>

                {/* Right Side – Role & Details */}
                <div className="lg:col-span-2">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedExperience.company}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="bg-[#3c3c43]/60 p-6 rounded-lg border border-gray-700/50"
                    >
                      <h3 className="text-green-400 text-xl font-semibold mb-3">
                        {selectedExperience.role}
                      </h3>
                      <ul className="space-y-3 text-gray-300 text-sm leading-relaxed mb-6">
                        {selectedExperience.responsibilities.map((item, i) => (
                          <li key={i} className="flex">
                            <span className="text-green-400 mr-2">›</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {selectedExperience.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-md border border-gray-600/80 bg-[#2a2a30]/50 text-gray-300 text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}