// break and continue in js 

for (let index = 0; index < 10; index++) {
    
    console.log(index);
    if (index === 7) {
        console.log("7 detected");
        break //it stops the iteration after condition match
    }
  
}


for (let index = 0; index <= 10; index++) {
    
    console.log(index);
    if (index === 7) {
        console.log("7 detected");
        continue //continues the iteration after condition match
    }
  
}
