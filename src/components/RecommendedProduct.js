import '../styles/RecommendedProduct.css'
import { Link } from 'react-router-dom';

const RecoommendedProduct = (props) => {


    const photo = "/pizze/" + props.pizza.name  +".png";
    return (
        <>
        <Link to={`/pizza/${props.pizza.name}`}>
        <div className="recommended-wrapper">
            <div className="top">
                <span>{props.pizza.name}</span> <span> już od {props.pizza.price} zł</span>
            </div>
            <img className = "recommended_picture" src={photo} alt={props.pizza.name}/>
        </div>
        </Link>
        </>
    )
}

export default RecoommendedProduct; 
