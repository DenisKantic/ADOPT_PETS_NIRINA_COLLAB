import { useEffect, useRef } from "react";
import { motion as m, useAnimation, useInView} from 'framer-motion';

const VolunteersAbout = () => {

    const refTitle = useRef(null);
    const refAbout = useRef(null);
    const isTitleInView = useInView(refTitle, {once: true});
    const isAboutInView = useInView(refAbout, {once: true});
    const animationControls = useAnimation();

    useEffect(()=> {
        if (isTitleInView) {
            animationControls.start(
                {
                    x: 0,
                    opacity: 1
                }
            )
        }

        if (isAboutInView) {
            animationControls.start(
                {
                    x: 0,
                    opacity: 1
                }
            )
        }
    }, [isTitleInView, isAboutInView, animationControls])

    return (
        <div className='flex flex-col items-center p-5 tracking-wide'>
          <m.h1 ref={refTitle} initial={{opacity: 0, x: '-50%'}} animate={animationControls} transition={{duration: 0.60, ease: 'easeInOut', delay: 0.50}} className='xss:text-[40px] sm:text-[50px] pb-5 mt-[100px] font-[500]'>VOLUNTEERS</m.h1>
          <m.p ref={refAbout} initial={{opacity: 0, x: '50%'}} animate={animationControls} transition={{duration: 0.60, ease: 'easeInOut', delay: 0.60}} className='xss:w-[90%] text-lg xss:text-justify md:w-[70%] md:text-center md:text-xl font-[300] p-5'>
            Volunteers have numerous obligations, the fulfillment of which results in a greater number of adoptions. 
            First of all, they take care of the socialization of the dogs, work on their behavior, 
            in case of trauma they help the dogs to overcome them, teach them basic things so that they
            are ready for life in a new home. They walk dogs, give ideas that are implemented into projects, 
            run social networks, advertise dogs to potential adopters and are available for all possible questions 
            that parties may have.
          </m.p>
        </div>
    )
}

export default VolunteersAbout;