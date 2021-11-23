import {bake_cookie, delete_cookie, read_cookie} from 'sfcookies'

const initialState = {
    count: 0,
};

const reducer = (state = initialState, action) => {
    if (state.count === 0) {
        if (!Array.isArray(read_cookie("ostry_sauce"))) {
            state = read_cookie("ostry_sauce");
        }
    }
    switch (action.type) {
        case 'OSTRY':
            bake_cookie("ostry_sauce", {
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