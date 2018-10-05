let user = {
  name : "John",
  last_name : "smith",
  gender : "male",
  age : 29,
  email : "m.com",
  children : ['sam','fem','lem'], //can define array in object.object can hold anything
};
console.log(user);
console.log(user['name']); //one way to access value
console.log(user['age']);
console.log(user.email); // another way to access value

//another way to declare object
let obj = new Object({age:20});
console.log(obj);
obj['age1']=50;  //one way to include values
obj.age1=80;    //if we give same key again it will replace previous value.will not create new.
obj.age2=30;    //one way to include values

var flag = 'name' in user;  //to search a perticular key in object.
console.log(flag);

for(key in user)   // to iterate object,use for in
{
  console.log(key);       //it will show all keys
  console.log(user[key]); //it will show all values
}
var objLn=Object.keys(user).length;   //now we can find length of object by this
console.log(objLn);

for(var i=0; i<Object.keys(user).length ;i++){ // by for loop finding all keys and values
  var keys = Object.keys(user);
  console.log(user[keys[i]]);
}
