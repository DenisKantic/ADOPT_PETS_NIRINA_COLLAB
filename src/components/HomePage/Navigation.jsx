import React from 'react'
import { useState } from 'react';
import {AiOutlineMenu,AiOutlineClose,AiOutlineHome,AiOutlineInfoCircle, AiOutlineShoppingCart, AiOutlinePhone} from 'react-icons/ai';


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
  
    window.addEventListener('scroll', changeBackground);
    return (
      <div className={color ? 'w-full mx-auto p-3  bg-[#ecf0f5] border-b-2 ease-in duration-200 fixed top-0 left-0 right-0 z-10' :'w-full mx-auto p-3  bg-[#f1f5f9] ease-out duration-150 fixed top-0 left-0 right-0 z-10'}>
          <div className='w-[90%] mx-auto flex justify-between'>
          <div className='xss: w-full flex md:w-auto'>
          
          <AiOutlineMenu className='mr-2 cursor-pointer md:hidden' size={25} onClick={()=> setNav(!nav)}></AiOutlineMenu>
          <h1 className='xss: ml-5 text-lg md:hidden cursor-default'>Reset Inžinjering</h1>
          <h1 className='xss:hidden md:block text-lg cursor-default'>NIRINA </h1>
          <div className={ nav ? 'bg-black/80 w-full fixed h-screen z-10 top-0 left-0 duration-200' : 'fixed'}>
          <div className={nav ? 'bg-white w-[280px] fixed top-0 left-0 z-10 h-screen duration-200' : 'fixed left-[-100%] w-[-300px] top-0 duration-300'}>
          <AiOutlineClose className='absolute top-4 right-4 cursor-pointer' 
                      onClick={()=> setNav(!nav)}  size={30}></AiOutlineClose> 
                      <h1 className='text-xl text-[#354a67] p-4'>Reset Inžinjering</h1>
  
  
                      <ul className='flex flex-col items-start p-4 text-black text-lg mt-[50px]'>
              <li className='mr-2 flex items-center py-2'><AiOutlineHome size={22} className='mr-5'/><a href="#home" onClick={()=> setNav(!nav)}>POČETNA</a></li>
              <li className='mr-2 flex items-center py-2'><AiOutlineInfoCircle size={22} className='mr-5' /><a href="#aboutUs" onClick={()=> setNav(!nav)}>O NAMA</a></li>
              <li className='mr-2 flex items-center py-2'><AiOutlineShoppingCart size={22} className='mr-5' /><a href="#products" onClick={()=> setNav(!nav)}>PROIZVODI</a></li>
              <li className='mr-2 flex items-center py-2'><AiOutlinePhone  size={22} className='mr-5'/><a href="#contact" onClick={()=> setNav(!nav)}>KONTAKT</a></li>
             </ul>
  
  
          </div>
          </div>
      
          </div>
          <div className='flex items-center justify-center xss:hidden md:flex'> 
             <ul className='flex flex-row text-[#354a67] text-md'>
              <li className='mr-2 cursor-pointer
                            hover:font-[600]'><a href="#home">POČETNA</a></li>
              <li className='mr-2 cursor-pointer
                            hover:font-[600]'><a href="#aboutUs">O NAMA</a></li>
              <li className='mr-2 cursor-pointer
                            hover:font-[600]'><a href="#products">PROIZVODI</a></li>
              <li className='mr-2 cursor-pointer
                            hover:font-[600]'><a href="#contact">KONTAKT</a></li>
             </ul>
  
          </div>
         </div>
      </div>
    )
  }

export default Navigation