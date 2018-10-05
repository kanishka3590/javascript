var ul = document.createElement('ul');
var sec = document.createElement('section');
var div = document.createElement('div');

var count = 1;
document.body.appendChild(sec);
document.body.appendChild(ul);
document.body.appendChild(div);

function addHeros(){
    var li = document.createElement('li');
    li.innerText = "Hero "+count;
    ul.appendChild(li);
    count++;
}
function removeHero(){
//  ul.lastChild.innerText = "";
  ul.lastChild.outerHTML =""; //will remove last child
}
function showDetail() {
  console.log(ul.firstChild);
  console.log(ul.lastChild);
  console.log(ul.previousSibling);
  console.log(ul.nextSibling);
  console.log(ul.parentNode);
  console.log(ul.childNodes);

}
