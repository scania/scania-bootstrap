// This function adds a script element with chosen src, to the page head section
var importScript = function(src, id) {
    var head = document.getElementsByTagName("head")[0],
        script = document.createElement("script");

    script.setAttribute("src", src);
    if(id) {
    	script.setAttribute("id", id);
    }
    head.appendChild(script);
}

// Adding bootstrap framework
importScript("https://static.scania.com/vendors/frameworks/bootstrap/3.2.0/js/bootstrap.min.js", "bootstrap");

// Adding our bootstrap addons that are not a standalone component
importScript("https://static.scania.com/development/global/js/bootstrap/scania-bootstrap-addons.js");

// Triggers bootstrapReady when bootstrap framework has been loaded
$("#bootstrap").on("load", function() {
	$(document).trigger("bootstrapReady");
})