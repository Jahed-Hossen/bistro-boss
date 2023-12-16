import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTittle from '../../shared/section tittle/SectionTittle';

const Categoris = () => {
  return (
    
      <section>  
        <section>
          <SectionTittle 
          subheader={'From 11:00am to 10:00pm'}
          header={'ORDER ONLINE'}
          >

          </SectionTittle>
        </section>
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-10"
      >
        <SwiperSlide><img src={slide1} />
          <h3 className=' uppercase text-white lg:text-3xl text-center -mt-16'>salads</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide2} />
          <h3 className=' uppercase text-white -mt-16 lg:text-3xl text-center'>pizzas</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide3} />
          <h3 className=' uppercase text-white -mt-16 lg:text-3xl text-center'>soups</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide4} />
          <h3 className=' uppercase text-white -mt-16 lg:text-3xl text-center'>desserts</h3>
        </SwiperSlide>
        <SwiperSlide><img src={slide5} />
          <h3 className=' uppercase text-white -mt-16 lg:text-3xl text-center'>salads</h3>
        </SwiperSlide>
      </Swiper>
      </section>
   
  );
};

export default Categoris;