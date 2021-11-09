import React from 'react';
import '../styles/Product.css';
import { translations } from '../dictionary/transaltions';

const Product = (props) => {
  const pizza = "/pizze/" + props.id + ".png";
  return (
    <article className="product">
      <h1>{props.id}</h1>
      <article> {translations[props.id]}</article>
      <img src={pizza} alt={props.id} className="pizza_img"/>
    </article>
  );
}

export default Product;