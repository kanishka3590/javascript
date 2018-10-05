var div = document.createElement('div');
div.setAttribute('class','div');
document.body.appendChild(div);


var button1 = document.createElement('button');
button1.setAttribute('name','button1');
button1.setAttribute('onclick','openGate()');
button1.innerText = "Open Gate";
div.appendChild(button1);


var button2 = document.createElement('button');
button2.setAttribute('name','button2');
button2.setAttribute('onclick','closeGate()');
button2.innerText = "Close Gate";
div.appendChild(button2);



var section = document.createElement('section');
section.setAttribute('class','section');
document.body.appendChild(section);

var img1 = document.createElement('img');
img1.setAttribute('src','door1.jpg');
img1.setAttribute('class','img');
section.appendChild(img1);

var img2 = document.createElement('img');
img2.setAttribute('src','door2.jpg');
img2.setAttribute('class','img');
section.appendChild(img2);


function openGate() {
    img1.setAttribute('class','openGate1');
    img2.setAttribute('class','openGate2');
}
function closeGate(){
  img1.setAttribute('class','img');
  img2.setAttribute('class','img');

}
