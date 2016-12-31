
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});

/*@param url {String}
@param method {String} HTTP verb ('GET', 'POST', 'DELETE', etc.)
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}

var xhr = createCORSRequest('GET', url);
if (!xhr) {
  throw new Error('CORS not supported');
}
function bannerChange()
    {
        $.get("http://osurobotics.club/web_scripts/lux.bool", function( my_var ) {
            // my_var contains whatever that request returned
        });
        
        if (my_var==true)
        {
            console.log("true");
        }
    }

    