import {combineReducers} from 'redux';
import menuReducer from './menuReducer';
import ingredientsReducer from './ingredientsReducer';
import orderReducer from './orderReducer'

const reducers = combineReducers({
    pizzas: menuReducer,
    ingredients: ingredientsReducer,
    pizza_orders: orderReducer
});

export default reducers;
