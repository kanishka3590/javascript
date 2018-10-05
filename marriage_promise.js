let getAJob = function(){
  return new Promise(function (resolve,reject) {
      let workHard = true;
      if(workHard)
        resolve(true);
      else {
        reject(false);
      }
  })
}


let getMarried = function (resp) {
  console.log(resp);
  return new Promise(function (resolve,reject) {
    if(resp){
      resolve("New Job");
      console.log("New Job and getting married");
    }
  else {
      reject("reject");
      console.log("No Job , no marriage");
  }
})
};
getAJob().then(function(result){
  return getMarried(result);
}).catch(function (err) {
  console.log("Rejection of marriage "+ err);
})
