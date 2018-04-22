var request = new XMLHttpRequest();
var url = 'https://jsonplaceholder.typicode.com/users';

  if("withCredentials" in request)
  {
   request.open('GET', url, true);
   request.withCredentials = "true";
   //request.onreadystatechange = handler', '*');
   request.setRequestHeader('Access-Control-Allow-Origin', '*');
   request.send();
  };



/*

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

var xhr = createCORSRequest('GET', 'https://jsonplaceholder.typicode.com/users');
if (!xhr) {
  throw new Error('CORS not supported');
}
xhr.send();*/