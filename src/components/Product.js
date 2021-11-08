import React from 'react';
import '../styles/Product.css';

const Product = (props) => {
  const pizza = "/pizze/" + props.id + ".png";
  return (
    <article className="product">
      <h1>{props.id}</h1>
      <img src={pizza} alt={props.id} className="pizza_img"/>
    </article>
  );
}

export default Product;