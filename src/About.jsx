import { motion } from "framer-motion";
import Portal from "./components/Portal";
import portalImage from "./assets/Portal.svg";
import { FaGraduationCap, FaGoogle ,  FaLaptopCode , FaSchool} from "react-icons/fa";

export default function About() {
  const educationItems = [
    {
      title: "SRKR Engineering College, Bhimavaram",
      period: "2023 – 2027 (Expected)",
      details: [
        "Pursuing B.Tech in Computer Science",
        "Focused on Full Stack Development and Data Science",
      ],
      icon: (
        <FaGraduationCap
          size={30}
          className="bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] bg-clip-text"
        />
      ),
    },
    {
      title: "Google Developer Groups ",
      period: "2023 – 2024",
      details: [
        "Tech Team Core member in GDG Study Jams & workshops",
        "Completed Gen AI Study Jam hosted by GDG SRKR",
      ],
      icon: (
        <FaGoogle
          size={30}
          className="bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] bg-clip-text"
        />
      ),
    },
    {
      title: "Hackathons & Competitions",
      period: "2023 – Present",
      details: [
        "Winner of the Web Tech Hackathon by SDC at SRKR",
        "Participated in multiple university and national-level hackathons",
        "Collaborated in team-based projects under tight deadlines",
      ],
      icon: (
        < FaLaptopCode
          size={30}
          className="bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] bg-clip-text"
        />
      ),
    },

    {
      title: "Bharatiya Vidya Bhavan, Bhimavaram",
      period: "Secondary Education",
      details: [
        "Completed under CBSE curriculum",
        "Achieved highest marks in the school Class 12",
      ],
      icon: (
        <FaSchool
          size={30}
          className="bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] bg-clip-text"
        />
      ),
    },

    {
      title: "Bharatiya Vidya Bhavan, Bhimavaram",
      period: "Primary Education",
      details: ["Completed foundational schooling with distinction"],
      icon: (
        <FaSchool
          size={30}
          className="bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] bg-clip-text"
        />
      ),
    },
  ];
  return (
    <div className="relative mx-auto max-w-6xl bg-[#101111] px-6 text-gray-300">
      <Portal
        src={portalImage}
        className="pointer-events-none absolute top-200 right-30 w-32 rotate-50 opacity-10"
      />
      <Portal
        src={portalImage}
        className="pointer-events-none absolute bottom-10 left-15 w-32 -rotate-50 opacity-10"
      />

      <div className="mx-auto mb-12 max-w-4xl sm:mb-24 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-transparent bg-[#151515] p-6 shadow-lg transition-all duration-300 hover:border-[#7A87FB] sm:p-8 md:p-10" // Added responsive padding
        >
          <div className="mb-8 sm:mb-12">
            <p className="text-base text-gray-300 sm:text-lg">
              I&apos;m{" "}
              <span className="bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] bg-clip-text font-semibold text-transparent">
                Sagar Addagarla
              </span>
              , a full stack developer passionate about building real-world
              solutions. I focus on crafting responsive web apps, automating
              systems, and delivering clean, scalable digital experiences.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 space-y-4"
            >
              <p className="text-gray-300">
                I'm currently pursuing Computer Science Engineering and Design
                at Sagi Rama Krishnam Raju Engineering College, focusing on full
                stack development, web technologies, and data science.
              </p>
            </motion.div>
          </div>

          <div>
            <h2 className="mb-4 bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] bg-clip-text text-xl font-semibold text-transparent sm:mb-6 sm:text-2xl">
              Full Stack Development
            </h2>
            <p className="mb-6 text-sm text-gray-300 sm:mb-8 sm:text-base">
              As a core team member of Google Developer Groups Tech Team, I'm
              actively involved in organizing tech events, workshops, and
              community outreach. I bring strong leadership, punctuality, and a
              collaborative mindset to every project. Having won a hackathon and
              contributed to real-world products, I’m passionate about building
              impactful solutions and staying engaged in the developer
              ecosystem.
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {[
                {
                  name: "HTML & CSS",
                  desc: "Building structured, responsive layouts and user interfaces",
                },
                {
                  name: "JavaScript",
                  desc: "Adding interactivity and dynamic functionality to web pages",
                },
                {
                  name: "React",
                  desc: "Developing scalable, component-based frontend applications",
                },
                {
                  name: "SQL",
                  desc: "Managing relational databases and performing data operations",
                },
                {
                  name: "XAMPP",
                  desc: "Local server environment for backend and database testing",
                },
                {
                  name: "Tailwind & Bootstrap",
                  desc: "Rapid UI development with utility-first and component-based styling",
                },
              ].map((awsService, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group rounded-lg border border-transparent bg-[#101111] p-3 transition-all duration-300 hover:border-[#7A87FB] sm:p-4"
                >
                  <h3 className="bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] bg-clip-text text-base font-medium text-transparent transition-colors group-hover:text-[#7A87FB] sm:text-lg">
                    {awsService.name}
                  </h3>
                  <p className="mt-1 text-xs text-gray-400 sm:mt-2 sm:text-sm">
                    {awsService.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <div className="absolute left-4 h-full w-0.5 transform bg-gradient-to-b from-[#FFD49C] to-[#7A87FB] opacity-30 sm:left-1/2 sm:-translate-x-1/2"></div>

        <div className="space-y-8 sm:space-y-16">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 0, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex flex-col sm:flex-row ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              } items-start gap-4 pl-8 sm:items-center sm:gap-8 sm:pl-0 md:gap-16`}
            >
              <div className="absolute top-1/2 -left-1.5 z-10 -translate-y-1/2 transform sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
                <div className="h-4 w-4 rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] sm:h-5 sm:w-5"></div>
              </div>

              <div className="group relative w-full rounded-xl border border-transparent bg-[#151515] p-4 shadow-md transition-all duration-300 hover:border-[#7A87FB] sm:w-[calc(50%-3rem)] sm:p-6">
                <div className="mb-3 flex items-center gap-3 sm:mb-4 sm:gap-4">
                  <span className="text-xl sm:text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] bg-clip-text text-lg font-semibold text-transparent sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 sm:text-base">
                      {item.period}
                    </p>
                  </div>
                </div>
                <ul className="space-y-1 sm:space-y-2">
                  {item.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-2">
                      <span className="bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] bg-clip-text text-transparent">
                        ▹
                      </span>
                      <span className="text-sm text-gray-300 sm:text-base">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
