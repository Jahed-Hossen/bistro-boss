import React from 'react';

const Foodcart = ({item}) => {

    const {image,price,recipe,name}= item;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className=' absolute bg-black right-0 text-white rounded-sm px-1 mr-5 mt-5 '>${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                
                <div className="card-actions justify-end">
                    <button className="btn btn-outline border-0 border-b-4">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Foodcart;