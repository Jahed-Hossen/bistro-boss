import React, { useContext } from 'react';
import { Arthcontext } from '../../provider/ArthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRout = ({children}) => {
    const {user,lodder}=useContext(Arthcontext);
    const location = useLocation()

    if(lodder){
        return <progress className="progress w-56 items-center"></progress>
    }

    if(user){
        return children;
    }

    return <Navigate to='/login' state={location} replace></Navigate>
};

export default PrivetRout;