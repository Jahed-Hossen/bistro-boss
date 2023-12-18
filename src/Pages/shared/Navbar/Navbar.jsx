import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Arthcontext } from '../../../provider/ArthProvider';
import { FaCartArrowDown } from "react-icons/fa6";
import useCart from '../Hookes/useCart';
const Navbar = () => {
 const {user,logOut}=useContext(Arthcontext)
 const [cart]=useCart()
 const handleLogOut = () => {
         logOut()
        .then(() => { })
        .catch(error => console.log(error));
}



    const navOption = <>
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/menu '>MENU</Link></li>
        <li><Link to='/order/salads '>ORDER FOOD</Link></li>
        <li><Link to='/secret '>SECRET</Link></li>
       
        {
            user ? 
            <li onClick={handleLogOut}><Link>LOG OUT</Link> </li>:<li><Link to='/login'>LOG IN</Link></li>
           
        }
    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            {navOption}
                        </ul>
                    </div>
                    <a className="btn btn-ghost ">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white ">
                        {navOption}
                    </ul>
                </div> 
                <div className="navbar-end gap-3 mr-5">
                  {user ? <>{user?.displayName}</>:<></> } 
                
                </div>
                 <li><Link to='/dashbord/mycart'><div className="badge">+{cart?.length||0}</div><FaCartArrowDown /></Link></li>
            </div>
        </>
    );
};

export default Navbar;