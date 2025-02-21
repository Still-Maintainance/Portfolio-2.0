import Header from "./Header";
import Hero from "./Hero";
import Steps from "./Steps";
import Title from "./Title";
import Project from "./Project";
import TechStack from "./Tech";
import Contact from "./Contact";
import About from "./About";
import assembly2 from "./assets/projects/assembly2.png";
import assembly from "./assets/projects/assembly.png";
import assemblyWin from "./assets/projects/assembly-win.png";
import assemblyLost from "./assets/projects/assembly-lost.png";
import portfolio from "./assets/projects/portfolio.jpg";
import taskify from "./assets/projects/taskify.png";
import taskify2 from "./assets/projects/taskify2.png";
import taskify3 from "./assets/projects/taskify3.png";

export default function App() {
  return (
    <div className="pt-6.5">
      <Header />
      <Hero />
      <Title title="My Development Workflow" />
      <Steps />
      <Title title="Some featured projects" />
      <div id="projects">
        <Project
          title="Assembly: Endgame"
          number="1"
          description="Assembly-Endgame is a word guessing game where players must guess a randomly selected word within 8 attempts to prevent the programming world from being taken over by Assembly language. The game features random word selection, letter guessing, life tracking, and win/lose conditions."
          technologies={["React", "CSS"]}
          images={[assembly2, assembly, assemblyWin, assemblyLost]}
          demoLink="https://assembly-endgame-160527.netlify.app/"
          githubLink="https://github.com/roxxe3/Assembly-Endgame"
        />
        <Project
          title="Portfolio 2.0"
          number="2"
          description="A modern, responsive portfolio website built with React, Vite, and TailwindCSS, featuring a sleek dark theme and interactive elements."
          technologies={["React", "TailwindCSS", "Vite", "Framer Motion", "React Icons", "Netlify"]}
          images={[portfolio]}
          demoLink="https://farissi-hamza.netlify.app/"
          githubLink="https://github.com/roxxe3/Portfolio-2.0"
        />
        <Project
          title="Taskify"
          number="3"
          description="Taskify is a serverless to-do list application designed for efficient task management. Built with AWS Lambda, DynamoDB, and Cognito, it leverages FastAPI for its backend and provides a seamless, user-friendly experience for organizing daily tasks."
          technologies={["Next.js", "Tailwind CSS", "FastAPI", "AWS Lambda", "DynamoDB", "Cognito"]}
          images={[taskify, taskify2, taskify3]}
          demoLink="..."
          githubLink="https://github.com/roxxe3/Taskify"
        />
      </div>
      <Title title="Skills & Technologies" />

      <TechStack />
      <Title title="About Me" />
      <About />
      <Contact />
    </div>
  );
}
