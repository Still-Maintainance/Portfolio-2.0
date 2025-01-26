import pac from './assets/Ellipse 17.svg'
export default function Steps() {
    return (
        <div className='flex'>
            <div className='flex flex-col w-0 mx-10 items-center '>
                <div className="border-2 rounded-full w-6 h-6 p-5 flex items-center justify-center m-4 mt-0">
                    <div className="text-white">1</div>
                </div>
                <div className='h-37 border border-white/20'></div>
                <div className="border-2 rounded-full w-6 h-6 p-5 flex items-center justify-center m-4 ">
                    <div className="text-white">2</div>
                </div>
                <div className='h-30 border border-white/20'></div>
                <div className="border-2 rounded-full w-6 h-6 p-5 flex items-center justify-center m-4 ">
                    <div className="text-white">3</div>
                </div>
                <div className='h-31 border border-white/20'></div>
                <div className="border-2 rounded-full w-6 h-6 p-5 flex items-center justify-center m-4 ">
                    <div className="text-white">4</div>
                </div>
                <div className='h-20 border border-white/20'></div>
            </div>
            <div>

                <div className='flex flex-col justify-between gap-y-4 mb-5'>
                    <img className='w-10' src={pac} alt="pacman" />
                    <h2 className='text-2xl'>Step 1: Requirement Analysis</h2>
                    <p className='text-white/80 max-w-110 md:max-w-170 '>I begin by understanding project goals, defining system architecture, and gathering technical requirements to lay a strong foundation for both backend and frontend development.</p>
                </div>
                <div className='flex flex-col justify-between gap-y-4 mb-5'>
                    <img className='w-10 rotate-90' src={pac} alt="pacman" />
                    <h2 className='text-2xl'>Step 2: Backend Development</h2>
                    <p className='text-white/80 max-w-110 md:max-w-170 '>I build secure, scalable APIs and optimize server-side logic using technologies like Python, C++, or Node.js, ensuring performance and reliability.</p>
                </div>
                <div className='flex flex-col justify-between gap-y-4 mb-5'>
                    <img className='w-10 rotate-180' src={pac} alt="pacman" />
                    <h2 className='text-2xl'>Step 3: Frontend Development</h2>
                    <p className='text-white/80 max-w-110 md:max-w-170'>I design and implement responsive user interfaces that integrate seamlessly with the backend, focusing on creating intuitive and engaging user experiences.</p>
                </div>
                <div className='flex flex-col justify-between gap-y-4'>
                    <img className='w-10' src={pac} alt="pacman" />
                    <h2 className='text-2xl'>Step 4: Deployment & Optimization</h2>
                    <p className='text-white/80 max-w-110 md:max-w-170 '>I deploy applications to AWS or other cloud platforms, set up CI/CD pipelines, and monitor performance. I also fine-tune the backend and frontend for maximum efficiency.</p>
                </div>
            </div>
        </div>
 
);}