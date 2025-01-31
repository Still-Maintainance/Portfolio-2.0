import portal from "./assets/Portal.svg";
import vector from "./assets/Vector.svg";

export default function Hero() {
  return (
    <>
      <div className="relative mt-15 grid grid-cols-4 grid-rows-8 lg:mx-auto lg:w-15/20 lg:grid-cols-6 lg:grid-rows-6">
        <div className="h-20 border-[0.5px] opacity-20"></div>
        <div className="h-20 border-[0.5px] opacity-20"></div>
        <div className="h-20 border-[0.5px] opacity-20"></div>
        <div className="h-20 border-[0.5px] opacity-20"></div>
        <div className="hidden h-20 border-[0.5px] opacity-20 lg:block"></div>
        <div className="hidden h-20 border-[0.5px] opacity-20 lg:block"></div>
        <div className="hidden h-20 border-[0.5px] opacity-20 lg:block"></div>

        <div className="col-start-1 col-end-5 row-span-5 flex flex-col flex-wrap items-center justify-center text-center lg:col-start-2 lg:col-end-6 lg:row-span-3">
          <h1 className="px-4 text-3xl tracking-wide md:text-4xl">
            Hi, I'm Hamza Farissi.
          </h1>
          <p className="mx-4 my-3 text-sm/5.5 tracking-wide opacity-85 md:mx-10 md:my-5 md:max-w-xl md:whitespace-normal">
            I specialize in backend development and cloud technologies, crafting
            scalable APIs, managing server infrastructures, and integrating them
            with modern frontend systems to create seamless user experiences.
          </p>
          <div className="rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] p-[2px]">
            <button className="rounded-full bg-gradient-to-r from-[#7A87FB] to-[#FFD49C] p-3 px-6 font-semibold text-[#101111] ">
              Hire me
            </button>
          </div>
        </div>
        <img
          src={portal}
          alt="Portal"
          className="absolute top-16.5 left-3/4 w-7 -translate-x-1/2 lg:top-15.5 transform lg:left-5/6 lg:w-9"
        />
        <img
          src={portal}
          alt="Portal"
          className="absolute bottom-36.5 left-1/4 w-7 -translate-x-1/2 transform lg:bottom-55.5 lg:left-1/6 lg:w-9"
        />
        <div className="h-20 border-[0.5px] opacity-20"></div>
        <div className="h-20 border-[0.5px] opacity-20"></div>
        <div className="h-20 border-[0.5px] opacity-20"></div>
        <div className="h-20 border-[0.5px] opacity-20"></div>
        <div className="h-20 border-[0.5px] opacity-20"></div>
        <div className="h-20 border-[0.5px] opacity-20"></div>
        <div className="h-20 border-[0.5px] opacity-20"></div>
        <div className="h-20 border-[0.5px] opacity-20"></div>
        <div className="hidden h-20 border-[0.5px] opacity-20 lg:block"></div>
        <div className="hidden h-20 border-[0.5px] opacity-20 lg:block"></div>
        <div className="hidden h-20 border-[0.5px] opacity-20 lg:block"></div>
        <div className="hidden h-20 border-[0.5px] opacity-20 lg:block"></div>
        <div className="hidden h-20 border-[0.5px] opacity-20 lg:block"></div>
        <div className="hidden h-20 border-[0.5px] opacity-20 lg:block"></div>
        <div className="hidden h-20 border-[0.5px] opacity-20 lg:block"></div>
        <div className="hidden h-20 border-[0.5px] opacity-20 lg:block"></div>
        <div className="hidden h-20 border-[0.5px] opacity-20 lg:block"></div>
        <div className="hidden h-20 border-[0.5px] opacity-20 lg:block"></div>
        <div className="hidden h-20 border-[0.5px] opacity-20 lg:block"></div>
        <div className="hidden h-20 border-[0.5px] opacity-20 lg:block"></div>
        <div className="hidden h-20 border-[0.5px] opacity-20 lg:block"></div>
        <div className="hidden h-20 border-[0.5px] opacity-20 lg:block"></div>
        <div className="hidden h-20 border-[0.5px] opacity-20 lg:block"></div>
      </div>
      <Marquee />
    </>
  );
}
const skills = [
  "C/C++",
  "Python",
  "JavaScript",
  "Node.js",
  "RESTful APIs",
  "AWS",
  "SQL",
  "Docker",
  "CI/CD",
  "React",
  "Git/GitHub",
  "Redis",
  "MongoDB",
];
function Marquee() {
  const renderSkills = (prefix) =>
    skills.map((skill, index) => (
      <div
        key={`${prefix}-${index}`}
        className="flex items-center justify-between gap-x-4 p-4 sm:gap-x-10 sm:p-10"
      >
        <h1 className="text-lg sm:text-xl">{skill}</h1>
        <img className="w-6 sm:w-8" src={vector} alt="Vector" />
      </div>
    ));

  return (
    <div className="relative flex w-full overflow-hidden border-b-2 border-white/20 md:border-t-2">
      <div className="animate-marquee flex whitespace-nowrap">
        {renderSkills("first")}
        {renderSkills("second")}
      </div>
    </div>
  );
}
