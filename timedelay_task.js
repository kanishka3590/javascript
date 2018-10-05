var num1 = prompt("Enter First Value");
var num2 = prompt("Enter First Value");
var opr;
function add(num1,num2){
  opr = (+num1)+num2);
  console.log("Addition : "+opr);
}

function sub(num1,num2){
  opr = num1-num2;
  console.log("Subtraction : "+opr);
}

function mul(num1,num2){
  opr = num1*num2;
  console.log("Multiplication : "+opr);
}

function div(num1,num2){
  opr = num1/num2;
  console.log("Division : "+opr);
}
setTimeout(add,1000,num1,num2);
setTimeout(sub,2000,num1,num2);
setTimeout(mul,3000,num1,num2);
setTimeout(div,4000,num1,num2);
