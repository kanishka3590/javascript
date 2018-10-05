//type conversion, converting into string
let value=true; //value=5,value=null, value=undefine everything will convert in string
console.log(value);
console.log(typeof value);
value=String(value);
console.log(value);
console.log(typeof value);

//converting into number
value=true;
console.log(value);
console.log(typeof value);
value=Number(value);
console.log(value);
console.log(typeof value);
value="-123";
//value='"123"'when give multiline string then it will give NAN
//value="" or value = null empty value will give 0
//value="123ma" non convertable so give NAN
//value= undefine this will give NAN
console.log(value);
console.log(typeof value);
value=Number(value); //converting into number
console.log(value);
console.log(typeof value);

//converting into boolean(apart from falty value everything will be true)(faulty value=null,undefine,0)
value=null;
//value= "12ab" will be true
//value=" " will be true
//value= "abc" will be true
console.log(value);
console.log(typeof value);
value=Boolean(value);
console.log(value);
console.log(typeof value);


//shortcut to convert into number
let num1=prompt("enter a value");
let num2=prompt("enter a value");
console.log(+num1);// + operator before variable will convert into number
console.log(typeof +num1);
console.log(Number(num1));
