/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

export default function Project({ 
  title, 
  description, 
  technologies, 
  images = [],
  demoLink, 
  githubLink 
}) {

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative mx-auto mt-8 sm:mt-10 w-full sm:w-11/12 lg:w-14/20 px-4 sm:px-0"
      tabIndex={0}
    >
      <div className="relative flex w-full flex-col items-start justify-center gap-6 sm:gap-8 bg-gradient-to-br from-[#151515] to-[#1c1c1c] p-5 sm:p-8 rounded-lg border border-[#7A87FB]/20 md:flex-row hover:border-[#7A87FB] transition-all duration-300">
        
        {/* Project Image Slider */}
        <div className="relative w-full overflow-hidden rounded-lg md:w-1/2 lg:w-120 aspect-video sm:aspect-auto lg:h-120 group">
          <motion.div
            initial={false}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 25,
              mass: 0.5,
              velocity: 2
            }}
            className="flex w-full h-full"
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${title} screenshot ${index + 1}`}
                className="w-full h-full object-cover flex-shrink-0"
                loading={index === 0 ? "eager" : "lazy"}
                onError={(e) => {
                  e.target.src = 'https://placehold.co/1200x800/1c1c1c/7A87FB?text=Image+Not+Available';
                  e.target.onerror = null;
                }}
              />
            ))}
          </motion.div>


          {/* Overlay with buttons */}
          {(demoLink || githubLink) && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 flex gap-2 sm:gap-3">
                {demoLink && (
                  <div className="group relative rounded-md bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] p-[2px] transition-all duration-300 hover:shadow-lg hover:shadow-[#7A87FB]/50">
                    <a 
                      href={demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 py-1.5 sm:px-4 sm:py-2 rounded-md bg-[#101111] from-[#7A87FB] to-[#FFD49C] text-sm sm:text-base font-medium text-white hover:bg-gradient-to-r"
                    >
                      Live Demo
                    </a>
                  </div>
                )}
                {githubLink && (
                  <a 
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#151515] text-white rounded-md text-sm sm:text-base font-medium hover:bg-[#1c1c1c] transition-all border border-[#7A87FB]/20 hover:border-[#7A87FB]"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Project Info */}
        <div className="flex flex-col gap-3 sm:gap-4 md:w-1/2">
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
        </div>
      </div>
    </motion.div>
  );
}



