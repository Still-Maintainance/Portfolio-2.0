import pac from "./assets/Ellipse 17.svg";
import { motion } from 'framer-motion';

export default function Steps() {
  const steps = [
    {
      number: "1",
      title: "Problem Analysis",
      description:
        "I begin by deeply understanding the problem, defining clear requirements, and planning the solution architecture. Strong foundation in problem-solving ensures a robust design from the start.",
      rotationClass: "rotate-0"
    },
    {
      number: "2",
      title: "System Design",
      description:
        "I design scalable, maintainable systems focusing on clean architecture, data flow, and separation of concerns. This phase ensures the solution is built on solid engineering principles.",
      rotationClass: "rotate-45"
    },
    {
      number: "3",
      title: "Implementation",
      description:
        "I develop clean, modular code following best practices. Whether frontend or backend, I emphasize readability, performance, and adherence to design patterns for long-term maintainability.",
      rotationClass: "rotate-180"


    },
    {
     
      number: "4",
      title: "Optimization & Testing",
      description:
        "I debug, profile, and optimize for performance. Comprehensive testing ensures reliability. I use version control effectively and iterate based on feedback to deliver production-ready solutions.",
      rotationClass: "rotate-90"
    }
  ];

  return (
    <div className="flex flex-col md:flex-row md:mx-auto md:w-15/20">
      {/* Vertical indicators (desktop) */}
      <div className="hidden md:flex mx-4 lg:mx-14 w-0 flex-col items-center justify-start">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative flex h-12 w-12 items-center justify-center"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] opacity-20"></div>
              <div className="flex h-full w-full items-center justify-center rounded-full border-2 border-[#7A87FB]/20 bg-[#1C1C1C]">
                <span className="bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] bg-clip-text text-transparent text-xl">
                  {step.number}
                </span>
              </div>
            </motion.div>
            {index !== steps.length - 1 && (
              <div className="h-53 border-l-2 border-dashed border-[#7A87FB]/20"></div>
            )}
          </div>
        ))}
      </div>

      {/* Content (mobile & desktop) */}
      <div className="w-full px-4 md:px-0 md:max-w-150">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative mb-20 last:mb-0"
          >
            {/* Dotted line (mobile only) */}
            {index !== steps.length - 1 && (
              <div className="absolute left-5 sm:left-6 top-14 h-[calc(100%+3rem)] border-l-2 border-dashed border-[#7A87FB]/20 md:hidden"></div>
            )}

            <div className="flex items-start gap-4 sm:gap-6">
              {/* Mobile step circle */}
              <div className="flex md:hidden h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 border-[#7A87FB]/20 bg-[#1C1C1C] z-10">
                <span className="bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] bg-clip-text text-transparent text-lg sm:text-xl">
                  {step.number}
                </span>
              </div>

              {/* Title & Icon */}
              <div className="flex flex-col items-start">
                <div className="flex items-center">
                  <img
                    className={`w-8 h-8 sm:w-10 sm:h-10 transform transition-all duration-300 ${step.rotationClass} hover:scale-110`}
                    src={pac}
                    alt="pacman"
                  />
                </div>
                <h2 className="mt-2 text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {step.title}
                </h2>
              </div>
            </div>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-white/80 leading-relaxed pl-14 lg:pl-0 sm:pl-20 max-w-[90%] sm:max-w-110 md:max-w-170">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
