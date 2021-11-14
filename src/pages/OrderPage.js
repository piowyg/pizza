import React from 'react';
import {useDispatch } from "react-redux";
import Loader from "react-loader-spinner";
import { useSelector } from 'react-redux';
import pizzaDictionary from '../dictionary/pizza_dictionary';
import ingredientsDictionary from '../dictionary/ingredientsDictionary';
import { Link, Redirect } from 'react-router-dom';
import '../styles/OrderPage.css';
import { removeFromOrder } from '../store/action-creators';
import { useState, useEffect } from 'react';
import { actionCzosnkowy, actionOstry, actionWysp, redirectToSummaryAction } from '../store/action-creators';
import FormValidationComponent from '../components/FormValidationComponent';

const OrderPage = () => {

    const dispatch = useDispatch();

    const pizzas = useSelector((state) => state.pizzas);
    const ingredients = useSelector((state) => state.ingredients);
    const sauces = useSelector((state) => state.sauces);

    const pizza_orders = useSelector((state) => state.pizza_orders.pizza_orders);
    
    const [ostry, setOStry] = useState(useSelector((state) => state.sauces_ostry.count));
    const [czosnkowy, setCzosnkowy] = useState(useSelector((state) => state.sauces_czosnkowy.count));
    const [wysp, setWysp] = useState(useSelector((state) => state.sauces_wysp.count));


    const [redirectToSummary, setRedirectToSummary] = useState(false);

    const pizzaDict = pizzaDictionary(pizzas);
    const ingredientsDict = ingredientsDictionary(ingredients);
    
    const [formValues, setFormValues] = useState('');
   
    useEffect(() => {
      setTotalPrice(totalPriceGenerator());
    }, [ostry,czosnkowy,wysp]);


    const [isPending, setIsPending] = useState(false);

    const totalPriceGenerator = () => {

      let price = 0
      pizza_orders.forEach(pizza => {
        price += pizza.price
      })

      sauces.forEach(sauce => {
        price += (sauce.price * sauceDict[sauce.name])
      })

      return price;
    }

    var sauceDict = [];

    sauceDict["czosnkowy"] = czosnkowy;
    sauceDict["ostry"] = ostry;
    sauceDict["1000 wysp"] = wysp;

    const [totalPrice, setTotalPrice] = useState(totalPriceGenerator());

    
    const onFormSubmit = (event)  => {
      setFormValues({formValues:JSON.stringify(event)})
      let pizzasJSON = []

      pizza_orders.forEach(pizza => {
        let {id, ingredients} = pizza
        let element = {id, ingredients}
        pizzasJSON.push(element);
      })


      let sauceJSON = []

      sauces.forEach(sauce => {
        let {id, name} = sauce;
        let count = sauceDict[name];
        if (count !== 0) {
          let element = {id, count}
          sauceJSON.push(element);
        }
      })

      let orderJSON = {}
      orderJSON["pizza"] = pizzasJSON;
      if (sauceJSON.length !== 0) {
        orderJSON["sauce"] = sauceJSON;
      }
      orderJSON["total"] = totalPrice;

      setIsPending(true);
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderJSON)
    };
    fetch('http://localhost:3333/api/order', requestOptions)
            .then((res) => res.json())
            .then((data) => console.log(data))
            .then(() => setIsPending(false))
            .then(() => dispatch(
              actionOstry(0)   
            ))
            .then(() => dispatch(
              actionCzosnkowy(0)   
            ))
            .then(() => dispatch(
              actionWysp(0)   
            ))
            .then(() =>  dispatch(
              removeFromOrder([])   
            ))
            .then(() =>  dispatch(
              redirectToSummaryAction(true)   
            ))
            .then(() => setRedirectToSummary(true))
            .catch((err) => console.log(err))
    };


    const removeButton = (index) => {
     pizza_orders.splice(index,1);
      dispatch(
        removeFromOrder(pizza_orders)
      )

      setTotalPrice(totalPriceGenerator());
    }

    const addSauce = (name) => {
      switch(name) {
        case "ostry":
            dispatch(
              actionOstry(ostry+1)   
            )
            setOStry(prevState => {
              return prevState +1;
            })
            break
         case "czosnkowy":
              dispatch(
                actionCzosnkowy(czosnkowy+1)   
              )
              setCzosnkowy(prevState => {
                return prevState +1;
              })
              break
              case "1000 wysp":
                dispatch(
                  actionWysp(wysp+1)   
                )
                setWysp(prevState => {
                  return prevState +1;
                })
                break
        default:
           break
    }
  }

  const removeSauce = (name) => {
    switch(name) {
      case "ostry":
          dispatch(
            actionOstry(ostry-1)   
          )
          setOStry(prevState => {
            return prevState -1;
          })
          break
       case "czosnkowy":
            dispatch(
              actionCzosnkowy(czosnkowy-1)   
            )
            setCzosnkowy(prevState => {
              return prevState -1;
            })
            break
            case "1000 wysp":
              dispatch(
                actionWysp(wysp-1)   
              )
              setWysp(prevState => {
                return prevState -1;
              })
              break
      default:
         break
  }
}


    const orders = pizza_orders.map((pizza, index) => {
      return (
        <li key={index}>
          <div className="order">
            <div className="pizza_name">{pizzaDict[pizza.id]} </div>
            <div className="pizza_price" > {pizza.price} zł</div>
           {undefined !== pizza.ingredients && pizza.ingredients.length !== 0 
           ? <div className="ingredients_wrapper"> <ul>{pizza.ingredients.map( element => {
             return (<li key ={element}>
                  {ingredientsDict[element]}
                </li>) 
           })} </ul> </div> 
           : null} 
           </div>
           <button onClick={() => removeButton(index)} className="remove"><img src="/remove.png" alt="remove" /></button>
        </li>);
    })

    const sauces_list = sauces.map(sauce => {
      return (
        <li key={sauce.id} className="sauce">
          <div className="sauce_card">
            <img src={"/sauces/" + sauce.name + ".png"} alt={sauce.name} />
            <div>{sauce.name} </div>
            <div> <span>{sauce.price * sauceDict[sauce.name]}</span> zł</div>
            <div className="saucePanel"> <button disabled={sauceDict[sauce.name] === 0 ? true : false} onClick={() => removeSauce(sauce.name)}>-</button> {sauceDict[sauce.name]} <button onClick={() => addSauce(sauce.name)}>+</button></div>
            </div>
        </li>);
    })

    if (redirectToSummary) {
      return (
        <>
          <Redirect to="/summary" />
        </>
      )
    }
    if (sauces.length !== 0) {
      if(orders.length !== 0 ) {
        return (
        <>
         <h1>Koszyk</h1>
        <div className="orders_wrapper">
              <ul className="orders">
                {orders}
              </ul>
              <ul className="sauces_list">
                {sauces_list}
              </ul>
              <div className="form-row">
                  <div className="col-md-12 text-center">
                    <h2>Do zapłaty {totalPrice} zł</h2>
                  </div>
                </div>
              <FormValidationComponent onSubmit={onFormSubmit} isPending={isPending}/>
              </div>
        </>);
      } else {
        return (
          <>
          <h1>Twój koszyk jest pusty</h1>
          <Link to="/pizzas"> Przejdź do stronny z pizzami </Link>
          </>
        )
      }
      } else {
        return (
          <Loader
          type="Bars" color="#00BFFF" height={80} width={80}
          timeout={2500} 
        />
        )
      }
    }
    /*

        !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          I NAJWAZNIEJSZE NA DOLE H2 ILE KOSZTUJE CALOSC ZAMOWIENIA
    */
    //     // no i buttonik na samym dole zamow ktory sprawdzi walidacje i wypluje bledy oraz zrobi posta + redirecta do podsumowania es
    // );
// }

export default OrderPage;