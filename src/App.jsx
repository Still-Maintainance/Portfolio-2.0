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
            <Project title="Project name" number="1"/>
            <Project title="Project name" number="2"/>
            <Project title="Project name" number="3"/>
            <Title title="Client Testimonials " />
            <div className="lg:w:10/20 lg:mx-auto lg:flex lg:flex-wrap lg:justify-center">

                <div className="lg:flex lg:gap-2">

                <Testimonial name="Your Name here" title="your Title here" feedback="Your feedback could be featured here! Let's work together, and I'd love
                            to showcase your experience."/>
                <Testimonial name="Your Name here" title="your Title here" feedback="Your feedback could be featured here! Let's work together, and I'd love
                            to showcase your experience."/>
                </div>
                <div className="lg:flex lg:gap-2">
                <Testimonial name="Your Name here" title="your Title here" feedback="Your feedback could be featured here! Let's work together, and I'd love
                            to showcase your experience."/>
                <Testimonial name="Your Name here" title="your Title here" feedback="Your feedback could be featured here! Let's work together, and I'd love
                            to showcase your experience."/>
                </div>
            </div>
            <Title title="Have idea about project?" />
            <Contact />
        </div>
    );
}