// For of 

// the for of is generally used for arrya but we can also use for object 

const programingLanguage = ["js", "cpp", "java", "python", "rust"]

for (const iterator of programingLanguage) {
    console.log(iterator);
}



// const myobj = {
//     chintu: 95,
//     pintu: 80,
//     montu: 20,
//     golu: 40,
//     kalu: 10,
// }

// for (const iterator of myobj) {
//     // console.log(iterator);
//     // console.log(myobj[iterator]);
// }

// it shows error because object is not iterable  


for (const iterator of "mystring") {
    console.log(iterator);
}


// we can can also itrate string this way 