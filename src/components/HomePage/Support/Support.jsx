import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';
import SupportImg from '../../../assets/Support/Support.png';
import Reset from '../../../assets/Support/reset.png'
import Tuzla from '../../../assets/Support/tuzla.png'
import Bosniak from '../../../assets/Support/bosniak.png';
import Logo from './Logo';
import { useEffect, useRef } from "react";
import { motion as m, useAnimation, useInView} from 'framer-motion';

const Support = () => {

    const refTitle = useRef(null);
    const isTitleInView = useInView(refTitle, {once: true});
    const animationControls = useAnimation();


    const [supportLogo, setSupportLogo] = useState(
        [
            {   id: 1,
                img: SupportImg
            },
            {
                id: 2,
                img: Reset
            },
            {
                id: 3,
                img: Tuzla
            },
            {
                id: 4,
                img: Bosniak
            }
        ]
    )

    useEffect(()=> {
        if (isTitleInView) {
            animationControls.start(
               {
                y: 0,
                opacity: 1
               }
            )
        }
    }, [isTitleInView, animationControls])



    return (
        <div>
            <div className="mt-20 w-[70%] mx-auto">
                <m.h2 ref={refTitle} initial={{y: '-100%', opacity: 0}} animate={animationControls} transition={{duration: 0.25, ease: 'easeInOut', delay: 0.60}} className="text-3xl text-center mb-20">Who supports us</m.h2>
                <Swiper className='h-[25vh]'
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
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
                    supportLogo.map((supportLogo, index) => {
                        console.log(index);
                        return <SwiperSlide key={supportLogo.id}><Logo img={supportLogo.img} initialX={250 / index} delay={supportLogo.id * 0.2}/></SwiperSlide>
                    })
                }
                </Swiper>
            </div>
        </div>
        
    )
}

export default Support;