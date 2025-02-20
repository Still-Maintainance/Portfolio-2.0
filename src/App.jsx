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
      <Title title="Some featured projects" />
      <div id="projects">
        <Project
          title="Assembly: Endgame"
          number="1"
          description="Assembly-Endgame is a word guessing game where players must guess a randomly selected word within 8 attempts to prevent the programming world from being taken over by Assembly language. The game features random word selection, letter guessing, life tracking, and win/lose conditions."
          technologies={["React", "CSS"]}
          images={[
            "src/assets/projects/assembly2.png",
            "src/assets/projects/assembly.png",
            "src/assets/projects/assembly-win.png",
            "src/assets/projects/assembly-lost.png",
          ]}
          demoLink="https://assembly-endgame-160527.netlify.app/"
          githubLink="https://github.com/roxxe3/Assembly-Endgame"
        />
        <Project
          title="Assembly: Endgame"
          number="1"
          description="Assembly-Endgame is a word guessing game where players must guess a randomly selected word within 8 attempts to prevent the programming world from being taken over by Assembly language. The game features random word selection, letter guessing, life tracking, and win/lose conditions."
          technologies={["React", "CSS"]}
          images={[
            "src/assets/projects/assembly.png",
            "src/assets/projects/assembly2.png",
            "src/assets/projects/assembly.png",
          ]}
          demoLink="https://assembly-endgame-160527.netlify.app/"
          githubLink="https://github.com/roxxe3/Assembly-Endgame"
        />
        <Project
          title="Assembly: Endgame"
          number="1"
          description="Assembly-Endgame is a word guessing game where players must guess a randomly selected word within 8 attempts to prevent the programming world from being taken over by Assembly language. The game features random word selection, letter guessing, life tracking, and win/lose conditions."
          technologies={["React", "CSS"]}
          images={[
            "src/assets/projects/assembly.png",
            "src/assets/projects/assembly2.png",
            "src/assets/projects/assembly.png",
          ]}
          demoLink="https://assembly-endgame-160527.netlify.app/"
          githubLink="https://github.com/roxxe3/Assembly-Endgame"
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
