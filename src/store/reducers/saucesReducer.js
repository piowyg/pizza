const reducer = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_SAUCES':
            return action.payload;
        default:
            return state;
    }
};

export default reducer;