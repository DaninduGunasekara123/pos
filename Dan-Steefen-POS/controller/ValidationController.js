function remActive(s) {
    $('.adjl li').removeClass("active");
    $(s).addClass('active');
}

function removeContent() {
    $('.cc').css({display: "none"});
}

function lCus() {
    removeContent();
    remActive();
    $('#cusl2').addClass('active');
    localStorage.setItem("last", " Customer");
    $("#divMenuTitle>h2").html('<h2><span class="fa fa-users" style="padding-right:10px"></span>Customer</h2>');
    $('#Customer').css({display: "block"})
    $("#divMenuPath").html('<a href="#" onclick="lDas()"><span class="glyphicon glyphicon-home" style="margin-right:10px"></span>Dashboard <span class="glyphicon glyphicon-chevron-right" style="margin:0px 10px"></span></a>' + $(this).text().toString());
}

function lItem() {
    removeContent();
    remActive();
    $('#itel2').addClass('active');
    localStorage.setItem("last", " Items");
    $("#divMenuTitle>h2").html('<h2><span class="fa fa-cubes" style="padding-right:10px"></span>Items</h2>');
    $('#Item').css({display: "block"})
    $("#divMenuPath").html('<a href="#" onclick="lDas()"><span class="glyphicon glyphicon-home" style="margin-right:10px"></span>Dashboard <span class="glyphicon glyphicon-chevron-right" style="margin:0px 10px"></span></a>' + $(this).text().toString());
}

function lOrd() {
    removeContent();
    remActive();
    $('#ordl2').addClass('active');
    localStorage.setItem("last", " Orders");
    $("#divMenuTitle>h2").html('<h2><span class="fa fa-shopping-cart" style="padding-right:10px"></span>Orders</h2>');
    $('#Order').css({display: "block"})
    $("#divMenuPath").html('<a href="#" onclick="lDas()"><span class="glyphicon glyphicon-home" style="margin-right:10px"></span>Dashboard <span class="glyphicon glyphicon-chevron-right" style="margin:0px 10px"></span></a>' + $(this).text().toString());
}


function lDas() {
    removeContent();
    remActive();
    $('#dashl2').addClass('active');
    localStorage.setItem("last", " Dashbord");
    $("#divMenuTitle>h2").html('<h2><span class="fa fa-dashboard" style="padding-right:10px"></span>Dashboard</h2>');
    $('#dashbord').css({display: "block"})
    $("#divMenuPath").html('<a href="#" onclick="lDas()"><span class="glyphicon glyphicon-home" style="margin-right:10px"></span>Dashboard <span class="glyphicon glyphicon-chevron-right" style="margin:0px 10px"></span></a>' + $(this).text().toString());
}


//Common functions Ongoing
function fadeA() {
    boolcus = true;
}

function fadeO() {
    boolcus = false;
}

function orvt() {
    orv = true;
}

function orvF() {
    orf = false;
}


//select all if focs
//order text files
$('#addr,#tel,#cref,#pru,#qun,#oqun,#oids,#inputC,#balanceD,#disc').focus(function () {
    $(this).select();
});

$('#addr,#tel,#cref,#balanceD').focus(function () {
    $(this).prop('disabled', true);
});
//text only validation
$("#searchtxt,#searchtxtitem,#cusNameTxt,#itemNametxt,#custName").keydown(function (eventData) {
    if ((eventData.which >= 96 && eventData.which <= 105) ||
        (eventData.which >= 48 && eventData.which <= 57)) {
        eventData.preventDefault();
    }
});
//numbers only
$("#pru,#qun,#oqun,#inputC,#balanceD,#disc,#cusAgeTxt,#cusTptxt,#cusSalTxt,#discc,#itemPricetxt,#itemQtytxt,#customerAge,#custSalary").keydown(function (eventData) {
    //console.log(eventData.which);
    var accept = [8, 46, 33, 34, 35, 36, 37, 38, 39, 40];
    for (var index in accept) {
        if (accept[index] === eventData.which) {
            return;
        }
    }
    if (!((eventData.which >= 96 && eventData.which <= 105) ||
        (eventData.which >= 48 && eventData.which <= 57))) {
        eventData.preventDefault();
    }
});

$("#cusTptxt").keydown(function (eventData) {
    var accept = [8, 46, 33, 34, 35, 36, 37, 38, 39, 40];
    for (var index in accept) {
        if (accept[index] === eventData.which) {
            return;
        }
    }
    if ($("#cusTptxt").val().length <= 9) {
        //console.log(eventData.which);

        if (!((eventData.which >= 96 && eventData.which <= 105) ||
            (eventData.which >= 48 && eventData.which <= 57))) {
            eventData.preventDefault();
        }
    } else {
        eventData.preventDefault();
    }

});

$("#custTp").keydown(function (eventData) {
    var accept = [8, 46, 33, 34, 35, 36, 37, 38, 39, 40];
    for (var index in accept) {
        if (accept[index] === eventData.which) {
            return;
        }
    }
    if ($("#custTp").val().length <= 9) {
        //console.log(eventData.which);

        if (!((eventData.which >= 96 && eventData.which <= 105) ||
            (eventData.which >= 48 && eventData.which <= 57))) {
            eventData.preventDefault();
        }
    } else {
        eventData.preventDefault();
    }

});
