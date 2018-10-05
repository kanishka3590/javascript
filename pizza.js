var table = document.createElement("table");
document.body.appendChild(table);

var tr = document.createElement("tr");
table.appendChild(tr);

var row = table.insertRow(0);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
cell1.innerHTML = "Pizza Name :";
cell2.innerHTML = "NEW CELL2";


for(var index=0;index<5;index++){
  var row = table.insertRow(index);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "Pizza Name :";
  cell2 = document.createElement("input");
  cell2.setAttribute("type",'text');

}

// var td = document.createElement("td");
// tr.appendChild(td);

var lname = document.createElement("label");
lname.innerText = "Pizza Name :";
tr.appendChild(lname);

var iname = document.createElement("select");
var opt = document.createElement("option");
iname.appendChild(opt);
opt.setAttribute("value","option");
opt.innerText = "Option1";
tr.appendChild(iname);




var lsize = document.createElement("label");
lsize.innerText = "Pizza Size :";
table.appendChild(tr);
tr.appendChild(lsize);

var isize = document.createElement("select");
tr.appendChild(isize);

var ladd = document.createElement("label");
ladd.innerText = "Add Ons :";
table.appendChild(tr);
//tr.appendChild(td);
tr.appendChild(ladd);

for(var index=0; index<5 ;index++){
  var iadd = document.createElement("input");
  iadd.setAttribute("type",'checkbox');
  tr.appendChild(iadd);
}


var lextra = document.createElement("label");
lextra.innerText = "Extra :";
//tr.appendChild(td);
tr.appendChild(lextra);

var iextra = document.createElement("input");
iextra.setAttribute("type",'text');
tr.appendChild(iextra);


var label = new Array(5);
label[0] = document.createElement("label");
label[1] =document.createElement("label");

// for (var index =0 ;index<5; index++)
// {
//   var tr = document.createElement("tr");
//   var td = document.createElement("td");
//   tr.appendChild(td);
//   table.appendChild(tr);
//   label[index] = document.createElement("label");
// }
label[0].innerText = "Pizza Name";
label[1].innerText = "Pizza Size";
document.body.appendChild(label[0]);
