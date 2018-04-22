
var btn=document.getElementById("btn");



btn.addEventListener("click", function(){
	var ourRequest1 = new XMLHttpRequest();
var ourRequest2 = new XMLHttpRequest();
ourRequest1.open('GET', 'https://jsonplaceholder.typicode.com/users');
ourRequest2.open('GET', 'https://jsonplaceholder.typicode.com/posts');
ourRequest1.onload= function(){
	var users = JSON.parse(ourRequest1.responseText);
	
	console.log(users[3]);
	
};
ourRequest1.send();
ourRequest2.onload=function(){
	var posts= JSON.parse(ourRequest2.responseText);
	console.log(posts[3]);
};

ourRequest2.send();

	
});

