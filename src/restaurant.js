function createRestaurant(restaurantName, menus) {
var restaurant = {
  name: restaurantName,
  menus: {
    breakfast: [],
    lunch: [],
    dinner: [],
  }
}
return restaurant;
}



function addMenuItem(restaurant, addedItem) {
var newMenu = addedItem.type;
 if (restaurant.menus[newMenu].includes(addedItem) === false) {
   restaurant.menus[newMenu].push(addedItem);
 } else {
  return newMenu;
}
}


function removeMenuItem(restaurantName, menuItem, itemType) {
  for (var i = 0; i < restaurantName.menus[itemType].length; i++) {
    if (restaurantName.menus[itemType][i].name.includes(itemType) === false) {
      restaurantName.menus[itemType].splice(i);
      return `No one is eating our ${menuItem} - it has been removed from the ${itemType} menu!`;
    }
  }
      return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`;
    }


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
