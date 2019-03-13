function addItem(itemName, itemPrice, itemQun) {
    var items = new Item(itemName, itemPrice, itemQun);
    item.push(items);
    return true;
}

function deleteItem(itemName) {
    for (var i = 0; i < item.length; i++) {
        if (item[i].getItemName() == itemName) {
            item.splice(i, 1);
            return true;
        }
    }
}

function updateItem(deleteN, itemName, itemPrice, itemQun) {
    for (var i = 0; i < item.length; i++) {
        if (item[i].getItemName() == deleteN) {
            item.splice(i, 1);
            addItem(itemName, itemPrice, itemQun);
            return true;
        }
    }
}

function searchItem(itemName) {
    for (var i = 0; i < item.length; i++) {
        if (item[i].getItemName() == itemName) {
            var itemname = item[i].getItemName();
            var itemprice = item[i].getItemPrice();
            var itemqty = item[i].getItemQun();
            var itemTemo = new Item(itemname, itemprice, itemqty);
            return itemTemo;
        }
    }
}

function getAllItem() {
    return item;
}

//All Item Function On Going
function itemSearching() {
    iteSection();
    var itemNameC = $('#searchtxtitem').val().trim();
    if (searchItem(itemNameC)) {
        var tempItem = searchItem(itemNameC);
        var itemName = tempItem.getItemName();
        var itemPrice = tempItem.getItemPrice();
        var itemQty = tempItem.getItemQun();
        updateSearch(itemName, itemPrice, itemQty);
        $('#iteSearR').fadeIn(1000);
        fadeA();
    } else {
        alert("No item Registerd For That Name..!");
        fadeO();
    }

}

function iteSection() {
    fadeO();
    $('#iteSearR').fadeOut(1000);
}

function viewAllItems() {
    var itemTempO = getAllItem();
    $('#tbo2').empty();
    for (var i = 0; i < itemTempO.length; i++) {
        var itemName = itemTempO[i].getItemName();
        var itemPrice = itemTempO[i].getItemPrice();
        var itemQty = itemTempO[i].getItemQun();
        $('#tab2').append('<tr><td>' + itemName + '</td><td>' + itemPrice + '</td><td>' + itemQty + '</td></tr>');
    }
}

function updateSearch(name, price, qun) {
    $('#itemN').text(name);
    $('#itemPri').text(price)
    $('#itemQt').text(qun);
}

//all item validations
$('#deleteitem').click(function () {
    if (boolcus == true) {
        $('#itemDelete').modal('toggle');
        $('#itemDelete').modal('show');
    } else {
        $('#searchtxtitem').focus();
        alert('Select a Customer Before Delete..!');
    }
});
$('#edititem').click(function () {
    if (boolcus == true) {
        loadModalData();
        $('#itemEdit').modal('toggle');
        $('#itemEdit').modal('show');
    } else {
        $('#searchtxtitem').focus();
        alert('Select a Customer Before Delete..!');
    }
});

function loadModalData() {
    $("#itemNa").text($('#itemN').text());
    $("#itemPr").text($('#itemPri').text());
    $("#itemQty").text($('#itemQt').text());
}

$('#ird').click(function () {
    var itext = $('#searchtxtitem').val();
    deleteItem(itext);
    viewAllItems();
    iteSection();
});

//Item aading
function itemAdd() {
    var itemName = $("#itemNametxt").val();
    var itemPrice = $("#itemPricetxt").val();
    var itemQun = $("#itemQtytxt").val();

    if (itemName == '') {
        $("#itemNametxt").focus();
    } else if (itemPrice == '') {
        $("#itemPricetxt").focus();
    } else if (itemQun == '') {
        $("#itemQtytxt").focus();
    } else {
        addItem(itemName, itemPrice, itemQun);
        viewAllItems();
        $('#IModel').modal('hide');
    }
    clearItemTextFiles();
}

$('#updateitem').click(function () {
    if ($("#itemName").val() == '') {
        $("#itemName").focus();
    } else if ($("#itemPrice").val() == '') {
        $("#itemPrice").focus();
    } else if ($("#itemQun").val() == '') {
        $("#itemQun").focus();
    } else {
        updateItem($('#itemN').text(), $("#itemName").val().trim(), $("#itemPrice").val().trim(), $("#itemQun").val().trim());
        viewAllItems();
        $("#itemName").val('');
        $("#itemPrice").val('');
        $("#itemQun").val('');
        iteSection();
        $('#itemEdit').modal("hide");

    }
});

function clearItemTextFiles() {
    $("#itemNametxt").val('');
    $("#itemPricetxt").val('');
    $("#itemQtytxt").val('');
}
