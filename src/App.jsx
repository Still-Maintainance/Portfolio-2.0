import Header from "./Header";
import Hero from "./Hero";
import Steps from "./Steps";
import Title from "./Title";
import Project from "./Project";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Title title="My Development Workflow" />
      <Steps />
      <Title title="Some featured projects" />
      <div id="projects">
        <Project
          title="Project Name"
          number="1"
          description="A detailed description of your project and what it does. Explain the main features and your role in development."
          technologies={["React", "TailwindCSS", "Node.js", "MongoDB"]}
          image="/path-to-project-image.jpg"
          demoLink="https://your-demo-link.com"
          githubLink="https://github.com/your-username/project-repo"
        />
        <Project
          title="Project Name"
          number="2"
          description="A detailed description of your project and what it does. Explain the main features and your role in development."
          technologies={["React", "TailwindCSS", "Node.js", "MongoDB"]}
          image="/path-to-project-image.jpg"
          demoLink="https://your-demo-link.com"
          githubLink="https://github.com/your-username/project-repo"
        />
        <Project
          title="Project Name"
          number="3"
          description="A detailed description of your project and what it does. Explain the main features and your role in development."
          technologies={["React", "TailwindCSS", "Node.js", "MongoDB"]}
          image="/path-to-project-image.jpg"
          demoLink="https://your-demo-link.com"
          githubLink="https://github.com/your-username/project-repo"
        />
      </div>
      <Title title="Client Testimonials " />
      <div className="items-start justify-start lg:mx-auto lg:w-15/20">
        <div className="gap-5 lg:grid lg:grid-cols-2 lg:gap-2">
          <Testimonial
            name="Your Name here"
            title="your Title here"
            feedback="Your feedback could be featured here! Let's work together, and I'd love
                            to showcase your experience."
          />
          <Testimonial
            name="Your Name here"
            title="your Title here"
            feedback="Your feedback could be featured here! Let's work together, and I'd love
                            to showcase your experience."
          />
          <Testimonial
            name="Your Name here"
            title="your Title here"
            feedback="Your feedback could be featured here! Let's work together, and I'd love
                            to showcase your experience."
          />
          <Testimonial
            name="Your Name here"
            title="your Title here"
            feedback="Your feedback could be featured here! Let's work together, and I'd love
                            to showcase your experience."
          />
        </div>
      </div>
      <Contact />
    </div>
  );
}
