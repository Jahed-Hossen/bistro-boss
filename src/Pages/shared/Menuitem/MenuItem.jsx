import React from 'react';

const MenuItem = ({item}) => {
    const { image,name,recipe,price}=item;
    return (
        <div className=' flex space-x-4'>
            <img style={{borderRadius:'0 200px 200px'}} className='w-[118px] h-[104px]' src={image} />
            <div>
                <h2 className=' text-3xl uppercase '>{name}---</h2>
                <p >{recipe}</p>
            </div>
            <p className=' text-yellow-500'>${price}</p>
        </div>
    );
};

export default MenuItem;