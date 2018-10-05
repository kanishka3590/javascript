var a =5;//globle variable
function getData(){
  var a =10 ;
  console.log(a);//10 if globle variable not present
  if(true){
    var a=20;
    console.log(a);//20
  }
  console.log(a);//20 var has function level scope.
}
console.log("Globle variable for var "+a);
getData();
//redeclaring a variable within a same block is not possible for let.let has block level scope
let b=5;
function getData2(){
  let b =10 ;
  console.log(b);//10
  if(true){
    let b=20;
    console.log(b);//20
  }
  console.log(b);//10 let gives the block level scope
}
console.log("Globle variable for let"+b);
getData2();
