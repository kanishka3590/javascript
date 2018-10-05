var elem = document.createElement("section");
elem.setAttribute('class','sec'); //set the attributes to section.class,id.we can add name any attribute.
elem.setAttribute('id','sec');

elem.innerHTML = "<h1 ='head'>This IS section</h1>"
elem.innerHTML = elem.innerHTML+"<h1>This IS section</h1>" //appending.if we normally give then it will replace previous one.
elem.innerHTML = "<h1 class='sec'>This IS section</h1>"+elem.innerHTML //prepending

var pelem = document.createElement("p");
pelem.innerText = "<h1>This IS para</h1>"
elem.appendChild(pelem);
document.body.appendChild(elem);
//querySelector will fetch section.
var section = document.querySelector('section'); //querySelector works top most tag.
console.log(section);
var h1 = document.querySelector('#sec'); //here all css combination can apply.
console.log(h1);


var head = document.getElementById('head');
console.log(head);
var cl = document.getElementsByClassName('sec');
console.log(cl);
console.log(cl[0]);
console.log(cl[1].style.color = 'red');
document.getElementsByClassName('sec')[1].style.color = 'red';
