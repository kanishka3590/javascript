//this is the blueprint.Now with the prototype,if we want to add some field in this blueprint,
//we can't directly add in this blueprint.with prototype we are not directly change in object motor,
//we change in prototype.

function Motor(name,type,engineCapacity,wheels,company) {
  this.name = name;
  this.type = type;
  this.engineCapacity = engineCapacity;
  this.wheels = wheels;
  this.company = company;
}
var motor =new Motor('KTM 390','Sports','390CC','No','KTM');
console.log(motor);
Motor.prototype.price = 50000;
console.log(motor.price);
var motor1 =new Motor('KTM2','Sports','3CC','','KTM');
console.log(motor1);
console.log(motor1.price);
