/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
export default function Project({ title, number, description, technologies, image, demoLink, githubLink }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative mx-auto mt-10 w-9/11 lg:mx-auto lg:w-14/20 group"
    >
      {/* Gradient glow effect - now only visible on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] rounded-2xl opacity-0 blur-md group-hover:opacity-30 transition duration-300"></div>
      
      {/* Main content container */}
      <div className="relative flex w-full flex-col items-start justify-center gap-8 bg-[#151515] p-8 rounded-2xl shadow-xl md:flex-row">
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
      </div>
    </motion.div>
  );
}

// eslint-disable-next-line react/prop-types
function Num({ number }) {
  return (
    <div className="relative group">
      {/* Outer glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] rounded-full opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
      
      {/* Main container */}
      <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#1C1C1C] transition-all duration-300 group-hover:scale-105">
        {/* Number */}
        <div className="font-['Roboto_Mono'] text-2xl font-bold bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] bg-clip-text text-transparent">
          {number}
        </div>
        
        {/* Bottom highlight */}
      </div>

      {/* Animated particles */}
      <div className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-0 left-1/2 h-1 w-1 rounded-full bg-[#FFD49C] blur-sm animate-pulse"></div>
        <div className="absolute bottom-0 left-1/2 h-1 w-1 rounded-full bg-[#7A87FB] blur-sm animate-pulse delay-75"></div>
      </div>
    </div>
  );
}