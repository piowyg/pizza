import {combineReducers} from 'redux';
import menuReducer from './menuReducer';

const reducers = combineReducers({
    pizzas: menuReducer
});

export default reducers;
