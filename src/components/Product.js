import React from 'react';
import '../styles/Product.css';
import { useSelector } from 'react-redux';
import { translations } from '../dictionary/transaltions';
import cart_pizza_list from '../images/cart.png';

const Product = (props) => {
  const pizza = "/pizze/" + props.id + ".png";

  const pizzas = useSelector((state) => state.pizzas);
  const ingredients_store = useSelector((state) => state.ingredients);

  let current_pizza = []

  pizzas.forEach(element => {
              if (element.name === props.id) {
                current_pizza = element;
              }
            });

  const list = current_pizza.ingredients.map((product, index) => {
    return (
    <li key={product.id}>
        {
          ingredients_store.map(element => {
            if (element.id === product) {
              return element.name  
            }
            }
        )}
    </li>)
  })

  return (
    <>
    <article className="product">
      <h1>{props.id}</h1>
      <article> {translations[props.id]}</article>
      <img src={pizza} alt={props.id} className="pizza_img"/>

      <h2>Składniki</h2>
      <ul className="ingredients_pizza_page">
        {list}
      </ul>
      <button className="add_ingredient">Dodaj składnik </button>

      <button className="add_ingredient"> <span>{current_pizza.price} zł</span> <img src={cart_pizza_list} alt="koszyk"></img></button>
    </article>

  
  </>
  );
}

export default Product;