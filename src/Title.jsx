import portal from './assets/Portal.svg';

// eslint-disable-next-line react/prop-types
export default function Title({title}) {
    return  <div className='mt-12 mb-12 ml-6 flex items-center' >
                <h1 className='text-3xl inline mr-3'>{title}</h1>
                <div className='relative'>
                    <img src={portal} className='w-10'/>
                    <img src={portal} className='w-3.5 absolute bottom-7 left-7'/>
                </div>
            </div>
}