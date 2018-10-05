var user = {
  name : 'John',
  age : 26
}
try{
  console.log("Starting of try");
if(user.address == undefined){
  //three constructor are there
  throw new Error("Addres is not present in user object");
  // throw new SyntaxError("Addres is not present in user object");
  // throw new ReferenceError("Addres is not present in user object");
}
}catch(error){
  console.log(error);
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}finally{
  console.log(user);
  user = null;

}
