import React, {useEffect} from "react";
import {AiOutlineArrowRight} from 'react-icons/ai';
import Footer from "../Footer/Footer";



const HappyEnd = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0});
  };

  useEffect(()=>{
    scrollToTop();
  },[])


    return (
        <div className='h-screen w-full'>
      <div className='h-[70vh] bg-happy bg-center mx-auto w-full bg-cover bg-no-repeat flex items-center justify-center'>
      <h1 className='text-3xl text-white font-bold flex flex-row items-center'>Home  <AiOutlineArrowRight className='mx-2' size={25} /> Happy End</h1>
      </div>

      <div className="w-[60%] mx-auto mt-10 text-center
                      xss:w-[90%] md:w-[70%]">

        <h1 className="text-center p-5 pb-10 w-full
                      xss:text-[40px] md:text-[50px]">Happy End</h1>
        <p className="text-xl
                      xss:text-justify md:text-center">At 'Happy End,' we believe that every dog deserves a chance at a happy and loving home. Our mission is to share heartwarming stories of dogs who have found their forever families, proving that adoption truly is a 'Happy End' for both the dogs and their new owners.
        Discover inspiring stories of transformation, resilience, and unwavering loyalty as we introduce you to the incredible dogs who have found their second chances. From abandoned and neglected to cherished and adored, these tales of love and hope will warm your heart and remind you of the incredible bond between humans and their four-legged companions.
      </p>

      <h1 className="text-4xl text-center p-5 pt-20">Below you have picture examples <br /> of our happy dogs after adoption</h1>
     
     
      
      </div>
      <Footer />
      </div>
    )
}

export default HappyEnd;