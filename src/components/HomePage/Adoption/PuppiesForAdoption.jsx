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

const PuppiesForAdoption = () => {
    const [puppy, setPuppy] = useState(
        [
            {   id: 1,
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


    return (
        <div className="mt-20 w-[90%] mx-auto h-auto">
            <h2 className="text-3xl text-center mb-20">Puppies waiting for adoption</h2>
            <Swiper className='w-full'
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >{
                puppy.map((puppy) => {
                    return <SwiperSlide><Puppy img={puppy.img} key={puppy.id} birth={puppy.birth} about={puppy.about}/></SwiperSlide>
                })
            }
            </Swiper>

            <div className='flex flex-col justify-center items-center mt-10'>
            <h1 className='text-center
                           xss:text-xl md:text-3xl'>
            If you want to adopt your favorite dog, please click the button below
            </h1>
            <button className='bg-slate-500 mt-10 w-[10rem] h-[3rem] text-white mb-10'>Adopt</button>
            </div>
        </div>
    )
}

export default PuppiesForAdoption;