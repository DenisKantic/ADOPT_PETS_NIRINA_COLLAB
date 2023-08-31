import denis from '../../images/denis.jpg';
import ismar from '../../images/ismar.jpg';
import { useEffect, useRef } from "react";
import { motion as m, useAnimation, useInView} from 'framer-motion';

const ITSupportDevelopers = () => {

    const refDenis = useRef(null);
    const isDenisInView = useInView(refDenis, {once: true});
    const refIsmar = useRef(null);
    const isIsmarInView = useInView(refIsmar, {once: true})
    const animationControls = useAnimation();

    useEffect(()=> {
        if (isDenisInView) {
            animationControls.start(
                {x: 0,
                opacity: 1}
            )
        }

        if (isIsmarInView) {
            animationControls.start(
                {
                    x: 0,
                    opacity: 1
                }
            )
        }
    }, [isDenisInView, isIsmarInView, animationControls])

    return (
        <div className='grid xss:grid-cols-1 md:grid-cols-2 justify-around items-center w-[90%] p-2 '> 
          <m.div ref={refDenis} initial={{opacity: 0, x: '-50%'}} animate={animationControls} transition={{duration: 0.60, ease: 'easeInOut', delay: 0.60}} className='flex items-center flex-col mb-[50px]'>
            <img src={denis} alt="denis" className='rounded-full border-solid border-2 border-[gray] object-cover
                  xss:h-[220px] w-[220px] sm:h-[270px] sm:w-[270px]'  />
            <h2 className='text-xl p-2'>Denis Kantić</h2>
          </m.div>

          <m.div ref={refIsmar} initial={{opacity: 0, x: '50%'}} animate={animationControls} transition={{duration: 0.60, ease: 'easeInOut', delay: 0.60}} className='flex items-center flex-col mb-[50px]'>
            <img src={ismar} alt="ismar" className='rounded-full border-solid border-2 border-[gray] object-cover
                  xss:h-[220px] w-[220px] sm:h-[270px] sm:w-[270px]'  />
            <h2 className='text-xl p-2'>Ismar Begić</h2>
          </m.div>
        </div>
    )
}

export default ITSupportDevelopers;