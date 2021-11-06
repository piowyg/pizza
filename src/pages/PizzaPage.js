import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product'


const PizzaPage = ({ match }) => {
  return (
    <>
      <div>Strona pizzy</div>
      <Product id={match.params.id} />
      <Link to="/pizzas">Powrót do listy pizz</Link>
    </>

  );
}

export default PizzaPage;