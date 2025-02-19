import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNode, 
  FaGitAlt, 
  FaDocker, 
  FaAws 
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiTypescript, 
  SiRedux,
  SiExpress, 
  SiMongodb, 
  SiPostgresql 
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';

const technologies = [
  {
    category: "Frontend",
    description: "Building responsive and interactive user interfaces",
    skills: [
      { name: "React", icon: FaReact, type: "primary" },
      { name: "Next.js", icon: SiNextdotjs, type: "primary" },
      { name: "TailwindCSS", icon: SiTailwindcss, type: "primary" },
      { name: "TypeScript", icon: SiTypescript, type: "secondary" },
      { name: "Redux", icon: SiRedux, type: "secondary" },
    ]
  },
  {
    category: "Backend",
    description: "Developing scalable server-side applications",
    skills: [
      { name: "Node.js", icon: FaNode, type: "primary" },
      { name: "Express", icon: SiExpress, type: "primary" },
      { name: "MongoDB", icon: SiMongodb, type: "primary" },
      { name: "PostgreSQL", icon: SiPostgresql, type: "secondary" },
    ]
  },
  {
    category: "Tools & DevOps",
    description: "Streamlining development and deployment workflows",
    skills: [
      { name: "Git", icon: FaGitAlt, type: "primary" },
      { name: "Docker", icon: FaDocker, type: "primary" },
      { name: "AWS", icon: FaAws, type: "secondary" },
      { name: "CI/CD", icon: TbBrandVscode, type: "secondary" },
    ]
  }
];

export default function TechStack() {
  return (
    <div className="mx-auto my-20 w-15/20">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="group rounded-3xl bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] p-[1px] hover:shadow-lg hover:shadow-[#7A87FB]/20"
          >
            <div className="h-full rounded-3xl bg-[#151515] p-6 transition-all duration-300">
              <h3 className="mb-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD49C] to-[#7A87FB]">
                {tech.category}
              </h3>
              <p className="text-sm text-gray-400 mb-6">{tech.description}</p>
              
              <div className="grid grid-cols-3 gap-3">
                {tech.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl ${
                      skill.type === 'primary' 
                        ? 'bg-[#292929] hover:bg-[#363636]' 
                        : 'bg-[#1C1C1C] hover:bg-[#292929]'
                    } transition-colors duration-200`}
                  >
                    <skill.icon className="w-8 h-8 mb-2 text-gray-300" />
                    <span className="text-xs text-gray-300">{skill.name}</span>
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