import React from 'react';

const SectionTittle = ({header, subheader}) => {
    return (
        <div className=' mx-auto md:w-4/12 text-center mt-5'>
            <p className=' text-yellow-500'>---{subheader}---</p>
            <h3 className=' text-4xl border-y-4 py-3 p-4 mb-12 uppercase '>{header}</h3>
        </div>
    );
};

export default SectionTittle;