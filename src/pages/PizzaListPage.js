import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PizzaListPage.css';
import { useSelector } from 'react-redux';
import pizza_list from '../images/pizza_list.jpg';
import cart_pizza_list from '../images/cart.png';
import Loader from "react-loader-spinner";

const PizzaListPage = () => {

  const pizzas = useSelector((state) => state.pizzas);
  const ingredients_store = useSelector((state) => state.ingredients);

  const list = pizzas.map((product, index) => (
    <li key={product.id}>
      <div>
      <Link to={`/pizza/${product.name}`}> {index+1 }. {product.name}</Link>
      <button> <span>{product.price} zł</span> <img src={cart_pizza_list} alt="koszyk"></img></button>
      <ul className="ingredients">
        {product.ingredients.map(ingredient => {
          let x = ""
          ingredients_store.forEach(element => {
            if (element.id === ingredient) {
              x = element.name;
            }
          });
          return (<li key={x}> {x} </li>
            )
          })
        }
      </ul>
      </div>
    </li>
  ))

  return (
    <>
    <div className="pizzas">
      <h1>Pizze</h1>
      <div className="pizza_list">
      <div className="img_wrapper"><img src={pizza_list} alt="pizza"></img></div>
      <Loader
        type="Bars" color="#00BFFF" height={80} width={80}
        timeout={1500} 
      />
        <ul>
          {list}
        </ul>
      </div>
    </div>
    </>
  );
}

export default PizzaListPage;