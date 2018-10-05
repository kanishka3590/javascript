var table = document.createElement('table');
document.body.appendChild(table);
var count =1;
var th1 = document.createElement('th');
var th2 = document.createElement('th');
var th3 = document.createElement('th');

function createTable() {
  th1.innerText = "Hero";
  table.appendChild(th1);
  th2.innerText = "Heroien";
  table.appendChild(th2);
  th3.innerText = "Villain";
  table.appendChild(th3);

}
function addRow(){
  var tr1 = document.createElement('tr');
  var td1 = document.createElement('td');
  td1.innerText ="Hero "+count;
  th1.appendChild(tr1);
  tr1.appendChild(td1);
  var tr2 = document.createElement('tr');
  var td2 = document.createElement('td');
  td2.innerText ="Heroien "+count;
  th2.appendChild(tr2);
  tr2.appendChild(td2);
  var tr3 = document.createElement('tr');
  var td3 = document.createElement('td');
  td3.innerText ="Villain "+count;
  th3.appendChild(tr3);
  tr3.appendChild(td3);
  count++;
}
function removeRow() {
th1.lastChild.outerHTML = "";
th2.lastChild.outerHTML = "";
th3.lastChild.outerHTML = "";

}
function replace() {

}
