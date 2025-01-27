import portal from './assets/Portal.svg';
import vector from './assets/Vector.svg';

export default function Hero() {
    return (
        <>
        <div className="mt-15 grid grid-cols-4 grid-rows-8 relative">
            <div className="border-[0.5px] h-20 opacity-20"></div>
            <div className="border-[0.5px] h-20 opacity-20"></div>
            <div className="border-[0.5px] h-20 opacity-20"></div>
            <div className="border-[0.5px] h-20 opacity-20"></div>
            <div className="flex flex-wrap flex-col justify-center text-center items-center col-start-1 col-end-5 row-span-5">
                <h1 className="text-xl md:text-3xl px-4">Designing the backbone of modern applications</h1>
                <p className="text-sm md:text-base my-3 md:my-5 mx-4 md:mx-10">Focused on backend development and cloud technologies, I build APIs, manage server infrastructure, and deploy scalable systems with AWS, seamlessly integrating them into intuitive user interfaces.</p>
                <div className="p-[2px] rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB]">
                    <button className="p-3 px-6 font-semibold rounded-full bg-gradient-to-r from-[#7A87FB] to-[#FFD49C] text-[#101111]">Hire me</button>
                </div>
            </div>
            <img src={portal} alt="Portal" className="w-7 absolute top-16 left-1/4 transform -translate-x-1/2"/>
            <img src={portal} alt="Portal" className="w-7 absolute bottom-36.5 left-3/4 transform -translate-x-1/2"/>
            <div className="border-[0.5px] h-20 opacity-20"></div>
            <div className="border-[0.5px] h-20 opacity-20"></div>
            <div className="border-[0.5px] h-20 opacity-20"></div>
            <div className="border-[0.5px] h-20 opacity-20"></div>
            <div className="border-[0.5px] h-20 opacity-20"></div>
            <div className="border-[0.5px] h-20 opacity-20"></div>
            <div className="border-[0.5px] h-20 opacity-20"></div>
            <div className="border-[0.5px] h-20 opacity-20"></div>
        </div>
        <div className='flex justify-between items-center gap-x-10 p-10 border-b-2 border-white/20'>
            <h1 className='text-xl'>Figma</h1>
            <img className='w-8' src={vector} alt="Vector" />
            <h1 className='text-xl'>AWS</h1>
            <img className='w-8' src={vector} alt="Vector" />
            <h1 className='text-xl'>React</h1>
            <img className='w-8' src={vector} alt="Vector" />
        </div>
        </>
    );
}