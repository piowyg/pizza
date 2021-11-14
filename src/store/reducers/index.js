import {combineReducers} from 'redux';
import menuReducer from './menuReducer';
import ingredientsReducer from './ingredientsReducer';
import orderReducer from './orderReducer'
import saucesReducer from './saucesReducer'
import sauceOstryReducer from './sauceOstryReducer'
import sauceCzosnkowyReducer from './sauceCzosnkowyReducer'
import sauceWyspReducer from './sauceWyspReducer'

const reducers = combineReducers({
    pizzas: menuReducer,
    ingredients: ingredientsReducer,
    sauces: saucesReducer,
    pizza_orders: orderReducer,
    sauces_ostry: sauceOstryReducer,
    sauces_czosnkowy: sauceCzosnkowyReducer,
    sauces_wysp: sauceWyspReducer,
});

export default reducers;
