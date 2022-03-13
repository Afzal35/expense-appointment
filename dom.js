//console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.all);
console.log(document.all[10] );
//cvdocument.all[10].textContent ="Hello";
console.log(document.forms);
console.log(document.links); 
var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
//headerTitle.innerHTML= '<h3> Hello</h3>'
headerTitle.style.borderBottom= 'solid 3px #000';
//getElements by class name
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[0]);
console.log(items[1]);
console.log(items[2]);
console.log(items[3]);
//items[2].textContent = 'Hello 2';
items[0].style.fontWeight= 'bold';
items[1].style.fontWeight= 'bold';
items[2].style.fontWeight= 'bold';
items[3].style.fontWeight= 'bold';
items[2].style.backgroundColor = 'green';
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';
for(var i =0; i< li.length; i++)
{
    li[i].style.backgroundColor = 'sf4f4f4';
}
var header = document.querySelector('#main- header');
header.style.borderBottom = 'solid 4px #ccc';
var input = document.querySelector('input');
input.value= 'Hello World'
var submit = document.querySelector('input[type = "submit"]');
submit.value= 'Send';
var item = document.querySelector('.list-group-item');
item.style.color = 'red';
var lastitem = document.querySelector('.list-group-item:last-child');
lastitem.style.color = 'blue';
var seconditem = document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.color = 'coral';

var title = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'HEllo';
var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0; i<odd.length; i++)
{
    odd[i].style.backgroundColor='#f4f4f4';
    even[i].style.backgroundColor= '#ccc';
}