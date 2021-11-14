import React from 'react';
import '../styles/Product.css';
import { useSelector, useDispatch } from 'react-redux';
import { translations } from '../dictionary/transaltions';
import cart_pizza_list from '../images/cart.png';
import edit from '../images/edit.png'
import { useState } from 'react';
import IngredientsPopup from './IngredientsPopup';
import Popup from './Popup';
import { addToOrder } from '../store/action-creators';

const Product = (props) => {

  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state.pizzas);
  const ingredients_store = useSelector((state) => state.ingredients);

  const pizza = "/pizze/" + props.id + ".png";

  let additionalIngredientsOnPizza = [];
  let current_pizza = []
  const ingredients = [];
  const based_ingredients_on_pizza = [];


  const [state, setState] = useState(false);
  const [order, setOrder] = useState(false);

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
        based_ingredients_on_pizza.push(element.name)
        return element.name  
      } else if (!ingredients.includes(element) ) {
        ingredients.push(element);
      }
      }
  )}
  </li>)
  })
  
  let additionalIngredients = ingredients.filter( function( element ) {
    return !based_ingredients_on_pizza.includes( element.name );
  } );

  const [ingredients_checked_label, setIngredientsCheckedState] = useState([]);
  const [ingredients_to_cart, setIngredientsForCart] = useState([]);
  const [list_extra_ingredients, setListExtraIngre] = useState([]);
  const [ingredientsPrice, setIngredientsPrice] = useState(0);
  
  const togglePopup = () => {
    if (state) {
      let price = 0;

      additionalIngredients.forEach((element, index) => {
        if (ingredients_checked_label[index]) {
          additionalIngredientsOnPizza.push(element);
          price += element.price;
        }
      })
      let temp = additionalIngredientsOnPizza.map(product => {
        return (
          <li key={product.name}> {product.name}</li>
        )
      })
      setListExtraIngre(temp);
      setIngredientsForCart(additionalIngredientsOnPizza);
      setIngredientsPrice(price);
    }
    setState(!state);
  }

  const togglePopup_2 = () => {
    setOrder(!order);
  }


  const onChangeCheckedBox = (index) => {
    setIngredientsCheckedState(prevState => {
      let temp = [...prevState];

      temp[index] = !temp[index];
      return temp;
    })
  }

  const handleOrder = (pizza) =>{
    let {id,price} = pizza;
    let total_price = price + ingredientsPrice;
    let _ingredients = []
     ingredients_to_cart.forEach( element => {
        _ingredients.push(element.id);
    })

    const pizza_order = {id,price :total_price,ingredients: _ingredients }
    dispatch(
      addToOrder(pizza_order)   
    )
    setOrder(!order);
  }

  return (
    <>
    <article className="product">
      <h1>{props.id}</h1>
      <article> {translations[props.id]}</article>

      <img src={pizza} alt={props.id} className="pizza_img"/>

      <h2>Składniki <button className="editButton"  onClick={() => togglePopup()} ><img className = "edit" src={edit} alt="edytuj składniki"></img></button></h2>
      {state ? 
          <IngredientsPopup
            text='Dodatkowe składniki'
            closePopup={togglePopup}
            list = {additionalIngredients}
            truthTable = {ingredients_checked_label}
            checkedFunction = {onChangeCheckedBox}
          />
          : null
        }
        {order ? 
          <Popup
            text='Pizza została dodana do koszyka'
            closePopup={togglePopup_2}
            pizza_name= {current_pizza.name}
          />
          : null
        }
      <ul className="ingredients_pizza_page">
        {list}
        {list_extra_ingredients}
      </ul>
      <div className="submit_div">
          <p> Jeśli masz ochotę na jakieś ekstra składniki kliknij w ołowek przy składnikach </p>
          <p>To chyba najwyższa pora dodać pizze do koszyka :) </p>
         <button onClick={() => handleOrder(current_pizza)} className="add_pizza"> <span>{current_pizza.price + ingredientsPrice} zł</span> <img src={cart_pizza_list} alt="koszyk"></img></button>
      </div>
    </article>

  
  </>
  );
}

export default Product;