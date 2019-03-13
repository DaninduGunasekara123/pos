function OrderDetails(orderId, itemName, itemPrice, itemQuntity, total) {
    var _orderId = orderId;
    var _itemName = itemName;
    var _itemPrice = itemPrice;
    var _itemQuntity = itemQuntity;
    var _total = total;

    this.getOrderID = function () {
        return _orderId;
    }
    this.getItemName = function () {
        return _itemName;
    }
    this.getItemPrice = function () {
        return _itemPrice;
    }
    this.getItemQuntity = function () {
        return _itemQuntity;
    }
    this.getTotal = function () {
        return _total;
    }

    this.setOrderID = function (oid) {
        _orderId = oid;
    }
    this.setItemName = function (itemName) {
        _itemName = itemName;
    }
    this.setItemPrice = function (itemPrice) {
        _itemPrice = itemPrice;
    }
    this.setItemQuntity = function (itemQun) {
        _itemQuntity = itemQun;
    }
    this.setTotal = function (total) {
        _total = total;
    }


}