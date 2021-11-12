import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Header.css";
import { useSelector } from 'react-redux';

const list = [
    { name: "start", path: "/", exact: true },
    { name: "produkty", path: "/pizzas" },
    { name: "koszyk", path: "/order" },
  ]

const Header = () => {

  const pizza_orders = useSelector((state) => state.pizza_orders);

    const menu = list.map(item => (
        <li key={item.name}>
          <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name ==="koszyk" && pizza_orders.pizza_orders.length >0
           ? item.name + " ("+pizza_orders.pizza_orders.length +")" 
           :item.name }</NavLink>
        </li>
      ))
    
      return (
          <>
          <img className = "logo" src="/logo.png" alt="logo"/>
          <nav className="main">
            <ul>
              {menu}
            </ul>
          </nav>
          </>
      );
    }
    

export default Header;