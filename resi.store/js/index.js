
function boolBanner() 
{  
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        //if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           var luxbool = xhttp.responseText;

           if (luxbool == true) {
              document.getElementById("store-status").innerText = "Open"; 
              document.getElementById("store-status").className = "label label-info";
           }
           if (luxbool == false) {
              document.getElementById("store-status").innerText = "Closed"; 
              document.getElementById("store-status").className = "label label-warning";
           }
    }; //resi.store/web_scripts/
    xhttp.open("GET", "lux.bool", true);
    xhttp.send();
}
function setUpTimer () {
    window.setInterval(boolBanner,1000);
}
document.addEventListener('DOMContentLoaded', setUpTimer);
