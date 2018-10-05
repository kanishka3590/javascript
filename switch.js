var num1 = +prompt("Enter First Number"); //converting into number
var num2 = +prompt("Enter Second Number"); //converting into number
var operation = prompt(`Enter a operation :
+ for Addition
- for Substraction
* for Multiplication
/ for Division`); //converting into number

switch(operation)
{
  case '+': case 'addition': case 'add': case 'Add' : //now it will perform for all these cases
    alert("Addition : "+(num1+num2));
    break;
  case '-':
    alert("Subtraction : "+(num1-num2));
    break;
  case '*':
    alert("Multiplication : "+num1*num2);
    break;
  case '/':
    alert("Division : "+num1/num2);
    break;
  default:
    alert("Operation Can't be performed");
}
