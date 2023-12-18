import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Arthcontext } from '../../../provider/ArthProvider';

const useCart = () => {
    const { user } = useContext(Arthcontext);
    const { refetch, data:cart=[] } = useQuery({
        queryKey: ['/cards', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user.email}`)
            return res.json()
        }
    })




    return[cart,refetch]
};

export default useCart;