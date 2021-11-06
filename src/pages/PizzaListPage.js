import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PizzaListPage.css';

const products = ["margerita", "funghi", "capriciosa"];

const PizzaListPage = () => {

  const list = products.map(product => (
    <li key={product}>
      <Link to={`/pizza/${product}`}>{product}</Link>
    </li>
  ))

  return (
    <div className="pizzas">

      <h1>Lista pizz</h1>
      <div>
        <ul>
          {list}
        </ul>
      </div>
    </div>

  );
}

export default PizzaListPage;