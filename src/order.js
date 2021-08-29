function takeOrder(orders, deliveryOrders) {
   if (deliveryOrders.length < 3) {
   return deliveryOrders.push(orders);
  }
}
// deliveryOrders.length = 3
// deliveryOrders.push(orders);


function refundOrder(orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
  if (deliveryOrders[i].orderNumber === orderNumber) {
    deliveryOrders.splice(i, 1);
    }
  }
}


function listItems(deliveryOrders) {
 var items = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    items.push(deliveryOrders[i].item);
}
return items.join(', ')
}

function searchOrder(deliveryOrders, list) {
  var isListed = false;
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === list) {
    isListed = true;
    }
  }
  return isListed;
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder,
}
