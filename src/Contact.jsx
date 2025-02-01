/* eslint-disable react/prop-types */
import insta from "./assets/insta.svg";
import link from "./assets/linkedin.svg";
import github from "./assets/github.svg";
import twiter from "./assets/twitter.svg";
import ico from "./assets/google-gemini-icon.svg";
import portal from "./assets/Portal.svg";
import Title from "./Title";

export default function Contact() {
  return (
    <div className="text-text-sm mx-auto flex w-13/14 flex-col items-start justify-start gap-5 lg:mx-auto lg:w-15/20">
      <div className="flex justify-between w-15/20">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="flex flex-col">
            <Title title="Have idea about project?" className={"ml-0"}/>
            <div className="flex flex-col items-start justify-start gap-5">
              <p className="lg:max-w-100 mt-12">
                I&apos;d love to hear from you! Feel free to reach out for
                questions, collaboration, or just to connect.
              </p>
              <div className="rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] p-[2px]">
                <button className="rounded-full bg-gradient-to-r from-[#7A87FB] to-[#FFD49C] p-2 px-6 font-semibold text-[#101111]">
                  Send me a message
                </button>
              </div>
            </div>
          </div>
        </div>
          <Style />

      </div>
      <div className="mx-auto mt-24 mb-5 rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] p-[2px]">
        <div className="flex gap-5 rounded-full bg-[#1C1C1C]">
          <Icone src={insta} alt="instagram" />
          <Icone src={link} alt="linkedin" />
          <Icone src={github} alt="github" />
          <Icone src={twiter} alt="twiter" />
        </div>
      </div>
      <div className="mx-auto mb-8 flex items-center justify-center gap-x-2">
        <img src={ico} alt="Group" width={35} />
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
export function Style() {
  return (
    <div data-layer="Frame 1597884173" className="Frame1597884173 w-40 h-80 relative hidden lg:block">
      <div data-layer="Line 134" className="Line134 w-96 h-px left-[355px] top-[392.02px] absolute origin-top-left -rotate-90 border border-neutral-800"></div>
      <div data-layer="Line 135" className="Line135 w-96 h-px left-[275px] top-[392.02px] absolute origin-top-left -rotate-90 border border-neutral-800"></div>
      <div data-layer="Line 138" className="Line138 w-96 h-px left-[196px] top-[392.02px] absolute origin-top-left -rotate-90 border border-neutral-800"></div>
      <div data-layer="Line 137" className="Line137 w-96 h-px left-0 top-[291px] absolute border border-neutral-800"></div>
      <div data-layer="Line 139" className="Line139 w-96 h-px left-0 top-[204px] absolute border border-neutral-800"></div>
      <img src={portal} alt="Portal" className="w-8 absolute top-51 left-49 transform -translate-x-1/2 -translate-y-1/2" />
      <img src={portal} alt="Portal" className="w-8 absolute top-73 left-69 transform -translate-x-1/2 -translate-y-1/2" />

    </div>
  );
}
