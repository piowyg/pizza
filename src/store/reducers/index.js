import {combineReducers} from 'redux';
import menuReducer from './menuReducer';
import ingredientsReducer from './ingredientsReducer';

const reducers = combineReducers({
    pizzas: menuReducer,
    ingredients: ingredientsReducer
});

export default reducers;
