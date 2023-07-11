import dog1 from '../../assets/Dogs/dog1.jpg';
import dog2 from '../../assets/Dogs/dog2.jpg';
import dog3 from '../../assets/Dogs/dog3.jpg';
import dog4 from '../../assets/Dogs/dog4.jpg';
import dog5 from '../../assets/Dogs/dog5.jpg';
import dog6 from '../../assets/Dogs/dog6.jpg';
import dog7 from '../../assets/Dogs/dog7.jpg';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




function DogItem() {
  const [dogGallery, setDogGallery] = useState([
    dog1, dog2, dog3, dog4, dog5, dog6, dog7
  ]);

  
  return (
    <>
      <div className="xss:w-[100%] sm:w-[70%] md:w-[55%] mdd:w-[35%] overflow-hidden mx-auto bg-stone-100">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          
            {dogGallery.map((dog) => (
              <SwiperSlide key={dog}>
                  <img src={dog} className="w-[100%] transition-all easeIn hover:scale-110" alt="Dog" />
              </SwiperSlide>
            ))}
          
        </Swiper>
        <div className="p-6 font-normal">
          <div className="mb-3">
            <h1 className="text-amber-400">Snoop Dog</h1>
          </div>
          <div className="mb-10">
            <p>Dog description (about dog):</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>    
          <div className="text-center">
            <button type="button" className="w-[100px] h-[35px] hover:bg-sky-400 hover:text-white bg-sky-300 border-none rounded cursor-pointer">Adopt Me</button>
          </div>  
        </div>
      </div>        
    </>
  );
}

export default DogItem;