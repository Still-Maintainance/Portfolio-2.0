import Header from "./Header";
import Hero from "./Hero";
import Steps from "./Steps";
import Title from "./Title";
import Project from "./Project";
import TechStack from "./Tech";
import Contact from "./Contact";
import About from "./About";

export default function App() {
  return (
    <div className="pt-6.5">
      <Header />
      <Hero />
      <Title title="My Development Workflow" />
      <Steps />
      <Title title="Some featured projects" id="projects" />
      <div>
        <Project
          title="StackScribe – Blog Platform"
          number="4"
          description="Engineered a full-stack blog platform with dynamic content rendering and seamless post management. Developed responsive UI with reusable components and smooth animations using Framer Motion. Implemented state management with Zustand and integrated APIs for content delivery, emphasizing clean architecture and optimal user experience."
          technologies={[
            "React.js",
            "TailwindCSS",
            "Framer Motion",
            "Zustand",
            "Firebase"
          ]}
          demoLink="https://blogpost-7f4fa.firebaseapp.com"
          githubLink="https://github.com/your-username/stackcry"
        />
        
        <Project
          title="Smartwatch Project"
          number="1"
          description="Developed a full-stack smartwatch application handling real-time data collection and processing. Engineered efficient backend systems to manage sensor data streams and API integration with the wearable device. Designed an intuitive UI for data visualization and user interactions, focusing on performance optimization for resource-constrained environments."
          technologies={["HTML", "Tailwind", "JavaScript", "UI/UX"]}
          githubLink="https://github.com/your-username/smartwatch"
        />
        <Project
          title="ColabGrow – Collaborative Platform"
          number="2"
          description="Built a role-based collaboration platform to streamline cross-departmental project discovery. Designed and implemented REST APIs handling project creation, applications, and status tracking. Integrated Firebase Authentication and secure cloud storage, modeled relational data using PostgreSQL for scalable management, and implemented real-time notifications to improve user engagement."
          technologies={[
            "React.js",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "Supabase"
          ]}
          githubLink="https://github.com/your-username/colapgrow"
        />

        <Project
          title="Smart India Hackathon – Kerala Website"
          number="3"
          description="Developed a comprehensive Kerala tourism and information website during a national-level hackathon. Demonstrated rapid prototyping and problem-solving under tight constraints, delivering a fully functional, responsive solution. Showcased ability to build production-ready applications quickly while maintaining code quality and user experience."
          technologies={[
            "React.js",
            "Node.js",
            "TailwindCSS",
            "REST APIs"
          ]}
          demoLink="https://safe-kerala.vercel.app/"
          githubLink="https://github.com/your-username/kerala-website"
        />

       

        <Project
          title="AI Project – Meta-Learning System"
          number="5"
          description="Designed a multi-intent AI system for the AICTE internship that routes user queries to specialized components. Implemented semantic intent classification for handling factual, numeric, and explanation-based queries. Integrated transformer-based models for controlled explanation generation and engineered a feedback pipeline to iteratively improve system performance."
          technologies={[
            "Python",
            "FastAPI",
            "PyTorch",
            "Scikit-learn",
            "SQLite",
            "Machine Learning"
          ]}
        />
      </div>
      <Title title="Skills & Technologies" />

      <TechStack />
      <Title title="About Me" id="about" />
      <About />
      <Contact />
    </div>
  );
}
