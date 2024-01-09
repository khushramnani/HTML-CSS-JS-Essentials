// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

let score = "xyz"

// console.log(score);  
// console.log(typeof score); //string


let newScore = Number(score)
// console.log(newScore);  // NaN
// console.log(typeof newScore);  //number

// "100" => 100
// "09ABC" => NaN
// true => 1
// false => 0

// ++++++++++++++++++++++++++++++++++++++++++

let AnyNumber = 999
console.log(typeof AnyNumber);  // number

let StringNumber = String(AnyNumber)
console.log( typeof StringNumber);  //String


// +++++++++++++++++++++++++++++++++++++++++++++++

let name = "khush"

let checkname = Boolean(name)
console.log(checkname);  //true
console.log(typeof checkname);  //Boolean

// ++++++++++++++++++++++++++++++++++++++++++++++++

let str1 = "hello"
let str2 = " Khush"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log( (3 + 4) * 5 % 3);

console.log(+true);
console.log(+"");



// +++++++++++++++++++  comparision  ++++++++++++++++++++++++

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false
console.log(undefined >= 0); //false

// === 

console.log("2" === 2); //false
