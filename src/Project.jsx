// eslint-disable-next-line react/prop-types
export default function Project({ title, number }) {
  return (
    <div className="mx-auto mt-10 flex w-9/11 flex-col items-start justify-center gap-5 bg-[#151515] pb-8 md:flex-row  lg:mx-auto lg:w-14/20 lg:justify-start lg:items-center ">
      <div className="mt-8 h-100 w-100  bg-linear-to-r from-[#FFD49C] to-[#7A87FB] justify-self-auto lg:m-10 lg:w-120 lg:h-120">
        <img className=" " />
      </div>
      <Num number={number} />
      <h1 className="text-3xl font-bold">{title}</h1>
    </div>
  );
}
// eslint-disable-next-line react/prop-types
function Num({ number }) {
  return (
    <>
      <div className="relative m-2 mt-3 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/20 bg-[#1C1C1C] p-6 opacity-75">
        <div className="font-['Roboto_Mono'] text-lg text-white">
          <p className="bg-linear-to-b from-[#FFD49C] to-[#7A87FB] bg-clip-text text-2xl font-bold text-transparent">
            {number}
          </p>
        </div>

        <div className="absolute bottom-1 h-1/4 w-2/5 bg-linear-to-l from-[#FFD49C] to-[#7A87FB] blur-sm filter"></div>
      </div>
    </>
  );
}
