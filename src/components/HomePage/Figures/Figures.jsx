import React from 'react'
import { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { motion as m, useAnimation, useInView} from 'framer-motion';
import {FaDog} from 'react-icons/fa';
import {AiFillDollarCircle} from 'react-icons/ai';
import {PiDogBold} from 'react-icons/pi';

const Figures = () => {

    const refTitle = useRef(null);
    const refPetsAdopted = useRef(null);
    const refDonations = useRef(null);
    const refPrograms = useRef(null);
    const isTitleInView = useInView(refTitle, {once: true});
    const isPetsAdoptedInView = useInView(refPetsAdopted, {once: true});
    const isDonationsInView = useInView(refDonations, {once: true});
    const isProgramsInView = useInView(refPrograms, { once: true });
    const animationControls = useAnimation();

    useEffect(() => {
        if (isTitleInView) {
            animationControls.start(
                {
                    y: 0,
                    opacity: 1
                }
            )
        }

        if (isPetsAdoptedInView) {
            animationControls.start(
                {
                    x: 0,
                    opacity: 1
                }
            )
        }

        if (isDonationsInView) {
            animationControls.start(
                {
                    x: 0,
                    opacity: 1
                }
            )
        }

        if (isProgramsInView) {
            animationControls.start(
                {
                    x: 0,
                    opacity: 1
                }
            )
        }
    }, [isTitleInView, isPetsAdoptedInView, isDonationsInView, isProgramsInView, animationControls])
    
    return (
        <div className='mx-auto min-h-[40vh] pt-10 w-full'>
            <m.div initial={{y: '-150%', opacity: 0}} animate={animationControls} transition={{duration: 0.25, ease: 'easeInOut', delay: 0.20}} ref={refTitle} className="text-center">
                <h2 className="text-2xl font-bold ">11 years of impact</h2>
                
                <p className="text-lg p-2">We fetches some numbers for you</p>
            </m.div>


            <div className='w-full bg-[#f6c91a] shadow-xl text-[#034e66]'> 
            <div className='flex flex-row justify-around items-center min-h-[30vh] w-full mx-auto p-4 text-center mt-10
                            xss:flex-col
                            md:flex-row'>

            {/*card */}
            <m.div ref={refPetsAdopted} initial={{x: '-50%', opacity: 0}} animate={animationControls} transition={{duration: 0.25, ease: 'easeInOut', delay: 0.20}} className='flex flex-col items-center justify-center'>
                <h1 className='text-3xl p-4'>cca 3000</h1>
                <p className='text-xl p-4'>Total pets adopted</p>
                <FaDog size={50} />
                <Link to="/Adopt"><button className='py-2 bg-slate-200 px-2 mt-4'>Boop for info!</button></Link>
            </m.div>

            <m.div ref={refDonations} initial={{x: '-50%', opacity: 0}} animate={animationControls} transition={{duration: 0.25, ease: 'easeInOut', delay: 0.20}} className='flex flex-col items-center justify-center'>
                <h1 className='text-3xl p-4'>$ thousands</h1>
                <p className='text-xl p-4'>in food & products donation</p>
                <AiFillDollarCircle  size={50}/>
                <Link to="/Donate"><button className='py-2 bg-slate-200 px-2 mt-4'>Boop for info!</button></Link>
            </m.div>


            <m.div ref={refPrograms} initial={{x: '-50%', opacity: 0}} animate={animationControls} transition={{duration: 0.25, ease: 'easeInOut', delay: 0.20}} className='flex flex-col items-center justify-center'>
                <h1 className='text-3xl p-4'>Various programs</h1>
                <p className='text-xl p-4'>The Walking program and more...</p>
                <PiDogBold size={50} />
                <Link to="/Programs"><button className='py-2 bg-slate-200 px-2 mt-4'>Boop for info!</button></Link>
            </m.div>


            </div>

            </div>


        </div>
  )
}

export default Figures