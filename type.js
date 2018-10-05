"use strict" //it will allow to write in strict mode.no loose type
var no=5;
console.log("The value",no);
console.log("The type",typeof no);//here typeof is operator
console.log("The type",typeof(no));//here typeof is function
var st="Five";
console.log("The value",st);
console.log("The type",typeof st);
console.log("The type",typeof(st));
console.log("value "+st+" fine");
console.log(1+2);
console.log(1+2+no+5);
var st1='six';
console.log("The type "+st1+typeof st1);
var st='"india is great"'//multiline string
console.log("The type "+st+typeof st);
var st=`india
is
great` //multistring allow us to write in paragraph,its not allowed in double nd single cotes
console.log("The type "+st+typeof st);
var st=`six
seven : ${4+4+5}
eight : ${no}
`; // it will solve the expression inside multiline string
console.log("The type "+st+typeof st);
console.log(Infinity); //it can be -Infinity
console.log(typeof Infinity);
console.log(120/0);
console.log("this is string"/5); //it will give NAN type
console.clear();
var flag="True";
console.log("flag is"+ flag+typeof flag);
flag=10<5;
console.log("flag is"+ flag+typeof flag);
var variable;//undefine(by default when declare a variable without assinging a value )
console.log(variable+typeof variable); //type is undefine
var variable = null; // empty value
console.log(variable+typeof variable);//type of null is object
