# jsoncors
The html file is supposed to get 2 JSON's from 2 websites. 
The main.js is trying to do that by a simple XMLHttpRequest, but it currently fails, because the Access-Control-Allow-Origin header value is set to null.
The main2.js is an attempt to use CORS and change the Access-Control-Allow-Origin header in the request from null to '*'- also fails, but I have no idea why, could be a browser issue maybe?
