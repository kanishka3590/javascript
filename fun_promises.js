//This is callback function drawback.inside callback, callback Again.it will take time and may be give
//wrong output in the end if there the too many depandable task.

var promise = new Promise(function (resolve,reject) { //construcor call
    resolve(2);
})
//if first fullfil then move to 'then'
promise.then(first).then(second).then(third).then(function (response){
  console.log(response);
}).catch(function (err) {
  console.log(err);
})
function first(value) {
  return value*2;
}
function second(value) {
  return value*2;
}
function third(value) {
  return value*2;
}
