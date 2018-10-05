let names =['kan','kani','kanishka','bhardwaj'];
let kan=['kan',24,'bha',9000,true,names]; // defining kan element information// can define a array in array.
console.log(names);
console.log(typeof names); //it will be obejct type
console.log(kan);  //it will show all data related to kan
console.log(kan[3]); //it will show third element of kan array
for (let index=0;index<kan.length;index++)
{
  console.log("info : "+kan[index]);
  for (let nIndex=0 ; nIndex<kan[index].length ; nIndex++)//printing array in array.if there will be any array in a variable then will show.
  {
    console.log(kan[index][nIndex]);
  }
}

names=['John','Sam','Ram','Rohn'];
john=['john','smith',25,true,9000];
rohn=[john,names];
console.log(john);
john.push('Blue'); //it will add it in end.append.
john.unshift('Mr. ');//it will add it in starting
john.pop(); //it will remove from Second
john.shift(); //it will remove from starting

john.splice(1,0,'Will'); //splice will add in between.first parameter from where you want to start.2nd para for how many elemnents you want to delete
var newJohn=john.slice(2,6); //slice will create a new array from that array.
console.log(newJohn);
console.log(john);
console.log(john.indexOf('smith')); //it will search smith present or not.i present then 1 if not present then -1

let arr=new Array('john','will',50,50000); //another way to declare array
console.log(arr);
console.log(arr[2]);
