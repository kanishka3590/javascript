alert("Type Conversion");
var no1=prompt("Enter First Number");
var no2=prompt("Enter Second Number");
console.log("First number You Entered is :",no1);
console.log("Second number You Entered is :",no2);
console.log("Type of number "+typeof no1);
alert("Converting Into Number");
console.log("First Number :",Number(no1));
console.log("Second Number :",Number(no2));
console.log("Type of number "+typeof Number(no1));
alert("Converting Into String");
console.log("First Number :",String(no1));
console.log("Second Number :",String(no2));
console.log("Type of number "+typeof String(no1));
alert("Converting Into Boolean");
console.log("First Number :",Boolean(no1));
console.log("Second Number :",Boolean(no2));
console.log("Type of number "+typeof Boolean(no1));
//or we can use a single alert to write all these
alert(`Boolean value : ${Boolean(no1)}
Number value : ${Number(no1)}
String value : ${String(no1)}`);
