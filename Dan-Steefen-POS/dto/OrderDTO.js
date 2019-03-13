function Order(customerName, date, orderId, orderDetails) {
    var _customerName = customerName;
    var _date = date;
    var _oid = orderId;
    var _orderDetails = orderDetails;

    this.getCustomerName = function () {
        return _customerName;
    }
    this.getOrderDate = function () {
        return _date;
    }

    this.getOrderId = function () {
        return _oid;
    }
    this.getOrderDetails = function () {
        return _orderDetails;
    }

    this.setCustomerName = function (customerName) {
        _customerName = customerName;

    }
    this.setOrderDate = function (orderDate) {
        _date = orderDate;

    }
    this.setOrderId = function (orderID) {
        _oid = orderID;

    }
    this.setOrerDetails = function (orderDetails) {
        _orderDetails = orderDetails;
    }


}