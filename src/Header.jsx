import Navbar from "./Navbar";
import { NavButton } from "./Navbar";
import { useState } from "react";
import ico from "./assets/google-gemini-icon.svg";
import Button from "./components/Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#101111]/80 backdrop-blur-md border-b border-[#7A87FB]/10">
      <div className="mx-auto px-4 py-4 flex items-center justify-between lg:w-15/20">
        <div className="flex items-center justify-center gap-x-2">
          <img src={ico} alt="Group" width={35} className="transition-transform duration-300 hover:scale-110" />
          <h1 className="px-2 font-['Poppins'] text-xl bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] bg-clip-text text-transparent">
            Farissi
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
          <a href="/My CV.pdf" download="Farissi-CV.pdf" className="hidden lg:block">
            <Button title="Download CV" />
          </a>
        </div>
      </div>
    </header>
  );
}
