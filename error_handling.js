try{
    console.log("Start of Program !!");
    abcd;
}catch(err){
  console.log("Error");
  //err is object which contain three keys.
  console.log(err.name);
  console.log(err.message);
  console.log(err.stack);

}finally{
  console.log("always execute");
}
console.log("End");
