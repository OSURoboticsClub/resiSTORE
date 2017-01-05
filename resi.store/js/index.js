
var xhttp = new XMLHttpRequest();
xhttp.onload = function() {
    //if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       var luxbool = xhttp.responseText;
       console.log(luxbool);
    //}
};
xhttp.open("GET", "lux.bool", true);
xhttp.send();
