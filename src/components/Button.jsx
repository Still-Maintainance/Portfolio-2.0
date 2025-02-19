// eslint-disable-next-line react/prop-types
export default function Button({ title, onClick }) {
    return (
        <div className="group relative rounded-full bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] p-[2px] transition-all duration-300 hover:shadow-lg hover:shadow-[#7A87FB]/50">
            <button onClick={onClick} className="cursor-pointer rounded-full bg-[#101111] from-[#7A87FB] to-[#FFD49C] p-3 px-6 font-semibold text-white group-hover:bg-gradient-to-r">
            {title}
            </button>
      </div>
    );
    }