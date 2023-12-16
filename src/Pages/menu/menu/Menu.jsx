import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';
import menuimg from '../../../assets/menu/banner3.jpg'
import dessertimg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaimg from '../../../assets/menu/pizza-bg.jpg'
import saladimg from '../../../assets/menu/salad-bg.jpg'
import soupimg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../shared/Hookes/useMenu';
import SectionTittle from '../../shared/section tittle/SectionTittle';
import Menucategori from '../menucategori/Menucategori';
const Menu = () => {
  const [menu] = useMenu()
  const dessert = menu.filter(item => item.category === 'dessert')
  const pizza = menu.filter(item => item.category === 'pizza')
  const salad = menu.filter(item => item.category === 'salad')
  const soup = menu.filter(item => item.category === 'soup')
  const offered = menu.filter(item => item.category === 'offered')
  return (

    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuimg} tittle={'OUR MENU'} details={'Would you like to try a dish?'}></Cover>
      <SectionTittle header={"TODAY'S OFFER"} subheader={"Don't miss"}></SectionTittle>
      <Menucategori item={offered}></Menucategori>
      <Menucategori item={dessert} img={dessertimg} tittle={'DESSERTS'}></Menucategori>
      <Menucategori item={pizza} img={pizzaimg} tittle={'PIZZAS'}></Menucategori>
      <Menucategori item={salad} img={saladimg} tittle={'SALADS'}></Menucategori>
      <Menucategori item={soup} img={soupimg} tittle={'SOUPS'}></Menucategori>
    </div>

  );
};

export default Menu;