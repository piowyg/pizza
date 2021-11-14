export const loadMenu  = (url) => {

    const getMenu = async (url) => {
        const response = await fetch(url);
        return await response.json();
    };

    return (dispatch) => {
        return getMenu(url)
            .then(function(data) {
                dispatch({
                    type: 'LOAD_MENU',
                    payload: data
                });
            })
            .catch((error) => {
                console.log(error);
                dispatch({
                    type: 'LOAD_MENU',
                    payload: []
                });
            });
    }
};

export const loadIngredients  = (url) => {

    const getMenu = async (url) => {
        const response = await fetch(url);
        return await response.json();
    };

    return (dispatch) => {
        return getMenu(url)
            .then(function(data) {
                dispatch({
                    type: 'LOAD_INGREDIENT',
                    payload: data
                });
            })
            .catch((error) => {
                console.log(error);
                dispatch({
                    type: 'LOAD_INGREDIENT',
                    payload: []
                });
            });
    }
};

export const loadSauces  = (url) => {

    const getMenu = async (url) => {
        const response = await fetch(url);
        return await response.json();
    };

    return (dispatch) => {
        return getMenu(url)
            .then(function(data) {
                dispatch({
                    type: 'LOAD_SAUCES',
                    payload: data
                });
            })
            .catch((error) => {
                console.log(error);
                dispatch({
                    type: 'LOAD_SAUCES',
                    payload: []
                });
            });
    }
};


export const addToOrder = (order) => {

    return {
        type: "ADD_TO_ORDER",
        order,
    };
}

export const removeFromOrder = (order) => {

    return {
        type: "REMOVE_FROM_ORDER",
        order,
    };
}

export const addSauce = (sauce) => {
    
    return {
        type: "ADD_SAUCE",
        sauce,
    }
}

export const actionCzosnkowy = (count) => ({
    type: "CZOSNKOWY",
    count
  });
  
  export const actionOstry = (count) => ({
    type: "OSTRY",
    count
  });

  export const actionWysp = (count) => ({
    type: "1000_WYSP",
    count
  });
  
  export const redirectToSummaryAction = (state) => ({
    type: "REDIRECT_TO_SUMMARY",
    state
  });
  