const name="kanishka";
const pass="kanishka";
const role1="admin";
const role2="employee";
var a,e;
var n=prompt("Enter Your Name");
var p;
if(n)
{
  if(n==name)
  {
    p=prompt("Enter Your Password");
      if(p == pass){
        alert("Login Successfull");
        var role=prompt("Enter your role administrator or Employee");
        if(role==role1){
            alert("You are Login with administrator");
          }
        else if (role==role2){
            alert("You are Login with Employee");
          }
        else
            alert("You are not a admin or emplyee,try again");
      }
      else
        alert("You Entered wrong Password,Try again");
  }
  else
    alert("User Not present");
}
else {
  alert("Invalid Name");
}
