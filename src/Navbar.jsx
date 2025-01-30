/* eslint-disable react/prop-types */
import homeIcon from './assets/Home Icom.svg';
import jamMenu from './assets/jam_menu.svg';

export default function Navbar(props) {
    console.log(props);
    return (
        <>
 <div className="hidden p-[2px] rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB]">
            <nav className='flex justify-between items-center gap-x-8 bg-[#1C1C1C] p-3 rounded-full'>
                <Navitem className='bg-[#292929] flex items-center px-2 rounded-2xl w-10'>
                    <img src={homeIcon} alt="Home" />
                </Navitem>
                <Navitem>About</Navitem>
                <Navitem>Projects</Navitem>
                <Navitem>Contact me</Navitem>
            </nav>
        </div>
        </>
    );
}

export function Navitem({ children, className }) {
    return (
        <a href="#" className={`text-white ${className}`}>
            {children}
        </a>
    );
}
export function MobileNav({ children, className }) {
    return (
        <div className="p-[2px] rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB]">
            <nav className={`flex justify-between items-center gap-x-8 ${className}`}>
                {children}
            </nav>
        </div>
    );
}


export function NavButton({className, setIsMenuOpen, isMenuOpen }) {
    console.log(isMenuOpen);
    return (
        <div className={"flex p-[2px] rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] justify-center items-center gap-2 "} >
            {isMenuOpen &&   
                    <div className="flex justify-around mx-2 gap-1.5 font-['Poppins']">
                        <Navitem>About</Navitem>
                        <Navitem>Projects</Navitem>
                        <Navitem>Contact me</Navitem>
                    </div>}

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`bg-[#292929] px-3 py-1 rounded-3xl border-4 border-[#1C1C1C] ${className}`}>
                <img src={jamMenu} alt="Home" />
            </button>
        </div>
    );
}