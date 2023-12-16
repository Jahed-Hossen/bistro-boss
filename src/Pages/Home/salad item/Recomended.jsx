import React from 'react';
import salad from '../../../assets/home/slide1.jpg'
import SectionTittle from '../../shared/section tittle/SectionTittle';
const Recomended = () => {
    return (
        <section className=' mb-4 '>
            <section>
                <SectionTittle
                subheader={'Should Try'}
                header={'CHEF RECOMMENDS'}
                >

                </SectionTittle>
            </section>
            <div className=' grid md:grid-cols-2 lg:grid-cols-3 items-center'>
            <div className="card w-[400px] h-[520px] bg-base-100 shadow-xl mt-4 ">
                <figure><img className='w-[424px] h-[300px]' src={salad}/></figure>
                <div className="card-body">
                    <h2 className="card-title">Caeser Salad</h2>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-outline border-0 border-b-4 uppercase">Add to card</button>
                    </div>
                </div>
            </div>
            <div className="card w-[400px] h-[520px] bg-base-100 shadow-xl mt-4">
                <figure><img className='w-[424px] h-[300px]' src={salad}/></figure>
                <div className="card-body">
                    <h2 className="card-title">Caeser Salad</h2>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-outline border-0 border-b-4 uppercase">Add to card</button>
                    </div>
                </div>
            </div>
            <div className="card w-[400px] h-[520px] bg-base-100 shadow-xl mt-4">
                <figure><img className='w-[424px] h-[300px]' src={salad}/></figure>
                <div className="card-body">
                    <h2 className="card-title">Caeser Salad</h2>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-outline border-0 border-b-4 uppercase ">Add to card</button>
                    </div>
                </div>
            </div>
        </div>
        </section>
        
    );
};

export default Recomended;