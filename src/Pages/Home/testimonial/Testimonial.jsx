import React, { useEffect, useState } from 'react';
import SectionTittle from '../../shared/section tittle/SectionTittle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css'
const Testimonial = () => {
    const [reviews, setReview] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <section>
            <SectionTittle
                header={'TESTIMONIALS'}
                subheader={'What Our Clients Say'}
            >
            </SectionTittle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className=' mt-10 ml-24 mr-24 flex flex-col items-center mb-10'>
                          
                           <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />

                            <p>{review.details}</p>
                            <h3 className="text-2xl text-center text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonial;