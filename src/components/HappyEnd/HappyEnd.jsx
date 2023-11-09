import React, {useEffect} from "react";
import {AiOutlineArrowRight} from 'react-icons/ai';
import Footer from "../Footer/Footer";
import HappyEndHeader from "./HappyEndHeader";
import HappyEndAbout from "./HappyEndAbout";



const HappyEnd = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0});
  };

  useEffect(()=>{
    scrollToTop();
  },[])


    return (
      <div className='h-screen w-full'>
        <HappyEndHeader />
        <HappyEndAbout />
        <Footer />
      </div>
    )
}

export default HappyEnd;