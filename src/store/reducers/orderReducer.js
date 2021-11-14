const reducer = (state = {pizza_orders: []}, action) => {
    switch (action.type) {
        case 'ADD_TO_ORDER':
            return {
                ...state,
                pizza_orders: [...state.pizza_orders, action.order]
            }
            case 'REMOVE_FROM_ORDER':
                return {
                    ...state,
                    pizza_orders: action.order
                }
        default:
            return state;
    }
};

export default reducer;