import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Header.css";


const list = [
    { name: "start", path: "/", exact: true },
    { name: "produkty", path: "/pizzas" },
    { name: "koszyk", path: "/order" },
  ]

const Header = () => {
    const menu = list.map(item => (
        <li key={item.name}>
          <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
      ))
    
      return (
        <nav className="main">
          <ul>
            {menu}
          </ul>
        </nav>
      );
    }
    

export default Header;