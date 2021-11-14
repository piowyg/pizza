const ingredientsDictionary = (ingredients) => {
    var dict = [];

    ingredients.forEach(element => {
        dict[element.id] = element.name;
    });

    return dict;
}

export default ingredientsDictionary;