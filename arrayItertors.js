// forEach()
const numbers1 = [45, 4, 9, 16, 25];

let txt = "";
numbers1.forEach(myFun);

function myFun(value, index, array){
    txt = value;
    console.log(txt);
}
// map()
const numbers2 = numbers1.map(myFun1);

function myFun1(value){
    return value*2;
}

console.log(numbers2);
// filter()
const numbers3 = numbers1.filter(myFun2);

function myFun2(value){
    return value>18;
}

console.log(numbers3);
// reduce()
const numbers4 = numbers1.reduce(myFun3);

function myFun3(total, value){
    return total + value;
}

console.log(numbers4);
// every()
const numbers5 = numbers1.every(myFun4);

function myFun4(value){
    return value > 18;
}

console.log(numbers5);
// some()
const numbers6 = numbers1.some(myFun5);

function myFun5(value){
    return value > 18;
}

console.log(numbers6);
// indexOf()
const fruits = ['Apple', 'Orange', 'Mango'];
let pos = fruits.indexOf('Mango');
console.log(pos);
let pos1 = fruits.lastIndexOf('Apple')+2;
console.log(pos1);
// find()
const first = numbers1.find(myFun6);

function myFun6(value){
    return value > 18;
}

console.log(first);
// findIndex()
let firstIndex = numbers1.findIndex(myFun7);

function myFun7(value){
    return value > 18;
}
console.log(firstIndex);
// Array.from()
console.log(Array.from("ABCDEF"));
// Arrays.keys()
const keys = fruits.keys();

for(let x of keys){
    console.log(x);
}
// entries()
const f = fruits.entries();
for(let x of f){
    console.log(x);
}
// includes()
console.log(fruits.includes("Mango"));