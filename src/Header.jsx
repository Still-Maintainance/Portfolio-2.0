import Navbar from "./Navbar";
import { NavButton } from "./Navbar";
import { useState } from "react";
import ico from "./assets/google-gemini-icon.svg";
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
            className="inline-block rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] p-[2px] transition-transform duration-100 active:scale-95"
          >
            <span className="block rounded-full bg-[#0F0F0F] px-6 py-2 text-sm font-semibold text-white">
              Download Resume
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
