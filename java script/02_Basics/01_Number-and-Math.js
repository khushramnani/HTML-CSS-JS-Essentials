// let score = 60
// console.log(score);
// console.log(typeof score);

// const balance = new Number(400);
// console.log(balance);
// console.log(typeof balance);
// console.log(balance.toString().length);

// console.log(balance.toFixed(2)); //used in ecom web

// const floatNumber = 450.62183

// console.log(floatNumber.toPrecision(3)); //provide round figure value


// const bigNumber = 100000000
// console.log(bigNumber.toLocaleString()); //international format

// console.log(bigNumber.toLocaleString('en-IN')); //indian format



// ++++++++++++++ math func  +++++++++++++++++++++++++++

// tested in console 
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));





let rand = Math.random()  // shows random value between 0 to 1

console.log(rand);  // shows random value between 0 to 1

console.log(rand*10); 

console.log((rand*10)+1);

let floorAndCeil = (rand*10)+1; // +1 for !0

console.log(Math.floor(floorAndCeil));
console.log(Math.ceil(floorAndCeil));


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

