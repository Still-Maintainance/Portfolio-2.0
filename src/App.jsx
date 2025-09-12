import Header from "./Header";
import Hero from "./Hero";
import Steps from "./Steps";
import Title from "./Title";
import Project from "./Project";
import TechStack from "./Tech";
import Contact from "./Contact";
import About from "./About";
import assembly2 from "./assets/projects/assembly2.png";
import mernBlogImage from "./assets/mern.png"; // temporary
import urlShortenerImage from "./assets/url.jpeg";

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
          title="Smart Wash - Laundry Service"
          number="1"
          description="I built and deployed a web platform for Smart Wash, a student-run laundry startup, to digitize service requests and improve customer interaction. The platform included WhatsApp integration for instant order confirmations, enhancing user convenience and trust. This digital transformation helped streamline operations and contributed to generating ₹4–5 Lakhs in monthly revenue by automating bookings and scaling outreach effectively."
          technologies={["HTML", "CSS", "JS", "WhatsApp API"]}
          images={[assembly2]}
          demoLink="http://bosmartwash.in/"
          githubLink="https://github.com/shanmukhchodagam/laundries-liberty_Paid04-03-2022_1790424563"
        />
        <Project
          title="URL Shortener – Full Stack Web App"
          number="3"
          description="Built a full-stack URL shortening service using the MERN stack, capable of handling thousands of daily requests. Developed RESTful APIs with Express.js and MongoDB for secure URL mapping and redirection. Created a responsive React.js interface enabling quick link generation and analytics."
          technologies={[
            "MongoDB",
            "Express.js",
            "React.js",
            "Node.js",
            "TailwindCSS",
          ]}
          images={[urlShortenerImage]}
          githubLink="https://github.com/your-username/url-shortener"
          demoLink="https://url-shortener-demo.com"
        />

        <Project
          title="MERN Blog Post Website – Full Stack Blogging Platform"
          number="4"
          description="Engineered a full-stack blogging platform supporting CRUD operations for posts with real-time updates. Optimized backend APIs in Node.js and Express.js for high performance and scalability. Designed a mobile-friendly UI using React.js and Tailwind CSS for seamless user interaction."
          technologies={[
            "MongoDB",
            "Express.js",
            "React.js",
            "Node.js",
            "TailwindCSS",
          ]}
          images={[mernBlogImage]}
          githubLink="https://github.com/your-username/mern-blog"
          demoLink="https://mern-blog-demo.com"
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
