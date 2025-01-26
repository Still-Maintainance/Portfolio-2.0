// eslint-disable-next-line react/prop-types
export default function Project({title, number}) {
    return (
        <div className="w-9/11  bg-[#151515] flex justify-center items-center mx-auto mt-10 flex-col md:flex-row gap-5">
            <div className="bg-gray-100 w-full h-100">
                <img className="w-full"/>
            </div>
            <Num number={number}/>
            <h1>{title}</h1>
            
        </div>
    );
}
// eslint-disable-next-line react/prop-types
function Num({number}){
    return (
        <>
        <div className="relative border-2 border-white/20 rounded-full w-8 h-8 p-6 flex items-center justify-center m-4 mt-0 bg-[#1C1C1C]  opacity-75">
            <div className="text-white font-['Roboto_Mono'] text-lg "><p className="bg-linear-to-b from-[#FFD49C] to-[#7A87FB] bg-clip-text text-transparent font-bold text-2xl">{number}</p></div>
            
        <div className="w-2/5 h-1/4 bg-linear-to-l from-[#FFD49C] to-[#7A87FB] filter blur-sm absolute bottom-1"></div>
        </div>
        </>
    );
}