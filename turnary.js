//let allowed;
var age=prompt("enter your age");
/*if(age>18)
{
  allowed = true;
}
else {
  allowed = false;
}
*/
//let allowed = (age>18) ? true : false   //its for if-else
let allowed = (age<3) ? "Too small to use" :
              (age<18) ? "Welcome to teenage facebook" :
              (age>=18) ? "Welcome Adult facebook" : "Not eligible" //if-else-if

console.log(allowed);
console.log(allowed.length);  // will count the length including spaces
