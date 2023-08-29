import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';
import Puppy from './Puppy';
import Puppy1 from '../../../assets/Dogs/dog1.jpg';
import Puppy2 from '../../../assets/Dogs/dog2.jpg';
import Puppy3 from '../../../assets/Dogs/dog3.jpg';
import Puppy4 from '../../../assets/Dogs/dog4.jpg';
import Puppy5 from '../../../assets/Dogs/dog5.jpg';
import { useEffect, useRef } from "react";
import { motion as m, useAnimation, useInView} from 'framer-motion';

const PuppiesForAdoption = () => {

    const refTitle = useRef(null);
    const refButton = useRef(null);
    const refAboutButton = useRef(null);
    const isButtonInView = useInView(refButton, {once: true});
    const isAboutButtonInView = useInView(refAboutButton, {once: true});
    const isTitleInView = useInView(refTitle, {once: true});
    const animationControls = useAnimation();

    const [puppy, setPuppy] = useState(
        [
            {   id: 1,
                name: "example",
                img: Puppy1,
                birth: '5/5/2019',
                about: 'Cutest puppy ever, if i head a house i would adopt it'
            },
            {
                id: 2,
                img: Puppy2,
                birth: '5/5/2019',
                about: 'Cutest puppy ever, if i head a house i would adopt it'
            },
            {
                id: 3,
                img: Puppy3,
                birth: '5/5/2019',
                about: 'Cutest puppy ever, if i head a house i would adopt it'
            },
            {
                id: 4,
                img: Puppy4,
                birth: '5/5/2019',
                about: 'Cutest puppy ever, if i head a house i would adopt it'
            },
            {
                id: 5,
                img: Puppy5,
                birth: '5/5/2019',
                about: 'Cutest puppy ever, if i head a house i would adopt it'
            }
        ]
    )

    useEffect(()=> {
        if (isButtonInView) {
            animationControls.start({
                y: 0,
                opacity: 1
            })
        }

        if (isAboutButtonInView) {
            animationControls.start({
                y: 0,
                opacity: 1
            })
        }

        if (isTitleInView) {
            animationControls.start({
                y: 0,
                opacity: 1
            })
        }

    }, [isAboutButtonInView, isButtonInView, animationControls, isTitleInView]);

    return (
        <div className="mt-20 w-[90%] mx-auto h-auto">
            <m.h2 ref={refTitle} initial={{y: '-50%', opacity: 0}} animate={animationControls} transition={{duration: 0.25, ease: 'easeInOut', delay: 0.60}} className="text-3xl text-center mb-20">Puppies waiting for adoption</m.h2>
            <Swiper className='w-full'
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                  },
                  400:{
                    slidesPerView:2,
                  },
                  639: {
                    slidesPerView: 3,
                  },
                  865:{
                    slidesPerView:4
                  }
                }}
            >{
                puppy.map((puppy, index) => {
                    return <SwiperSlide><Puppy img={puppy.img} key={puppy.id} birth={puppy.birth} about={puppy.about} initialX={250 / index} delay={puppy.id * 0.2}/></SwiperSlide>
                })
            }
            </Swiper>

            <div className='flex flex-col justify-center items-center mt-10'>
            <m.h1 ref={refAboutButton} initial={{y: '-100%', opacity: 0}} animate={animationControls} transition={{duration: 0.25, ease: 'easeInOut', delay: 0.60}} className='text-center
                           xss:text-xl md:text-3xl'>
            If you want to adopt your favorite dog, please click the button below
            </m.h1>
            <m.button ref={refButton} initial={{y: '100%', opacity: 0}} animate={animationControls} transition={{duration: 0.25, ease: 'easeInOut', delay: 0.60}} className='bg-slate-500 mt-10 w-[10rem] h-[3rem] text-white mb-10'>Adopt</m.button>
            </div>
        </div>
    )
}

export default PuppiesForAdoption;