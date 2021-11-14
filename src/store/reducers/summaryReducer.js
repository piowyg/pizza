
const initialState = {
    state: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REDIRECT_TO_SUMMARY':
            return {
                ...state,
                state: action.state
            }
    default:
            return state;
    }
};

export default reducer;