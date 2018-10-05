var count='10';
console.log(count);
console.log(typeof count);
var r=+count; //converting into number
console.log(typeof r);
var c=10;
var z = c++; //increase value but return old value
console.log("count value after count++ ",c);
console.log("Z value after Z=c++ ",z);
c=10;
var y = ++c; //increase value and return new value
console.log("count value after ++count ",c);
console.log("Y value after Y=++c ",y);
c=10;
c=c++; //still will give the old value because we are assigning that c in c.if we give only c++ then will give new value
console.log(c);
