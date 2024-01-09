// The forEach() method calls a function for each element in an array.

// The forEach() method is not executed for empty elements.

// syntax:
// array.forEach(element => {

// });

const myarray = ["chintu", "pintu", "monto", "kalu", "balu"];

// myarray.forEach(function (items) {
//     console.log(items);

// })


// const varcheck = myarray.forEach(items => {
//     return items
// })

// console.log(varcheck);   //undefined


// if we stored foreach() in variable it shows undifined because it cannot return the value for that there are other methods called FileSystemEntry, map and reduce are used 📝

// forEach() method cannot check the condition for thet we want to use filter 📝




// what if we use foreach() in obj 👇


myarray.forEach((items) => {
//   console.log(items);
});

// foreach() in obj

// const langInfo ={

//     languageName: "JavaScript",
//     LanguageFileName: ".js",

//     languageName: "Python",
//     LanguageFileName: ".py",

//     languageName: "c++",
//     LanguageFileName: ".cpp",

//     languageName: "Ruby",
//     LanguageFileName: ".rb",

//     languageName: "Java",
//     LanguageFileName: ".java",

// }

// langInfo.forEach(langname => {
//     console.log(langname.languageName);
// })

// TypeError: langInfo.forEach is not a function at Object.

// if we use this in object it will show error because object is not itrable to use this in we want to stored object in array

const langInfo = [
  {
    languageName: "JavaScript",
    LanguageFileName: ".js",
  },

  {
    languageName: "Python",
    LanguageFileName: ".py",
  },

  {
    languageName: "c++",
    LanguageFileName: ".cpp",
  },

  {
    languageName: "Ruby",
    LanguageFileName: ".rb",
  },

  {
    languageName: "Java",
    LanguageFileName: ".java",
  },
];

langInfo.forEach(langname =>{
    // console.log(langname.languageName);
})

langInfo.forEach(langname =>{
    // console.log(langname.languageName[langname]);
})  //undifined

langInfo.forEach(filename =>{
    console.log(filename.LanguageFileName);
})


