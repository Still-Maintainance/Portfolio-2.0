import portal from "./assets/Portal.svg";

// eslint-disable-next-line react/prop-types
export default function Title({ title }) {
  return (
    <div className="mt-12 mb-12 ml-6 flex items-center">
      <h1 className="mr-3 text-[1.3rem] md:text-3xl">{title}</h1>
      <div className="relative">
        <img src={portal} className="w-7 md:w-10" />
        <img src={portal} className="absolute bottom-7 left-7 w-3 md:w-4" />
      </div>
    </div>
  );
}
