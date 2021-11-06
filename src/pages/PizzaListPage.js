import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PizzaListPage.css';
import { useSelector } from 'react-redux';

const PizzaListPage = () => {

  const pizzas = useSelector((state) => state.pizzas);

  const list = pizzas.map(product => (
    <li key={product.id}>
      <Link to={`/pizza/${product.name}`}>{product.name}</Link>
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