var i,flag;
var number= prompt("Enter a number");
if(number)
{
  if(number%2)
    alert("Odd Value");
  else
    alert("Even Value");
}
else {
  alert("Invalid Value");
}
for(i=2;i<number;i++)
{
  if(number%i==0)
  {  flag=1;
    alert("Number is not Prime");
    exit;
  }
  else
  {    flag=0;
  }
}
if(number==2 || flag==0)
  alert("Number is Prime");
