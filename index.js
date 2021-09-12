// Write your code here!
var element = document.createElement('div');

document.getElementById('main').remove();

var newHeader = document.createElement('h1');
newHeader.setAttribute("id","victory");
newHeader.innerHTML = "Michael is the champion";

document.body.appendChild(newHeader);