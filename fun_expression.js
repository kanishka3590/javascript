
var addition = function add(num1,num2){ // function expression.addition variable will contain reference of function add.
  return num1+num2;
  //console.log(add(344,500));
}
var sum = addition(500,500);  //have to call with reference variable.
console.log(addition); //will contain whole body of function.
console.log(sum);
var subtraction = function sub() //label fun exp.(with function name)
{
  return 100-90;
}
var operation = { //object contains the body of function.
  add : addition,
  sub : subtraction
};
console.log(operation);
console.log(operation.add()); //calling function with key name.

var sub = subtraction();
console.log(subtraction);
console.log(sub);
var multiplication = function () //ananymous fun exp.(without function name)
{
return 20*30;
}
var mul = multiplication();
console.log(mul);
