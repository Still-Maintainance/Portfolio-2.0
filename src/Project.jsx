/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Project({ 
  title, 
  number, 
  description, 
  technologies, 
  images = [], // Set default empty array
  demoLink, 
  githubLink 
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Guard clause for empty images array
  if (!images || images.length === 0) {
    return null; // Or render a placeholder/fallback
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative mx-auto mt-8 sm:mt-10 w-full sm:w-11/12 lg:w-14/20 px-4 sm:px-0" // Added padding for mobile
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="relative flex w-full flex-col items-start justify-center gap-6 sm:gap-8 bg-gradient-to-br from-[#151515] to-[#1c1c1c] p-5 sm:p-8 rounded-lg border border-[#7A87FB]/20 md:flex-row hover:border-[#7A87FB] transition-all duration-300">
        {/* Project Image Slider */}
        <div className="relative w-full overflow-hidden rounded-lg md:w-1/2 lg:w-120 aspect-video sm:aspect-auto lg:h-120 group">
          <motion.div
            initial={false}
            animate={{ x: `-${currentImageIndex * 100}%` }}
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

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white/90 hover:bg-black/70 transition-colors z-20 cursor-pointer"
                aria-label="Previous image"
              >
                <FaChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white/90 hover:bg-black/70 transition-colors z-20 cursor-pointer"
                aria-label="Next image"
              >
                <FaChevronRight className="w-4 h-4" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      index === currentImageIndex
                        ? 'bg-white'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Overlay with buttons */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 flex gap-2 sm:gap-3">
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
              <a 
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#151515] text-white rounded-md text-sm sm:text-base font-medium hover:bg-[#1c1c1c] transition-all border border-[#7A87FB]/20 hover:border-[#7A87FB]"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project Info */}
        <div className="flex flex-col gap-3 sm:gap-4 md:w-1/2">
          <div className="flex items-center gap-3 sm:gap-4">
            <Num number={number} />
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

function Num({ number }) {
  return (
    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-md border border-[#7A87FB]/20 bg-[#151515]">
      <div className="font-['Roboto_Mono'] text-lg sm:text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        {number}
      </div>
    </div>
  );
}