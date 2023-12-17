import React, { useEffect, useState } from 'react';
import SectionTittle from '../../shared/section tittle/SectionTittle';
import MenuItem from '../../shared/Menuitem/MenuItem';
import useMenu from '../../shared/Hookes/useMenu';
import { Link } from 'react-router-dom';

const PopularDishes = () => {

    const [menu]=useMenu()
    const popular = menu.filter(item=>item.category === 'popular')
    return (
        <section>
            <section>
                <SectionTittle
                subheader={'Check it out'}
                header={'our popular menu'}
                ></SectionTittle>
            </section>
            <div className=' grid md:grid-cols-2 gap-4'>
                {
                    popular.map(item=><MenuItem
                    key={item._id}
                    item={item}
                    >
                    </MenuItem>)
                }
            
            </div> 
            <div className='items-center flex flex-col mt-12 mb-6 '>
               <Link to='/menu'> <button className='btn border-black border-0 border-b-4 '>View Full  Menu</button></Link>
            </div>
             
        </section>
    );
};

export default PopularDishes;