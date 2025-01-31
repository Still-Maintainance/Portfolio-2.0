/* eslint-disable react/prop-types */
import homeIcon from "./assets/Home Icom.svg";
import jamMenu from "./assets/jam_menu.svg";
import logo from "./assets/profile.svg";

export default function Navbar(props) {
  console.log(props);
  return (
    <>
      <div className="hidden rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] p-[2px] md:block">
        <nav className="flex items-center justify-between gap-x-10 rounded-full bg-[#1C1C1C]">
          <div className="m-1.5 rounded-full bg-[#292929] px-4 py-2">
            <img width={38} src={homeIcon} />
          </div>
          <Navitem>About</Navitem>
          <Navitem>Projects</Navitem>
          <Navitem className={"mr-8"}>Contact me</Navitem>
        </nav>
      </div>
    </>
  );
}

export function Navitem({ children, className }) {
  return (
    <a
      href="#"
      className={`font-medium text-white ${className} text-shadow mx-1`}
    >
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
    <div
      className={
        "md:hidden flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] p-[2px] md:invisible"
      }
    >
      {isMenuOpen && (
        <div className="flex justify-around font-['Poppins'] text-xs">
          <Navitem>About</Navitem>
          <Navitem>Projects</Navitem>
          <Navitem>Contact me</Navitem>
        </div>
      )}

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`rounded-3xl border-4 border-[#1C1C1C] bg-[#292929] px-3 py-1 ${className}`}
      >
        <img src={jamMenu} alt="Home" />
      </button>
    </div>
  );
}

export function Profile(){
    return (
        <div className="md:block hidden rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] p-[2px]">

            <div className="rounded-full bg-gradient-to-r from-[#7A87FB] to-[#FFD49C] p-4.5">
                <img 
                    className="w-4.5" 
                    src={logo} 
                    alt="Profile"
                />
            </div>
        </div>
    )
}