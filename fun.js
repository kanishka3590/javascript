var objArr = [ {
  num : 5,
  name : 'apple'
},{
  num : 20,
  name : 'banana'
},{
  num : 15,
  name : 'cabage'
},{
  num : 12,
  name : 'orange'
}];
var sorting = function(val1,val2){
  if(val1.name > val2.name)
      return -1;
  else
      return 1;
}
objArr.sort(sorting);
console.log(objArr);
