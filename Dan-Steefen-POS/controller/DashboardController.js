$(document).ready(function () {

    $("div#customer").hide();
    $("div#Item").hide();
    $("div#od").hide();
    $("div#emp").hide();
    $("div#dashboard").hide();

    $("li#dash").click(function () {
        $("div#dashboard").show();
        $("div#Item").hide();
        $("div#customer").hide();
        $("div#od").hide();
        $("div#emp").hide();
    });

    $("li#customers").click(function () {
        $("div#customer").show();
        $("div#dashboard").hide();
        $("div#Item").hide();
        $("div#od").hide();
        $("div#emp").hide();
    });

    $("li#items").click(function () {
        $("div#Item").show();
        $("div#dashboard").hide();
        $("div#customer").hide();
        $("div#od").hide();
        $("div#emp").hide();
    });

    $("li#orders").click(function () {
        $("div#od").show();
        $("div#dashboard").hide();
        $("div#Item").hide();
        $("div#customer").hide();
        $("div#empl").hide();
    });

    $("li#employees").click(function () {
        $("div#emp").show();
        $("div#dashboard").hide();
        $("div#Item").hide();
        $("div#customer").hide();
        $("div#od").hide();
    });

    $("a#c").click(function () {
        $("div#employeeDiv").hide();
        $("div#indexDiv").hide();
        $("div#itemDiv").hide();
        $("div#customerDiv").show();
        $("div#orderDiv").hide();
    });

});



