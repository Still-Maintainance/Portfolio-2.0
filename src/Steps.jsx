import pac from './assets/Ellipse 17.svg'
export default function Steps() {
    return (
        <div className='flex flex-col justify-between gap-y-4'>
            <img className='w-10' src={pac} alt="pacman" />
            <h2 className='text-2xl'>Step 1: Requirement Analysis</h2>
            <p className='text-white/80'>I start by understanding the project requirements, system architecture, and technical needs to ensure a solid foundation for development.</p>
        </div>
 
);}