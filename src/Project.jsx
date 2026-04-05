/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

export default function Project({ 
  title, 
  description, 
  technologies, 
  demoLink, 
  githubLink 
}) {

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative mx-auto mt-8 sm:mt-10 w-full sm:w-11/12 lg:w-14/20 px-4 sm:px-0"
      tabIndex={0}
    >
      <div className="relative flex w-full flex-col items-start justify-center gap-6 sm:gap-8 bg-gradient-to-br from-[#151515] to-[#1c1c1c] p-5 sm:p-8 rounded-lg border border-[#7A87FB]/20 hover:border-[#7A87FB] transition-all duration-300">
        
        {/* Project Info */}
        <div className="flex flex-col gap-3 sm:gap-4 w-full">
          <div className="flex items-center gap-3 sm:gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {title}
            </h2>
          </div>

          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-1 sm:mt-2">
            {technologies?.map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 sm:px-3 text-xs sm:text-sm bg-[#151515] rounded-md text-gray-300 border border-[#7A87FB]/20 hover:border-[#7A87FB] transition-all"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links Section */}
          {(demoLink || githubLink) && (
            <div className="flex gap-3 sm:gap-4 mt-4">
              {demoLink && (
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] rounded-md font-semibold text-black hover:shadow-lg hover:shadow-[#7A87FB]/50 transition-all duration-300"
                >
                  Live Demo
                </a>
              )}
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-[#292929] border border-[#7A87FB]/20 rounded-md text-gray-300 hover:border-[#7A87FB] hover:text-white transition-all duration-300"
                >
                  GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}



