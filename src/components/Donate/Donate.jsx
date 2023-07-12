import React from 'react'
import Navigation from '../HomePage/Navigation'
import dog_image from '../../images/dog_donation.jpg';
import {GiOpenedFoodCan} from 'react-icons/gi';

const Donate = () => {
  return (
    <div>
        <Navigation />
        <div className='w-full relative'>
        <img src={dog_image} alt="" className='w-full object-cover h-[80vh]' />
        <div className='absolute top-1/2 left-1/2 -translate-x-4/1 -translate-y-1/2 tracking-wider'>
                    <h1 className='font-[500] text-white
                              xss:text-[90px] md:text-[110px]'>DONATE</h1>
                    <h1 className='text-[50px] text-white bg-gray-500 px-2'>FOR THESE CUTE ANGELS</h1>
                      </div>
    </div>

    {/* cards */}
    <div className='flex justify-center mt-[-150px] relative'>
      <div className='h-[300px] w-[250px] bg-purple-400 flex flex-col items-center justify-center p-4'>
        <GiOpenedFoodCan size={70} />
        <h1>How your donation help us?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quidem!</p>
      </div>

      <div className='h-[300px] w-[250px] bg-red-400 flex flex-col items-center justify-center p-4'>
      <GiOpenedFoodCan size={70} />
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ut?</p>
      </div>

      <div className='h-[300px] w-[250px] bg-red-400 flex flex-col items-center justify-center p-4'>
      <GiOpenedFoodCan size={70} />
      <h1>Lorem ipsum dolor sit amet.</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ut?</p>
      </div>

      <div className='h-[300px] w-[250px] bg-red-400 flex flex-col items-center justify-center p-4'>
      <GiOpenedFoodCan size={70} />
      <h1>Lorem ipsum dolor sit amet.</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ut?</p>
      </div>
    </div>

    </div>
  )
}

export default Donate