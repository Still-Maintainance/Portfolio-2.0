import Navbar from './Navbar';
import { NavButton } from './Navbar';
import { useState } from 'react';
import ico from './assets/google-gemini-icon.svg'
import { Profile } from './Navbar';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <div className='flex justify-between items-center mx-2  mt-6 md:w-15/20 md:mx-auto'>
            <div className='flex justify-center items-center gap-x-2'>
            <img src={ico} alt="Group"  width={35}/>
            <h1 className="text-xl px-2 font-['Poppins']">Farissi</h1>
            </div>
            <Navbar isOpen={isMenuOpen}/>
            <NavButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} className="md:hidden">Menu</NavButton>
            <Profile />
        </div>
    );
}