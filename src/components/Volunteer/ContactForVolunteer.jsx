import {React,useEffect, useRef} from "react";
import {motion as m, useAnimation, useInView} from 'framer-motion';
import {AiOutlineArrowRight} from 'react-icons/ai';

const ContactForVolunteer = () => {

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
        <div className="text-center w-full h-[30vh] bg-[#ffa800] font-extrabold text-white tracking-wider flex justify-center items-center flex-col text-2xl">
            <m.h1 ref={titleRef} initial={{y: 50, opacity: 0}} animate={animationControls} transition={{duration: 0.25, ease: 'easeInOut', delay: 0.30}}>Wanna be a volunteer and help us? </m.h1>
            <m.p ref={descriptionRef} initial={{y: 50, opacity: 0}} animate={animationControls} transition={{duration: 0.25, ease: 'easeInOut', delay: 0.30}}>Contact us at nirina@example.com</m.p>
        </div>
    )
}

export default ContactForVolunteer;