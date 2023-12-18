import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/menu/menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/login/login page/Login";
import SingUp from "../Pages/login/singup/SingUp";
import Secret from "../Pages/Secret/Secret";
import PrivetRout from "./Privet route/PrivetRout";
import Dashbord from "../Layout/Dashbord";
import MyCart from "../Pages/Dashbord/mycart/MyCart";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
          path:'/menu',
          element:<Menu></Menu>
        },
        {
          path:'/order/:category',
          element:<Order></Order>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/singup',
          element:<SingUp></SingUp>
        },
        {
          path:'/secret',
          element: <PrivetRout><Secret></Secret></PrivetRout> 
        }

      ]
    },
    {
      path:'/dashbord',
      element:<Dashbord></Dashbord>,
      children:[
        {
          path:'mycart',
          element:<MyCart></MyCart>
        }
      ]
    }
  ]);


  