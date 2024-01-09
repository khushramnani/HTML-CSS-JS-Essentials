var name = "khush";

const accountID = 123456;

let email = "khush@gmail.com";

let account_password = "ABCDE123";

var age; // undefined because value is not inserted

// accountID = 55555 // not allowed because const cannot be changed

name = "xyz";
email = "jsuser@gmail.com";
account_password = "xyz456";

console.table([name, accountID, email, account_password, age]);
//   [ 0,       1,        2,           3,         4,]

// output
// ┌─────────┬────────────────────┐
// │ (index) │       Values       │
// ├─────────┼────────────────────┤
// │    0    │       'xyz'        │
// │    1    │       123456       │
// │    2    │ 'jsuser@gmail.com' │
// │    3    │      'xyz456'      │
// │    4    │     undefined      │
// └─────────┴────────────────────┘





// const statement (which cannot be changed )..........

// const a = "this is const and this is cannot be changed";
// a ="hii i want to change but bcoz of 'const' i cannot be change"
// console.log(a);
