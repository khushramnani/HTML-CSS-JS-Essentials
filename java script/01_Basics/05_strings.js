var string = "this' is ";

var name = "khush";

var message = " is a good boy ";

var temp = `${name} is a nice person "and"${message}`;

console.log(name + message);
console.log(temp);

// var len = name.length;
console.log("Hello \nworld\nkhush\tand \tviewer");



// ++++++++++++ functions in string +++++++++++++++++++++

var str = "this is string";
     // [  0123 45 67891011 ]
console.log(str);

// First occurrence of a substring
var position = str.indexOf('tr')
console.log(position); // 9

// Last occurence of a substring
position = str.lastIndexOf('is')
console.log(position);  //5

// it also contain negative value 
var substr = str.slice(1,7);
console.log(substr)    // his is


// var substr = str.substring(1,7);
var substr1 = str.substr(1,3); //his
console.log(substr1) 


var replaced = str.replace('string', 'khush');
console.log(replaced)    //   this is khush

// uppercase and LowerCase
console.log(str.toUpperCase());   //THIS IS STRING  
console.log(str.toLowerCase());     //this is string


// we also use concat which is same as +
var newString = str.concat('New String') 
console.log(newString)  //this is stringNew String
