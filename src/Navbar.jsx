/* eslint-disable react/prop-types */
import homeIcon from "./assets/Home Icom.svg";
import jamMenu from "./assets/jam_menu.svg";
import logo from "./assets/profile.svg";

export default function Navbar() {
  return (
    <>
      <div className="hidden rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] p-[2px] lg:block">
        <nav className="flex items-center justify-between gap-x-10 rounded-full bg-[#1C1C1C] transition-all duration-300">
          <div className="m-1 rounded-full bg-[#292929] px-4 transition-all duration-300 hover:scale-110 cursor-pointer">
            <img width={37} src={homeIcon} alt="Home" className="transition-transform duration-300" />
          </div>
          <Navitem href="#projects" className="transition-all duration-300 hover:text-[#FFD49C] hover:scale-105">Projects</Navitem>
          <Navitem href="#contact" className="mr-8 transition-all duration-300 hover:text-[#FFD49C] hover:scale-105">Contact me</Navitem>
        </nav>
      </div>
    </>
  );
}

export function Navitem({ children, className, href }) {
  return (
    <a href={href} className={`text-white ${className} text-shadow mx-1`}>
      {children}
    </a>
  );
}
export function MobileNav({ children, className }) {
  return (
    <div className="rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] p-[2px]">
      <nav className={`flex items-center justify-between gap-x-8 ${className}`}>
        {children}
      </nav>
    </div>
  );
}

export function NavButton({ className, setIsMenuOpen, isMenuOpen }) {
  console.log(isMenuOpen);
  return (
    <div className="group relative flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] p-[2px] transition-all duration-300 hover:shadow-lg hover:shadow-[#7A87FB]/50 lg:hidden">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`cursor-pointer rounded-3xl border-4 border-[#1C1C1C] bg-[#292929] from-[#7A87FB] to-[#FFD49C] px-3 py-1 transition-colors duration-200 group-hover:bg-gradient-to-r ${className}`}
      >
        <img src={jamMenu} alt="Home" className="h-6 w-6" />
      </button>
      {isMenuOpen && (
        <div className="absolute top-full right-0 z-50 mt-2 w-48 rounded-lg border border-[#363636] bg-[#1C1C1C] shadow-lg backdrop-blur-lg">
          <Navitem className="block px-4 py-3 transition-colors duration-200 first:rounded-t-lg hover:bg-[#292929]">
            About
          </Navitem>
          <Navitem className="block px-4 py-3 transition-colors duration-200 hover:bg-[#292929]">
            Projects
          </Navitem>
          <Navitem className="block px-4 py-3 transition-colors duration-200 last:rounded-b-lg hover:bg-[#292929]">
            Contact me
          </Navitem>
        </div>
      )}
    </div>
  );
}

export function Profile() {
  return (
    <div className="hidden rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] p-[1px] lg:block">
      <div className="rounded-full bg-gradient-to-r from-[#7A87FB] to-[#FFD49C] p-4">
        <img className="w-4" src={logo} alt="Profile" />
      </div>
    </div>
  );
}
