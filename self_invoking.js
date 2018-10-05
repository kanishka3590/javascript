(function getMsg(){
    console.log("getMsg Function Called");
})(); // self_invoking function.

var num = prompt("Enter a number");
(function recursion(number){
      if(number>0){
         number=number * recursion(number-1);
      }
      console.log(number);
})(num);
//console.log(num);
recursion(num);
