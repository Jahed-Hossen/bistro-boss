import React from 'react';
import { Parallax } from 'react-parallax';


const Cover = ({img, tittle, details}) => {
    return (
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
       <div className="hero bg-no-repeat min-h-[450px]">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className=" sm:text-3xl md:text-5xl font-bold mb-5">{tittle}</h1>
                    <p>{details}</p>
                </div>
            </div>
        </div>                      
    </Parallax>
         

      
    );
};

export default Cover;