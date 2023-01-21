let sum = function(a){

console.log("Total number:"+a);
let c = 4;
return function(b){
    return a+b+c;
}

}


let store = sum(5);
console.log(store(6));