import {React,useEffect, useRef} from "react";
import {motion as m, useAnimation, useInView} from 'framer-motion';

const WhatWeDo = () => {

  const refTitle = useRef(null);
  const refAboutLongText = useRef(null);
  const refAboutShortText = useRef(null);
  const refButton = useRef(null);
  const isInViewTitle = useInView(refTitle, {once: true});
  const isInViewAboutLongText = useInView(refAboutLongText, {once: true});
  const isInViewShortText = useInView(refAboutShortText, {once: true});
  const isInViewButton = useInView(refButton, {once: true});
  const animationControls = useAnimation();


    useEffect(() => {

      if (isInViewTitle) {
        animationControls.start(
        {
            y: 0,
            opacity: 1
        })
        console.log(isInViewTitle);
    }

    if (isInViewAboutLongText) {
        animationControls.start(
            {
                y: 0,
                opacity: 1
            }
        )
    }

    if (isInViewShortText) {
        animationControls.start(
            {
                y: 0,
                opacity: 1
            }
        )
    }

    if (isInViewButton) {
        animationControls.start(
            {
                y: 0,
                opacity: 1
            }
        )
    }
}, [isInViewTitle, isInViewAboutLongText, isInViewShortText, isInViewButton, animationControls]);

    return (
        <>
            <div className="mx-auto mt-10 xss:w-[90%] md:w-[70%] lg:w-[60%] z-10" id="aboutUs">
            <div className="mb-10 shadow-2xl min-h-[20vh] p-5">
                <m.h1  ref={refTitle} initial={{y: '-50%', opacity: 0}} animate={animationControls} transition={{duration: 0.25, ease: 'easeInOut', delay: 0.60}} className="text-center text-4xl mb-10 text-center mx-auto
                                xss:text-2xl xss:font-bold xss:w-[90%] 
                                xs:text-3xl
                                sm:text-4xl
                                md:text-5xl md:font-normal text-[#19627a]">What do we do at the shelter?</m.h1>
                <m.p ref={refAboutLongText} initial={{y: '-100%', opacity: 0}} animate={animationControls} transition={{duration: 0.25, ease: 'easeInOut', delay: 0.70}} className="mx-auto
                            xss:w-full xss:text-justify xss:text-lg
                            mdd:text-justify mdd:text-xl md:w-[90%] text-black z-10">
               Our primary responsibility is giving dogs walks. 
                    In addition, we socialize them, train them to walk on leashes, love them, and take them on adventures. 
                    Sometimes, we take them to the city or a lake to expose them to the sounds of traffic or to learn how to swim. 
                    That helps them adapt faster when they find a home. Of course there are many more tasks to do which you can do 
                    easyly from your home. We always need some help in promoting our dogs and projects. We also need new enthusiastic 
                    people with fresh ideas who would love to improve our work.
                </m.p>
                <m.p ref={refAboutShortText} initial={{y: '-120%', opacity: 0}} animate={animationControls} transition={{duration: 0.25, ease: 'easeInOut', delay: 0.80}} className="mt-5 text-center
                            xss:text-xl mx-auto w-[90%]
                            md:text-2xl">
                   Wanna be a volunteer and help us? <br />
                   Contact us at <span className="font-extrabold">nirinashelter@gmail.com</span> </m.p>
                <div className="flex justify-center mt-10">
                </div>
            </div>

           
        </div>
        </>
    )
}

export default WhatWeDo;