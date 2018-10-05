var name=prompt("Enter your name :");
(name.length<15) ? alert("Your name is : "+name) : alert("Name length should be under 15 character")
var mail=prompt("Enter your mail id :");
(mail.length<25 && mail.length>5) ? alert("Your email id is : "+mail) : alert("Mail id should be under 5-25 character")
var age=parseInt(prompt("Enter your age :"));
(isNaN(age)) ? alert("Enter correct age") :(age>18) ? alert("You are eligible") : alert("Not eligible")
var pass=prompt("Enter your password :");
