import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';
import SupportImg from '../../../assets/Support/Support.png';
import Logo from './Logo';


const Support = () => {

    const [supportLogo, setSupportLogo] = useState(
        [
            {   id: 1,
                img: SupportImg
            },
            {
                id: 2,
                img: SupportImg
            },
            {
                id: 3,
                img: SupportImg
            },
            {
                id: 4,
                img: SupportImg
            },
            {
                id: 5,
                img: SupportImg
            }
        ]
    )


    return (
        <div>
            <div className="mt-20 w-[70%] mx-auto">
                <h2 className="text-3xl text-center mb-20">Who supports us</h2>
                <Swiper
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
                      },
                      1000:{
                        slidesPerView:5
                }}}
                >{
                    supportLogo.map((supportLogo) => {
                        return <SwiperSlide><Logo img={supportLogo.img} key={supportLogo.id}/></SwiperSlide>
                    })
                }
                </Swiper>
            </div>
        </div>
        
    )
}

export default Support;