import { motion } from "framer-motion";
import Portal from "./components/Portal";
import portalImage from "./assets/Portal.svg";

export default function About() {
const educationItems = [
  {
    title: "Holberton School",
    period: "Oct 2023 – Oct 2024",
    details: [
      "Studying Software Engineering: C, Python, JavaScript, SQL, DevOps",
      "Built real-world projects, strengthening problem-solving & system design skills"
    ],
    icon: "💻"
  },
  {
    title: "AWS Certified Solutions Architect – Associate",
    period: "Feb 2024",
    details: [
      "Expertise in designing scalable, secure cloud architectures",
      "Proficient in AWS best practices, cost optimization, and infrastructure automation"
    ],
    icon: "☁️"
  },
  {
    title: "AWS Cloud Practitioner",
    period: "Oct 2023",
    details: [
      "Fundamental AWS knowledge: cloud computing, services, security, and cost optimization"
    ],
    icon: "☁️"
  },
  {
    title: "University Hassan II – FSJES Ain Chock",
    period: "2019 – 2023",
    details: [
      "Bachelor’s in Economics & Management, focusing on business strategy and analytical thinking"
    ],
    icon: "🏫"
  }
];


  return (
    <div className="mx-auto max-w-6xl px-4 py-16 relative overflow-hidden">
      {/* Background Decorative Portals */}
      <Portal
        src={portalImage}
        className="fixed top-1/4 -right-12 w-32 opacity-10 rotate-45 blur-sm"
      />
      <Portal
        src={portalImage}
        className="fixed bottom-1/4 -left-12 w-32 opacity-10 -rotate-45 blur-sm"
      />
      
      {/* About Me Text Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 p-8 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-3xl shadow-xl relative overflow-hidden group"
      >
        {/* About Section Portals */}
        <Portal
          src={portalImage}
          className="absolute -top-6 -right-6 w-20 opacity-20 rotate-90 transition-all duration-300 group-hover:opacity-30 group-hover:rotate-180"
        />
        <Portal
          src={portalImage}
          className="absolute -bottom-6 -left-6 w-20 opacity-20 -rotate-90 transition-all duration-300 group-hover:opacity-30 group-hover:-rotate-180"
        />
        
        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm <span className="text-[#7A87FB] font-semibold">Hamza Farissi</span>, a backend developer with expertise in cloud computing, DevOps, and full-stack development.
          </p>
          
          <p className="text-gray-300 text-lg leading-relaxed">
            I completed the Software Engineering program at Holberton School, where I built a strong foundation in C++, Python, JavaScript, SQL, and cloud technologies.
          </p>
          
          <p className="text-gray-300 text-lg leading-relaxed">
            Holding AWS certifications, I specialize in designing scalable applications, optimizing system performance, and leveraging cloud infrastructure for efficiency and security.
          </p>
          
          <p className="text-gray-300 text-lg leading-relaxed">
            Passionate about problem-solving and system architecture, I enjoy working on AI-powered applications, distributed systems, and cloud-native solutions.
          </p>
        </div>
      </motion.div>

      {/* Timeline Section */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-[#FFD49C] to-[#7A87FB] transform -translate-x-1/2"></div>

        <div className="space-y-12">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
            >
              {/* Timeline dot with Portal */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 mt-6">
                <div className="w-4 h-4 bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] rounded-full relative">
                  <Portal
                    src={portalImage}
                    className="absolute -top-2 -left-2 w-8 h-8 opacity-40 animate-pulse"
                  />
                </div>
              </div>

              {/* Content card with Portal decoration */}
              <div className="ml-6 md:ml-0 md:w-1/2 p-6 bg-[#1a1a1a] rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-800 hover:border-[#7A87FB] relative group">
                <Portal
                  src={portalImage}
                  className={`absolute ${index % 2 === 0 ? '-right-3' : '-left-3'} -top-3 w-10 opacity-20 
                  transition-all duration-300 group-hover:opacity-40 group-hover:rotate-180 
                  ${index % 2 === 0 ? 'rotate-45' : '-rotate-45'}`}
                />
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-[#7A87FB]">{item.period}</p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {item.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-2 text-gray-300">
                      <span className="text-[#FFD49C]">▹</span>
                      {detail}
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