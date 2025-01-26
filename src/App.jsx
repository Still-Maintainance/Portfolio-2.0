import Header from "./Header";
import Hero from "./Hero";
import Steps from "./Steps";
import Title from "./Title";
import Project from "./Project";
export default function App() {
    return (
        <div>
            <Header />
            <Hero />
            <Title title="My Development Workflow" />
            <Steps />
            <Title title="Some featured projects" />
            <Project title="project name" number="1"/>
        </div>
    );
}