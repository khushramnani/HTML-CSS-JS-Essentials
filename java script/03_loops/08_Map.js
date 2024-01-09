// map() creates a new array from calling a function for every array element.



// The difference between map and filter method is that – ⁣ map transforms each element of an array based on a transformation function and returns a new array of the same length, 

// While, filter creates a new array with only the elements that satisfy a specified condition.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let addnum = numbers.map(num => num + 1)
// console.log(addnum);

// we can also use filter for this 

// we can use multiple map , filter and reduce in one variable 📝


const newNums = numbers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)   
console.log(newNums);


