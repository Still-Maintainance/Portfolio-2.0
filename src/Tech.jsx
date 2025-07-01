import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPhp,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiExpress,
  SiXampp,
} from "react-icons/si";

const technologies = [
  {
    category: "Frontend",
    description: "Building responsive and user-friendly interfaces",
    skills: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: FaReact },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    category: "Backend",
    description: "Developing server-side logic and APIs",
    skills: [
      { name: "PHP", icon: FaPhp },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    category: "Tools & DevOps",
    description: "Version control, code editors, and local servers",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "XAMPP", icon: SiXampp },
    ],
  },
];

export default function TechStack() {
  return (
    <div className="mx-auto my-12 w-full px-4 sm:my-20 sm:w-15/20 sm:px-6">
      <div className="grid gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="group rounded-xl bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] p-[1px] hover:shadow-lg hover:shadow-[#7A87FB]/20 sm:rounded-3xl"
          >
            <div className="h-full rounded-xl bg-[#151515] p-4 sm:rounded-3xl sm:p-6">
              <h3 className="mb-2 bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] bg-clip-text text-base font-bold text-transparent sm:text-xl">
                {tech.category}
              </h3>
              <p className="mb-3 text-xs text-gray-400 sm:mb-6 sm:text-sm">
                {tech.description}
              </p>
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {tech.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center justify-center rounded-lg bg-[#292929] p-2 transition-all duration-200 hover:brightness-110 sm:rounded-xl sm:p-3"
                  >
                    <skill.icon className="mb-1 h-6 w-6 text-gray-300 sm:mb-2 sm:h-8 sm:w-8" />
                    <span className="text-center text-[10px] text-gray-300 sm:text-xs">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
