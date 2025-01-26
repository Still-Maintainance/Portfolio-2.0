import Header from "./Header";
import Hero from "./Hero";
import Steps from "./Steps";
import Title from "./Title";
export default function App() {
    return (
        <div>
            <Header />
            <Hero />
            <Title title="My Development Workflow" />
            <Steps />
        </div>
    );
}