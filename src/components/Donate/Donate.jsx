import React, {useEffect} from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import front_white_logo from './shirts/front_white_logo.png'
import back_white from './shirts/back_white.png'
import front_white from './shirts/front_white.png'
import back_white_logo from './shirts/white_back_logo.png'
import front_black_logo from './shirts/front_black_logo.png'
import back_black from './shirts/back_black.png'
import front_black from './shirts/front_black.png'
import back_logo_black from './shirts/back_logo_black.png'
import Footer from '../Footer/Footer.jsx'

const Donate = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0});
  };

  useEffect(()=>{
    scrollToTop();
  },[])
  return (
    <div>
      
      <div className='h-screen w-full'>
      <div className='h-[70vh] bg-nirina bg-cover mx-auto w-full flex items-center justify-center'>
      <h1 className='text-3xl text-white font-bold flex flex-row items-center'>Home  <AiOutlineArrowRight className='mx-2' size={25} /> Donate</h1>
      </div>

      <h1 className="text-center p-10
                    xss:text-4xl
                    sm:text-[50px]">Donate</h1>

              <div className='w-full mx-auto pt-10 text-center bg-nirina bg-center h-[60vh]'>
                  <p className='h-full flex justify-center items-center mx-auto text-white flex-col
                                xss:w-[90%] xss:text-sm
                                md:w-[60%] md:text-xl lg:text-2xl'>
                    On our Facebook group, we publish all the receipts as proff of what the donated funds were spent on, <br />
                    in order to keep everything transparent. You can donate via: <br />
                    Intesa Sanpaolo (BiH) - 1543602005381040 <br />
                    Volksbank Mittelhesen - Tierhilfe Pfotentraum e.V  <br />
                    IBAN: DE80 5139 0000 0032 6531 03 <br />
                    BIC: VBMHDE5F <br />
                  <p className='xss:text-lg xss:pt-2 md:pt-10 md:text-2xl'>To donate on PayPal, click the button bellow</p>
                  <a href="">Paypal</a>
                  </p>

              </div>

              <h1 className='text-center pt-10 
                            xss:text-2xl md:text-5xl w-[90%] mx-auto'><b>YOU CAN ALSO HELP US WITH BUYING OUR T-SHIRTS!!!</b></h1>
              <p className='text-center p-4
                            xss:text-xl
                            md:text-2xl'>Our shirts are available in two colors: black and white</p>

              <p className='text-center text-3xl p-2'>You can choose your design below</p>

              <div> {/* main div for grid */}

                  <h1 className='text-center text-2xl pt-10'>White design #1</h1>
                <div className='grid w-[50%] mx-auto
                                xss:grid-cols-1
                                md:grid-cols-2'>
                  <img src={front_white_logo} alt="shirt" />
                  <img src={back_white} alt="shirt" />
                </div>

                <h1 className='text-center text-2xl pt-10'>White design #2</h1>
                <div className='grid w-[50%] mx-auto
                                xss:grid-cols-1
                                md:grid-cols-2'>
                  <img src={front_white} alt="shirt" />
                  <img src={back_white_logo} alt="shirt" />
                </div>

                <h1 className='text-center text-2xl pt-10'>Black design #1</h1>
                <div className='grid w-[50%] mx-auto
                                xss:grid-cols-1
                                md:grid-cols-2'>
                  <img src={front_black_logo} alt="shirt" />
                  <img src={back_black} alt="shirt" />
                </div>

                <h1 className='text-center text-2xl pt-10'>Black design #2</h1>
                <div className='grid w-[50%] mx-auto
                                xss:grid-cols-1
                                md:grid-cols-2'>
                  <img src={front_black} alt="shirt" />
                  <img src={back_logo_black} alt="shirt" />
                </div>

                <h1 className='xss:text-xl xss:text-center xss:w-full md:text-2xl p-20 mx-auto'>If you have choosen your favorite design, you can contact us on nirinashelter@gmail.com</h1>
              </div>
      
    <Footer />
      </div>    
    </div>
  )
}

export default Donate 