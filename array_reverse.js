let arr = [];
var num = prompt("How Many Elements You Want To Add In Array");
for(index = 0 ; index < num ; index++){
  arr[index] = prompt("Enter Number");
}
for(index = arr.length-1 ; index>=0 ; index--){
  console.log(arr[index]);
}
