// The filter() method creates a new array filled with elements that pass a test provided by a function.📝

// The filter() method does not execute the function for empty elements.📝

// The filter() method does not change the original array.📝

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const checknums = mynums.filter( gtfive => gtfive >=5 )
// console.log(checknums);




// if we use foreach in this we can write this way  👇

const newnum = []   // to store 5 > values we made an emty array 

mynums.forEach(gtfive => {
    if (gtfive>5) {
       return newnum.push(gtfive)
    }
})
// console.log(newnum);





const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// if we want only history books 

// make sure the string is case sensitive 
let historybk = books.filter( (bk) => bk.genre == 'History')  
// console.log(historybk);

// if we want books which are publish above 2000

let latestbk = books.filter(bk => bk.publish >= 2000)
// console.log(latestbk);



// and if we want latest books in Science 

latestbk = books.filter(bk => {
    return bk.publish >= 2000 && bk.genre === 'Science' 
})
console.log(latestbk);








