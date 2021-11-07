import React from 'react';
import { Link, Redirect} from 'react-router-dom';
import Product from '../components/Product'
import { useSelector } from 'react-redux';
import Loader from "react-loader-spinner";

const PizzaPage = ({ match }) => {

  const pizzas = useSelector((state) => state.pizzas);


  if (pizzas.length === 0) {
    return <>  <Loader
    type="Bars" color="#00BFFF" height={80} width={80}
    timeout={1500} 
    /> </>
  } else {

    const listToCopy = pizzas.filter(item => item.name === match.params.id);
    if (listToCopy.length !== 0) {
      return (
        <>
          <div>Strona pizzy</div>
          <Product id={match.params.id} />
          <Link to="/pizzas">Powrót do listy pizz</Link>
        </>
    
      );
    } else {
      return (
        <>
          <Redirect to="/pizzas" />
        </>

      );
    }
  }
}

export default PizzaPage;