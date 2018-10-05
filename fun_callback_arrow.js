//arrow function
var showMsg = () => {}     //Same     //var showMsg = function (){}
var showMsg = (name) =>{
  console.log("Your name",name);
}
if(showMsg("John")) console.log("IS a Name");
else console.log("Not a Name");

//Call back,pass function body as an argument to another function.
let x = function(){
  console.log("Calling Inside From Function");
}
let y = (callback) => {
  console.log("Some Logic");
  callback();
}
y(x);

//call back and arrow functiona example.
let add = (a,b) => {
  return (a+b);
}
let sub = (a,b) => {
  return (a-b);
}
let mul = (a,b) => {
  return (a*b);
}
let div = (a,b) => {
  return (a/b);
}
let calC = function (num1, num2, callback){
  if(typeof callback === 'function')
      return callback(num1,num2);
  else
      return "Third Paramrter is not a function.Pass Function";
}
console.log(calC(100,200,add));
console.log(calC(200,500,"st")); //will give not a function.
