var toggle = false;
var circle = $("#circle");

$("#toggle").click(function () {

    $("h1").toggleClass("color-white");
    $("body").toggleClass("bck-color-black");

    if (!toggle) {
        circle.css("margin-left", "100px");
        toggle = true;
    } else {
        circle.css("margin-left", "1px");
        toggled = false;
    }
})