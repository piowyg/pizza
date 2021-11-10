import React from 'react';
import '../styles/Product.css';
import { useSelector } from 'react-redux';
import { translations } from '../dictionary/transaltions';
import cart_pizza_list from '../images/cart.png';
import edit from '../images/edit.png'

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
    <li key={product}>
        {
          // eslint-disable-next-line array-callback-return
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

      <h2>Składniki <button className="editButton"><img className = "edit" src={edit} alt="edytuj składniki"></img></button></h2>
      <ul className="ingredients_pizza_page">
        {list}
      </ul>
      <div className="submit_div">
          <p> Jeśli masz ochotę na jakieś ekstra składniki kliknij w ołowek przy składnikach </p>
          <p>To chyba najwyższa pora dodać pizze do koszyka :) </p>
         <button className="add_pizza"> <span>{current_pizza.price} zł</span> <img src={cart_pizza_list} alt="koszyk"></img></button>
      </div>
    </article>

  
  </>
  );
}

export default Product;