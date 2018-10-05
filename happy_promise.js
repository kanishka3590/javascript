const isFatherHappy = true;
//resolve and reject comes from default value.
const willGetMobile = new Promise(function (resolve,reject) {
  if(isFatherHappy){
    const phone = {
      name : "one+ 6",
      brand : "one+",
      color : "black",
    }
    resolve(phone); //phone is object here.we can pass only one value here.if you want to pass more than one then pass by
    //array or object,but will be one parameter.
  }
  else{
    const reason = 'Father is not Happy';
    reject(reason);
  }
})
const showOff = function (phone) {
  const msg = `Hey Friends I got new ${phone.name}
                the color is ${phone.color}
                the brand is ${phone.brand}`
  return Promise.resolve(msg);
}
// if we give false on top isFatherHappy.then willGetMobile will return reject so it will not move to then.
// (showOff) will not call.directly move to catch.
// 'then' can contain anything.function,function body,callback.
const askFather = function () {
  willGetMobile.then(showOff).then(message=>console.log(message)).catch((error)=>{
    console.log(error);
  }).finally(()=>{
    console.log("Execute anyway");
  })
}
askFather();
