let getDist = function(){
  return new Promise(function (resolve,reject) {
      let isStudy = true;
      if(isStudy)
        resolve(true);
      else {
        reject(false);
      }
  })
}


let promiseToGiveBike = function (resp) {
  console.log(resp);
  return new Promise(function (resolve,reject) {
  //logic to  get distinction
  // let isDist = true;
  if(resp){
      resolve("New Bike");
      console.log("New Bike");
    }
  else {
      reject("reject");
      console.log("No bike");
  }
});
}
//if resolve then move to 'then' if reject then move to 'catch'.
getDist().then(function (result){
  return promiseToGiveBike(result);
//  console.log("You got "+response);
}).catch(function (err) {
  console.log("Rejectio of bike "+ err);
})
