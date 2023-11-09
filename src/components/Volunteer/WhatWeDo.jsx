import {React,useEffect, useRef} from "react";
import {motion as m, useAnimation, useInView} from 'framer-motion';
import {AiOutlineArrowRight} from 'react-icons/ai';

const WhatWeDo = () => {

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
            <m.h1 ref={titleRef} initial={{y: 400, opacity: 0}} animate={animationControls} transition={{duration: 0.25, ease: 'easeInOut', delay: 0.30}} className="text-center mt-10 pb-10
                xss:text-2xl
                sm:text-4xl 
                ">What do we do at the shelter?
            </m.h1>
            <div className="bg-ivan h-[80vh] w-full bg-no-repeat bg-cover flex items-center justify-center text-white 
                xss:mt-10 xss:bg-center
                md:mt-0
                mdd:bg-cover">
                <m.p ref={descriptionRef} initial={{y: 500, opacity: 0}} animate={animationControls} transition={{duration: 0.25, ease: 'easeInOut', delay: 0.30}} className="
                    xss:text-lg xss:text-justify xss:w-[90%]
                    md:w-[60%] md:text-2xl">Our primary responsibility is giving dogs walks. 
                    In addition, we socialize them, train them to walk on leashes, love them, and take them on adventures. 
                    Sometimes, we take them to the city or a lake to expose them to the sounds of traffic or to learn how to swim. 
                    That helps them adapt faster when they find a home. Of course there are many more tasks to do which you can do 
                    easyly from your home. We always need some help in promoting our dogs and projects. We also need new enthusiastic 
                    people with fresh ideas who would love to improve our work.
                </m.p>
            </div>
        </>
    )
}

export default WhatWeDo;