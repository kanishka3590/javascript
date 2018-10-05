//var age = Number(prompt("Enter your age"));
var age = parseInt(prompt("Enter your age"));
//if(typeof user=='string')  check type of
if(Number.isNaN(age)) //checking its a number or not
  {
    alert ("Not a number");
  }
else
    {
      alert("Its a number");
    }
if(age)
{
  alert("Your Age is: "+age);
  if(age > 18){
    alert("Welcome to Facebook");
  }else if(age >= 15 && age <18){
    alert("Welcome to Tean Facebook");
  }else if(age < 15 && age >10){
    alert("Welcome to child Facebook");
  }
  else if(age == 18){
    alert("Almost there, come next year");
  }
  else{
    alert("Not eligible for Facebook");
  }
}else{
  alert("Invalid Age");
}
