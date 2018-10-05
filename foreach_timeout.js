var arr = ['a',1,'b','12'];
function showMsg(name,age){
  console.log("Hi Timeout "+name+age);
}
setTimeout(showMsg,1000,"John",23); //syntex for setTimeout only.
let timerId = setTimeout(showMsg,1000,"John",23);
clearTimeout(timerId); // to kill the timeout
setInterval(showMsg,20) // will execute multiple time.


arr.forEach(function(elem,index){ //callback.directly inside function.
  console.log(index+"  Index "+elem); //in forEach function, first is for element next is for index.
})
var user = {
  name : "kanishka",
  lastName : "Bhardwaj",
  age : 11
}
Object.keys(user).forEach((key)=>{  //accessing key.
  console.log(key + " : "+user[key]);
})
