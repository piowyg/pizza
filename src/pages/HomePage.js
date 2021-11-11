import React from 'react';
import RecommendedSection from '../components/Recommended';
import { useSelector } from 'react-redux';
import Loader from "react-loader-spinner";
import AboutUs from '../components/AboutUs';

const HomePage = () => {

    const pizzas = useSelector((state) => state.pizzas);

    if (pizzas.length === 0) {
        return <>  <Loader
        type="Bars" color="#00BFFF" height={80} width={80}
        timeout={1500} 
        /> </>
      } else {
        return (
            <>
                <RecommendedSection pizza={pizzas} />

                <AboutUs/>
            </>
        );}
}

export default HomePage;