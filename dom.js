function hero() {
  return "HEro"
}
window.hero(); //normal call or with window
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(window.document); //both are same.contains html body.
var elem = document.createElement('section'); // creating element now have to append somewhere.

function create(){
//create element in document.
elem.innerHTML = "<h1>this is section </h1> "//innerHTML can write and fetch text.we use it for tags
var pelem = document.createElement('p'); //nested element to append.
pelem.innerText = "this is para text";
elem.appendChild(pelem);
document.body.appendChild(elem);
}

function replace(){
elem.innerHTML = "<h1>replace</h1> "
var pelem = document.createElement('p'); //nested element to append.
pelem.innerText = "this is replace text";
elem.appendChild(pelem);
document.body.appendChild(elem);
}
function remove(){
  elem.outerHTML = "";
}
