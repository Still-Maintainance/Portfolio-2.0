/* eslint-disable react/prop-types */
import link from "./assets/linkedin.svg";
import github from "./assets/github.svg";
import ico from "./assets/google-gemini-icon.svg";
import portal from "./assets/Portal.svg";
import Title from "./Title";
import ContactForm from "./ContactForm";
import { useState } from "react";
import { SiLeetcode } from "react-icons/si";

import email from "./assets/email.svg";

export default function Contact() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div
      className="text-text-sm mx-auto flex w-13/14 flex-col items-start justify-start gap-5 lg:mx-auto lg:mt-20 lg:w-15/20"
      id="contact"
    >
      <div className="flex flex-col">
        <div className="flex w-full lg:gap-70">
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="flex flex-col lg:w-187">
              <Title
                title="Have idea about project?"
                className={"mt-12 mb-5 ml-0 flex items-center md:w-15/20"}
              />
              <div className="flex flex-col items-start justify-start gap-5">
                <p className="mt-4 mb-5 lg:max-w-200">
                  I&apos;d love to hear from you! Feel free to reach out for
                  questions, collaboration, or just to connect.
                </p>
                <div className="flex gap-4 lg:hidden">
                  <div className="rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] p-[2px]">
                    <button
                      onClick={() => setShowForm(!showForm)}
                      className="rounded-full bg-gradient-to-r from-[#7A87FB] to-[#FFD49C] p-2 px-6 font-semibold text-[#101111]"
                    >
                      Send me a message
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden w-full lg:block">
                <ContactForm />
              </div>
            </div>
          </div>

          <Style />
        </div>
      </div>

      {showForm && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="relative w-full max-w-md rounded-lg bg-[#1C1C1C] p-6">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>
            <ContactForm />
          </div>
        </div>
      )}

      <footer className="mt-20 w-full border-t border-[#7A87FB]/10 bg-[#101111]/80 backdrop-blur-md">
        <div className="mx-auto flex items-center justify-between px-4 py-6">
          <div className="hidden items-center justify-center gap-x-2 lg:flex">
            <img
              src={ico}
              alt="Group"
              width={35}
              className="transition-transform duration-300 hover:scale-110"
            />
            <h1 className="bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] bg-clip-text px-2 font-['Poppins'] text-xl text-transparent">
              Sagar Addagarla
            </h1>
          </div>
          <Socials />

          
        </div>
      </footer>
    </div>
  );
}

export function Style() {
  return (
    <div
      data-layer="Frame 1597884173"
      className="Frame1597884173 relative mt-30 hidden h-80 w-40 lg:block"
    >
      <div
        data-layer="Line 134"
        className="Line134 absolute top-[392.02px] left-[355px] h-px w-96 origin-top-left -rotate-90 border border-neutral-800"
      ></div>
      <div
        data-layer="Line 135"
        className="Line135 absolute top-[392.02px] left-[275px] h-px w-96 origin-top-left -rotate-90 border border-neutral-800"
      ></div>
      <div
        data-layer="Line 138"
        className="Line138 absolute top-[392.02px] left-[196px] h-px w-96 origin-top-left -rotate-90 border border-neutral-800"
      ></div>
      <div
        data-layer="Line 137"
        className="Line137 absolute top-[291px] left-0 h-px w-96 border border-neutral-800"
      ></div>
      <div
        data-layer="Line 139"
        className="Line139 absolute top-[204px] left-0 h-px w-96 border border-neutral-800"
      ></div>
      <img
        src={portal}
        alt="Portal"
        className="absolute top-51 left-49 w-8 -translate-x-1/2 -translate-y-1/2 transform"
      />
      <img
        src={portal}
        alt="Portal"
        className="absolute top-73 left-69 w-8 -translate-x-1/2 -translate-y-1/2 transform"
      />
    </div>
  );
}

export function Icone({ icon: Icon, href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center rounded-full bg-[#292929] px-5 py-2.5 transition-colors hover:bg-[#363636]"
    >
      <Icon size={24} className="text-white" />
    </a>
  );
}

export function Socials() {
  return (
    <div className="rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] p-[2px]">
      <nav className="flex items-center justify-between gap-x-8 rounded-full bg-[#1C1C1C] px-1 py-1">
        <Icone
          icon={() => <img src={email} alt="Email" width={24} />}
          href="mailto:sagaraddagarla@gmail.com"
          label="Email"
        />
        <Icone
          icon={() => <img src={link} alt="LinkedIn" width={24} />}
          href="https://www.linkedin.com/in/sagaraddagarla/"
          label="LinkedIn"
        />
        <Icone
          icon={() => <img src={github} alt="GitHub" width={24} />}
          href="https://github.com/Still-Maintainance"
          label="GitHub"
        />
        <Icone
          icon={SiLeetcode}
          href="https://leetcode.com/u/stillmaintainance/"
          label="LeetCode"
        />
      </nav>
    </div>
  );
}
