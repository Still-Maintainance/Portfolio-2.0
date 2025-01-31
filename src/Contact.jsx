/* eslint-disable react/prop-types */
import insta from "./assets/insta.svg";
import link from "./assets/linkedin.svg";
import github from "./assets/github.svg";
import twiter from "./assets/twitter.svg";
import ico from "./assets/google-gemini-icon.svg";

export default function Contact() {
  return (
    <div className="text-text-sm mx-auto flex w-13/14 flex-col items-start justify-start gap-5">
      <p>
        I'd love to hear from you! Feel free to reach out for questions,
        collaboration, or just to connect.
      </p>
      <div className="rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] p-[2px]">
        <button className="rounded-full bg-gradient-to-r from-[#7A87FB] to-[#FFD49C] p-2 px-6 font-semibold text-[#101111]">
          Send me a message
        </button>
      </div>
      <div className="mx-auto mt-24 mb-5 rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] p-[2px]">
        <div className="flex gap-5 rounded-full bg-[#1C1C1C]">
          <Icone src={insta} alt="instagram" />
          <Icone src={link} alt="linkedin" />
          <Icone src={github} alt="github" />
          <Icone src={twiter} alt="twiter" />
        </div>
      </div>
      <div className="mx-auto flex items-center justify-center gap-x-2 mb-8">
        <img src={ico} alt="Group" width={35}/>
        <h1 className="px-2 font-['Poppins'] text-xl">Farissi</h1>
      </div>
      
    </div>
    
  );
}

export function Icone({ src, alt }) {
  return (
    <div className="rounded-full bg-[#292929] px-5 py-2.5">
      <img width={24} src={src} alt={alt} />
    </div>
  );
}
