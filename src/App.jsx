import Header from "./Header";
import Hero from "./Hero";
import Steps from "./Steps";
import Title from "./Title";
import Project from "./Project";
import TechStack from "./Tech";
import Contact from "./Contact";
import About from "./About";
import assembly2 from "./assets/projects/assembly2.png";
import portfolio from "./assets/projects/portfolio.png";
import taskify from "./assets/projects/taskify.png";


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
          technologies={["HTML", "CSS" , "JS" , "WhatsApp API"]}
          images={[assembly2]}
          demoLink="http://bosmartwash.in/"
          githubLink="https://github.com/shanmukhchodagam/laundries-liberty_Paid04-03-2022_1790424563"
        />
        <Project
          title="Bhimavaram Open – Live Sports Streaming Platform"
          number="2"
          description="For the Bhimavaram Open Tennis Tournament, I developed a live streaming and audience engagement platform using OBS Studio and the YouTube API. This allowed real-time match broadcasts, making the event accessible to families and women who preferred to watch remotely—significantly boosting community reach. Partnering with Bhimavaram Digitals Pvt. Ltd., I also enabled monetization through sponsorships, ad placements, and live viewer contributions, generating over ₹20,000 in revenue and enhancing the tournament’s digital presence."
          technologies={["HTML", "TailwindCSS", "JS", "PHP", "OBS", "XAMPP","AE"]}
          images={[portfolio ]}
           demoLink="https://www.youtube.com/watch?v=d7O6E2nQW00"
          githubLink="https://github.com/shanmukhchodagam/laundries-liberty_Paid04-03-2022_1790424563"
        />
        <Project
          title="Hospital Management System – ERP in Development"
          number="3"
          description="I'm currently building a custom ERP system for Kiran Neurology Centre to digitize and automate hospital operations. The system includes modules for lab testing, in-patient records, pharmacy inventory, billing, and medicine tracking. This project aims to improve accuracy, reduce manual errors, and increase overall operational efficiency in healthcare administration."
          technologies={["HTML", "TailwindCSS", "JS", "PHP", "XAMPP"]}
          images={[taskify]}
          
        />
      </div>
      <Title title="Skills & Technologies" />

      <TechStack />
      <Title title="About Me" id="about"/>
      <About />
      <Contact />
    </div>
  );
}
