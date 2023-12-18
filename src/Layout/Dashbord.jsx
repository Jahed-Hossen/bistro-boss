import React from 'react';
import { FaCartArrowDown} from 'react-icons/fa6';
import { MdHomeFilled, MdOutlineReviews } from "react-icons/md";
import { Link, Outlet } from 'react-router-dom';
import { FaCalendarAlt, FaWallet } from "react-icons/fa";
import { BsCalendar2DayFill } from "react-icons/bs";
const Dashbord = () => {
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
  
    <label htmlFor="my-drawer-2" className="lg:hidden mr-80 md:mr-[760px] pt-6" role="button">  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
   <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-[#D1A054] text-base-content">
      {/* Sidebar content here */}
       <h1 className=' text-4xl ml-4 '>BISTRO BOSS</h1>
       <h1 className='text-2xl pb-5 ml-4 '>R E S T U R E N T</h1>

      <li><Link to='mycart'><MdHomeFilled/> MY PROFILE</Link></li>
      <li><Link to='/order/salads'><FaCalendarAlt />RESERVATION</Link></li>
      <li><Link to='mycart'><FaCartArrowDown/> MY CART</Link></li>
      <li><Link to='mycart'><FaWallet/> PAYMENT HISTORY</Link></li>
      <li><Link to='mycart'><MdOutlineReviews /> ADD REVIEW</Link></li>
      <li><Link to='mycart'><BsCalendar2DayFill /> MY BOOKING</Link></li>
      <div className="divider"></div>
      <li><Link to='/'><MdHomeFilled/> HOME</Link></li>
      <li><Link to='/menu'><BsCalendar2DayFill /> MENU</Link></li>
      <li><Link to='/order/salads'><BsCalendar2DayFill /> ADD FOOD</Link></li>
      <li><Link to='/'><BsCalendar2DayFill /> CONTACT</Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashbord;