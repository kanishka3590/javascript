//This is callback function drawback.inside callback, callback Again.it will take time and may be give
//wrong output in the end if there the too many depandable task.

first(10,function (firstResult,error) {
  if(!error){
    console.log("First value "+firstResult);
    second(firstResult,function (secondResult,error) {
      if(!error){
        console.log("Second value "+secondResult);
        third(secondResult,function (thirdResult,error) {
          if(!error){
            console.log("Third value "+thirdResult);
          }

        });
      }

    });
  }

});

function first(value,callback) {
  callback(value*2,false);
}
function second(value,callback) {
    callback(value*2,false);
}
function third(value,callback) {
    callback(value*2,false);
}
