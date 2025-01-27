import fasila from './assets/fasila.svg';

// eslint-disable-next-line react/prop-types
export default function Testimonial({ name, title, feedback }) {
    return (
        <div className="relative max-w-md mx-auto mb-7">
            <div className="bg-gradient-to-r from-[#FFD49C] to-[#7A87FB] p-[1px] rounded-3xl">
                <div className="bg-[#151515] rounded-3xl p-10">
                    <div className="flex items-center mb-6">
                        <div className="flex justify-between items-center w-full">
                            <div className="flex items-center">
                                <div className="w-13 h-13 bg-[#878787] rounded-full flex justify-center items-center">
                                    <img />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-white">{name}</h3>
                                    <p className="text-sm text-gray-400">{title}</p>
                                </div>
                            </div>
                            <div className="flex justify-end items-end">
                                <img className='w-13' src={fasila} alt="fasila" />
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-300 italic">
                        &quot;{feedback}&quot;
                    </p>
                </div>
            </div>
        </div>
    );
}
