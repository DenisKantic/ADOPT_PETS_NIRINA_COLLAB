import { useEffect, useRef } from "react";
import { motion as m, useAnimation, useInView} from 'framer-motion';

const WorkersAbout = () => {

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
        <div className='flex flex-col items-center p-5'>
            <m.h1 ref={refTitle} initial={{opacity: 0, x: '-50%'}} animate={animationControls} transition={{duration: 0.60, ease: 'easeInOut', delay: 0.50}} className='xss:text-[40px] sm:text-[50px] pb-5 mt-[100px] font-[500] tracking-wider'>WORKERS</m.h1>
            <m.p ref={refAbout} initial={{opacity: 0, x: '50%'}} animate={animationControls} transition={{duration: 0.60, ease: 'easeInOut', delay: 0.60}} className='xss:w-[90%] text-lg text-justify md:w-[70%] p-5 md:text-center font-[300] text-xl'>
            The shelter consists of 5 workers whose duties are to maintain the established system, feed the dogs, 
            clean their huts every day, bathe them, take them to the vet, build and repair everything necessary to
              ensure good conditions for the dogs' lives. The asylum is never unsupervised because the workers are 
              exchanged in on-call shifts. 
            </m.p>
        </div>
    )
}

export default WorkersAbout;