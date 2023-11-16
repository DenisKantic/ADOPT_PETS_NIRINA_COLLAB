import React, {useEffect, useRef} from "react";
import {motion as m, useAnimation, useInView} from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import dog1 from './images/dog1.JPG'
import dog2 from './images/dog2.jpeg'

const HappyEndAbout = () => {

    const titleRef = useRef();
    const isTitleRefInView = useInView(titleRef, {once: true});
    const descriptionRef = useRef();
    const isDescriptionRefInView = useInView(descriptionRef, {once: true});
    const titleImagesRef = useRef();
    const isTitleImagesRefInView = useInView(titleImagesRef, {once: true});

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

        if (isTitleImagesRefInView) {
            animationControls.start(
              {
                y: 0,
                opacity: 1
              } 
            )
        }
    }, [animationControls, isTitleRefInView, isDescriptionRefInView, isTitleImagesRefInView])

    return (
        <div className="w-[60%] mx-auto mt-5 text-center 
                      xss:w-[90%] md:w-[70%]">
            <m.h1 ref={titleRef} initial={{y: 100, opacity: 0}} animate={animationControls} transition={{duration: 0.25, ease: 'easeInOut', delay: 0.20}} className="text-center p-2 pb-10 w-full
                      xss:text-[40px] md:text-[50px] text-[#ffa800]">Happy End
            </m.h1>
            <m.p ref={descriptionRef} initial={{y: 100, opacity: 0}} animate={animationControls} transition={{duration: 0.25, ease: 'easeInOut', delay: 0.30}} className="text-xl
                      xss:text-justify md:text-justify">At 'Happy End,' we believe that every dog deserves a chance at a happy and loving home. Our mission is to share heartwarming stories of dogs who have found their forever families, proving that adoption truly is a 'Happy End' for both the dogs and their new owners.
                Discover inspiring stories of transformation, resilience, and unwavering loyalty as we introduce you to the incredible dogs who have found their second chances. From abandoned and neglected to cherished and adored, these tales of love and hope will warm your heart and remind you of the incredible bond between humans and their four-legged companions.
            </m.p>
            <m.h1 ref={titleImagesRef} initial={{y: 100, opacity: 0}} animate={animationControls} transition={{duration: 0.25, ease: 'easeInOut', delay: 0.40}} className="text-4xl text-center p-5 pt-20 text-[#ffa800]">Below you have picture examples <br /> of our happy dogs after adoption</m.h1>
            
            <div className="h-[70vh] mb-10 w-full">
                <Swiper
                 modules={[Navigation, Pagination, Scrollbar, A11y]}
                 slidesPerView={1}
                 navigation
                 pagination={{ clickable: true }}>
                  <SwiperSlide><img src={dog1} alt="dog" className="h-[70vh] w-full object-cover"/></SwiperSlide>
                  <SwiperSlide><img src={dog2} alt="dog" className="h-[70vh] w-full object-cover"/></SwiperSlide>

                </Swiper>

            </div>
            
      </div>
    )
}

export default HappyEndAbout;