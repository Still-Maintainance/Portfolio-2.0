import Navbar from "./Navbar";
import { NavButton } from "./Navbar";
import { useState } from "react";
import ico from "./assets/google-gemini-icon.svg";
import Button from "./components/Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="mx-2 mt-6 flex items-center justify-between lg:mx-auto lg:w-15/20">
      <div className="flex items-center justify-center gap-x-2">
        <img src={ico} alt="Group" width={35} />
        <h1 className="px-2 font-['Poppins'] text-xl">Farissi</h1>
      </div>
      <Navbar isOpen={isMenuOpen} />
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
  );
}
