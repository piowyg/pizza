import RecoommendedProduct from "./RecommendedProduct";


const RecommendedSection = (props) => {

    const shuffled = props.pizza.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 3);
    
    return (
        <div>
            <h2>
                Polecane pizze przez szefa kuchni
            </h2>

            <RecoommendedProduct pizza={selected[0]} />
            <RecoommendedProduct pizza={selected[1]}/>
            <RecoommendedProduct pizza={selected[2]}/>
        </div>
    )
}

export default RecommendedSection;