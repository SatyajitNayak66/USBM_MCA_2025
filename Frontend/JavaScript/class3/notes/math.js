//Mathematical operator
let num1=5;
let num2=3;
let result= num1+num2;//addition operator
//let result= num1-num2;//subtraction
//let result= num1*num2;//multiplication
//let result= num1/num2;//division
console.log(result);
//modulo operator:
// to find out remainder
let num3=17;
let odd=(num3%2);
console.log(odd);
//Exponential operator:

let square=2*2;
console.log(square);

//relational operator:
// To compare two values
console.log(10>5);//boolean
console.log(10<5);//boolean
console.log(5>5);//boolean
console.log(5>=5);//boolean
console.log(10>=5);//boolean
console.log(10>5);//boolean
console.log(10>!5);//boolean
console.log(!5);//boolean

//Equality Operator:
// '==': Value check
// '===' value and data type check

console.log(5==5);//boolean
console.log(6==5);//boolean
console.log(5=="5");//boolean
console.log(5==="5");//boolean
console.log(5!=5);//boolean
console.log(5!=="5");//boolean

//Conditional Statements:
//if (condition){
//true code to be executed here}

//}
//Falsy value :
// false, 0,-0, "",``,null,undefined,NaN

//if(false){
  //  console.log("it is true");
//}

//if(0){
   // console.log("it is true");
//}

//if(-100){
  //  console.log("it is true");
//}

//if(-0.5455){
  //  console.log("it is true");
//}

// task:
// Given total_bill,discount_start_price if you satisfy the condition print Discount
// Available otherwise print no discount
 total_bill=100;
 if(total_bill>50){
 console.log("Discount");}
 else
 {console.log("No discount");}