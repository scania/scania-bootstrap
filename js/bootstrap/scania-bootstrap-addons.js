/*!
 * Javascript Add Ons to Scania Bootstrap
 */
function setMaximizeCookie(i, e, a) {
    if (a) {
        var o = new Date;
        o.setTime(o.getTime() + 1e3 * 60 * 60 * 24 * a);
        var t = "; expires=" + o.toGMTString()
    } else var t = "";
    document.cookie = i + "=" + e + t + "; path=/"
}

function getMaximizeCookie(i) {
    for (var e = i + "=", a = document.cookie.split(";"), o = 0; o < a.length; o++) {
        for (var t = a[o];
            " " == t.charAt(0);) t = t.substring(1, t.length);
        if (0 == t.indexOf(e)) return t.substring(e.length, t.length)
    }
    return null
}

function chartResize() {
    if(!!$.prototype.highcharts) {
        $(".highcharts-container").parent().each(function() {
            var chart = $(this).highcharts(); // target the chart itself
            chart.reflow() // reflow that chart
        });
    }
}

function init() {
    var cookie_scaniaBootstrap_maximize = getMaximizeCookie("scaniaBootstrap_maximize");
    if(cookie_scaniaBootstrap_maximize === "maximized"){
        $("body").addClass("maximized");
        $("#maximize-icon").toggleClass("icon-fullscreen icon-resize-small");
        chartResize();
    }
    $("#maximize-button").click(function() {
        $(this).children("#maximize-icon").toggleClass("icon-fullscreen icon-resize-small")
        $("body").toggleClass("maximized");

        chartResize();

        $("body").hasClass("maximized") ? setMaximizeCookie("scaniaBootstrap_maximize", "maximized", 30) : setMaximizeCookie("scaniaBootstrap_maximize", "minimized", 30)
    });
}

$(function() {
    init();
})