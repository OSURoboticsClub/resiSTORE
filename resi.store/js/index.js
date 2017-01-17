
function boolBanner() 
{  
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        //if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           var luxbool = xhttp.responseText;

           if (luxbool == true) {
              document.getElementById("temp").innerText = "Open"; 
              document.getElementById("temp").className = "label label-info";
           }
           if (luxbool == false) {
              document.getElementById("temp").innerText = "Closed"; 
              document.getElementById("temp").className = "label label-warning";
           }
    }; //resi.store/web_scripts/
    xhttp.open("GET", "lux.bool", true);
    xhttp.send();
}
function setUpTimer () {
    window.setInterval(boolBanner,120000);
}
document.addEventListener('DOMContentLoaded', boolBanner);
