import React from 'react';
import RecommendedSection from '../components/Recommended';
import { useSelector } from 'react-redux';
import Loader from "react-loader-spinner";

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
                {/* // <TODO>
                //     - Polecane pizza 
                //     - pobierac 3 losowe pizze i je wyswietlac wraz ze zdjeciami ( nazwa + zdjecie)
                //     - sekcja o nas ( pelna easter eggow)
                // </TODO> */}
            </>
        );}
}

export default HomePage;