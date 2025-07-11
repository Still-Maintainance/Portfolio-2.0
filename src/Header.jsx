import Navbar from "./Navbar";
import { NavButton } from "./Navbar";
import { useState } from "react";
import ico from "./assets/google-gemini-icon.svg";
import Button from "./components/Button";
import { Socials } from "./Contact";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-[#7A87FB]/10 bg-[#101111]/80 backdrop-blur-md">
      <div className="mx-auto flex items-center justify-between px-4 py-4 lg:w-15/20">
        <div className="flex items-center justify-center gap-x-2">
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

        <Navbar isOpen={isMenuOpen} />

        <div className="flex items-center gap-4">
          <NavButton
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            className="lg:hidden"
          >
            Menu
          </NavButton>
          <div className="hidden gap-4 lg:hidden">
            <Socials />
          </div>
          <a
            href="/Addagarla_Sri_Vidya_Sagar.pdf"
            download
            onClick={() => setIsMenuOpen(false)}
            className="block w-full rounded-b-lg bg-[#1e1e1e] px-4 py-3 text-center text-white transition-colors duration-200 hover:bg-[#292929]"
          >
            Download Resume
          </a>
         
        </div>
      </div>
    </header>
  );
}
