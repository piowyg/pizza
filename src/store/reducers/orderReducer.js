import {bake_cookie, delete_cookie, read_cookie} from 'sfcookies'

const reducer = (state = {pizza_orders: []}, action) => {
    if (state.pizza_orders.length === 0) {
        if (!Array.isArray(read_cookie("pizza_order"))) {
            state = read_cookie("pizza_order");
        }
    }
    switch (action.type) {
        case 'ADD_TO_ORDER':
            bake_cookie("pizza_order", {
                ...state,
                pizza_orders: [...state.pizza_orders, action.order]
            });
            return {
                ...state,
                pizza_orders: [...state.pizza_orders, action.order]
            }
            case 'REMOVE_FROM_ORDER':
                bake_cookie("pizza_order", {
                    ...state,
                    pizza_orders: action.order
                });
                return {
                    ...state,
                    pizza_orders: action.order
                }
        default:
            return state;
    }
};

export default reducer;