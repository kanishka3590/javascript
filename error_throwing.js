var user = {
  name : 'John',
  age : 26
}
function userCall() {


        try{
              console.log("Inner Try");
              if(user.address == undefined){
                throw new SyntaxError("Addres is not present in user object");
            }
        }catch(error){
          if(error.name == "Error"){
            console.log(error);
            console.log(error.name);
            console.log(error.message);
            console.log(error.stack);
        }
        else {
          throw error;
        }
        }finally{
          console.log(user);

        }
}
try{
  console.log("OuterTry");
  userCall();
}catch(e){
  console.log("OuterCatch");
  //logic to resolve inner catch throw
  console.log(e);
}
