const user = {
  name: "khush",
  age: 18,
  location: "gujarat",
  email: "khush@google.com",
  fullName: "khush ramnani",
  isloggedIn: false,
};

console.log(user);
console.log(user.email);
console.log(user["fullName"]); // we can also write this way

user.location = "vadodara" //location changed to vadodara

console.log(user["location"]); 
console.log(user);

Object.freeze(user) //the object is freeze now 

user.email = "khush@outlook.com" // email cannot be changed bcoz of freeze 

console.log(user);

// +++++++++++ object conc ++++++++

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const obj4 = {obj1,obj2,obj3}
console.log(obj4); // this will store all 3 object in one

// to concat all obj we use spread oparator

let concat = {...obj1,...obj2,...obj3,...obj4}
console.log(concat);


