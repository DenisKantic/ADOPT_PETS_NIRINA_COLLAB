import { useEffect, useRef } from "react";
import { motion as m, useAnimation, useInView} from 'framer-motion';

const ITSupportAbout = () => {

    const refTitle = useRef(null);
    const refAbout = useRef(null);
    const isTitleInView = useInView(refTitle, {once: true});
    const isAboutInView = useInView(refAbout, {once: true});
    const animationControls = useAnimation();

    useEffect(()=> {
        if (isTitleInView) {
            animationControls.start(
                {x: 0,
                opacity: 1}
            )
        }

        if (isAboutInView) {
            animationControls.start(
                {x: 0,
                opacity: 1}
            )
        }
    }, [isTitleInView, isAboutInView, animationControls]);

    return (
        <div className='flex flex-col items-center p-5 mt-[50px] text-center tracking-wider'>
          <m.h1 ref={refTitle} initial={{opacity: 0, x: '-50%'}} animate={animationControls} transition={{duration: 0.60, ease: 'easeInOut', delay: 0.60}} className='xss:w-[90%] xss:text-2xl sm:w-[70%] md:text-[50px] font-[500] p-5'>IT SUPPORT</m.h1>
          <m.h1 ref={refAbout} initial={{opacity: 0, x: '50%'}} animate={animationControls} transition={{duration: 0.60, ease: 'easeInOut', delay: 0.60}} className='xss:w-[90%] xss:text-2xl sm:w-[70%] md:text-[20px] font-[300]'>Special thanks to the guys who developed and are maintaining our website for completely free. </m.h1>
        </div>
    )
}

export default ITSupportAbout;