//constructor name starts with capital.
function Motor(name,type,engineCapacity,wheels,company) {
  this.name = name;
  this.type = type;
  this.engineCapacity = engineCapacity;
  this.wheels = wheels;
  this.company = company;
}
var motor =new Motor('KTM 390','Sports','390CC','No','KTM');
console.log(motor);
var motor1 =new Motor('Pulsar 150','Sports','150CC','No','Bajaj');
console.log(motor1);
