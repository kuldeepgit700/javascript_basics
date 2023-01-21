// Rest operator demo
// function sum(a,b,c, ...other){
//  console.log(other[0]);
//  return a+b+c;

// }

// let result = sum(1,2,3,4,5,6);
// console.log(result);

// Spread operator demo

function employee(name1, name2){
    console.log(name1,name2);
   
   }

var emp = ['kuldeep','sandeep'];
employee(emp[0],emp[1]);
employee(...emp);
employee(emp);
