//
//
// function addOrderDetals(orderId, itemName, itemPrice, itemQuntity, total) {
//     var orderD = new OrderDetails(orderId, itemName, itemPrice, itemQuntity, total);
//     orderDetails.push(orderD);
// }
//
//
// function deleteOrderDetails(orderId) {
//     for (var i = 0; i < orderDetails.length; i++) {
//         if (orderDetails[i].getOrderID() == orderId) {
//             orderDetails.splice(i, 1);
//             return true;
//         }
//     }
// }
//
//
// function updateOrderDetails(orderId, itemName, itemPrice, itemQuntity, total) {
//     for (var i = 0; i < orderDetails.length; i++) {
//         if (orderDetails[i].getCustomerName() == orderId) {
//             orderDetails.splice(i, 1);
//             addOrderDetals(orderId, itemName, itemPrice, itemQuntity, total);
//
//         }
//     }
// }
//
//
// function searchOrderDetails(orderId) {
//     for (var i = 0; i < orderDetails.length; i++) {
//         if (orderDetails[i].getOrderID() == orderId) {
//             var itemName = orderDetails[i].getItemName();
//             var ccage = orderDetails[i].getItemPrice();
//             var cctp = orderDetails[i].getItemQuntity();
//             var ccsal = orderDetails[i].getTotal();
//             var orderTemp = new OrderDetails(itemName, ccage, cctp, ccsal);
//             var tempo= new Array();
//             tempo.push(orderTemp);
//             return tempo;
//         }
//     }
// }
//
//
// function getAllOrderDetails() {
//     return orderDetails;
// }