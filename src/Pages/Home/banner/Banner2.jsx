import React from 'react';
import bsnnerimg from '../../../assets/home/chef-service.jpg'
const Banner2 = () => {
    return (
        <div className="hero bg-no-repeat lg:bg-cover xl:min-h-full mb-10" style={{backgroundImage: `url(${bsnnerimg})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md bg-white p-4 text-black bg-opacity-25">
      <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
  </div>
</div>
    );
};

export default Banner2;