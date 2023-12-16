import React from 'react';

const Salad = ({ item }) => {
    const { image, name, recipe } = item;
    return (
        <div className="card card-compact sm:w-36 md:w-96  bg-base-100 shadow-xl">
            <figure><img src={image} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary uppercase">order now</button>
                </div>
            </div>
        </div>
    );
};

export default Salad;