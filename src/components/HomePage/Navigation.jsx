import React from 'react'
import { useState } from 'react';
import {AiOutlineMenu,AiOutlineClose,AiOutlineHome,AiOutlineInfoCircle,AiOutlinePhone} from 'react-icons/ai';


const Navigation = () => {


    const [nav,setNav]=useState(false);
    const [color,setColor] = useState(false);

    const changeBackground = () => {
      if (window.scrollY >= 90){
        setColor(true);
      }else{
            setColor(false);
          }
    }
  
    window.addEventListener('scroll', changeBackground); // preraditi u useeffect 
    return (
      <div className={color ? 'w-full mx-auto p-4  bg-[#ecf0f5] border-b-2 ease-in duration-200 fixed top-0 left-0 right-0 z-10' :'w-full mx-auto p-4  bg-[#f1f5f9] ease-out duration-150 fixed top-0 left-0 right-0 z-10'}>
          <div className='w-[90%] mx-auto flex justify-between'>
          <div className='xss: w-full flex items-center md:w-auto'>
          
          <AiOutlineMenu className='mr-2 cursor-pointer md:hidden' size={25} onClick={()=> setNav(!nav)}></AiOutlineMenu>
          <h1 className='xss: ml-5 text-lg md:hidden cursor-default'>NIRINA</h1>
          <h1 className='xss:hidden md:block text-lg cursor-default'>NIRINA </h1>
          <div className={ nav ? 'bg-black/80 w-full fixed h-screen z-10 top-0 left-0 duration-200' : 'fixed'}>
          <div className={nav ? 'bg-white w-[280px] fixed top-0 left-0 z-10 h-screen duration-200' : 'fixed left-[-100%] w-[-300px] top-0 duration-300'}>
          <AiOutlineClose className='absolute top-4 right-4 cursor-pointer' 
                      onClick={()=> setNav(!nav)}  size={30}></AiOutlineClose> 
                      <h1 className='text-xl text-[#354a67] p-4'>NIRINA</h1>
  
  
                      <ul className='flex flex-col items-start p-4 text-black text-lg mt-[50px]'>
              <li className='mr-2 flex items-center py-2' onClick={()=> setNav(!nav)}><AiOutlineHome size={22} className='mr-5'/>HOME</li>
              <li className='mr-2 flex items-center py-2' onClick={()=> setNav(!nav)}><AiOutlineInfoCircle size={22} className='mr-5' />ABOUT US</li>
              <li className='mr-2 flex items-center py-2' onClick={()=> setNav(!nav)}><AiOutlineInfoCircle size={22} className='mr-5' />OUR STORY</li>
              <li className='mr-2 flex items-center py-2' onClick={()=> setNav(!nav)}><AiOutlineInfoCircle size={22} className='mr-5' />OUR TEAM</li>
              <li className='mr-2 flex items-center py-2' onClick={()=> setNav(!nav)}><AiOutlineInfoCircle size={22} className='mr-5' />FACILITIES</li>
              <li className='mr-2 flex items-center py-2' onClick={()=> setNav(!nav)}><AiOutlineInfoCircle size={22} className='mr-5' />HOW TO ADOPT</li>
              <li className='mr-2 flex items-center py-2' onClick={()=> setNav(!nav)}><AiOutlinePhone  size={22} className='mr-5'/>PROGRAMS</li>
              <li className='mr-2 flex items-center py-2' onClick={()=> setNav(!nav)}><AiOutlinePhone  size={22} className='mr-5'/>VOLUNTEER</li>
              <li className='mr-2 flex items-center py-2' onClick={()=> setNav(!nav)}><AiOutlinePhone  size={22} className='mr-5'/>HAPPY END</li>
              <li className='mr-2 flex items-center py-2' onClick={()=> setNav(!nav)}><AiOutlinePhone  size={22} className='mr-5'/>CONTACT US</li>
              <li className='mr-2 flex items-center py-2' onClick={()=> setNav(!nav)}><AiOutlinePhone  size={22} className='mr-5'/>DONATE</li>
             </ul>
  
  
          </div>
          </div>
      
          </div>
          <div className='flex items-center justify-center xss:hidden md:flex'> 
             <ul className='flex flex-row items-center text-[#354a67] text-md'>
              <li className='mr-4 cursor-pointer
                            hover:font-[600]'>HOME</li>
            
            <div className='flex justify-center'>
              <button className="peer mr-4 py-2 text-black">ABOUT US</button>
        <div className="hidden absolute peer-hover:flex hover:flex  
         w-auto bg-green-700 text-sm mt-10
         flex-col bg-white drop-shadow-lg">
            <a className="px-4 py-3 text-white hover:text-black" href="/">OUR STORY</a>
            <a className="px-4 py-3 text-white hover:text-black" href="/">OUR TEAM</a>
            <a className="px-4 py-3 text-white hover:text-black" href="/">FACILITIES</a>
            <a className="px-4 py-3 text-white hover:text-black" href="/">HOW TO ADOPT</a>
        </div>
    </div>
             

              {/* testing */}
              <li className='mr-4 cursor-pointer
                            hover:font-[600]'>ADOPT</li>
              <li className='mr-4 cursor-pointer
                            hover:font-[600]'>PROGRAMS</li>
              <li className='mr-4 cursor-pointer
                            hover:font-[600]'>VOLUNTEER</li>
                 <li className='mr-4 cursor-pointer
                            hover:font-[600]'>HAPPY END</li>
              <li className='mr-4 cursor-pointer
                            hover:font-[600]'>CONTACT US</li>
              <li className='mr-4 cursor-pointer bg-blue-500 rounded-full px-4 py-2 text-white
                            hover:text-black'>DONATE</li>
             </ul>
  
          </div>
         </div>
      </div>
    )
  }

export default Navigation