import {React,useEffect, useRef} from "react";
import {motion as m, useAnimation, useInView} from 'framer-motion';
import {AiOutlineArrowRight} from 'react-icons/ai';

const VolunteerTitle = () => {

    const titleRef = useRef();
    const isTitleRefInView = useInView(titleRef, {once: true});
    const descriptionRef = useRef();
    const isDescriptionRefInView = useInView(descriptionRef, {once: true});

    const animationControls = useAnimation();


    useEffect(() => {

        if (isTitleRefInView) {
            animationControls.start(
              {
                y: 0,
                opacity: 1
              } 
            )
        }

        if (isDescriptionRefInView) {
            animationControls.start(
              {
                y: 0,
                opacity: 1
              } 
            )
        }
    }, [animationControls, isTitleRefInView, isDescriptionRefInView])



    return (
        <>
            <m.h1 ref={titleRef} initial={{y: 200, opacity: 0}} animate={animationControls} transition={{duration: 0.25, ease: 'easeInOut', delay: 0.20}} className="text-center p-10
                xss:text-4xl
                sm:text-[50px]">Volunteer
            </m.h1>
            <m.div ref={descriptionRef} initial={{y: 300, opacity: 0}} animate={animationControls} transition={{duration: 0.25, ease: 'easeInOut', delay: 0.20}} className="mx-auto text-xl
                    xss:w-[90%] xss:text-justify
                    md:w-[50%] md:text-center">If you ask us what kind of help we need the most, we will agree it is additional helping hands. Our circle is very small for years, number of volunteers is not proportional with the number of our dogs, and we also have only 5 workers. 
            </m.div>
        </>
        
    )
}

export default VolunteerTitle;