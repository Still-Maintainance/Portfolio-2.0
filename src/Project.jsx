/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
export default function Project({ title, number, description, technologies, image, demoLink, githubLink }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto mt-10 flex w-9/11 flex-col items-start justify-center gap-8 bg-[#151515] p-8 rounded-2xl shadow-xl md:flex-row lg:mx-auto lg:w-14/20"
    >
      {/* Project Image */}
      <div className="relative group w-full overflow-hidden rounded-xl lg:w-120 lg:h-120">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 flex gap-4">
            <a 
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#7A87FB] rounded-full text-white font-medium hover:bg-[#6470e4] transition-colors"
            >
              Live Demo
            </a>
            <a 
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#292929] rounded-full text-white font-medium hover:bg-[#363636] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="flex flex-col gap-4 lg:w-1/2">
        <div className="flex items-center gap-4">
          <Num number={number} />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] bg-clip-text text-transparent">
            {title}
          </h2>
        </div>

        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          {technologies?.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-sm bg-[#292929] rounded-full text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// eslint-disable-next-line react/prop-types
function Num({ number }) {
  return (
    <div className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/20 bg-[#1C1C1C] opacity-75">
      <div className="font-['Roboto_Mono'] text-2xl font-bold bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] bg-clip-text text-transparent">
        {number}
      </div>
      <div className="absolute -bottom-1 h-1/4 w-2/5 bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] blur-sm"></div>
    </div>
  );
}