//
//
// var oids = 1001;
// //var tempOrderArray = new Array();
//
//
//
// function addOrder() {
//     var orderID = $('#oids').val().trim();
//     var orderDate = "2015/10/20";
//     var customerName = $('#sele').find(":selected").text();
//     orderTableStallment();
//     var order = new Order(customerName, orderDate, orderID, orderDetails);
//     orderDb.push(order);
//     alert('Order Succsesfully Aded');
//     return true;
//
// }
// function orderTableStallment() {
//     var rowCount = $('#tab4 #tbo1 tr').length;
//     $('#tab4 #tbo1 tr').each(function () {
//         var orderID = $('#oids').val().trim();
//         var itemName = $(this).find(".iinn").text();
//         var itemPrice = $(this).find(".iipp").text();
//         var itemQun = $(this).find(".iiqq").text();
//         var itemTot = $(this).find(".tot").text();
//         var aaaa = new OrderDetails(orderID, itemName, itemPrice, itemQun, itemTot);
//         orderDetails.push(aaaa);
//     });
//
// }
//
//
// function deleteOrder(orderID) {
//     for (var i = 0; i < orderDb.length; i++) {
//         if (orderDb[i].getOrderId() == orderID) {
//             orderDb.splice(i, 1);
//             var res = deleteOrderDetails(orderID);
//             if (res) {
//                 return true;
//             } else {
//                 return false;
//             }
//
//         }
//     }
// }
//
//
// function searchOrder(orderID) {
//     for (var i = 0; i < orderDb.length; i++) {
//         if (orderDb[i].getOrderId() == orderID) {
//             var ccname = orderDb[i].getCustomerName;
//             var orderD = orderDb[i].getOrderDate();
//             var orderI = orderDb[i].getOrderId();
//             var detailA = orderDb[i].getOrderDetails();
//             var order = new Order(ccname, orderD, orderI, detailA);
//             return order;
//         } else {
//             for (var a in OrderDetails) {
//                 if (a.getOrderID() == orderID) {
//
//                 }
//             }
//
//         }
//     }
// }
//
//
// function updateOrder(customerName, date, oid) {
//     var res = deleteOrder(oid);
//     if (res) {
//         var orderID = $('#oids').val().trim();
//         var orderDate = "2018/11/08";
//         var customerName = $('#sele').find(":selected").text();
//         orderTableStallment();
//         var order = new Order(customerName, orderDate, orderID, orderDetails);
//         orderDb.push(order);
//         return true;
//
//     }
//     return false;
//
// }
//
//
// function getAllOrders() {
//     return orderDb;
// }
//
//
// //All Order Form functions On Going
// $('#sele').change(function () {
//     var conceptName = $('#sele').find(":selected").text();
//     var customerSo = serachCustomer(conceptName);
//     $('#addr').val("Galle");
//     $('#tel').val(customerSo.getCustomerTp());
//     $('#cref').val(customerSo.getCustomerSalary());
//
//
// });
//
// $('#sele').dblclick(function () {
//     $("#sele option").remove();
//     var cusD = getAllCustomers();
//     for (var i = 0; i < cusD.length; i++) {
//         $('#sele').append("<option>" + cusD[i].getCustomerName() + "</option>");
//     }
//
// });
//
// $('#itsl').dblclick(function () {
//     $("#itsl option").remove();
//     var allItemO = getAllItem();
//     for (var i = 0; i < allItemO.length; i++) {
//         $('#itsl').append("<option>" + allItemO[i].getItemName() + "</option>");
//     }
//
// });
//
// $('#itsl').change(function () {
//     var items = $('#itsl').find(':selected').text();
//     var itemOb = searchItem(items);
//     $('#pru').val(itemOb.getItemPrice());
//     $('#qun').val(itemOb.getItemQun());
//
// });
//
//
// $('#newCusB').click(function () {
//     $("#orderC").modal('toggle');
//     $("#orderC").modal('show');
// });
// $('#oqun').keydown(function (e) {
//     if (e.keyCode == 13) {
//         addOrd();
//         $('#itsl').focus();
//     }
// });
//
// $('#itsl').keydown(function (e) {
//     if (e.keyCode == 13) {
//         $('#oqun').focus();
//     }
//     if (e.keyCode == 43) {
//         $('#inputC').focus();
//     }
// });
//
// $('#itsl').keypress(function (e) {
//     if (e.keyCode == 43) {
//         $('#inputC').focus();
//     }
// });
//
//
//
// function addOrder() {
//     var orderID = $('#oids').val();
//     var itemName = $('#itsl').val().trim();
//     var itemPrice = parseInt($('#pru').val());
//     var itemQuntity = parseInt($('#oqun').val());
//     var available = parseInt($('#qun').val());
//     var total = itemPrice * itemQuntity;
//
//     if (!$('#pru').val() == '' & !$('#qun').val() == '' & !$('#oqun').val() == '') {
//         if (itemQuntity <= available) {
//             var rowc = $('#tab4 tbody tr').length;
//             if (rowc == 0) {
//                 lasttot = lasttot + total;
//                 $('#tab4').append('<tr><td>' + itemName + '</td><td class="iipp">' + itemPrice + '</td><td class="iiqq">' + itemQuntity + '</td><td class="tot">' + total + '</td></tr>');
//                 genarateTotal();
//                 clearItem();
//             } else {
//                 $('#tab4 tr td:first-child').each(function () {
//                     var len = $(this).text();
//                     if (len == itemName) {
//                         alert("Item Duplicated");
//                         rer = true;
//                         return false;
//                     }
//                 });
//                 if (!rer) {
//                     lasttot = lasttot + total;
//                     $('#tab4').append('<tr><td class="iinn">' + itemName + '</td><td class="iipp">' + itemPrice + '</td><td class="iiqq">' + itemQuntity + '</td><td class="tot">' + total + '</td></tr>');
//                     genarateTotal();
//                     clearItem();
//                 } else {
//                     rer = false;
//                 }
//             }
//
//         } else {
//             alert("Not Much Available Contact the Supplier");
//         }
//
//     } else {
//         alert('Select A Item First');
//     }
//     // alert("hi there");
// }
//
//
// function clearItem() {
//     $('#pru').val('');
//     $('#qun').val('');
//     $('#oqun').val('');
// }
// function fulltc() {//this is need to be analied again..
//     $('#addr').val('');
//     $('#tel').val('');
//     $('#cref').val('');
//     $('#pru').val('');
//     $('#qun').val('');
//     $('#oqun').val('');
//     $('#oids').val('');
//     $('#totalP').text("00.0");
//     $('#inputC').val('');
//     $('#balanceD').val('');
//     $('#disc').val('');
//     $('#tab4').find('tr:gt(0)').remove();
//     idgen();
//
// }
//
//
// //Order Search
// $('#oids').keypress(function (e) {
//     var a = e.keyCode;
//     if (a == 13) {
//         // alert('ok');
//         var tempOid = $('#oids').val().trim();
//         // var orderTemp = searchOrderDetails(tempOid);
//         var orderTemp = searchOrder(tempOid);
//         if (orderTemp != null) {
//             $('#sele').change().val(orderTemp.getCustomerName());
//             var detailsOb = orderTemp.getOrderDetails();
//             for (var i = 0; i < detailsOb.length; i++) {
//                 if (detailsOb[i].getOrderID() == tempOid) {
//                     $('#tab4').append('<tr><td>' + detailsOb[i].getItemName() + '</td><td>' + detailsOb[i].getItemPrice() + '</td><td>' + detailsOb[i].getItemQuntity() + '</td><td>' + detailsOb[i].getTotal() + '</td></tr>');
//                 }
//
//             }
//             genarateTotal();
//
//         } else {
//             alert("Sorry..! No Records Exits For That Order ID..!");
//         }
//
//
//
//     }
//
// });
//
//
// function genarateTotal() {
//     var realtot = 0;
//     $('#tab4 tr td:last-child').each(function () {
//         realtot = realtot + parseInt($(this).text());
//         displayTotal(realtot);
//     });
// }
//
// function displayTotal(a) {
//     $('#totalP').text(a);
// }
//
//
// $("#tab4").on("click", "tr", function () {
//     $('#tabI').modal('toggle');
//     $('#tabI').modal('show');
//     $(this).closest("tr").remove().delay(5000);
//     genarateTotal();
// });
//
//
//
// //order Validation
// $('#mainB').click(function () {
// //    check customer details
//     if (!$('#addr').val() == '' & !$('#tel').val() == '' & !$('#cref').val() == '') {
// //check order detaisl
//         if (!$('#oids').val() == '') {
//             var inputd = parseInt($('#inputC').val());
//             var blance = $('#balanceD').val();
//             var discount = $('#disc').val();
//             var fullTot = parseInt($('#totalP').text());
//             var rowc = $('#tab4 tbody tr').length;
//             if (rowc > 0) {
//                 if (fullTot <= inputd) {
// //               load modal and clear
//                     calsulateBalance();
//                     addOrder();
//
//                     fulltc();
//                     idgen();
//                 } else {
//                     $('#inputC').focus();
//                     alert('Inssuficent credit');
//
//                 }
//             } else {
//                 alert('Select Items');
//             }
//
//
//         } else {
//             alert('Id is missing');
// //                inform datee and oid not filled
//         }
//     } else {
//         alert('select customer');
//         //focus customer select
//         $('#sele').focus();
//     }
// });
//
//
// $('#sele').keypress(function (e) {
//     //  alert(e.keyCode);
//     if (e.keyCode == 43) {
//
//         $('#itsl').focus();
//     }
// });
// //calculate balance
// function calsulateBalance() {
//     var fullTot = parseInt($('#totalP').text());
//     var inputd = parseInt($('#inputC').val());
//     if (fullTot <= inputd) {
//         var bala = inputd - fullTot;
//         $('#balanceD').val(bala);
//
//     } else {
//         $('#inputC').focus();
//         alert('Inssuficent credit');
//
//     }
//
// }
// $('#inputC').keydown(function (e) {
//     if (e.keyCode == 13) {
//         calsulateBalance();
//     } else if (e.which == 39) {
//         $('#discc').focus();
//     }
//
// });
// $('window').ready(function () {
//     oids = oids + 1;
//     $('#oids').val(oids);
// });
// function idgen() {
//     oids = oids + 1;
//     $('#oids').val(oids);
// }
//
// //calculate discount
// $('#discc').keypress(function (e) {
//     if (e.keyCode == 13) {
//         var fullTot = parseInt($('#totalP').text());
//         var disc = parseInt($('#discc').val());
//         var di = fullTot - disc;
//         $('#totalP').text(di);
//
//     }
// });
//
//
//
//
// //order Update Validation
// $('#mainB2').click(function () {
// //    check customer details
//     if (!$('#addr').val() == '' & !$('#tel').val() == '' & !$('#cref').val() == '') {
// //check order detaisl
//         if (!$('#oids').val() == '') {
//             var getOrderID = $('#oids').val();
//             var inputd = parseInt($('#inputC').val());
//             var blance = $('#balanceD').val();
//             var discount = $('#disc').val();
//             var fullTot = parseInt($('#totalP').text());
//             var rowc = $('#tab4 tbody tr').length;
//             if (rowc > 0) {
//                 if (fullTot <= inputd) {
// //               load modal and clear
//                     calsulateBalance();
//
//                     var conceptName = $('#sele').find(":selected").text();
//                     // deleteN, customerName, date, oid
//
//                     updateOrder(conceptName, "2015/10/10", getOrderID);
//
//                     fulltc();
//                     idgen();
//                 } else {
//                     $('#inputC').focus();
//                     alert('Inssuficent credit');
//
//                 }
//             } else {
//                 alert('Select Items');
//             }
//
//
//         } else {
//             alert('Id is missing');
// //                inform datee and oid not filled
//         }
//     } else {
//         alert('select customer');
//         //focus customer select
//         $('#sele').focus();
//     }
// });

// =======================================================================================================

// var oids = 1001;
// //var tempOrderArray = new Array();
//
//
//
// function addOrder() {
//     var orderID = $('#oids').val().trim();
//     var orderDate = "2015/10/20";
//     var customerName = $('#sele').find(":selected").text();
//     orderTableStallment();
//     var order = new Order(customerName, orderDate, orderID, orderDetails);
//     orderDb.push(order);
//     alert('Order Succsesfully Aded');
//     return true;
//
// }
// function orderTableStallment() {
//     var rowCount = $('#tab4 #tbo tr').length;
//     $('#tab4 #tbo tr').each(function () {
//         var orderID = $('#oids').val().trim();
//         var itemName = $(this).find(".iinn").text();
//         var itemPrice = $(this).find(".iipp").text();
//         var itemQun = $(this).find(".iiqq").text();
//         var itemTot = $(this).find(".tot").text();
//         var aaaa = new OrderDetails(orderID, itemName, itemPrice, itemQun, itemTot);
//         orderDetails.push(aaaa);
//     });
//
// }
//
//
// function deleteOrder(orderID) {
//     for (var i = 0; i < orderDb.length; i++) {
//         if (orderDb[i].getOrderId() == orderID) {
//             orderDb.splice(i, 1);
//             var res = deleteOrderDetails(orderID);
//             if (res) {
//                 return true;
//             } else {
//                 return false;
//             }
//
//         }
//     }
// }
//
//
// function searchOrder(orderID) {
//     for (var i = 0; i < orderDb.length; i++) {
//         if (orderDb[i].getOrderId() == orderID) {
//             var ccname = orderDb[i].getCustomerName;
//             var orderD = orderDb[i].getOrderDate();
//             var orderI = orderDb[i].getOrderId();
//             var detailA = orderDb[i].getOrderDetails();
//             var order = new Order(ccname, orderD, orderI, detailA);
//             return order;
//         } else {
//             for (var a in OrderDetails) {
//                 if (a.getOrderID() == orderID) {
//
//                 }
//             }
//
//         }
//     }
// }
//
//
// function updateOrder(customerName, date, oid) {
//     var res = deleteOrder(oid);
//     if (res) {
//         var orderID = $('#oids').val().trim();
//         var orderDate = "2015/10/20";
//         var customerName = $('#sele').find(":selected").text();
//         orderTableStallment();
//         var order = new Order(customerName, orderDate, orderID, orderDetails);
//         orderDb.push(order);
//         return true;
//
//     }
//     return false;
//
// }
//
//
// function getAllOrders() {
//     return orderDb;
// }
//
//
// //All Order Form functions On Going
// $('#sele').change(function () {
//     var conceptName = $('#sele').find(":selected").text();
//     var customerSo = serachCustomer(conceptName);
//     $('#addr').val("Galle");
//     $('#tel').val(customerSo.getCustomerTp());
//     $('#cref').val(customerSo.getCustomerSalary());
//
//
// });
//
// $('#sele').dblclick(function () {
//     $("#sele option").remove();
//     var cusD = getAllCustomers();
//     for (var i = 0; i < cusD.length; i++) {
//         $('#sele').append("<option>" + cusD[i].getCustomerName() + "</option>");
//     }
//
// });
//
// $('#itsl').dblclick(function () {
//     $("#itsl option").remove();
//     var allItemO = getAllItem();
//     for (var i = 0; i < allItemO.length; i++) {
//         $('#itsl').append("<option>" + allItemO[i].getItemName() + "</option>");
//     }
//
// });
//
// $('#itsl').change(function () {
//     var items = $('#itsl').find(':selected').text();
//     var itemOb = searchItem(items);
//     $('#pru').val(itemOb.getItemPrice());
//     $('#qun').val(itemOb.getItemQun());
//
// });
//
//
// $('#newCusB').click(function () {
//     $("#orderC").modal('toggle');
//     $("#orderC").modal('show');
// });
// $('#oqun').keydown(function (e) {
//     if (e.keyCode == 13) {
//         addOrd();
//         $('#itsl').focus();
//     }
// });
//
// $('#itsl').keydown(function (e) {
//     if (e.keyCode == 13) {
//         $('#oqun').focus();
//     }
//     if (e.keyCode == 43) {
//         $('#inputC').focus();
//     }
// });
//
// $('#itsl').keypress(function (e) {
//     if (e.keyCode == 43) {
//         $('#inputC').focus();
//     }
// });
//
//
//
// function addOrd() {
//     var orderID = $('#oids').val();
//     var itemName = $('#itsl').val().trim();
//     var itemPrice = $('#pru').val();
//     var itemQuntity =$('#oqun').val();
//     var available =$('#qun').val();
//     var total = itemPrice * itemQuntity;
//     if (!$('#pru').val() == '' & !$('#qun').val() == '' & !$('#oqun').val() == '') {
//         if (itemQuntity <= available) {
//             var rowc = $('#tab5 tbody tr').length;
//             if (rowc === 0) {
//                 lasttot = lasttot + total;
//                 $('#tab4').append('<tr><td class="iinn">' + itemName + '</td><td class="iipp">' + itemPrice + '</td><td class="iiqq">' + itemQuntity + '</td><td class="tot">' + total + '</td></tr>');
//                 genarateTotal();
//                 clearItem();
//             } else {
//                 $('#tab4 tr td:first-child').each(function () {
//                     var len = $(this).text();
//                     if (len == itemName) {
//                         alert("Item Duplicated");
//                         rer = true;
//                         return false;
//                     }
//                 });
//                 if (!rer) {
//                     lasttot = lasttot + total;
//                     $('#tab5').append('<tr><td class="iinn">' + itemName + '</td><td class="iipp">' + itemPrice + '</td><td class="iiqq">' + itemQuntity + '</td><td class="tot">' + total + '</td></tr>');
//                     genarateTotal();
//                     clearItem();
//                 } else {
//                     rer = false;
//                 }
//             }
//
//         } else {
//             alert("Not Much Available Contact the Supplier");
//         }
//
//     } else {
//         alert('Select A Item First');
//     }
// }
//
//
// function clearItem() {
//     $('#pru').val('');
//     $('#qun').val('');
//     $('#oqun').val('');
// }
// function fulltc() {//this is need to be analied again..
//     $('#addr').val('');
//     $('#tel').val('');
//     $('#cref').val('');
//     $('#pru').val('');
//     $('#qun').val('');
//     $('#oqun').val('');
//     $('#oids').val('');
//     $('#totalP').text("00.0");
//     $('#inputC').val('');
//     $('#balanceD').val('');
//     $('#disc').val('');
//     $('#tab4').find('tr:gt(0)').remove();
//     idgen();
//
// }
//
//
// //Order Search
// $('#oids').keypress(function (e) {
//     var a = e.keyCode;
//     if (a == 13) {
//         // alert('ok');
//         var tempOid = $('#oids').val().trim();
//         // var orderTemp = searchOrderDetails(tempOid);
//         var orderTemp = searchOrder(tempOid);
//         if (orderTemp != null) {
//             $('#sele').change().val(orderTemp.getCustomerName());
//             var detailsOb = orderTemp.getOrderDetails();
//             for (var i = 0; i < detailsOb.length; i++) {
//                 if (detailsOb[i].getOrderID() == tempOid) {
//                     $('#tab4').append('<tr><td>' + detailsOb[i].getItemName() + '</td><td>' + detailsOb[i].getItemPrice() + '</td><td>' + detailsOb[i].getItemQuntity() + '</td><td>' + detailsOb[i].getTotal() + '</td></tr>');
//                 }
//
//             }
//             genarateTotal();
//
//         } else {
//             alert("Sorry..! No Records Exits For That Order ID..!");
//         }
//
//
//
//     }
//
// });
//
//
// function genarateTotal() {
//     var realtot = 0;
//     $('#tab4 tr td:last-child').each(function () {
//         realtot = realtot + parseInt($(this).text());
//         displayTotal(realtot);
//     });
// }
//
// function displayTotal(a) {
//     $('#totalP').text(a);
// }
//
//
// $("#tab4").on("click", "tr", function () {
//     $('#tabI').modal('toggle');
//     $('#tabI').modal('show');
//     $(this).closest("tr").remove().delay(5000);
//     genarateTotal();
// });
//
//
//
// //order Validation
// $('#mainB').click(function () {
// //    check customer details
//     if (!$('#addr').val() == '' & !$('#tel').val() == '' & !$('#cref').val() == '') {
// //check order detaisl
//         if (!$('#oids').val() == '') {
//             var inputd = parseInt($('#inputC').val());
//             var blance = $('#balanceD').val();
//             var discount = $('#disc').val();
//             var fullTot = parseInt($('#totalP').text());
//             var rowc = $('#tab4 tbody tr').length;
//             if (rowc > 0) {
//                 if (fullTot <= inputd) {
// //               load modal and clear
//                     calsulateBalance();
//                     addOrder();
//
//                     fulltc();
//                     idgen();
//                 } else {
//                     $('#inputC').focus();
//                     alert('Inssuficent credit');
//
//                 }
//             } else {
//                 alert('Select Items');
//             }
//
//
//         } else {
//             alert('Id is missing');
// //                inform datee and oid not filled
//         }
//     } else {
//         alert('select customer');
//         //focus customer select
//         $('#sele').focus();
//     }
// });
//
//
// $('#sele').keypress(function (e) {
//     //  alert(e.keyCode);
//     if (e.keyCode == 43) {
//
//         $('#itsl').focus();
//     }
// });
// //calculate balance
// function calsulateBalance() {
//     var fullTot = parseInt($('#totalP').text());
//     var inputd = parseInt($('#inputC').val());
//     if (fullTot <= inputd) {
//         var bala = inputd - fullTot;
//         $('#balanceD').val(bala);
//
//     } else {
//         $('#inputC').focus();
//         alert('Inssuficent credit');
//
//     }
//
// }
// $('#inputC').keydown(function (e) {
//     if (e.keyCode == 13) {
//         calsulateBalance();
//     } else if (e.which == 39) {
//         $('#discc').focus();
//     }
//
// });
// $('window').ready(function () {
//     oids = oids + 1;
//     $('#oids').val(oids);
// });
// function idgen() {
//     oids = oids + 1;
//     $('#oids').val(oids);
// }
//
// //calculate discount
// $('#discc').keypress(function (e) {
//     if (e.keyCode == 13) {
//         var fullTot = parseInt($('#totalP').text());
//         var disc = parseInt($('#discc').val());
//         var di = fullTot - disc;
//         $('#totalP').text(di);
//
//     }
// });
//
//
//
//
// //order Update Validation
// $('#mainB2').click(function () {
// //    check customer details
//     if (!$('#addr').val() == '' & !$('#tel').val() == '' & !$('#cref').val() == '') {
// //check order detaisl
//         if (!$('#oids').val() == '') {
//             var getOrderID = $('#oids').val();
//             var inputd = parseInt($('#inputC').val());
//             var blance = $('#balanceD').val();
//             var discount = $('#disc').val();
//             var fullTot = parseInt($('#totalP').text());
//             var rowc = $('#tab4 tbody tr').length;
//             if (rowc > 0) {
//                 if (fullTot <= inputd) {
// //               load modal and clear
//                     calsulateBalance();
//
//                     var conceptName = $('#sele').find(":selected").text();
//                     // deleteN, customerName, date, oid
//
//                     updateOrder(conceptName, "2015/10/10", getOrderID);
//
//                     fulltc();
//                     idgen();
//                 } else {
//                     $('#inputC').focus();
//                     alert('Inssuficent credit');
//
//                 }
//             } else {
//                 alert('Select Items');
//             }
//
//
//         } else {
//             alert('Id is missing');
// //                inform datee and oid not filled
//         }
//     } else {
//         alert('select customer');
//         //focus customer select
//         $('#sele').focus();
//     }
// });

//Item Combo

$('#itsl').dblclick(function () {
    $("#itsl option").remove();
    var allItemO = getAllItem();
    for (var i = 0; i < allItemO.length; i++) {
        $('#itsl').append("<option>" + allItemO[i].getItemName() + "</option>");
    }

});

//Custoemer Combo

$('#sele').dblclick(function () {
    $("#sele option").remove();
    var cusD = getAllCustomers();
    for (var i = 0; i < cusD.length; i++) {
        $('#sele').append("<option>" + cusD[i].getCustomerName() + "</option>");
    }

});


//Filling After Chozen in Item
$('#itsl').change(function () {
    alert('Item Clicked')

    var items = $('#itsl').find(':selected').text();

    var itemOb = searchItem(items);
    // alert(itemOb)

    $('#pru').val(itemOb.getItemPrice());
    $('#qun').val(itemOb.getItemQun());
    // alert('After find Values in Item')

    // $('#pru').val("250");
    // $('#qun').val("25");
});

//Filling After Chozen in Customer

$('#sele').change(function () {
    alert('Customer Clicked')
    var conceptName = $('#sele').find(":selected").text();
    // var customerSo = serachCustomer(conceptName);

    // $('#addr').val("Galle");
    // $('#tel').val(customerSo.getCustomerTp());
    // $('#cref').val(customerSo.getCustomerSalary());

    $('#addr').val("Aluthgama");
    $('#tel').val("119");
    $('#cref').val("15000");

});

//Adding Order to Panel
function addOrd() {
    alert('addd order Clicked')

    var orderID = $('#oids').val();
    var itemName = $('#itsl').val().trim();
    var itemPrice = parseInt($('#pru').val());
    var itemQuntity = parseInt($('#oqun').val());
    var available = parseInt($('#qun').val());
    var total = itemPrice * itemQuntity;

    // $('#tab4').append('<tr><td>' + itemName + '</td><td>' + itemPrice + '</td><td>' + itemQuntity + '</td><td>' + total + '</td></tr>');

    var orderrow = "<tr>" +
        "<td>" + itemName + "</td>" +
        "<td>" + itemPrice + "</td>" +
        "<td>" + itemQuntity + "</td>" +
        "<td>" + total + "</td>" +
        "</tr>";

    $('#tab5').append(orderrow);

    // alert('After Append')
    genarateTotal();
    alert('After generatetotal metohd')

}


function genarateTotal() {
    var realtot = 0;
    $('#tab5 tbody tr td:last-child').each(function () {
        realtot = realtot + parseInt($(this).text());
        displayTotal(realtot);
    });
}

function displayTotal(a) {
    $('#totalP').text(a);
}

$('#mainB').click(function () {
    var totalvalue = $('#tab5 tbody tr td:last-child');
    alert("Submit Order Clicked")
    // var customercredit=
    //     inputC

});


function SUBMIT() {
    var totalvalue = $('#tab5 tbody tr td:last-child');
    alert("Submit Order Clicked")
    // var customercredit=
    //     inputC

}


//All ClearFields
function fulltc() {
    $('#addr').val('');
    $('#tel').val('');
    $('#cref').val('');
    $('#pru').val('');
    $('#qun').val('');
    $('#oqun').val('');
    $('#oids').val('');
    $('#totalP').text("00.0");
    $('#inputC').val('');
    // $('#balanceD').val('');
    // $('#disc').val('');
    // $('#tab4').find('tr:gt(0)').remove();
    // idgen();

}