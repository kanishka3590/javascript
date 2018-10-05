var num1,num2;
for (index = 0 ; index < 50 ; index++){
          var opt = prompt(`Enter You Choice :
          1. Addition
          2. Subtraction
          3. Multiplication
          4. Division
          5. Modulus
          6. X2
          7. Exit`);
          // num1 = Number(prompt("Enter First Number"));
          // num2 = Number(prompt("Enter Second Number"));
           switch(opt)
          {
            case '1': case 'Addition': case 'addition' : case 'add' : case 'Add':
                      input();
                      var add = addition(num1,num2);
                      alert("Addition : "+add);
                      break;
            case '2': case 'Subtraction': case 'subtraction' : case 'sub': case 'Sub':
                      input();
                      var sub = subtraction(num1,num2);
                      alert("Subtraction : "+sub);
                      break;
            case '3': case 'Multiplication': case 'multiplication': case 'mul': case 'Mul':
                      input();
                      var mul = multiplication(num1,num2);
                      alert("Multiplication : "+mul);
                      break;
            case '4': case 'Division': case 'division': case 'div': case 'Div':
                      input();
                      var div = division(num1,num2);
                      alert("Division : "+div);
                      break;
            case '5' : case 'Modulus': case 'modulus': case 'mod': case 'Mod':
                      input();
                      var mod = modulus(num1,num2);
                      alert("Modulus : "+mod);
                      break;
            case '6' : case 'Square': case 'square': case 'x2': case 'X2':
                      var num = prompt("Enter a Number :");
                      var sqr = square(num);
                      alert("Square : "+sqr);
                      break;
            case '7' : case 'exit': case 'Exit':
                      exit;
            default:
                    alert("You Have Entered Wrong Choice");
          }
}
function input(){
  num1 = Number(prompt("Enter First Number"));
  num2 = Number(prompt("Enter Second Number"));
}
function addition(num1,num2){
  var sum = num1+num2;
  return sum;
}
function subtraction(num1,num2){
  var sub;
  if(num1>num2)
      sub = num1-num2;
  else
      sub = num2-num1;
  return sub;
}
function multiplication(num1,num2){
  var mul = num1*num2;
  return mul;
}
function division(num1,num2){
  var div = num1/num2;
  return div;
}
function modulus(num1,num2){
  var mod = num1%num2;
  return mod;
}
function square(num){
  var sqr = num*num;
  return sqr;
}
