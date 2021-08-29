function nameMenuItem(menuItemName) {
  return `Delicious ${menuItemName}`;

}


function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type,
  };
  return menuItem;
}

function addIngredients(toppings, ingredients) {
  if (ingredients.includes(toppings) === false) {
    return ingredients.push(toppings)
  };
}

function formatPrice(initialPrice) {
  return `$${initialPrice}`;
  return `$${formattedPrice}`;
}


function decreasePrice(decreasedPrice) {
  return decreasedPrice * .9

}

function createRecipe(title, ingredients, type) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: type,
  };
  return recipe;
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
