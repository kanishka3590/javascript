var user = {
  name : 'John',
  age : 26
}
try{
  console.log("Starting of try");
  console.log(user.address); //will not give error.it will show undefine value.
//  data(); // now it will give error.
if(user.address == undefine){
  //throw "Addres is not present in user object"; //throw can pass any value array,object,string,number.
  throw{
    response : false,
    message : "Addres is not present in user object",
    data : user
  }
}
}catch(error){
  console.log(error); //now error will contain whatever throw will pass.
}finally{
  console.log(user);
  user = null;

}
