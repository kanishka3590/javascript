var input = document.createElement('input');
input.setAttribute('name','email');
input.setAttribute('id','email');
input.setAttribute('type','text');
var button = document.createElement('button');
button.innerText = "change Case"
button.setAttribute('onclick','changeCase()');
button.setAttribute('type','button');
document.body.appendChild(input);
document.body.appendChild(button);


function changeCase(){
  var email = document.getElementsByName('email')[0].value;
  console.log(email);
  email = email.toUpperCase();
  document.getElementsByName('email')[0].value = email;
}
