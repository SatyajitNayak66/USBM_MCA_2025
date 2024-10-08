let data;
console.log (typeof data);
console.log(data);
//Number
let age=25;
let num1=50;
let decimal_no=1.0001;
let roll_no=21;
console.log(age);//25
let pi=3.1416;
console.log(pi);//3.1416
console.log (typeof num1);
console.log(num1);
console.log(decimal_no);
console.log(roll_no);

//Mathematical operations
//addition
let num2=100;
let num3=125;
let addition= num2 + num3;
console.log(addition);
let subtraction=num3-num2;
console.log(subtraction);
let multiplication=num2*num3;
console.log(multiplication);
let division=num3/num2;
console.log(division);
//BigInt
let huge_no = 6464156561665165;
console.log(typeof huge_no);
//symbol
let sym1=Symbol("sym1");
let sym2=Symbol("sym2");
console.log(sym1 === sym2);//false
//NaN(not a number)
let num5=0;
let num6=0;
console.log(num5/num6);


let num7=0;
let num8=10;
console.log(num7/num8);
//boolean
let isMarried= false;
let isSingle= true;

console.log(isMarried);
console.log(isSingle);
//String
let Name='SATYA';
let age1=24;
let roll_no1=102;
let college= "USBM";
let batch= 2023-25;

let city="Bhubaneswar";
console.log(Name);

console.log(city);
console.log(Name,city);
console.log(`My name: ${Name} ,age:${age1},Roll_no:${roll_no1},college:${college},city: ${city}` );