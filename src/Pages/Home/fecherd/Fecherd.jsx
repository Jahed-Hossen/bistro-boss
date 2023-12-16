import React from 'react';
import bgimg from '../../../assets/home/featured.jpg'
import SectionTittle from '../../shared/section tittle/SectionTittle';
import './fechur.css'
const Fecherd = () => {
    return (
        <div className='fechur-item my-10 bg-fixed'>
           <div className=' py-8 bg-black bg-opacity-30'>
            <SectionTittle subheader={'Check it out'} header={'FROM OUR MENU'}></SectionTittle>

            <div className="hero-content flex-col md:flex-row ">
                <img src={bgimg} className=" rounded-lg shadow-2xl max-w-xs" />
                <div className=' md:w-2/4 text-white'>
                    <h1 className=" font-bold">March 20, 2023</h1>
                    <h3 className=" font-bold uppercase">WHERE CAN I GET SOME?</h3>
                    <p className=" pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                </div>
            </div>
           </div>
            
    </div>
            );
};

            export default Fecherd;