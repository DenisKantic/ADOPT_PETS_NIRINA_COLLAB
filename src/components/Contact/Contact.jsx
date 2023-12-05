import React, {useEffect, useRef} from 'react'
import {motion as m, useAnimation, useInView} from 'framer-motion';
import Footer from '../Footer/Footer.jsx'
import {AiOutlineArrowRight} from 'react-icons/ai';
import {AiOutlineHome} from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';




const Contact = () => {

  const refTitle = useRef(null);
  const animationControls = useAnimation();
  const isInViewTitle = useInView(refTitle, {once: true});

  useEffect(() => {

    if (isInViewTitle) {
      animationControls.start(
      {
          y: 0,
          opacity: 1
      })
      console.log(isInViewTitle);
  }
}, [animationControls]);




    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0});
    };
  
    useEffect(()=>{
      scrollToTop();
    },[])


  return (
    <div className='h-screen w-full'>
      <div className='h-[70vh] bg-nirina bg-center mx-auto w-full bg-cover bg-no-repeat flex items-center justify-center'>
      <h1 className='text-3xl text-white font-bold flex flex-row items-center'>Home  <AiOutlineArrowRight className='mx-2' size={25} /> Contact</h1>
      </div>

      <m.h1 ref={refTitle} initial={{y: 50, opacity: 0}} animate={animationControls} transition={{duration: 0.25, ease: 'easeInOut', delay: 0.20}} className="text-center p-10
                xss:text-4xl text-[#ffa800]
                sm:text-[50px]">Contact us
            </m.h1>

      {/* wrapper */}
      <div className='w-[90%] mx-auto flex justify-center items-center mt-10 mb-10
      xss: flex-col w-[100%] h-[100vh] md:flex-row md:h-[60vh] lg:w-[90%] '>

      <iframe className='h-[60vh] w-[60%] xss:hidden mdd:block' 
      src="https://maps.google.com/maps?q=Pasa%20Bunar%20Tuzla&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed" 
      frameborder="0"  marginheight="0" marginwidth="0" id="gmap_canvas" title="google_maps">      
      </iframe>


    <div className='bg-[#282c31] grid justify-center text-white p-2 h-[60vh] h-full
    xss:w-full grid-cols-1 mdd:w-[50%] lg:w-[30%]'>
      {/* item1 */}
      <div className='flex flex-col justify-center items-center h-full w-full
      xss:p-4 md:p-0'>
      <AiOutlineHome size={40}/>
      <h1 className='p-2
      xss: text-xl mdd:text-2xl'>Address</h1>
      <p className='xss:text-md mdd:text-lg text-center'>Pasa Bunar, Tuzla <br /> Bosnia and Herzegovina</p>
      </div>

      {/* item3 */}
      <div className='flex flex-col justify-center items-center h-full w-full
      xss:p-4 md:p-0'>
      <AiOutlineMail size={40}/>
      <h1 className='p-2
      xss:text-xl mdd:text-2xl'>Email</h1>
      <p className='xss:text-md text-center break-all'> nirinashelter@gmail.com</p>
      </div>
      </div>
      </div>
      <Footer />
      </div>
  )
}

export default Contact