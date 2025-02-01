import portal from "./assets/Portal.svg";

// eslint-disable-next-line react/prop-types
export default function Title({ title, className }) {
  return (
    <div className={className ? className :"mt-12 ml-6 flex items-center md:w-15/20 md:mx-auto mb-12" }>
      <h1 className="mr-3 text-[1.3rem] md:text-3xl">{title}</h1>
      <div className="relative">
        <img src={portal} className="w-6 md:w-10" />
        <img
          src={portal}
          className="absolute bottom-5 left-5 w-2.5 md:bottom-7 md:left-7 md:w-4"
        />
      </div>
    </div>
  );
}
