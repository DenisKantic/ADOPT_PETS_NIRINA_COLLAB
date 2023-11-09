import {React,useEffect, useRef} from "react";
import {motion as m, useAnimation, useInView} from 'framer-motion';
import {AiOutlineArrowRight} from 'react-icons/ai';

const VolunteerHeader = () => {

    const ref = useRef();
    const isRefInView = useInView(ref, {once: true});
    const animationControls = useAnimation();

    useEffect(() => {

        if (isRefInView) {
            animationControls.start(
              {
                y: 0,
                opacity: 1
              } 
            )
          }
    }, [animationControls, isRefInView])

    return (
        <div className='h-[70vh] bg-girlDog bg-center mx-auto w-full bg-cover bg-no-repeat flex items-center justify-center'>
        <m.h1 ref={ref} initial={{y: 100, opacity: 0}} animate={animationControls} transition={{duration: 0.25, ease: 'easeInOut', delay: 0.20}} className='text-3xl text-white font-bold flex flex-row items-center'>Home  <AiOutlineArrowRight className='mx-2' size={25} /> Volunteer</m.h1>
        </div>
    )
}

export default VolunteerHeader;