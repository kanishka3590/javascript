let user = {
  name : "John",
  last_name : "smith",
  gender : "male",
  age : 29,
  email : "m.com",
  children : ['sam','fem','lem'], //can define array in object.object can hold anything
};
let userObj = user; //it is not cloning.it is only refering that object with new name.it will show same object.
console.log(user);
console.log(userObj);
userObj.name = "Will";
userObj.date = "22-2-2018";


//cloning a object
userObj = {}; //creating a new object here.
for(key in user){
  userObj[key] = user[key];  //now coping all data to userObj object.
}
console.log(user);
console.log(userObj);
userObj.address = "hyd";
