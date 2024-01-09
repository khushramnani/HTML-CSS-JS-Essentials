// For in

// sytax of for in loop is :

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];

//     }
// }

// For in loop is generally used for Object it helps to itrate keys from the object

const marks = {
  chintu: 95,
  pintu: 80,
  montu: 20,
  golu: 40,
  kalu: 10,
};

for (const key in marks) {
  // console.log(key); // this will only shows key in the object

  // to show value we can write this way
  console.log(`the marks of ${key} is ${marks[key]}`);

  // marks[key] defines value in loop
}

// we can use for in loop for array also

const myarray = [1, 2, 3, 4, 5, 6, 7];

for (const val in myarray) {
  console.log(myarray[val]);
}
