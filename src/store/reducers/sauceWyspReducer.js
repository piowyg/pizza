import {bake_cookie, delete_cookie, read_cookie} from 'sfcookies'

const initialState = {
    count: 0,
};

const reducer = (state = initialState, action) => {
    if (state.count === 0) {
        if (!Array.isArray(read_cookie("wysp_sauce"))) {
            state = read_cookie("wysp_sauce");
        }
    }
    switch (action.type) {
        case '1000_WYSP':
            bake_cookie("wysp_sauce", {
                ...state,
                count: action.count
            });
            return {
                ...state,
                count: action.count
            }
    default:
            return state;
    }
};

export default reducer;