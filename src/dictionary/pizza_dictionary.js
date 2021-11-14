

const pizzaDictionary = (pizzas) => {
    var dict = [];

    pizzas.forEach(element => {
        dict[element.id] = element.name;
    });

    return dict;
}

export default pizzaDictionary;