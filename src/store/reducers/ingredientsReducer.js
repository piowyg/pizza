const reducer = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_INGREDIENT':
            return action.payload;
        default:
            return state;
    }
};

export default reducer;