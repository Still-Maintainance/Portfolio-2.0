import { motion } from "framer-motion";
import Portal from "./components/Portal";
import portalImage from "./assets/Portal.svg";
import { 
  FaAws, 
  FaUniversity,
  FaCode,
  FaCloud 
} from 'react-icons/fa';

export default function About() {
  const educationItems = [
    {
      title: "Holberton School",
      period: "Oct 2023 – Oct 2024",
      details: [
        "Studied Software Engineering (C, Python, JavaScript, SQL, DevOps)",
        "Built real-world projects & improved problem-solving skills"
      ],
      icon: <FaCode size={30} className=" bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] bg-clip-text" />
    },
    {
      title: "AWS Certified Solutions Architect – Associate",
      period: "Feb 2024",
      details: [
        "Deep understanding of AWS best practices, scalable architectures, security"
      ],
      icon: <FaAws size={30} className=" bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] bg-clip-text" />
    },
    {
      title: "AWS Cloud Practitioner",
      period: "Oct 2023",
      details: [
        "Fundamental AWS knowledge (cloud computing, services, cost optimization)"
      ],
      icon: <FaCloud  size={30} className="bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] bg-clip-text" />
    },
    {
      title: "University Hassan II – FSJES Ain Chock",
      period: "2019 – 2023",
      details: [
        "Bachelor's in Economics & Management"
      ],
      icon: <FaUniversity size={30} className=" bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] bg-clip-text" />
    }
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 bg-[#101111] text-gray-300 relative">
      
      <Portal
        src={portalImage}
        className="absolute top-200 right-30 w-32 opacity-10 rotate-50 pointer-events-none"
      />
      <Portal
        src={portalImage}
        className="absolute bottom-10 left-15 w-32 opacity-10 -rotate-50 pointer-events-none"
      />

      <div className="max-w-4xl mx-auto sm:px-6 mb-12 sm:mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 md:p-10 bg-[#151515] rounded-xl shadow-lg border border-transparent hover:border-[#7A87FB] transition-all duration-300" // Added responsive padding
        >
          <div className="mb-8 sm:mb-12"> {/* Adjusted margin for mobile */}
            <p className="text-base sm:text-lg text-gray-300"> {/* Made text responsive */}
              I&apos;m <span className="bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] bg-clip-text text-transparent font-semibold">
                Hamza Farissi
              </span>, a software engineer focused on full-stack development, cloud computing, and system design.
              I enjoy building scalable applications, optimizing performance, and solving complex problems.
            </p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-4 mt-6"
            >
              <p className="text-gray-300">
                I graduated from the ALX Software Engineering program where I built 
                real-world projects and gained experience in system design, performance optimization, and scalable applications.
              </p>
            </motion.div>
          </div>

          {/* AWS & Cloud Section */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] bg-clip-text text-transparent mb-4 sm:mb-6">
              AWS & Cloud Expertise
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8">
              As an AWS Certified Solutions Architect, I design and deploy scalable applications 
              while optimizing performance and security. My expertise includes serverless computing, 
              infrastructure automation, and cloud security.
            </p>

            {/* AWS Tools Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {[
                { name: "EC2", desc: "Compute & scalable instances" },
                { name: "Lambda", desc: "Serverless functions" },
                { name: "DynamoDB", desc: "NoSQL database" },
                { name: "S3", desc: "Object storage" },
                { name: "API Gateway", desc: "Secure API management" },
                { name: "CloudFormation", desc: "Infrastructure as Code" }
              ].map((awsService, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-3 sm:p-4 bg-[#101111] rounded-lg border border-transparent hover:border-[#7A87FB] transition-all duration-300 group"
                >
                  <h3 className="text-base sm:text-lg font-medium bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] bg-clip-text text-transparent group-hover:text-[#7A87FB] transition-colors">
                    {awsService.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2">{awsService.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Timeline Section */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#FFD49C] to-[#7A87FB] opacity-30"></div>
        
        <div className="space-y-8 sm:space-y-16">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 0, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex flex-col sm:flex-row ${
                index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              } items-start sm:items-center gap-4 sm:gap-8 md:gap-16 pl-8 sm:pl-0`}
            >
              {/* Timeline Dot - Adjusted positioning for mobile */}
              <div className="absolute -left-1.5 sm:left-1/2 transform sm:-translate-x-1/2 top-1/2 -translate-y-1/2 sm:top-1/2 sm:-translate-y-1/2 z-10">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] rounded-full"></div>
              </div>

              {/* Content Card */}
              <div className="w-full sm:w-[calc(50%-3rem)] relative group p-4 sm:p-6 bg-[#151515] rounded-xl shadow-md border border-transparent hover:border-[#7A87FB] transition-all duration-300">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] bg-clip-text text-transparent">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-400">{item.period}</p>
                  </div>
                </div>
                <ul className="space-y-1 sm:space-y-2">
                  {item.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-2">
                      <span className="bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] bg-clip-text text-transparent">▹</span>
                      <span className="text-sm sm:text-base text-gray-300">{detail}</span>
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