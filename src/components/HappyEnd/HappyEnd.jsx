import React from "react";
import {AiOutlineArrowRight} from 'react-icons/ai';

const HappyEnd = () => {
    return (
        <div className='h-screen w-full'>
      <div className='h-[70vh] bg-happy bg-center mx-auto w-full bg-cover bg-no-repeat flex items-center justify-center'>
      <h1 className='text-3xl text-white font-bold flex flex-row items-center'>Home  <AiOutlineArrowRight className='mx-2' size={25} /> Happy End</h1>
      </div>
      </div>
    )
}

export default HappyEnd;