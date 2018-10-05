function Animal(name,type,diet,characterstics){
  this.name = name;
  this.type = type;
  this.diet = diet;
  this.characterstics = characterstics;
}
function User(name,pass,email,phone,add){
  this.name = name;
  this.pass = pass;
  this.email = email;
  this.phone = phone;
  this.add = add;

}
function Table(name,type,use){
  this.name = name;
  this.type = type;
  this.use = use;

}
function Chair(name,type,use){
  this.name = name;
  this.type = type;
  this.use = use;
}
for(index = 0 ; index < 5 ;index++)
{
var animal = new Animal(prompt("Enter animal Name : "),
                        prompt("Enter animal Type : "),
                        prompt("Enter animal Diet : "),
                        prompt("Enter animal Characterstics : "));
console.log(animal);
}
var user = new User('kanishka','kanishka','ka','098765','am');
console.log(user);
var user1 = new User('kani','kani','ka@gmail','098765','kan');
console.log(user1);

var table = new Table('table','wheel','roll');
console.log(table);
var table1 = new Table('table2','center','decorate');
console.log(table1);

var chair = new Chair('chair','lay','relax');
console.log(chair);
var chair1 = new Chair('chair2','stable','sit');
console.log(chair1);
