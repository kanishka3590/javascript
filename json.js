//in json key writes as string.
try{
  var employee = {
    "empId" : 1000051,
    "name" : "John",
    "dept" : "Development",
    "salary" : 20000,
    "team" : ["A","B","C"], //array
    "code" : {      //inner object
        "color" : ["#0000","#ffff","kkkk"] //array inside inner onject
    }
  }

  var section = document.createElement('section');
  var h1 = document.createElement('h1');
  var h2 = document.createElement('h2');
  var h3 = document.createElement('h3');
  h1.innerText = employee.empId +" . "+ employee.name;
  h2.innerText = employee.dept +" . "+ employee.salary;
  h3.innerText = employee.team[0] +" . "+ employee.code.color[0];
  h3.innerText += employee.team[1] +" . "+ employee.code.color[1];
  h3.innerText += employee.team[2] +" . "+ employee.code.color[2];

  section.appendChild(h1);
  section.appendChild(h2);
  section.appendChild(h3);
  document.body.appendChild(section);
  alert(JSON.stringify(employee)); //convert into string.
  //var employee1 = `"empId" : "01","name" : "ka"`;
//  employee = JSON.parse(employee);//convert into object.
  alert(employee);

}catch(err){
  console.log(err);
}
