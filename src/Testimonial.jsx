import fasila from "./assets/fasila.svg";

// eslint-disable-next-line react/prop-types
export default function Testimonial({ name, title, feedback }) {
  return (
    <div className="relative mx-auto mb-7 max-w-xs md:max-w-md lg:mx-0 lg:max-w-xl">
      <div className="rounded-3xl bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] p-[1px]">
        <div className="rounded-3xl bg-[#151515] p-6">
          <div className="mb-6 flex items-center">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#878787]">
                  <img />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg text-white">{name}</h3>
                  <p className="text-sm text-gray-400">{title}</p>
                </div>
              </div>
              <div className="flex items-end justify-end">
                <img className="w-8" src={fasila} alt="fasila" />
              </div>
            </div>
          </div>
          <p className="text-gray-300 italic">&quot;{feedback}&quot;</p>
        </div>
      </div>
    </div>
  );
}
