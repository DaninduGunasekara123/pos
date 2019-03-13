var boolcus = false;

function addCustomer(customerName, customerAge, customerTp, customerSalary) {
    var customerObjrct = new Customer(customerName, customerAge, customerTp, customerSalary);
    customer.push(customerObjrct);
}

function serachCustomer(customerName) {
    for (var i = 0; i < customer.length; i++) {
        if (customer[i].getCustomerName() == customerName) {
            var cusname = customer[i].getCustomerName();
            var cusage = customer[i].getCustomerAge();
            var custp = customer[i].getCustomerTp();
            var cussal = customer[i].getCustomerSalary();
            var cusTemp = new Customer(cusname, cusage, custp, cussal);
            return cusTemp;
        }
    }
}

function deleteCustomer(customerName) {
    for (var i = 0; i < customer.length; i++) {
        if (customer[i].getCustomerName() == customerName) {
            customer.splice(i, 1);
            return true;
        }
    }
}


function updateCustomer(deleteN, customerName, customerAge, customerTp, customerSalary) {
    for (var i = 0; i < customer.length; i++) {
        if (customer[i].getCustomerName() == deleteN) {
            customer.splice(i, 1);
            addCustomer(customerName, customerAge, customerTp, customerSalary);

        }
    }
}

function getAllCustomers() {
    return customer;
}


//All Customer Fuctions
function cusSearching() {
    cusSection();
    // alert($('#cse').val().trim());
    if (serachCustomer($('#searchtxt').val().trim())) {

        var temV = serachCustomer($('#searchtxt').val().trim());
        var cusname = temV.getCustomerName();
        var cusage = temV.getCustomerAge();
        var custp = temV.getCustomerTp();
        var cussal = temV.getCustomerSalary();
        //showwing in a panel
        $('#cname1').text(cusname);
        $('#cage1').text(cusage);
        $('#cutp1').text(custp);
        $('#csalary1').text(cussal);
        $('#cusSearR').fadeIn(1000);
        fadeA();
    } else {
        alert("No Customer Registerd For That Name..!");
        fadeO();
        $('#searchtxt').val('');
    }

}

function cusSection() {
    fadeO();
    $('#cusSearR').fadeOut(1000);
}

$('#crd').click(function () {
    deleteCustomer($('#searchtxt').val().trim());
    viewAllCus();
    cusSection();
});


function viewAllCus() {
    var temp = getAllCustomers();
    $('#tbo').empty();
    for (var i = 0; i < temp.length; i++) {
        var cusname = temp[i].getCustomerName();
        var cusage = temp[i].getCustomerAge();
        var custp = temp[i].getCustomerTp();
        var cussal = temp[i].getCustomerSalary();
        $('#tab1').append('<tr><td>' + cusname + '</td><td>' + cusage + '</td><td>' + custp + '</td><td>' + cussal + '</td></tr>');
    }
}

$('window').ready(function () {
    for (var i = 0; i < 3; i++) {
        //$('#tabl').append('<tr><td>Sanu Vithanage</td><td>20</td><td>0770516653</td><td>70 000</td></tr>');
        // $('#tab2').append('<tr><td>Lux Soap</td><td>50</td><td>200</td></tr>');
    }
});
//Customer validations
$('#delcus').click(function () {
    if (boolcus == true) {
        $('#cusDelete').modal('toggle');
        $('#cusDelete').modal('show');
    } else {
        $('#searchtxt').focus();
        alert('Select a Customer Before Delete..!');
    }
//$('#cusDel').modal('hide');// how to hide a model
});
$('#editcus').click(function () {
    if (boolcus == true) {
        loadUpdateCustomerDetails();

        $('#cusEdit').modal('toggle');
        $('#cusEdit').modal('show');
    } else {
        $('#searchtxt').focus();
        alert('Select a Customer Before Delete..!');
    }
});

function loadUpdateCustomerDetails() {
    $("#cname").text($('#cname1').text());
    $("#cage").text($('#cage1').text());
    $("#cutp").text($('#cutp1').text());
    $("#csalary").text($('#csalary1').text());
}

$('#cusUpdate').click(function () {
    if ($("#custName").val() == '') {
        $("#custName").focus();
    } else if ($("#custAge").val() == '') {
        $("#custAge").focus();
    } else if ($("#custTp").val() == '') {
        $("#custTp").focus();
    } else if ($("#custSalary").val() == '') {
        $("#custSalary").focus();
    } else {
        updateCustomer($('#cname1').text(), $("#custName").val().trim(), $("#custAge").val().trim(), $("#custTp").val().trim(), $("#custSalary").val().trim());
        viewAllCus();
        $("#custName").val('');
        $("#custAge").val('');
        $("#custTp").val('');
        $("#custSalary").val('');
        cusSection();
        $('#cusEdit').modal("hide");
    }
});

function customerAdd() {
    //alert("s");
    var cusName = $("#cusNameTxt").val();
    var cusAge = $("#cusAgeTxt").val();
    var cusTp = $("#cusTptxt").val();
    var cusSalary = $("#cusSalTxt").val();

    if (cusName == '') {
        $("#cusNameTxt").focus();
    } else if (cusAge == '') {
        $("#cusAgeTxt").focus();
    } else if (cusTp == '') {
        $("#cusTptxt").focus();
    } else if (cusSalary == '') {
        $("#cusSalTxt").focus();
    } else {
        addCustomer(cusName, cusAge, cusTp, cusSalary);
        viewAllCus();
        $('.modal').modal('hide');
        clearTextFiles();
    }

}


function clearTextFiles() {
    $("#cusNameTxt").val('');
    $("#cusAgeTxt").val('');
    $("#cusTptxt").val('');
    $("#cusSalTxt").val('');
}