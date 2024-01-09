

let name = "khush ";

let name3 = "krishiv ";
let name4 = "krish ";

// method 1 by using simple console ................

// console.log(name  + "is a good boy");
// console.log(name2  + "is a good boy");
// console.log(name3 + "is a good boy");
// console.log(name4 + "is a good boy");

// using greettext .............
let greettext = "good morning ";

// method 2 by using function ...................
function greet(name, greettext) {
  console.log(greettext + name);

  console.log(name + "is a good boy");
}

greet(name, greettext);
greet(name2, greettext);
greet(name3, greettext);
greet(name4, greettext);

// The output will be undefined because the parameter greet does not return anything. It just prints the value through console.log. ..................
let returnval = greet(name3);
console.log(returnval);

// But if we make a new function as follows- ........

function sum(a, b, c) {
  let d = a + b + c;
  return d;
}
let retval = sum(1, 2, 3);
console.log(retval);
