var str = prompt("Enter a String");
let str_arr = [];
let str_arr1 = [];
str_arr = str;
console.log("Entered String : "+str);
for (index=str_arr.length-1 ; index>=0 ;index-- ){
    str_arr1.push(str_arr[index]);

}
//str=str_arr1;
//str_arr1.join("");
console.log(str_arr1);
str=str_arr1;
console.log(str);
