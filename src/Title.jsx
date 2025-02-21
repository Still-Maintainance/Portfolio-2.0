/* eslint-disable react/prop-types */
import portal from "./assets/Portal.svg";

export default function Title({ title, className, id }) {
  return (
    <div id={id} className={className ? className :"mt-20 ml-6 flex items-center md:w-15/20 md:mx-auto mb-20" }>
      <h1 className="mr-3 text-xl sm:text-2xl md:text-3xl font-bold text-white/95 drop-shadow-sm">
        {title}
      </h1>
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