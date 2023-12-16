import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';
import order from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../shared/Hookes/useMenu';
import Foodcart from '../../shared/FOOD CART/Foodcart';
const Order = () => {
    const [tabIndex, setTabIndex]=useState(0)
    const [menu]=useMenu()

    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
           <div className=' pb-8'>
           <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover img={order} tittle={'ORDER FOOD'} details={'Would you like to try a dish?'}></Cover>
           </div>
             <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSEERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>
                    <TabPanel>
                       <div className='grid sm:grid-cols-1 md:grid-col-2 lg:grid-cols-3 py-8 gap-10'>
                       {salad.map(item=><Foodcart
                        key={item._id}
                        item={item}
                        ></Foodcart>)}
                       </div>
                        </TabPanel>
                    <TabPanel>
                    <div className='grid sm:grid-cols-1 md:grid-col-2 lg:grid-cols-3 py-8 gap-10'>
                       {pizza.map(item=><Foodcart
                        key={item._id}
                        item={item}
                        ></Foodcart>)}
                       </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid sm:grid-cols-1 md:grid-col-2 lg:grid-cols-3 py-8 gap-10'>
                       {soup.map(item=><Foodcart
                        key={item._id}
                        item={item}
                        ></Foodcart>)}
                       </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid sm:grid-cols-1 md:grid-col-2 lg:grid-cols-3 py-8 gap-10'>
                       {dessert.map(item=><Foodcart
                        key={item._id}
                        item={item}
                        ></Foodcart>)}
                       </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='grid sm:grid-cols-1 md:grid-col-2 lg:grid-cols-3 py-8 gap-10'>
                       {drinks.map(item=><Foodcart
                        key={item._id}
                        item={item}
                        ></Foodcart>)}
                       </div>
                    </TabPanel>
                   
               </Tabs>
               
        </div>
    );
};

export default Order;