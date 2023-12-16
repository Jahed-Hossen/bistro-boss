import React from 'react';
import Banner from '../banner/Banner';
import Categoris from '../Caegoris/categoris';
import Banner2 from '../banner/Banner2';
import PopularDishes from '../Popular/PopularDishes';
import Recomended from '../salad item/Recomended';
import Fecherd from '../fecherd/Fecherd';
import Testimonial from '../testimonial/Testimonial';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Categoris></Categoris>
            <Banner2></Banner2>
            <PopularDishes></PopularDishes>
            <Recomended></Recomended>
            <Fecherd></Fecherd>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;