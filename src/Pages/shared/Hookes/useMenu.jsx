import { useEffect, useState } from 'react';

const useMenu = () => {
     const [menu, setMenu]= useState([]);
     const[lodder, setLodder]=useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/menu')
        .then(res=>res.json())
        .then(data =>{      
            setMenu(data);
            setLodder(false);
        } )
    },[])
  
    
    return [menu,lodder];
};

export default useMenu;