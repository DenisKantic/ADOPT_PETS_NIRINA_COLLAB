import React from 'react'
import Navigation from '../HomePage/Navigation'
import dog_image2 from '../../images/dog_image2.jpg';
import donateImg from '../../images/heart_donate.png';

const Donate = () => {
  return (
    <div>
        <Navigation />
        <div className='w-full relative'>
        <img src={dog_image2} alt="" className='w-full object-cover absolute h-[80vh]'/>
        <div className='flex flex-col justify-center items-center h-[80vh] tracking-wider'>
                    <h1 className='font-[500] text-white relative
                              xss:text-[60px] md:text-[110px]'>DONATE</h1>
                    <h1 className='text-white bg-gray-500 relative
                                  xss:text-xl xss:p-1 md:text-[50px] md:p-4'>FOR THESE CUTE ANGELS</h1>
                      </div>
    </div>


    {/*center text header */}
    <div className='w-full mx-auto flex flex-col justify-center items-center p-4'>
      <h1 className='text-[45px]
                    xss:text-3xl xss:p-4 xss:text-center'>
                      We need your help to continue our work!</h1>
      <p className='mt-5 text-xl text-center
                    xss:text-justify xss:w-[90%] xss:w-full mdd:text-center mdd:w-[80%]'>Nirina is a nonprofit organization and relies solely on your donations. 
        We receive litttle help from the authorities, but help is mostly come from the good people around the world.
        Monthly food, veterinary, and shelter maintenance  bills are costly. 
        <br />  <div className='p-10 font-bold'>Every donation, in any amount, is greatly appreciated by all the animals!</div></p>
        <div className='border-b-2 w-[90%] border-black-400'></div>
    </div>

    {/* donation part */}

    <div className='w-[80%] grid mx-auto mt-10
                    xss:grid-cols-1 mdd:grid-cols-2'>
                      
      <div className='flex items-center justify-center'>
        <img src={donateImg} alt="" className='h-[300px]'/>
      </div>

      <div className='text-xl flex justify-center flex-col
                      xss:p-0'>
        <h1 className='py-5'>If you would like to a wire transfer, either through your bank or paypal,
          please use the information below:
        </h1>
        <ul>
        <li className='py-1'>Intesa Sanpaolo(BiH) - 1543602005381040</li>
        <li className='py-1'>MobilePay (Denmark) - 60619473</li>
        <li className='py-1'>Paypal - hanneriisbjerg@gmail.com</li>
        <li className='py-1'>Volksbank Mittelhessen - Tierhilfe Pfotentraum e.V</li>
        <li className='py-1'>IBAN: DE80 5139 0000 0032 6531 03 </li>
        <li className='py-1'>BIC: VBMHDE5F</li>
        </ul>
        </div>
      </div>

      {/* with donations your are helping with */}

      <div className='mx-auto w-[80%] mt-[100px]'>
         <h1 className='py-5 text-center text-3xl'>If you wish to make in-kind donations, we are always in need of the following items:</h1>
        
        </div>

        </div>
  )
}

export default Donate