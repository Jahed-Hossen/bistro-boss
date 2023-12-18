import React, { useContext } from 'react';
import { Arthcontext } from '../../../provider/ArthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useCart from '../Hookes/useCart';

const Foodcart = ({item}) => {
    const {user}=useContext(Arthcontext); 
    const[,refetch]=useCart() 
    const navigate =useNavigate()
    const location = useLocation()
   
    const {image,price,recipe,name,_id}= item;


    const handleAddtocart= item =>{
        console.log(item)
        if(user&& user.email){
            const orderItem = {menuItemId:_id, image,name,price, email:user.email};
            fetch('http://localhost:5000/carts', {
                method:'POST',
                headers:{
                    "content-type": "application/json"
                },
                body: JSON.stringify(orderItem)
            })
            .then(res=>res.json())
            .then(data => {   
                refetch();
            })
        }
        else{
            Swal.fire({
                title: "PLEASE LOG IN TO ORDER THE FOOD",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "LOG IN"
              }).then((result) => {
                if (result.isConfirmed) {
                 navigate('/login',{ state: {from:location}})
                }
              });
        }
    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className=' absolute bg-black right-0 text-white rounded-sm px-1 mr-5 mt-5 '>${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                
                <div className="card-actions justify-end">
                    <button onClick={handleAddtocart} className="btn btn-outline border-0 border-b-4">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Foodcart;