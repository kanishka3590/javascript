let hobby = "Singing";
function showName(firstName,lastName){
  let nameIntro = "Your Name is ";
  function fullName() { //closet.inner propert.outer property.global property.
    return nameIntro+firstName+" "+lastName+" Your Hobby is "+hobby;

  }
  return fullName(); //calling inner function.
}
var data = showName("Kanishka","Bhardwaj");
console.log(data);
