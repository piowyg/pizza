
const initialState = {
    count: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OSTRY':
            return {
                ...state,
                count: action.count
            }
    default:
            return state;
    }
};

export default reducer;