import React from 'react'
import { useState } from 'react';
import {AiOutlineMenu,AiOutlineClose,AiOutlineHome,AiOutlineInfoCircle,AiOutlinePhone, AiOutlineQuestionCircle} from 'react-icons/ai';
import {MdPeople, MdOutlineVolunteerActivism} from 'react-icons/md';
import {BiHappyBeaming} from 'react-icons/bi'
import {FaDonate} from 'react-icons/fa'
import { Link } from 'react-router-dom';


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
  <div className={color ? 'w-full mx-auto p-4 bg-[#4c4c4c] ease-in duration-200 fixed top-0 left-0 right-0 z-10' :'w-full mx-auto p-4 bg-none ease-out duration-150 fixed top-0 left-0 right-0 z-10'}>
    <div className='w-[90%] mx-auto flex justify-between'>
        <div className='xss: w-full flex items-center md:w-auto'>
            <AiOutlineMenu className='mr-2 cursor-pointer mdd:hidden text-white' size={25} onClick={()=> setNav(!nav)}></AiOutlineMenu>
            <h1 className='xss: ml-5 text-md md:hidden cursor-default text-white'>NIRINA ANIMAL SHELTER</h1>
            <h1 className='xss:hidden md:block text-lg cursor-default text-white'>NIRINA </h1>
            <div className={ nav ? 'bg-black/80 w-full fixed h-screen z-10 top-0 left-0 duration-200' : 'fixed'}>
              <div className={nav ? 'bg-white xss:w-[280px] md:w-[350px] fixed top-0 left-0 z-10 h-screen duration-200' : 'fixed left-[-100%] w-[-300px] top-0 duration-300'}>
                <AiOutlineClose className='absolute top-4 right-4 cursor-pointer' 
                  onClick={()=> setNav(!nav)}  size={30}></AiOutlineClose> 
                <h1 className='text-lg text-[#354a67] p-4'>NIRINA ANIMAL SHELTER</h1>
                <ul className='flex flex-col items-start p-4 text-black text-lg mt-[50px]'>
                  <Link to="/"><li className='mr-2 flex items-center py-2' onClick={()=> setNav(!nav)}><AiOutlineHome size={22} className='mr-5'/>HOME</li></Link>
                  <Link to="About Us"><li className='mr-2 flex items-center py-2' onClick={()=> setNav(!nav)}><AiOutlineQuestionCircle size={22} className='mr-5' />ABOUT US</li></Link>
                  <li className='mr-2 flex items-center py-2' onClick={()=> setNav(!nav)}><AiOutlineInfoCircle size={22} className='mr-5' />OUR STORY</li>
                  <Link to="/Team"><li className='mr-2 flex items-center py-2' onClick={()=> setNav(!nav)}><MdPeople size={22} className='mr-5' />OUR TEAM</li></Link>             
                  <li className='mr-2 flex items-center py-2' onClick={()=> setNav(!nav)}><AiOutlineInfoCircle size={22} className='mr-5' />HOW TO ADOPT</li>
                  <Link to="/Programs"><li className='mr-2 flex items-center py-2' onClick={()=> setNav(!nav)}><AiOutlinePhone  size={22} className='mr-5'/>PROGRAMS</li></Link>
                  <Link to="/Volunteer"><li className='mr-2 flex items-center py-2' onClick={()=> setNav(!nav)}><MdOutlineVolunteerActivism  size={22} className='mr-5'/>VOLUNTEER</li></Link>
                  <Link to="/HappyEnd"><li className='mr-2 flex items-center py-2' onClick={()=> setNav(!nav)}><BiHappyBeaming  size={22} className='mr-5'/>HAPPY END</li></Link>
                  <Link to="/Contact"><li className='mr-2 flex items-center py-2' onClick={()=> setNav(!nav)}><AiOutlinePhone  size={22} className='mr-5'/>CONTACT US</li></Link>
                  <Link to="/Donate"><li className='mr-2 flex items-center py-2' onClick={()=> setNav(!nav)}><FaDonate  size={22} className='mr-5'/>DONATE</li></Link>
                </ul>
              </div>
            </div>
        </div>

        <div className='flex items-center justify-center xss:hidden mdd:flex'> 
          <ul className='flex flex-row items-center text-white text-sm text-md'>
            <Link to="/"><li className='mr-4 cursor-pointer hover:font-[600]'>HOME</li></Link>
            <div className='flex justify-center'>
              <button className="peer mr-4 py-2"><Link to="/About Us">ABOUT US</Link></button>
              <div className="hidden absolute peer-hover:flex hover:flex  
                w-auto bg-red-400 text-sm mt-10
                flex-col drop-shadow-lg">
                  <ul>
                    <li className="px-4 py-3 text-white hover:text-black"><a href="/">OUR STORY</a></li>
                    <Link to="/Team"><li className="px-4 py-3 text-white hover:text-black"><a href="/">OUR TEAM</a></li></Link>
                    <li className="px-4 py-3 text-white hover:text-black"><a href="/">HOW TO ADOPT</a></li>
                  </ul>
              </div>
            </div>
              {/* testing */}
            <Link to="/Adopt"><li className='mr-4 cursor-pointer
                            hover:font-[600]'>ADOPT</li></Link>
            <Link to="/Programs"><li className='mr-4 cursor-pointer
                            hover:font-[600]'>PROGRAMS</li></Link>
            <Link to="/Volunteer"><li className='mr-4 cursor-pointer
                            hover:font-[600]'>VOLUNTEER</li></Link>
            <Link to="/HappyEnd"><li className='mr-4 cursor-pointer
                            hover:font-[600]'>HAPPY END</li></Link>
            <Link to="/Contact"><li className='mr-4 cursor-pointer
                            hover:font-[600]'>CONTACT US</li></Link>
            <Link to="/Donate"><li className='mr-4 cursor-pointer bg-blue-500 rounded-full px-4 py-2 text-white
                            hover:text-black'>DONATE</li></Link>
          </ul>
      </div>
    </div>
  </div>
    )
  }

export default Navigation