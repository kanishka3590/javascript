let count=0;
while(count<10)
{
  console.log(count);
  count++;
}
let count1=0;
//do while will execute at least one time even if the condition is not true.
do
{
  console.log("count1 value "+count1);
  count1++;
}while(count1>10)
//let count2;
console.log("Continue and Break example");
for(let count2=0;count2<=10;count2++)
{
  if(count2==3)
      continue; //continue will skip execution for that perticular condiion and then continue.
  if(count2==7)
      break; //it will break the loop and move you out from loop
  console.log(count2);
}
//console.log("new value of count2 "+count2); //it will give incremented value
console.log("Printing all Even values");
for(let count3=0;count3<=50;count3++)
{
  if(count3%2) //printing all even numbers.Continue will skip for that perticular condition
    continue;
 console.log(count3);
}
