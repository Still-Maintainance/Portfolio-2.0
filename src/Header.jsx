import Navbar from './Navbar';
import { NavButton } from './Navbar';
import { useState } from 'react';
import ico from './assets/Group.svg';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <div className='flex justify-between items-center p-3'>
            <div className='flex justify-center items-center gap-x-2'>
            <img src={ico} alt="Group" />
            <h1 className="text-xl px-2 font-['Poppins']">farissi</h1>
            </div>
            <Navbar isOpen={isMenuOpen}/>
            <NavButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} className="md:hidden">Menu</NavButton>

        </div>
    );
}