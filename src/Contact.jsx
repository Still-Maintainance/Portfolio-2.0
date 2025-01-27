import insta from "./assets/insta.svg";
import link from "./assets/linkedin.svg";
import github from "./assets/github.svg";
import twiter from "./assets/twitter.svg";
import ico from './assets/Group.svg';


export default function Contact() {
    return (
        <div className="mx-auto w-13/14 text-text-sm flex flex-col items-start gap-5 justify-start">
            <p>I'd love to hear from you! Feel free to reach out for questions, collaboration, or just to connect.</p>
            <div className="p-[2px] rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB]">
                    <button className="p-2 px-6 font-semibold rounded-full bg-gradient-to-r from-[#7A87FB] to-[#FFD49C] text-[#101111]">Send me a message</button>
            </div>
            <div className="p-[1px] rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] mx-auto mt-24 mb-5">
                <div className="flex bg-[#1C1C1C] gap-5 rounded-full">
                    <Icone src={insta} alt="instagram"/>
                    <Icone src={link} alt="linkedin"/>
                    <Icone src={github} alt="github"/>
                    <Icone src={twiter} alt="twiter"/>
                </div>
            </div>
                        <div className='flex justify-center items-center gap-x-2 mx-auto'>
                            <img src={ico} alt="Group" />
                            <h1 className="text-xl px-2 font-['Poppins']">farissi</h1>
                        </div>
        </div>
    );}

function Icone({src, alt}){
        return <div className="bg-[#292929] px-5 py-2.5 rounded-full">
                <img width={24} src={src} alt={alt} />
                </div>
    }