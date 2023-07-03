import dog1 from '../assets/dog1.jpg';
import dog2 from '../assets/dog2.jpg';
import dog3 from '../assets/dog3.jpg';
import dog4 from '../assets/dog4.jpg';
import dog5 from '../assets/dog5.jpg';
import dog6 from '../assets/dog6.jpg';
import dog7 from '../assets/dog7.jpg';

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

  const styles = {
    swiperContainer: {
      width: '35%',
      overflow: 'hidden',
      margin: '0 auto',
      background: '#F8F9FD'
    },
    swiperSlide: {
      width: '100%',
      margin: '0 auto',
      overflow: 'hidden',
    },
    image: {
      maxWidth: '100%',
      display: 'block'
    },
    buttonContainer: {
      textAlign: 'center',
    },
    button: {
      width: '100px',
      height: '35px',
      background: '#87CEEB',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    imgDescCont: {
      padding: '10px',
      fontWeight: 400,
      fontFamily: 'Open Sans, sans-serif',
    },
    titles: {
      color: '#5E6BD4'
    }
  };
  return (
    <>
      <div style={styles.swiperContainer}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <div style={styles.swiperSlide}>
            {dogGallery.map((dog) => (
              <SwiperSlide key={dog}>
                <div style={styles.swiperSlide}>
                  <img src={dog} style={styles.image} alt="Dog" />
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <div style={styles.imgDescCont}>
          <div>
            <h1 style={styles.titles}>Snoop Dog</h1>
          </div>
          <div>
            <p>Dog description (about dog):</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>    
          <div style={styles.buttonContainer}>
            <button type="button" style={styles.button}>Adopt Me</button>
          </div>  
        </div>
      </div>        
    </>
  );
}

export default DogItem;