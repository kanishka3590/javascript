// function showMessage () {
//   console.log("First Function");  //log is a function.invoking a function(function call)
// }
// showMessage();
var John = {
  name : 'john',
  lastname : 'smith',
  age : function calculateAge(yearOfBirth) // we can define,declare a function inside object
  {
    var age = 2018-yearOfBirth;
    return age;
  }
}
console.log(John);
console.log(John.age(1960));
John.retirement = function yearUntilRetirement(name,year)
{
  var userAge = John.age(year);
  retirement = 60-userAge;
  if(retirement>=0)
    console.log("Retirement is in "+retirement);
  else {
    console.log("You are retired");
  }
}
console.log(John.retirement());
yearUntilRetirement('rohn',2000);
yearUntilRetirement('ram',1990);
// function calculateAge(yearOfBirth)
// {
//   var age = 2018-yearOfBirth;
//   return age;
// }
//var userAge=calculateAge(prompt("Enter Your Age");
//console.log(userAge);
