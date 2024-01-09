// Arrays 

// const myarr = [1, 2, 3, 4, "khush", true]
// console.log(myarr);

// it is a collection of elements which stores in one variable 


// Array methods 

const arr1 = [1, 2, 3, 4, 5, 6]
// console.log(arr1);
// console.log(arr1[0]);

// console.log(arr1.push(7)); //adds new element to the last 

// console.log(arr1.pop()); //pop delete the last element 



// console.log(arr1.unshift(8)); adds new element to the first

// console.log(arr1.shift()); // it removes first element


// slice and splice 
console.log("A", arr1); // orignal array

const newarr = arr1;
console.log("B", newarr.slice(1 , 3));// slice helps to define the index of arrays 
console.log(newarr);

console.log("C" , newarr.splice(1 , 3)); // it removes the index array which we define 
console.log(newarr);



const name = "khush"
console.log(Array.isArray(name)); // it defins the following variable is array or not 

console.log(Array.from(name)); // it converts following variable into array 

// to make different variable into an array we can use this 👇

let score1 = 1
let score2 = 2
let score3 = 3

//insteed of using from we can use of 
console.log(Array.of(score1,score2,score3));



// lets convert two array into single array 

const num1 = [1,2,3,4,5]
const num2 = [6,7,8,9,10]

// const newnum = num1.concat(num2)
// console.log(newnum); // it can also works but this is not preferable 

// we can use spread oparator

const newSpread = [...num1,...num2] 
console.log(newSpread);

// (...) defines spread oparator






