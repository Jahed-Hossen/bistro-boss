import React from 'react';
import MenuItem from '../../shared/Menuitem/MenuItem';
import Cover from '../../shared/Cover/Cover';

const Menucategori = ({ item,img,tittle }) => {
    return (
        <div>
            {tittle && <Cover img={img} tittle={tittle}></Cover>}
            <div className=' grid md:grid-cols-2 gap-4 pt-5'>
        
            {
                item.map(item => <MenuItem
                    key={item._id}
                    item={item}
                >
                </MenuItem>)
            }

        </div>
            <div className='items-center flex flex-col mt-12 mb-6 '>
                <button className='btn border-black border-0 border-b-4 '>ORDER YOUR FAVOURITE FOOD</button>
            </div>
            </div>
    );
};

export default Menucategori;