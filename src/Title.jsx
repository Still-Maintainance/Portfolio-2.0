import portal from './assets/Portal.svg';

// eslint-disable-next-line react/prop-types
export default function Title({title}) {
    return  <div className='mt-12 mb-12 ml-6 flex items-center' >
                <h1 className='md:text-3xl text-[1.3rem]  mr-3'>{title}</h1>
                <div className='relative'>
                    <img src={portal} className='md:w-10 w-8'/>
                    <img src={portal} className='md:w-4 w-3 absolute bottom-7 left-7'/>
                </div>
            </div>
}