import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';
import order from '../../../assets/shop/banner2.jpg'
const Order = () => {
    return (
        <div>
         <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover img={order} tittle={'ORDER FOOD'} details={'Would you like to try a dish?'}></Cover>
        </div>
    );
};

export default Order;