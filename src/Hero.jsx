import Button from "./components/Button";

export default function Hero() {
  const handleScroll = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        id="home"
        className="relative mt-15 grid grid-cols-4 grid-rows-10 lg:mx-auto lg:w-15/20 lg:grid-cols-6 lg:grid-rows-8"
      >
        {/* 🆕 Two extra rows above the content */}
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

        {/* Main Hero Content */}
        <div className="col-start-1 col-end-5 row-span-5 flex flex-col flex-wrap items-center justify-center text-center lg:col-start-2 lg:col-end-6 lg:row-span-3">
          <h1 className="px-4 text-3xl tracking-wide md:text-4xl">
            Hi, I&apos;m Sagar Addagarla.
          </h1>
          <p className="mx-4 my-3 text-sm/5.5 tracking-wide opacity-85 md:mx-10 md:my-5 md:max-w-xl md:whitespace-normal">
             I&apos;m a full stack developer who enjoys building responsive,
            user-friendly web applications. I focus on creating clean designs,
            seamless user experiences, and efficient backend systems.
          </p>
          <Button title="View Projects" onClick={handleScroll} />
        </div>

        {/* Glowing Icons */}

        <div className="absolute top-16.5 left-3/4 z-10 -translate-x-1/2 transform lg:top-15.5 lg:left-5/6 lg:w-9"></div>
        <div className="absolute bottom-36.5 left-1/4 z-10 -translate-x-1/2 transform lg:bottom-55.5 lg:left-1/6 lg:w-9"></div>

        {/* Remaining grid blocks */}
        <div className="h-20 border-[0.5px] opacity-20"></div>
        <div className="h-20 border-[0.5px] opacity-20"></div>
        <div className="h-20 border-[0.5px] opacity-20"></div>
        <div className="h-20 border-[0.5px] opacity-20"></div>
        <div className="h-20 border-[0.5px] opacity-20"></div>
        <div className="h-20 border-[0.5px] opacity-20"></div>
        <div className="h-20 border-[0.5px] opacity-20"></div>
        <div className="h-20 border-[0.5px] opacity-20"></div>

        {/* Hidden grid blocks for lg screens */}
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
    </>
  );
}
